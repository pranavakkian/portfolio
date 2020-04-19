import React, { memo } from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';

const Foot = memo(() => (
  <Menu secondary stackable style={{ backgroundColor: 'white' }}>
    <Container>
      <Menu.Item>
        <Icon name="copyright" />
        Pranav Gupta
        {' '}
        {new Date().getFullYear()}
      </Menu.Item>
    </Container>
  </Menu>
));

export default Foot;
