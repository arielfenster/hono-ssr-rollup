import { Hono } from 'hono';
import { SearchPage } from '../../client/pages/search';
import { renderServerPage } from '../render';
import { getPageScript } from '../../shared/utils';

const searchRouter = new Hono().get('/', (c) => {
	const html = renderServerPage(<SearchPage />, {
		title: 'Search Page',
		pageScript: getPageScript('search'),
	});
	return c.html(html);
});

export { searchRouter };
