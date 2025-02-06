import { Hono } from 'hono';
import { renderServerPage } from '../render';
import { DynamicPage } from '../../client/pages/dynamic';
import { getPageScript } from '../../shared/utils';

const dynamicRouter = new Hono().get('/:id', (c) => {
	const id = c.req.param('id');

	const html = renderServerPage(<DynamicPage id={id} />, {
		title: `Dynamic page ${id}`,
		pageScript: getPageScript('dynamic'),
		clientData: { id },
	});

	return c.html(html);
});

export { dynamicRouter };
