import React from "react";
import "../../style/DetailRowActivityDurationWeekly.css";
import { Duration } from "../../type.d";

type DetailRowActivityDurationWeeklyProps = {
  weekDuration: Duration[];
};

export default function DetailRowActivityDurationWeekly(
  props: DetailRowActivityDurationWeeklyProps
) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <table>
          <tr>
            <td>
              {props.weekDuration.find((w) => w.day == 1) ? (
                <div className="square green"></div>
              ) : (
                <div className="square"></div>
              )}
            </td>
            <td>
              {props.weekDuration.find((w) => w.day == 2) ? (
                <div className="square green"></div>
              ) : (
                <div className="square"></div>
              )}
            </td>
            <td>
              {props.weekDuration.find((w) => w.day == 3) ? (
                <div className="square green"></div>
              ) : (
                <div className="square"></div>
              )}
            </td>
            <td>
              {props.weekDuration.find((w) => w.day == 4) ? (
                <div className="square green"></div>
              ) : (
                <div className="square"></div>
              )}
            </td>
            <td>
              {props.weekDuration.find((w) => w.day == 5) ? (
                <div className="square green"></div>
              ) : (
                <div className="square"></div>
              )}
            </td>
            <td>
              {props.weekDuration.find((w) => w.day == 6) ? (
                <div className="square green"></div>
              ) : (
                <div className="square"></div>
              )}
            </td>
            <td>
              {props.weekDuration.find((w) => w.day == 0) ? (
                <div className="square green"></div>
              ) : (
                <div className="square"></div>
              )}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
