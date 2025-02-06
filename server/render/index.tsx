import type { ReactNode } from 'react';
import { renderToString } from 'react-dom/server';
import { Html } from './templates/html';

export function renderServerPage(
	component: ReactNode,
	{
		title,
		pageScript,
		clientData,
	}: { title: string; pageScript: string; clientData?: Record<string, any> },
) {
	return renderToString(
		<Html title={title} pageScript={pageScript} clientData={clientData}>
			{component}
		</Html>,
	);
}
