import React from "react";
import Badge from "react-bootstrap/esm/Badge";

type DetailRowDriversNameProps = {
  name: string;
};

export default function DetailRowDriversName(props: DetailRowDriversNameProps) {
  return (
    <>
      <h1>
        <Badge bg="secondary">{props.name}</Badge>
      </h1>
    </>
  );
}
