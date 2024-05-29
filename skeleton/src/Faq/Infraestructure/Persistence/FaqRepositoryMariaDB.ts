import mariadb from 'mariadb';
import InternalException from '../../../Shared/Domain/Exception/InternalException';
import NotFoundException from '../../../Shared/Domain/Exception/NotFoundException';
import Id from '../../../Shared/Domain/ValueObject/Id';
import Namespace from '../../../Shared/Domain/ValueObject/Namespace';
import { pool } from '../../../Shared/Infraestructure/PollMariaDB';
import Faq from '../../Domain/Model/Faq';
import FaqType from '../../Domain/Model/FaqType';
import FaqRepository from '../../Domain/Persistence/FaqRepository';
import SecureString from '../../Domain/ValueObject/SecureString';

class FaqRepositoryMariaDB implements FaqRepository {
    async create(faq: Faq): Promise<void> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            await conn.query('INSERT INTO faqs(id,title,description,createdAt) value (?, ?, ?, ?)', [
                faq.id.value,
                faq.title.value,
                faq.description.value,
                faq.createdAt,
            ]);
        } catch (err) {
            throw new InternalException('unable to create faq ' + faq.title.value);
        } finally {
            await this.disconnect(conn);
        }
    }

    async delete(id: Id): Promise<void> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            await conn.query('DELETE FROM faqs WHERE id=? LIMIT 1', [id.value]);
        } catch (err) {
            throw new NotFoundException('unable to delete faq ' + id.value);
        } finally {
            await this.disconnect(conn);
        }
    }

    async get(id: Id): Promise<Faq> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            const result = await conn.query('SELECT id,title,description,createdAt FROM faqs WHERE id=? LIMIT 1', [
                id.value,
            ]);
            return Faq.create(
                new Id(result.id),
                new Namespace(result.title),
                new SecureString(result.description),
                new Date(result.createdAt),
            );
        } catch (err) {
            throw new NotFoundException('unable to get faq ' + id.value);
        } finally {
            await this.disconnect(conn);
        }
    }

    async list(pattern?: string): Promise<Faq[]> {
        const conn: mariadb.PoolConnection = await this.connect();
        const result: Faq[] = [];
        try {
            const likeSql: string = typeof pattern === 'string' && pattern.trim() !== '' ? `%${pattern?.trim()}%` : '';
            const where: string = likeSql !== '' ? ' WHERE LOWER(title) LIKE ? OR LOWER(description) LIKE ? ' : '';
            const values: string[] = likeSql !== '' ? [likeSql, likeSql] : [];
            const sql: string = 'SELECT id,title,description,createdAt FROM faqs ' + where;

            const collection = await conn.query(sql, values);
            collection.forEach((item: FaqType) => {
                result.push(
                    Faq.create(
                        new Id(item.id),
                        new Namespace(item.title),
                        new SecureString(item.description),
                        new Date(item.createdAt),
                    ),
                );
            });
        } catch (error) {
            return result;
        } finally {
            await this.disconnect(conn);
        }

        return result;
    }

    private async connect(): Promise<mariadb.PoolConnection> {
        return await pool.getConnection();
    }

    private async disconnect(connection: mariadb.PoolConnection): Promise<void> {
        connection.end();
    }
}

export default FaqRepositoryMariaDB;
