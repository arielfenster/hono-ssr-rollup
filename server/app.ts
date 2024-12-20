import { Hono } from 'hono';
import { aboutRouter } from './routes/about';
import { homeRouter } from './routes/home';
import { searchRouter } from './routes/search';
import { serveStatic } from '@hono/node-server/serve-static';

const app = new Hono();

const routes = app
	.route('/', homeRouter)
	.route('/about', aboutRouter)
	.route('/search', searchRouter)
	.use(
		'/static/*',
		serveStatic(),
		// serveStatic({
		// 	onFound(path, c) {
		// 		console.log(`Serving ${path} to ${c.req.path}`);
		// 	},
		// 	onNotFound(path, c) {
		// 		console.log(`${path} is not found, you accessed ${c.req.path}`);
		// 	},
		// }),
	);

export { app };
export type AppType = typeof routes;
