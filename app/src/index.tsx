import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
// eslint-disable-next-line import/no-unresolved
import routes from '~solid-pages';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

if (root) {
  render(() => <Router>{routes}</Router>, root);
}

