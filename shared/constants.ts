export const STATIC_DIR = 'static';
export const STATIC_JS_PATH = `${STATIC_DIR}/js`;
export const STATIC_CSS_PATH = `${STATIC_DIR}/css`;
export const STATIC_IMAGE_PATH = `${STATIC_DIR}/images`;
export const STATIC_CSS_FILE_PATH = `/${STATIC_CSS_PATH}/index.css`;

export const PAGES = [
	'home',
	'about',
	'search',
	'auth/login',
	'signup/very/nested/folder',
	'dynamic',
] as const;
export type AppPage = (typeof PAGES)[number];

export const CLIENT_DATA_NAME = '__CLIENT_DATA__';

export const AppPages = {
	HOME: 'home',
	ABOUT: 'about',
	SEARCH: 'search',
	AUTH: {
		LOGIN: 'auth/login',
	},
	SIGNUP: 'signup',
	DYNAMIC: 'dynamic',
} as const;
