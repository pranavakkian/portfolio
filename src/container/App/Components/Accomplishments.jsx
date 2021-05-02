import { memo } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

const Accomplishments = memo(() => (
  <Container text textAlign="justified" fluid>
    <Header as="h2" color="grey">
      Accomplishments
    </Header>
    <Header as="h4" color="blue">
      Awards
    </Header>
    <Header as="h5">On The Spot Award</Header>
    <p style={{ fontSize: '13px', color: 'grey' }}>
      Apr 2021 - Tata Consultancy Services
    </p>
    <p style={{ fontSize: '13px' }}>
      For developing key functionality at pace.
    </p>
    <Divider />
    <Header as="h5">Rookie Rockstar</Header>
    <p style={{ fontSize: '13px', color: 'grey' }}>
      Nov 2020 - Tata Consultancy Services
    </p>
    <p style={{ fontSize: '13px' }}>
      Recieved award in order to deliver best quality products.
    </p>
    <Divider />
    <Header as="h4" color="blue">
      Languages
    </Header>
    <Header as="h5">English</Header>
    <p style={{ fontSize: '13px', color: 'grey' }}>
      Professional working proficiency
    </p>
    <Divider />
    <Header as="h5">Hindi</Header>
    <p style={{ fontSize: '13px', color: 'grey' }}>
      Native or bilingual proficiency
    </p>
    <Divider />
    <Header as="h5">French</Header>
    <p style={{ fontSize: '13px', color: 'grey' }}>
      Limited working proficiency
    </p>
    <Divider section />
    <Header as="h4" color="blue">
      Projects
    </Header>
    <Header as="h5">
      Understanding and analyzing semantic knowledge using expert system
    </Header>
    <p style={{ fontSize: '13px', color: 'grey' }}>Jan 2019 – May 2019</p>
    <p style={{ fontSize: '13px' }}>
      Subjective answer automatic evaluation system using text mining approach
      by extracting high level information from text and using it to evaluate
      answers and allocate marks accordingly. Implemented using python nltk
      libraries.
    </p>
    <Divider />
    <Header as="h5">Mobile Doctor</Header>
    <p style={{ fontSize: '13px', color: 'grey' }}>Feb 2018</p>
    <p style={{ fontSize: '13px' }}>
      An android app which suggest home remedy based on symptoms selected by
      user. Used excel sheet as data-set and integrated successfully.
    </p>
    <Divider />
    <Header as="h5">Expense Tracker App</Header>
    <p style={{ fontSize: '13px', color: 'grey' }}>Oct 2017</p>
    <p style={{ fontSize: '13px' }}>
      An android app on Expense Tracker based on machine learning concept to
      predict future income and expenses and it’s also gives ideas about in
      which field we can earn more and how we can decrease our expenses.
      Implemented linear regression approach.
    </p>
    <Divider />
    <Header as="h5">Expense Tracker</Header>
    <p style={{ fontSize: '13px', color: 'grey' }}>Jun 2017 – Jul 2017</p>
    <p style={{ fontSize: '13px' }}>
      Project is based on a website for Expense Tracker using JAVAScript, HTML,
      CSS, AngularJS as front-end and JAVA, Servlet and JDBC as back-end. JSON
      was used to connect front-end and back-end. Successfully deployed on IBM
      Bluemix with ClearDB database.
    </p>
    <Divider />
    <Header as="h5">Aadhar Card Enhancement System</Header>
    <p style={{ fontSize: '13px', color: 'grey' }}>May 2017</p>
    <p style={{ fontSize: '13px' }}>
      The project is to make an enhancement in current AADHAAR – CARD System by
      adding one more field in the bio-metrics i.e. DNA. Java, JDBC and Oracle
      Database is used for this project
    </p>
  </Container>
));

export default Accomplishments;
