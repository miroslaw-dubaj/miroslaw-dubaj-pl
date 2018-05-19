import React, { PureComponent } from 'react';
import NavItem from '../nav-item';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from './style.css';

class NavBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 'Home'
    };
  }

  onNavItemClick(event) {
    () => this.setState({ activePage: 'Works'});
  }
  
  render() {
    return (
      <div className={styles.nav_menu}>
        <NavItem onNavClick={this.onNavItemClick}>
          <FontAwesomeIcon icon='home' />
        </NavItem>
        <NavItem onNavClick={this.onNavItemClick} title='About' data-title='About'/>
        <NavItem onNavClick={this.onNavItemClick} title='Skills' />
        <NavItem onNavClick={this.onNavItemClick} title='Portfolio' />
        <NavItem onNavClick={this.onNavItemClick} title='Blog' />
        <NavItem onNavClick={this.onNavItemClick} title='Contact' />
      </div>
    );
  }
}

export default NavBar;
