import React from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';

const Foot = () => (
  <Menu secondary stackable style={{ backgroundColor: 'white' }}>
    <Container>
      <Menu.Item>
        <Icon name="copyright" />
        Pranav Gupta 2019
      </Menu.Item>
    </Container>
  </Menu>
);

export default Foot;
