import React from "react";
import Badge from "react-bootstrap/esm/Badge";

type DetailRowActivityDurationProps = {
  duration: number;
};

export default function DetailRowActivityDuration(
  props: DetailRowActivityDurationProps
) {
  return (
    <>
      <h1>
        <Badge bg="secondary">{props.duration} Minutes</Badge>
      </h1>
    </>
  );
}
