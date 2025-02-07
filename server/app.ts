import { Hono } from 'hono';
import { aboutRouter } from './routes/about';
import { homeRouter } from './routes/home';
import { searchRouter } from './routes/search';
import { serveStatic } from 'hono/bun';
import { STATIC_DIR } from '../shared/constants';
import { authRouter } from './routes/auth';
import { dynamicRouter } from './routes/dynamic';

const app = new Hono();

const routes = app
	.route('/', homeRouter)
	.route('/about', aboutRouter)
	.route('/search', searchRouter)
	.route('/auth', authRouter)
	.route('/dynamic', dynamicRouter);

app.use(
	`/${STATIC_DIR}/*`,
	// async (c, next) => {
	// 	console.log(c.req.path);
	// 	c.header('Cache-Control', 'public, max-age=10');
	// 	await next();
	// },
	serveStatic({ root: './' }),
);

export { app };
export type AppType = typeof routes;
