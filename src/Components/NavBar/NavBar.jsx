import PropTypes from 'prop-types';
import React from 'react';
import {
  Container, Dropdown, Header, Image, Menu, Responsive,
} from 'semantic-ui-react';
import icon from './Assets/icon.ico';

const NavBar = (props) => {
  const { callback } = props;
  return (
    <>
      <Responsive minWidth={768}>
        <Menu attached="top" style={{ backgroundColor: 'white' }} secondary>
          <Container>
            <Menu.Item header>
              <Image src={icon} size="mini" circular />
              <pre>
                <Header as="h1" color="grey">
                  {' '}
                  Pranav Gupta
                </Header>
              </pre>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item onClick={callback}>About</Menu.Item>
              <Menu.Item onClick={callback}>Experience</Menu.Item>
              <Menu.Item onClick={callback}>Education</Menu.Item>
              <Menu.Item onClick={callback}>Skills</Menu.Item>
              <Menu.Item onClick={callback}>Accomplishments</Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Responsive>
      <Responsive maxWidth={768}>
        <Menu attached="top" style={{ backgroundColor: 'white' }} secondary>
          <Container>
            <Menu.Item header>
              <Image src={icon} size="mini" circular />
              <pre>
                <Header as="h1" color="grey">
                  {' '}
                  Pranav Gupta
                </Header>
              </pre>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Dropdown icon="bars">
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={callback}>About</Dropdown.Item>
                    <Dropdown.Item onClick={callback}>Experience</Dropdown.Item>
                    <Dropdown.Item onClick={callback}>Education</Dropdown.Item>
                    <Dropdown.Item onClick={callback}>Skills</Dropdown.Item>
                    <Dropdown.Item onClick={callback}>
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
};

NavBar.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default NavBar;
