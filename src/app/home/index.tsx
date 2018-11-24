import * as React from 'react';
import './home.scss';
import { MemPool } from 'components/tables/mempool';
import { Blocks } from 'components/tables/blocks';
import { WaznGraph } from 'components/line-graph/wazn';

export class Home extends React.Component {
  public state = {
    width: 400,
    height: 100
  };

  public componentWillMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  public updateDimensions = () => {
    const clientWidth = document.documentElement.clientWidth;
    // take rem into account when adjusting width for padding
    const width =
      clientWidth <= 1016 ? (clientWidth > 600 ? clientWidth - 64 : clientWidth - 26) : 400;
    const height = clientWidth > 600 && clientWidth <= 1016 ? 150 : 100;
    // adjust for border width
    this.setState({ width: width - 2, height });
  };

  public render() {
    const { width, height } = this.state;
    return (
      <>
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title">Welcome to WAZN Explorer!</h2>
            <p className="New-User-CTA-text">
              We're an open-source WAZN block explorer built by the team at{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://www.wazn.io">
                Project WAZN
              </a>. We’re building awesome products that put the power in your hands and this is
              just the beginning of our WAZN offerings. Follow us{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Project_WAZN">
                @Project_WAZN
              </a>{' '}
              for updates, and check us out on{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Project-WAZN/WAZN.Explorer"
              >
                GitHub
              </a>.
            </p>
          </div>
          <WaznGraph width={width} height={height} />
        </section>
        <MemPool />
        <Blocks />
      </>
    );
  }
}
