import * as React from 'react';
import * as ReactModal from 'react-modal';
import './modal.scss';

export interface Button {
  text: string;
  type: 'primary' | 'secondary' | 'warning';
  className?: string;
  onClick(): void;
}

const Button: React.StatelessComponent<Button> = ({ text, type, className, onClick }) => (
  <button className={`Modal-button ${type} ${className}`} onClick={onClick}>
    {text}
  </button>
);

export interface Props extends ReactModal.Props {
  title: string;
  buttons: Button | Button[];
  closeModal(): void;
}

interface State {
  [name: string]: any;
}

export class Modal extends React.Component<Props, State> {
  private appElement = document.getElementById('root') as HTMLElement;
  public render() {
    const { title, closeModal, buttons, children } = this.props;

    return (
      <ReactModal
        {...this.props}
        className={`Modal ${this.props.className}`}
        appElement={this.appElement}
        overlayClassName="Modal-overlay"
        shouldCloseOnOverlayClick={false}
        onRequestClose={closeModal}
        closeTimeoutMS={200}
      >
        <div className="Modal-heading">
          <h2 className="Modal-title">{title}</h2>
          <div className="flex-spacer" />
          <button className="Modal-close" onClick={closeModal}>
            <i className="nc-icon nc-ic_close_24px size_24px" />
          </button>
        </div>
        <div className="Modal-body">{children}</div>
        <div className="Modal-footer">
          {Array.isArray(buttons) ? (
            buttons.map(
              (button, i: number) =>
                i === 2 ? (
                  // aligns fist to buttons to right, all others are to the left, behind the spacer
                  <React.Fragment key={button.text}>
                    <div className="flex-spacer" />
                    <Button {...button} />
                  </React.Fragment>
                ) : (
                  <Button key={button.text} {...button} />
                )
            )
          ) : (
            <Button {...buttons} />
          )}
        </div>
      </ReactModal>
    );
  }
}
