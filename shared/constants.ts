export const STATIC_DIR = 'static';
export const STATIC_JS_PATH = `${STATIC_DIR}/js`;
export const STATIC_CSS_PATH = `${STATIC_DIR}/css`;
export const STATIC_IMAGE_PATH = `${STATIC_DIR}/images`;
export const STATIC_CSS_FILE_PATH = `${STATIC_CSS_PATH}/index.css`;

export const CLIENT_DATA_NAME = '__CLIENT_DATA__';

export const AppPage = {
	HOME: 'home',
	ABOUT: 'about',
	SEARCH: 'search',
	AUTH: {
		LOGIN: 'auth/login',
		SIGNUP: 'auth/signup',
	},
	DYNAMIC: 'dynamic',
} as const;

type RoutePaths<T> = {
	[K in keyof T]: T[K] extends Record<string, any> ? RoutePaths<T[K]> : T[K];
}[keyof T];

export type AppPage = RoutePaths<typeof AppPage>;
