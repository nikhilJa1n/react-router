import { navigateTo } from './navigateTo.js';
function defineProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}

export class Link extends React.Component {
  constructor(...args) {
    super(...args);
    defineProperty(this, 'onClick', event => {
      event.preventDefault();
      const path = event.currentTarget.pathname;
      navigateTo(path);
      window.history.pushState({ path }, '', path);
    });
  }
  render() {
    return React.createElement(
      'a',
      { href: this.props.to, onClick: this.onClick },
      this.props.children,
    );
  }
}
