import { memo } from 'react';
import { Container, Header } from 'semantic-ui-react';

const About = memo(() => (
  <Container text textAlign="justified" fluid>
    <Header as="h2" color="grey">
      About
    </Header>
    <p>
      I am a talented, skilled and knowledgeable computer science student with
      extensive knowledge of programming and computer applications. Looking for
      great opportunities in full-stack development, machine learning, etc.
    </p>
    <p>
      Furthermore, I am adept at handling multiple tasks competently and at
      working well under pressure.
    </p>
    <p>
      My key strength is communication, building strong relationships with
      people to deliver the best results. I am an effective and articulate
      communicator with all levels of employees. I instill confidence in others
      and approach new challenges with an open mind.
    </p>
    <p>
      I like traveling and my hobbies include cooking, fitness, movies,
      swimming, and clubbing.
    </p>
  </Container>
));

export default About;
