import { Hono } from 'hono';
import { SearchPage } from '../../client/pages/search';
import { renderServerPage } from '../render';
import { getPageScript } from '../../shared/utils';
import { getCookie } from 'hono/cookie';

const searchRouter = new Hono()
	.get('/', (c) => {
		const cookie = getCookie(c, 'session');
		if (cookie !== '1234') {
			return c.redirect('/auth/login');
		}

		const html = renderServerPage(<SearchPage />, {
			title: 'Search Page',
			pageScript: getPageScript('search'),
		});
		return c.html(html);
	})
	.get('/message', (c) => {
		return c.json({ message: 'Hello from the search router!' });
	});

export { searchRouter };
