// @flow

import React, { Component, Fragment } from 'react';
import Button from '../../../shared/Button';
import Screen from '../../shared/Screen';

type Props = {
  onNext: Function,
};

export default class Multiplayer extends Component<Props> {
  render() {
    const { onNext } = this.props;

    return (
      <Screen
        title="一对一战"
        message={
          <Fragment>
            <p>
              <span className="highlight">
                两个玩家会
                <br />
                得到相同的
                <br />
                方块序列。
              </span>
            </p>
            <p>
              你们每个人都控制着<br />
              一个独立的游戏。
              <br />
              你能看到<strong>对手的影子</strong>,<br />
              但你们之间不会产生互动。
            </p>
            <p>但在某种程度上...</p>
          </Fragment>
        }
        actions={[<Button onClick={onNext}>好的...</Button>]}
      />
    );
  }
}
