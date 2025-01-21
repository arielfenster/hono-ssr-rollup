import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';

const app = createSSRApp({
	data: () => ({ count: 1 }),
	template: `<div @click="count++">{{ count }}</div>`,
});

renderToString(app).then(console.log);
