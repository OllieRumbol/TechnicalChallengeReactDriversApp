import React, { useState, useEffect } from "react";
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
import Alert from "react-bootstrap/esm/Alert";

export default function DetailRow() {
  const driversResult = GetDrivers();
  const [search, setSearch] = useState("");
  const [drivers, setDrivers] = useState(driversResult);

  function updateSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (search !== "") {
      console.log("Hello");
      setDrivers(drivers.filter((d) => d.name.includes(search)));
    } else {
      setDrivers(driversResult);
    }
  }, [search, drivers, driversResult]);

  return (
    <>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
            <Form.Control
              aria-describedby="basic-addon1"
              onChange={updateSearch}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row xs={12}>
        <Col xs={3}></Col>
        <Col xs={2}></Col>
        <Col xs={3}></Col>
        <Col xs={4}>
          <DetailRowActivityDurationWeekly weekDuration={[]} isTittle={true} />
        </Col>
      </Row>

      {drivers.length > 0 ? (
        drivers.map((driver: Driver, index: number) => {
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
                <DetailRowActivityDuration
                  duration={driver.totalDurationForWeek}
                />
              </Col>
              <Col xs={4}>
                <DetailRowActivityDurationWeekly
                  weekDuration={driver.weekDuration}
                  isTittle={false}
                />
              </Col>
            </Row>
          );
        })
      ) : (
        <Alert variant="danger">No results found</Alert>
      )}
    </>
  );
}
