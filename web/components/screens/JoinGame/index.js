// @flow

import React, { Component, Fragment } from 'react';
import Button from '../../shared/Button';
import Screen from '../shared/Screen';

type Props = {
  disabled: boolean,
  onWatch: Function,
  onJoin: Function,
};

export default class JoinGame extends Component<Props> {
  render() {
    const { disabled, onWatch, onJoin } = this.props;

    return (
      <Screen
        title="加入游戏"
        message={
          <Fragment>
            <p>
              <strong>就这个房间</strong>
            </p>
            <p>
              你可以看别人和TA对战，
              <br />
              也可以自己和TA对战。
            </p>
            <p>你想怎么玩？</p>
          </Fragment>
        }
        actions={[
          <Button disabled={disabled} onClick={onJoin}>
            加入
          </Button>,
          <Button
            disabled={disabled}
            bgColor="#fff"
            color="#34495f"
            colorDisabled="rgba(52, 73, 95, 0.6)"
            onClick={onWatch}
          >
            观看
          </Button>,
        ]}
      />
    );
  }
}
