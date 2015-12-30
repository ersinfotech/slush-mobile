import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/lib/circular-progress';

import * as nowActions from 'actions/nowActions';
import {home} from './home.css'

@connect(
  state => ({
    now: state.now,
  }),
  nowActions,
)
export default class Home extends Component {

  static propTypes = {
    now: PropTypes.string,
    fetchNow: PropTypes.func,
  }

  componentDidMount() {
    const {fetchNow} = this.props;
    fetchNow();
  }

  render() {
    const {now} = this.props;
    return (
      <div className={home}>
        {now &&
          <h1>
            Now is {now}
          </h1>
        ||
          <CircularProgress mode="indeterminate" />
        }

      </div>
    );
  }
}
