// @flow

import React, { Fragment, Component } from 'react';
import Shake from '../../shared/effects/Shake';
import Button from '../../shared/Button';
import Screen from '../shared/Screen';

import type { Player } from 'shared/types/state';

type Props = {
  disabled: boolean,
  otherPlayer: Player,
  onReady: Function,
};

export default class GetReady extends Component<Props> {
  render() {
    const { disabled, otherPlayer, onReady } = this.props;

    return (
      <Screen
        title="做准备吧"
        message={
          <Fragment>
            <p>
              当你们都准备好了
              <br />
              比赛就开始了。
            </p>
            <p>
              <strong>祝你好运！</strong>
            </p>

            <p>如果对手中途离开
              <br />
              <strong>TA的方块会卡住</strong>
              <br />
              回来了就会继续
              <br />
              你可以通过这个来
              <br />
              确定要不要继续和TA玩
            </p>
          </Fragment>
        }
        actions={[
          <Shake time={otherPlayer.ping}>
            <Button disabled={disabled} onClick={onReady}>
              准备
            </Button>
          </Shake>,
        ]}
      />
    );
  }
}
