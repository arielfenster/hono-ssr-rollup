import { hydrateRoot } from 'react-dom/client';
import { SearchPage } from '../pages/search';

hydrateRoot(document.getElementById('app')!, <SearchPage />);
