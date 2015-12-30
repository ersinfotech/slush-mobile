import request from 'helpers/superagent';
import config from 'config';

import {FETCH_NOW} from 'constants/actionTypes';

export function fetchNow() {
  return (dispatch) => {
    return request.get(config.utility.baseUrl + '/now')
      .endAsync()
      .delay(2000)
      .get('body')
      .then(body =>
        dispatch({
          type: FETCH_NOW,
          payload: body,
        })
      )
  };
}
