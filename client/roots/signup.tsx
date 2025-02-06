import { hydrateRoot } from 'react-dom/client';
import { SignupPage } from '../pages/signup/very/nested/folder';

hydrateRoot(document.getElementById('app')!, <SignupPage />);
