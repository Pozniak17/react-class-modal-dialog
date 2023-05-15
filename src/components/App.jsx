import { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Header } from './Header/Header';

export class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <>
        <Header showModal={this.showModal} />

        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>Some</Modal>
        )}
      </>
    );
  }
}
