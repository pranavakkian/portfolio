import { memo } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

const Experience = memo(() => (
  <Container text textAlign="justified" fluid>
    <Header as="h2" color="grey">
      Experience
    </Header>
    <Header as="h4">System Engineer</Header>
    <p style={{ fontSize: '13px' }}>Tata Consultancy Services | Full-time</p>
    <p style={{ fontSize: '13px', color: 'grey' }}>
      Apr 2021 - present
      <br />
      Bengalure, Karnataka, India
    </p>
    <p style={{ fontSize: '13px' }}>
      Working as a full stack developer for a major UK retailer and e-commerce
      company.
    </p>
    <Divider />
    <Header as="h4">Assistant System Engineer</Header>
    <p style={{ fontSize: '13px' }}>Tata Consultancy Services | Full-time</p>
    <p style={{ fontSize: '13px', color: 'grey' }}>
      Apr 2020 - March 2021 | 1 yr
      <br />
      Bengalure, Karnataka, India
    </p>
    <p style={{ fontSize: '13px' }}>
      Working as a full stack developer for a major UK retailer and e-commerce
      company.
    </p>
    <Divider />
    <Header as="h4">Assistant System Engineer - Trainee</Header>
    <p style={{ fontSize: '13px' }}>Tata Consultancy Services | Full-time</p>
    <p style={{ fontSize: '13px', color: 'grey' }}>
      Apr 2019 - March 2020 | 1 yr
      <br />
      Bengalure, Karnataka, India
    </p>
    <p style={{ fontSize: '13px' }}>
      Working as a full stack developer for a major UK retailer and e-commerce
      company.
    </p>
    <Divider />
    <Header as="h4">Intern</Header>
    <p style={{ fontSize: '13px' }}>Biztime IT Solutions Pvt. Ltd</p>
    <p style={{ fontSize: '13px', color: 'grey' }}>
      Jun 2017 - Jul 2017 | 2 mos
      <br />
      Bengalure, Karnataka, India
    </p>
    <p style={{ fontSize: '13px' }}>
      Worked on the back end of web development with JAVA Script, Clear DB,
      Servlet, JSON, JAVA, JDBC and IBM Bluemix.
    </p>
  </Container>
));

export default Experience;
