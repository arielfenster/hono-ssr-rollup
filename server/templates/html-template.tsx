import type { PropsWithChildren } from 'react';
import { STATIC_JS_PATH } from '../constants';

type Props = PropsWithChildren<{
	title: string;
	pageScript: string;
}>;

export function Html({ title, pageScript, children }: Props) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>{title}</title>
				<script
					crossOrigin=''
					src='https://unpkg.com/react@18.2.0/umd/react.production.min.js'
				></script>
				<script
					crossOrigin=''
					src='https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js'
				></script>
			</head>
			<body>
				<div id='app'>{children}</div>
				<script src={`${STATIC_JS_PATH}${pageScript}`}></script>
			</body>
		</html>
	);
}
