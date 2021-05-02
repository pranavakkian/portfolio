import { memo } from 'react';
import {
  Container, Divider, Header, Progress,
} from 'semantic-ui-react';

const Skills = memo(() => (
  <Container text textAlign="justified" fluid>
    <Header as="h2" color="grey">
      Skills
    </Header>
    <Header as="h4" color="blue">
      Front-End Technologies
    </Header>
    <Header as="h5">React JS</Header>
    <Progress percent={88} size="tiny" color="blue" />
    <Header as="h5">Redux</Header>
    <Progress percent={85} size="tiny" color="blue" />
    <Header as="h5">Redux - Saga</Header>
    <Progress percent={85} size="tiny" color="blue" />
    <Header as="h5">HTML</Header>
    <Progress percent={72} size="tiny" color="blue" />
    <Header as="h5">CSS</Header>
    <Progress percent={70} size="tiny" color="blue" />
    <Header as="h5">Angular JS</Header>
    <Progress percent={80} size="tiny" color="blue" />
    <Header as="h5">JAVAScript</Header>
    <Progress percent={68} size="tiny" color="blue" />
    <Divider section />
    <Header as="h4" color="blue">
      Back-End Technologies
    </Header>
    <Header as="h5">JAVA - Spring Boot</Header>
    <Progress percent={85} size="tiny" color="blue" />
    <Header as="h5">Spring Cloud Stream (Kafka)</Header>
    <Progress percent={80} size="tiny" color="blue" />
    <Header as="h5">Spring Integration Services</Header>
    <Progress percent={80} size="tiny" color="blue" />
    <Header as="h5">Python</Header>
    <Progress percent={75} size="tiny" color="blue" />
    <Header as="h5">C Programming</Header>
    <Progress percent={60} size="tiny" color="blue" />
    <Header as="h5">C++</Header>
    <Progress percent={65} size="tiny" color="blue" />
    <Divider section />
    <Header as="h4" color="blue">
      Testing Framework
    </Header>
    <Header as="h5">JUnit</Header>
    <Progress percent={90} size="tiny" color="blue" />
    <Header as="h5">Mockito</Header>
    <Progress percent={90} size="tiny" color="blue" />
    <Header as="h5">Jest</Header>
    <Progress percent={90} size="tiny" color="blue" />
    <Header as="h5">Cypress</Header>
    <Progress percent={85} size="tiny" color="blue" />
    <Header as="h5">Cucumber</Header>
    <Progress percent={85} size="tiny" color="blue" />
    <Divider section />
    <Header as="h4" color="blue">
      Algorithm Design
    </Header>
    <Header as="h5">Object-Oriented Programming</Header>
    <Progress percent={85} size="tiny" color="blue" />
    <Header as="h5">Machine Learning</Header>
    <Progress percent={70} size="tiny" color="blue" />
    <Header as="h5">Data Structures</Header>
    <Progress percent={65} size="tiny" color="blue" />
    <Divider section />
    <Header as="h4" color="blue">
      Database
    </Header>
    <Header as="h5">NoSQL - DynamoDB</Header>
    <Progress percent={90} size="tiny" color="blue" />
    <Header as="h5">DBMS</Header>
    <Progress percent={80} size="tiny" color="blue" />
    <Header as="h5">SQL</Header>
    <Progress percent={85} size="tiny" color="blue" />
    <Divider />
    <Header as="h4" color="blue">
      Cloud
    </Header>
    <Header as="h5">AWS CI/CD</Header>
    <Progress percent={75} size="tiny" color="blue" />
    <Divider />
    <Header as="h4" color="blue">
      Other Techonologies
    </Header>
    <Header as="h5">Full Stack Development</Header>
    <Progress percent={75} size="tiny" color="blue" />
    <Header as="h5">Agile ways of working</Header>
    <Progress percent={90} size="tiny" color="blue" />
    <Header as="h5">DevSecOps</Header>
    <Progress percent={85} size="tiny" color="blue" />
    <Header as="h5">Android Development</Header>
    <Progress percent={75} size="tiny" color="blue" />
    <Header as="h5">J2EE Web-Services</Header>
    <Progress percent={85} size="tiny" color="blue" />
  </Container>
));

export default Skills;
