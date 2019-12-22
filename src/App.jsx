import React, { Component, createRef } from "react";
import { Grid, Segment, Sticky } from "semantic-ui-react";
import About from "./About";
import Accomplishments from "./Accomplishments";
import "./App.css";
import Education from "./Education";
import Experience from "./Experience";
import Foot from "./Foot";
import NavBar from "./NavBar";
import ProfileCard from "./ProfileCard";
import Skills from "./Skills";

class App extends Component {
  contextRef = createRef();

  state = { activeItem: "About" };

  handleNavBarCallback = event => {
    this.setState({ activeItem: event.target.innerText });
  };

  render() {
    let item;
    if (this.state.activeItem === "About") {
      item = <About />;
    } else if (this.state.activeItem === "Experience") {
      item = <Experience />;
    } else if (this.state.activeItem === "Education") {
      item = <Education />;
    } else if (this.state.activeItem === "Skills") {
      item = <Skills />;
    } else if (this.state.activeItem === "Accomplishments") {
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
      </div>
    );
  }
}

export default App;
