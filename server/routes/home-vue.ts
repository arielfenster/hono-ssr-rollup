import { Hono } from 'hono';
import HomePage from '../../client-vue/pages/home/HomePage.vue';
import { renderServerPageVue } from '../render/index-vue';
import { getPageScript } from '../../shared/utils';

const homeVueRouter = new Hono().get('/', async (c) => {
	const html = await renderServerPageVue(HomePage, {
		title: 'Home Page',
		pageScript: getPageScript('home'),
	});
	return c.html(html);
});

export { homeVueRouter };
