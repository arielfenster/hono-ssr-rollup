import { Hono } from 'hono';
import { aboutRouter } from './routes/about';
import { homeRouter } from './routes/home';
import { homeVueRouter } from './routes/home-vue';
import { searchRouter } from './routes/search';
import { serveStatic } from '@hono/node-server/serve-static';
import { STATIC_DIR } from '../shared/constants';

const app = new Hono();

const routes = app
	.route('/', homeVueRouter)
	.route('/about', aboutRouter)
	.route('/search', searchRouter)
	.use(
		`/${STATIC_DIR}/*`,
		// async (c, next) => {
		// 	console.log(c.req.path);
		// 	c.header('Cache-Control', 'public, max-age=10');
		// 	await next();
		// },
		serveStatic(),
	);

export { app };
export type AppType = typeof routes;
