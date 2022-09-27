import { slide as Menu } from 'react-burger-menu';
import styles from '../header/HambugerMenu.module.css';

const HamburgerMenu = () => {
  return (
    <Menu right className={styles.Navbar}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};

export default HamburgerMenu