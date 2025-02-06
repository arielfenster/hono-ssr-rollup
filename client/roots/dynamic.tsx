import { hydrateRoot } from 'react-dom/client';
import { DynamicPage } from '../pages/dynamic';
import { getWindow } from '../utils';

const { __CLIENT_DATA__ } = getWindow();

hydrateRoot(document.getElementById('app')!, <DynamicPage id={__CLIENT_DATA__['id']} />);
