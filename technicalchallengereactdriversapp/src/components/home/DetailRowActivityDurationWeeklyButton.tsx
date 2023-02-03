import React, { useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/esm/ListGroup";
import Overlay from "react-bootstrap/esm/Overlay";
import Popover from "react-bootstrap/esm/Popover";
import { Duration } from "../../type.d";

type DetailRowActivityDurationWeeklyButtonProps = {
  duration: Duration;
};

export default function DetailRowActivityDurationWeeklyButton(
  props: DetailRowActivityDurationWeeklyButtonProps
) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button
        variant="success"
        className="square border green"
        ref={target}
        onClick={() => setShow(!show)}
      ></Button>
      <Overlay target={target.current} show={show} placement="left">
        <Popover id="popover-basic">
          <Popover.Header as="h3">Break down of time</Popover.Header>
          <Popover.Body>
            <ListGroup>
              <ListGroup.Item>
                Available: {props.duration.numberOfMinutesAvailable}
              </ListGroup.Item>
              <ListGroup.Item>
                Drive: {props.duration.numberOfMinutesDrive}
              </ListGroup.Item>
              <ListGroup.Item>
                Rest: {props.duration.numberOfMinutesRest}
              </ListGroup.Item>
              <ListGroup.Item>
                Work: {props.duration.numberOfMinutesWork}
              </ListGroup.Item>
            </ListGroup>
          </Popover.Body>
        </Popover>
      </Overlay>
    </>
  );
}
