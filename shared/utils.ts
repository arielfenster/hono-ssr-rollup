import { STATIC_JS_PATH, type AppPage, STATIC_IMAGE_PATH } from './constants';

export function getPageScript(page: AppPage) {
	return `${STATIC_JS_PATH}/${page}.js`;
}

export function getImagePath(image: string) {
	return `${STATIC_IMAGE_PATH}/${image}`;
}
