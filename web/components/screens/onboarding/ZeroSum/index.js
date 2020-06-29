// @flow

import React, { Component, Fragment } from 'react';
import Button from '../../../shared/Button';
import Screen from '../../shared/Screen';

type Props = {
  onNext: Function,
};

export default class ZeroSum extends Component<Props> {
  render() {
    const { onNext } = this.props;

    return (
      <Screen
        title="零和博弈"
        message={
          <Fragment>
            <p>
              <span className="highlight">
                你清除的每一行都会
                <br />
                添加到你的对手的
                <br />
                游戏区域，反之亦然。
              </span>
            </p>
            <p>
              <strong>
                这不是一场
                <br />
                友谊赛。
              </strong>{' '}
              一方会输
              <br />
              而另一方会赢!
            </p>
            <p>为了活下去，你得快点</p>
          </Fragment>
        }
        actions={[<Button onClick={onNext}>啊哈!</Button>]}
      />
    );
  }
}
