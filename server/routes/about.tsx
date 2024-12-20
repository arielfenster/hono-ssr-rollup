import { Hono } from 'hono';
import { renderToString } from 'react-dom/server';
import { AboutPage } from '../../client/pages/about';
import { Html } from '../templates/html';

const aboutRouter = new Hono().get('/', (c) => {
	const html = renderToString(
		<Html title='About Page' pageScript='about.js'>
			<AboutPage />
		</Html>,
	);
	return c.html(html);
});

export { aboutRouter };
