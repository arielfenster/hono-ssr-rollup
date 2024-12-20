import { Hono } from 'hono';

const searchRouter = new Hono()
	.get('/', (c) => {
		return c.text('Search page!');
	})
	.get('/:genre', (c) => {
		const genre = c.req.param('genre');
		return c.text(`are you searching for ${genre} genre?`);
	});

export { searchRouter };
