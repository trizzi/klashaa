import React, { Component } from 'react';
import DrawerButton from '../pages/DrawerButton';
import Sidedrawer from './Sidedrawer';
import Mainview from './Mainview';

class Home extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    console.log('Clicked!');
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      };
    });
  };

  render() {
    // let sideDrawer;
    // let backdrop;

    // if (this.state.sideDrawerOpen) {
    //   sideDrawer = <Sidedrawer />;
    //   backdrop = <Mainview />;
    // }
    return (
      <div className='split'>
        <div className='hamburger'>
          <DrawerButton
            onClick={this.drawerToggleClickHandler}
          />
        </div>
        {this.state.sideDrawerOpen && <Mainview />}
        {this.state.sideDrawerOpen && <Sidedrawer />}
      </div>
    );
  }
}

export default Home;
