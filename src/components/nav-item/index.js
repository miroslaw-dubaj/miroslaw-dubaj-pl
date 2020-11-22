import React, { PureComponent } from 'react';
import styles from './style.css';

class NavItem extends PureComponent {
  render() {
    return (
      <div onClick={this.props.onNavClick} className={styles.nav_item}>
        <a className={styles.nav_item_link}>
          <span className={styles.nav_item_title}>{this.props.title}{this.props.children}</span>
        </a>
      </div>
    );
  }
}

export default NavItem;