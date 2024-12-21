export const STATIC_DIR = 'static';
export const STATIC_JS_PATH = `${STATIC_DIR}/js`;
export const STATIC_CSS_PATH = `${STATIC_DIR}/css`;
export const STATIC_CSS_FILE_PATH = `${STATIC_CSS_PATH}/index.css`;

export const PAGES = ['home', 'about'] as const;
export type AppPage = (typeof PAGES)[number];
