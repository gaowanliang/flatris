// @flow

import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import Shake from '../../shared/effects/Shake';
import FadeIn from '../../shared/effects/FadeIn';
import Button from '../../shared/Button';
import Screen from '../shared/Screen';

import type { Player } from 'shared/types/state';

type Props = {
  disabled: boolean,
  curPlayer: Player,
  onPing: Function,
};

type LocalState = {
  isOtherPlayerIdle: boolean,
};

export default class WaitingForOther extends Component<Props, LocalState> {
  timeoutId: ?TimeoutID;

  state = {
    isOtherPlayerIdle: false,
  };

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({
        isOtherPlayerIdle: true,
      });
    }, 30000);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { disabled, curPlayer, onPing } = this.props;
    const { isOtherPlayerIdle } = this.state;

    return (
      <Screen
        title="等待中..."
        message={
          <Fragment>
            <p>
              你的朋友属实
              <br />
              有点慢。这我知道...
            </p>
            <p>
              <strong>催他快点!</strong>
            </p>
            {isOtherPlayerIdle && (
              <FadeIn>
                <p>
                  也许你朋友
                  <br />
                  放你鸽子了。
                  <br />
                  <Link href="/">
                    <a>加入另一个游戏？</a>
                  </Link>
                </p>
              </FadeIn>
            )}
          </Fragment>
        }
        actions={[
          <Shake time={curPlayer.ping}>
            <Button disabled={disabled} onClick={onPing}>
              催催
            </Button>
          </Shake>,
        ]}
      />
    );
  }
}
