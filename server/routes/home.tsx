import { Hono } from 'hono';
import { HomePage } from '../../client/pages/home';
import { renderServerPage } from '../render';
import { getPageScript } from '../../shared/utils';

const homeRouter = new Hono()
	.get('/', (c) => {
		return c.redirect('/home', 301);
	})
	.get('/home', (c) => {
		const html = renderServerPage(<HomePage />, {
			title: 'Home Page',
			pageScript: getPageScript('home'),
		});
		return c.html(html);
	});

export { homeRouter };
