import type { PropsWithChildren } from 'react';
import { STATIC_CSS_PATH, STATIC_JS_PATH } from '../../constants';

type Props = PropsWithChildren<{
	title: string;
	pageScript: string;
}>;

export function Html({ title, pageScript, children }: Props) {
	function getReactSrc() {
		return (
			<>
				<script
					crossOrigin=''
					src='https://unpkg.com/react@18.2.0/umd/react.production.min.js'
				></script>
				<script
					crossOrigin=''
					src='https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js'
				></script>
			</>
		);
	}

	function getStylesLink() {
		return <link href={`/${STATIC_CSS_PATH}/index.css`} rel='stylesheet' />;
	}

	return (
		<html lang='en'>
			<head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				{getReactSrc()}
				{getStylesLink()}
				<title>{title}</title>
			</head>
			<body>
				<div id='app'>{children}</div>
				<script src={`/${STATIC_JS_PATH}/${pageScript}`}></script>
			</body>
		</html>
	);
}
