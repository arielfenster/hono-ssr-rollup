import { Hono } from 'hono';
import { AboutPage } from '../../client/pages/about';
import { renderServerPage } from '../render';
import { getPageScript } from '../../shared/utils';

const aboutRouter = new Hono().get('/', (c) => {
	const html = renderServerPage(<AboutPage />, {
		title: 'About Page',
		pageScript: getPageScript('about'),
	});
	return c.html(html);
});

export { aboutRouter };
