import type { ReactNode } from 'react';
import { renderToString } from 'react-dom/server';
import { Html } from './templates/html';

export function renderServerPage(
	component: ReactNode,
	{ title, pageScript }: { title: string; pageScript: string },
) {
	return renderToString(
		<Html title={title} pageScript={pageScript}>
			{component}
		</Html>,
	);
}
