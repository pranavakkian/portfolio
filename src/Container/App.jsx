/* eslint-disable no-undef */
import React, { Component, createRef } from 'react';
import AddToHomescreen from 'react-add-to-homescreen';
import { Grid, Segment, Sticky } from 'semantic-ui-react';
import About from '../Components/About/About';
import Accomplishments from '../Components/Accomplishments/Accomplishments';
import './App.css';
import Education from '../Components/Education/Education';
import Experience from '../Components/Experience/Experience';
import Foot from '../Components/Foot/Foot';
import NavBar from '../Components/NavBar/NavBar';
import ProfileCard from '../Components/ProfileCard/ProfileCard';
import Skills from '../Components/Skills/Skills';

class App extends Component {
  contextRef = createRef();

  constructor() {
    super();
    this.state = { activeItem: 'About' };
  }

  handleNavBarCallback = (event) => {
    this.setState({ activeItem: event.target.innerText });
  };

  handleAddToHomescreenClick = () => {
    // eslint-disable-next-line no-alert
    alert(`
    1. Open Share menu
    2. Tap on "Add to Home Screen" button`);
  };

  render() {
    const { activeItem } = this.state;
    let item;
    if (activeItem === 'About') {
      item = <About />;
    } else if (activeItem === 'Experience') {
      item = <Experience />;
    } else if (activeItem === 'Education') {
      item = <Education />;
    } else if (activeItem === 'Skills') {
      item = <Skills />;
    } else if (activeItem === 'Accomplishments') {
      item = <Accomplishments />;
    }
    return (
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef}>
          <NavBar callback={this.handleNavBarCallback} />
        </Sticky>
        <Segment attached="bottom">
          <Grid stackable centered container relaxed="very">
            <Grid.Row>
              <Grid.Column width={4}>
                <ProfileCard />
              </Grid.Column>
              <Grid.Column width={12}>
                <Segment>{item}</Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <footer>
          <Foot />
        </footer>
        <AddToHomescreen
          onAddToHomescreenClick={this.handleAddToHomescreenClick}
        />
      </div>
    );
  }
}

export default App;
