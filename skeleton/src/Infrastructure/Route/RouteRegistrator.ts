import { Router } from 'express';
import { glob } from 'glob';

export default class RouteRegistrator {
    register(router: Router): void {
        const routes = glob.sync(__dirname + '/*.route.ts');
        routes.map((route: string) => this.registerFile(route, router));
    }

    public async registerFile(routePath: string, router: Router) {
        const route = await import(routePath);

        route.register(router);
    }
}
