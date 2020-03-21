import React from "react";
import { CardTitle, CardText, Card, Col, CardBody } from 'reactstrap';


export default function CharacterCard(props) {
  return (<Col xs="12" md="6" xl="3">
    <Card>
      <CardBody>
        <CardTitle tag='h2'>Name: {props.name}</CardTitle>
        <CardText tag='h3'>Status: {props.status} cm</CardText>
        <CardText tag='h3'>Species: {props.species}</CardText>
        <CardText tag='h3'>Gender: {props.gender}</CardText>
      </CardBody>
    </Card>
  </Col>);
}
