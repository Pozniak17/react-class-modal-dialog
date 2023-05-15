import css from './Header.module.css';

// Тут Хедер
export const Header = ({ showModal }) => {
  return (
    <nav className={css.nav}>
      <button className={css.btn} onClick={showModal}>
        Open modal
      </button>
    </nav>
  );
};
