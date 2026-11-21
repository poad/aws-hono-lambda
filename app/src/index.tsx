import { createRouter } from '@solidjs/router';
import { render } from '@solidjs/web';
// eslint-disable-next-line import-x/no-unresolved
import routes from '~solid-pages';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const Router = createRouter({
  routes,
});

if (root) {
  render(() => <Router>{(props) => props.children}</Router>, root);
}
