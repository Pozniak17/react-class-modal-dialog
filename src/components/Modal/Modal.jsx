import css from './Modal.module.css';

export const Modal = ({ closeModal }) => {
  return (
    <dialog open className={css.modal}>
      <p>Greetings, one and all!</p>
      <button onClick={closeModal}>Close Modal</button>
    </dialog>
  );
};
