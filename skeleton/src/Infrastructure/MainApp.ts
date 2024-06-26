import { Server } from './server';

export class MainApp {
    server?: Server;

    async start() {
        const port = process.env.APP_PORT || 'xxxx';
        this.server = new Server(port);
        return this.server.listen();
    }

    get httpServer() {
        return this.server?.getHTTPServer();
    }

    async stop() {
        return this.server?.stop();
    }
}
