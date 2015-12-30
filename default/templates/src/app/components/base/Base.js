import React, {Component, PropTypes} from 'react';

import Header from 'components/header/Header';

export default class Base extends Component {

  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    const {children} = this.props;
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}
