import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";

function Education() {
  return (
    <Container text textAlign="justified" fluid>
      <Header as="h2" color="grey">
        Education
      </Header>
      <Header as="h4">SRM University</Header>
      <p style={{ fontSize: "13px" }}>
        Bachelor of Technology - B.Tech, Computer Science, 77.16%
      </p>
      <p style={{ fontSize: "13px", color: "grey" }}>2015 - 2019</p>
      <Divider />
      <Header as="h4">Camford Public School, Patna</Header>
      <p style={{ fontSize: "13px" }}>12th (PCM), 67.2%</p>
      <p style={{ fontSize: "13px", color: "grey" }}>2014 - 2015</p>
      <Divider />
      <Header as="h4">Red Rose School, Deoghar</Header>
      <p style={{ fontSize: "13px" }}>10th, 8.4</p>
      <p style={{ fontSize: "13px", color: "grey" }}>2012 - 2013</p>
    </Container>
  );
}

export default Education;
