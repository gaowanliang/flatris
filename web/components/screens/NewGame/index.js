// @flow

import React, { Component, Fragment } from 'react';
import Button from '../../shared/Button';
import CopyGameLinkButton from '../shared/CopyGameLinkButton';
import Screen from '../shared/Screen';

import type { GameId } from 'shared/types/state';

type Props = {
  disabled: boolean,
  gameId: GameId,
  onPlay: Function,
};

export default class NewGame extends Component<Props> {
  render() {
    const { disabled, gameId, onPlay } = this.props;

    return (
      <Screen
        title="新游戏"
        message={
          <Fragment>
            <p>
              <strong>
                邀请一个朋友参加战斗，
                <br />
                或者先一个人玩。
              </strong>
            </p>
            <div className="copy">
              <CopyGameLinkButton disabled={disabled} gameId={gameId} />
            </div>
            <p>
              发送邀请链接并
              <br />
              在这热热身，
              <br />
              直到等到另一个人来。
            </p>
            <style jsx>{`
              .copy {
                position: relative;
                height: calc(100% / 11 * 2);
                margin: 1em 0;
              }
            `}</style>
          </Fragment>
        }
        actions={[
          <Button disabled={disabled} onClick={onPlay}>
            开整
          </Button>,
        ]}
      />
    );
  }
}
