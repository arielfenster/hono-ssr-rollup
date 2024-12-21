import { STATIC_JS_PATH, type AppPage } from '../../constants';

export function getPageScript(page: AppPage) {
	return `${STATIC_JS_PATH}/${page}.js`;
}
