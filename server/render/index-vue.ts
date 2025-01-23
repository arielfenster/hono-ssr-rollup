import { createSSRApp, defineComponent, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import Html from './templates/Html.vue';

export function renderServerPageVue(
	component: ReturnType<typeof defineComponent>,
	{ title, pageScript }: { title: string; pageScript: string },
) {
	const app = createSSRApp({
		render: () =>
			h(Html, { title, pageScript }, { default: () => h(component) }),
	});

	return renderToString(app);
}
