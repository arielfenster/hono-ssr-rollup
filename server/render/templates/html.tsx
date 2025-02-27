import type { PropsWithChildren } from 'react';
import { CLIENT_DATA_NAME, STATIC_CSS_FILE_PATH } from '../../../shared/constants';

type Props = PropsWithChildren<{
	title: string;
	pageScript: string;
	clientData?: Record<string, any>;
}>;

export function Html({ title, pageScript, clientData, children }: Props) {
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
		return <link href={`/${STATIC_CSS_FILE_PATH}`} rel='stylesheet' />;
	}

	function injectClientData() {
		if (!clientData) return null;

		return (
			<script
				dangerouslySetInnerHTML={{
					__html: `var ${CLIENT_DATA_NAME} = ${JSON.stringify(clientData)}`,
				}}
			/>
		);
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
				{injectClientData()}
				<script src={pageScript}></script>
			</body>
		</html>
	);
}
