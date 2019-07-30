import { routes } from './src/routes.js';

const router = new UniversalRouter(routes);
export function navigateTo(path) {
  router
    .resolve(path)
    .then(component =>
      ReactDOM.render(component, document.getElementById('root')),
    );
}
