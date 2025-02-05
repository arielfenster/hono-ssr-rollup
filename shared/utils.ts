import { STATIC_JS_PATH, type AppPage, STATIC_IMAGE_PATH } from './constants';

const DOMAIN = 'http://localhost:3000';

export function getPageScript(page: AppPage) {
	return `${DOMAIN}/${STATIC_JS_PATH}/${page}.js`;
}

export function getImagePath(image: string) {
	return `${DOMAIN}/${STATIC_IMAGE_PATH}/${image}`;
}
