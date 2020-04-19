import React, { memo } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import pic from './Assets/pic.jpg';

const ProfileCard = memo(() => (
  <Card>
    <Image src={pic} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Pranav Gupta</Card.Header>
      <Card.Meta>
        <span>Assistant System Engineer - Trainee</span>
      </Card.Meta>
      <Card.Description>
        <span style={{ fontWeight: 'bold' }}>Tata Consultancy Services</span>
        <br />
        <span style={{ fontWeight: 'bold' }}>SRM University</span>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto: pranavakkian@gmail.com">
        <Icon name="mail outline" circular />
      </a>
      <a href="tel: +91-9431783998">
        <Icon name="call" circular />
      </a>
      <a href="http://www.facebook.com/pranavakkian">
        <Icon name="facebook f" circular />
      </a>
      <a href="http://www.instagram.com/pranavakkian">
        <Icon name="instagram" circular />
      </a>
      <a href="http://wa.me/919431783998">
        <Icon name="whatsapp" circular />
      </a>
      <a href="http://www.twitter.com/pranavakkian">
        <Icon name="twitter" circular />
      </a>
      <a href="http://www.linkedin.com/in/pranavakkian">
        <Icon name="linkedin" circular />
      </a>
      <a href="https://t.me/pranavakkian">
        <Icon name="telegram plane" circular />
      </a>
    </Card.Content>
  </Card>
));

export default ProfileCard;
