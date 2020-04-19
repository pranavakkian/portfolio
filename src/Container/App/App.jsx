import React, { memo, useRef, useState } from 'react';
import { Grid, Segment, Sticky } from 'semantic-ui-react';
import About from './Components/About/About';
import Accomplishments from './Components/Accomplishments/Accomplishments';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Foot from './Components/Foot/Foot';
import NavBar from './Components/NavBar/NavBar';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import Skills from './Components/Skills/Skills';
import './CSS/App.css';

const App = memo(() => {
  const contextRef = useRef();
  const [activeItem, setActiveItem] = useState(<About />);

  /* istanbul ignore next */
  const handleNavBarCallback = (event) => {
    const { innerText } = event.target;
    if (innerText === 'About') {
      setActiveItem(<About />);
    } else if (innerText === 'Experience') {
      setActiveItem(<Experience />);
    } else if (innerText === 'Education') {
      setActiveItem(<Education />);
    } else if (innerText === 'Skills') {
      setActiveItem(<Skills />);
    } else if (innerText === 'Accomplishments') {
      setActiveItem(<Accomplishments />);
    } else {
      throw new Error('Invalid argument');
    }
  };

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <NavBar callback={handleNavBarCallback} />
      </Sticky>
      <Segment attached="bottom">
        <Grid stackable centered container relaxed="very">
          <Grid.Row>
            <Grid.Column width={4}>
              <ProfileCard />
            </Grid.Column>
            <Grid.Column width={12}>
              <Segment>{activeItem}</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <footer>
        <Foot />
      </footer>
    </div>
  );
});

export default App;
