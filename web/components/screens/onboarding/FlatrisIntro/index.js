// @flow

import React, { Component, Fragment } from 'react';
import Button from '../../../shared/Button';
import Screen from '../../shared/Screen';

type Props = {
  onNext: Function,
};

export default class FlatrisIntro extends Component<Props> {
  render() {
    const { onNext } = this.props;

    return (
      <Screen
        title="介绍"
        message={
          <Fragment>
            <p>
              <span className="highlight">
                Flatris 是一个快节奏的
                <br />
                双人游戏。
                <br />
              </span>
            </p>
            <p>
              <strong>各种方块</strong>
              <br />
              会从上面落下，
              <br />
              ，直到落到地面。
            </p>
            <p>
              把它们{' '}
              <strong>
                排成
                <br />
                一行
              </strong>
              ，这样可以清除
              <br />
              这行并赢得分数!
            </p>
            <span className="highlight">中文汉化由<strong>高玩梁</strong>制作</span>
          </Fragment>
        }
        actions={[<Button onClick={onNext}>我知道了</Button>]}
      />
    );
  }
}
