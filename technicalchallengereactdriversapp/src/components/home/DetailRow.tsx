import React from "react";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Row from "react-bootstrap/esm/Row";
import DetailRowActivityDuration from "./DetailRowActivityDuration";
import DetailRowActivityDurationWeekly from "./DetailRowActivityDurationWeekly";
import DetailRowDriversName from "./DetailRowDriversName";
import DetailRowVehicleRegistration from "./DetailRowVehicleRegistration";
import { GetDrivers } from "../../backend/driversService";
import { Driver } from "../../type.d";

export default function DetailRow() {
  return (
    <>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
            <Form.Control aria-describedby="basic-addon1" />
          </InputGroup>
        </Col>
      </Row>

      {GetDrivers().map((driver: Driver, index: number) => {
        return (
          <Row>
            <Col xs={3}>
              <DetailRowDriversName name={driver.name} />
            </Col>
            <Col xs={2}>
              <DetailRowVehicleRegistration
                registration={driver.registration}
              />
            </Col>
            <Col xs={3}>
              <DetailRowActivityDuration duration={driver.total} />
            </Col>
            <Col xs={4}>
              <DetailRowActivityDurationWeekly 
                weekDuration={driver.weekDuration}
              />
            </Col>
          </Row>
        );
      })}
    </>
  );
}
