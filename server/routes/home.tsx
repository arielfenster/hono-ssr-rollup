import { Hono } from 'hono';
import { renderToString } from 'react-dom/server';
import { HomePage } from '../../client/pages/home';
import { Html } from '../templates/html';

const homeRouter = new Hono().get('/', (c) => {
	const html = renderToString(
		<Html title='Home Page' pageScript='home.js'>
			<HomePage />
		</Html>,
	);
	return c.html(html);
});

export { homeRouter };
