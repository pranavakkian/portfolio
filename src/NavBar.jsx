import React from "react";
import {
  Container,
  Dropdown,
  Header,
  Image,
  Menu,
  Responsive
} from "semantic-ui-react";
import icon from "./icon.ico";

function NavBar(props) {
  return (
    <>
      <Responsive minWidth={768}>
        <Menu attached="top" style={{ backgroundColor: "white" }} secondary>
          <Container>
            <Menu.Item header>
              <Image src={icon} size="mini" circular />
              <pre>
                <Header as="h1" color="grey">
                  {" "}
                  Pranav Gupta
                </Header>
              </pre>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item onClick={props.callback}>About</Menu.Item>
              <Menu.Item onClick={props.callback}>Experience</Menu.Item>
              <Menu.Item onClick={props.callback}>Education</Menu.Item>
              <Menu.Item onClick={props.callback}>Skills</Menu.Item>
              <Menu.Item onClick={props.callback}>Accomplishments</Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Responsive>
      <Responsive maxWidth={768}>
        <Menu attached="top" style={{ backgroundColor: "white" }} secondary>
          <Container>
            <Menu.Item header>
              <Image src={icon} size="mini" circular />
              <pre>
                <Header as="h1" color="grey">
                  {" "}
                  Pranav Gupta
                </Header>
              </pre>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Dropdown icon="bars">
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={props.callback}>
                      About
                    </Dropdown.Item>
                    <Dropdown.Item onClick={props.callback}>
                      Experience
                    </Dropdown.Item>
                    <Dropdown.Item onClick={props.callback}>
                      Education
                    </Dropdown.Item>
                    <Dropdown.Item onClick={props.callback}>
                      Skills
                    </Dropdown.Item>
                    <Dropdown.Item onClick={props.callback}>
                      Accomplishments
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Responsive>
    </>
  );
}

export default NavBar;
