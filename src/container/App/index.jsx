import { memo, useRef, useState } from 'react';
import { Grid, Segment, Sticky } from 'semantic-ui-react';
import About from './Components/About';
import Accomplishments from './Components/Accomplishments';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Foot from './Components/Foot';
import NavBar from './Components/NavBar';
import ProfileCard from './Components/ProfileCard';
import Skills from './Components/Skills';
import './index.css';

const App = () => {
  const contextRef = useRef();
  const [activeItem, setActiveItem] = useState(<About />);

  const handleNavBarCallback = (event) => {
    const { innerText } = event.target;
    switch (innerText) {
      case 'About':
        setActiveItem(<About />);
        break;
      case 'Experience':
        setActiveItem(<Experience />);
        break;
      case 'Education':
        setActiveItem(<Education />);
        break;
      case 'Skills':
        setActiveItem(<Skills />);
        break;
      case 'Accomplishments':
        setActiveItem(<Accomplishments />);
        break;
      default:
        break;
    }
  };

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <NavBar callback={handleNavBarCallback} />
      </Sticky>
      <Segment attached="bottom">
        <Grid stackable container>
          <Grid.Row>
            <Grid.Column width={6}>
              <ProfileCard />
            </Grid.Column>
            <Grid.Column width={10}>
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
};

export default memo(App);
