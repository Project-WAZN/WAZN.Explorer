import * as React from 'react';
import { PoweredByMyCrypto } from './poweredby';
import { Logo } from './logo';
import './footer.scss';

export const Footer = () => (
  <footer className="Footer">
    <div className="Footer-inner">
      <a
        className="Footer-logo mycrypto"
        target="_blank"
        rel="noopener noreferrer"
        href="https://mycrypto.com"
      >
        <PoweredByMyCrypto />
      </a>
      <div className="flex-spacer" />
      <div className="Footer-main-content">
        <a className="Footer-logo" href="https://explorer.wazn.io">
          <Logo />
        </a>
        <p className="Footer-main-content-text">
          WAZN Explorer is an open-source WAZN block explorer that is offered as a part of the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.wazn.io">
            Project WAZN
          </a>{' '}
          network. At WAZN Project, we’re focused on building awesome products that put the power in
          your hands and this is just the beginning of our WAZN offerings.
        </p>
      </div>
      <div className="flex-spacer" />
      <div className="Footer-social-media-wrapper">
        <p className="Footer-social-titles">WAZN Explorer</p>
        <div className="Footer-social-titles-wrapper">
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Project-WAZN/WAZN.Explorer"
          >
            <i className="nc-icon nc-logo-github size_24px" />
          </a>
        </div>
        <p className="Footer-social-titles">Project WAZN</p>
        <div className="Footer-social-titles-wrapper">
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Project-WAZN"
          >
            <i className="nc-icon nc-logo-github size_24px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/wazn.io"
          >
            <i className="nc-icon nc-logo-facebook size_24px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Project_WAZN"
          >
            <i className="nc-icon nc-logo-twitter size_24px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://discordapp.com/channels/512852688694673419/512852689143726091"
          >
            <i className="nc-icon nc-logo-instagram size_24px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/mycryptohq"
          >
            <i className="nc-icon nc-logo-instagram size_24px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.reddit.com/user/Project_WAZN"
          >
            <i className="nc-icon nc-logo-medium size_24px" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
