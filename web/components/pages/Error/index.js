// @flow

import Link from 'next/link';
import React, { Component, Fragment } from 'react';
import Screen from '../../screens/shared/Screen';
import Button from '../../shared/Button';
import CopyButton from '../../shared/CopyButton';
import Title from '../../Title';
import GameFrame from '../GameFrame';

import type { ComponentError } from 'shared/types/error';

type Props = {
  statusCode?: number,
  error?: ComponentError,
};

export default class Error extends Component<Props> {
  render() {
    const { statusCode } = this.props;

    return (
      <GameFrame>
        <Title>Error :/</Title>
        {statusCode === 404 ? this.render404() : this.renderMisc()}
      </GameFrame>
    );
  }

  render404() {
    return (
      <Screen
        title="没找到啊"
        message={
          <Fragment>
            <p>嗯嗯...</p>
            <p>
              不是TA离开了，
              <br />
              就是这里根本
              <br />
              没存在过 ╮(╯▽╰)╭
            </p>
          </Fragment>
        }
        actions={[
          <Link href="/">
            <Button>主页</Button>
          </Link>,
        ]}
      />
    );
  }

  renderMisc() {
    const { error } = this.props;

    return (
      <Screen
        title="哦，糟了!"
        message={
          <Fragment>
            <p>
              <strong>啥东西坏了 (っ °Д °;)っ</strong>
            </p>
            {error && (
              <Fragment>
                <div className="copy">
                  <CopyButton
                    disabled={false}
                    copyText={`${error.message}\n\n${error.stack}`}
                    defaultLabel="复制错误信息"
                    successLabel="错误已复制!"
                    errorLabel="复制失败"
                  />
                </div>
                <p>
                  <span className="highlight">
                    请{' '}
                    <a href={getGithubIssueUrl(error)} target="_blank">
                      点这
                    </a>{' '}
                    来分享
                    <br />
                    你出的问题
                  </span>
                </p>
                <p>
                  至少这一页
                  <br />
                  还有用吧？
                </p>
              </Fragment>
            )}
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
          <Link href="/">
            <Button>主页</Button>
          </Link>,
        ]}
      />
    );
  }
}

function getGithubIssueUrl(error: ComponentError) {
  const title = 'Check out this error';
  const body = getGithubIssueBody(error);

  return `https://github.com/skidding/flatris/issues/new?title=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(body)}`;
}

function getGithubIssueBody({ message, stack }: ComponentError) {
  return `## Error

${message}

## Component stack trace

${stack}`;
}
