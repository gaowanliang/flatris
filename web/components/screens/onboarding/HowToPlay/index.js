// @flow

import React, { Component, Fragment } from 'react';
import Button from '../../../shared/Button';
import Screen from '../../shared/Screen';

type Props = {
  disabled: boolean,
  onNext: Function,
};

export default class HowToPlay extends Component<Props> {
  render() {
    const { disabled, onNext } = this.props;

    return (
      <Screen
        title="怎么玩啊"
        message={
          <Fragment>
            <p>
              按 <strong>←</strong> 或者 <strong>→</strong> 来
              <br />
              移动下落的形状方块。
              <br />
              按 <strong>↑</strong> 来 旋转方向 
              <br />
              <strong>↓</strong> 来 使形状方块快速下落。
            </p>
            <p>
              <span className="highlight">
               桌面端请使用键盘
                <br />
                或者在移动端
                <br />
                使用屏幕上的按钮
              </span>
            </p>
            <p>准备好踢对方的屁股了吗?</p>
          </Fragment>
        }
        actions={[
          <Button disabled={disabled} onClick={onNext}>
            开整
          </Button>,
        ]}
      />
    );
  }
}
