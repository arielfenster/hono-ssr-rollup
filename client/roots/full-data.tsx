import { hydrateRoot } from 'react-dom/client';
import { FullDataPage } from '../pages/full-data';
import { getWindow } from '../utils';

const { __CLIENT_DATA__ } = getWindow();

hydrateRoot(
	document.getElementById('app')!,
	<FullDataPage categories={__CLIENT_DATA__.categories} products={__CLIENT_DATA__.products} />,
);
