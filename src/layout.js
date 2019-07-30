import { Link } from '../link.js';

export function Layout({ title, children }) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      React.createElement('b', null, 'Navigation:'),
      ' ',
      React.createElement(Link, { to: '/a' }, 'Page A'),
      ' ',
      React.createElement(Link, { to: '/b' }, 'Page B'),
      ' ',
      React.createElement(Link, { to: '/c' }, 'Page C'),
    ),
    React.createElement(
      'div',
      {},
      React.createElement('h1', null, title),
      children,
    ),
  );
}
