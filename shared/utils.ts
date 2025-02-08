import { STATIC_JS_PATH, type AppPage, STATIC_IMAGE_PATH } from './constants';

const IS_PROD = process.env.NODE_ENV === 'production';

const DOMAIN = IS_PROD ? 'https://hono-ssr-test.onrender.com/' : 'http://localhost:3000';

export function getPageScript(page: AppPage) {
	return `${DOMAIN}/${STATIC_JS_PATH}/${page}.js`;
}

export function getImagePath(image: string) {
	return `${DOMAIN}/${STATIC_IMAGE_PATH}/${image}`;
}
