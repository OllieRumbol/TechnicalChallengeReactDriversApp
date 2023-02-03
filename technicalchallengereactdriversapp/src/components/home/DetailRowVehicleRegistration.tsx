import React from "react";
import Badge from "react-bootstrap/esm/Badge";

type DetailRowVehicleRegistrationProps = {
  registration: string;
};

export default function DetailRowVehicleRegistration(
  props: DetailRowVehicleRegistrationProps
) {
  return (
    <>
      <h1>
        <Badge bg="secondary">{props.registration}</Badge>
      </h1>
    </>
  );
}
