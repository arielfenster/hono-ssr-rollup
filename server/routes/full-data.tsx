import { Hono } from 'hono';
import { renderServerPage } from '../render';
import { FullDataPage } from '../../client/pages/full-data';
import { getPageScript } from '../../shared/utils';
import { categories, products } from '../../client/pages/full-data/data';

const fullDataRouter = new Hono().get('', (c) => {
	const html = renderServerPage(<FullDataPage products={products} categories={categories} />, {
		title: `Full data page`,
		pageScript: getPageScript('full-data'),
		clientData: {
			products,
			categories,
		},
	});

	return c.html(html);
});

export { fullDataRouter };
