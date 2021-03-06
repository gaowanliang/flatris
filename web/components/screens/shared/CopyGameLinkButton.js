// @flow

import React, { Component } from 'react';
import { getShareUrl } from '../../../utils/url';
import CopyButton from '../../shared/CopyButton';

import type { GameId } from 'shared/types/state';

type Props = {
  disabled: boolean,
  gameId: GameId,
};

export default class CopyGameLinkButton extends Component<Props> {
  render() {
    const { disabled, gameId } = this.props;

    return (
      <CopyButton
        disabled={disabled}
        copyText={getShareUrl(gameId)}
        defaultLabel="复制链接"
        successLabel="链接已复制!"
        errorLabel="复制失败，换个浏览器试试？"
      />
    );
  }
}
