import React from "react";
import "../../style/DetailRowActivityDurationWeekly.css";
import { Duration } from "../../type.d";

type DetailRowActivityDurationWeeklyProps = {
  weekDuration: Duration[];
  isTittle: boolean
};

export default function DetailRowActivityDurationWeekly(
  props: DetailRowActivityDurationWeeklyProps
) {
  if (props.isTittle) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <table>
            <tr>
              <td>
              <div className="square text-center">Mon</div>
              </td>
              <td>
              <div className="square text-center">Tue</div>
              </td>
              <td>
              <div className="square text-center">Wed</div>
              </td>
              <td>
              <div className="square text-center">Thu</div>
              </td>
              <td>
              <div className="square text-center">Fri</div>
              </td>
              <td>
              <div className="square text-center">Sat</div>
              </td>
              <td>
              <div className="square text-center">Sun</div>
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="d-flex justify-content-center">
          <table>
            <tr>
              <td>
                {props.weekDuration.find((w) => w.day === 1) ? (
                  <div className="square border green"></div>
                ) : (
                  <div className="square border"></div>
                )}
              </td>
              <td>
                {props.weekDuration.find((w) => w.day === 2) ? (
                  <div className="square border green"></div>
                ) : (
                  <div className="square border"></div>
                )}
              </td>
              <td>
                {props.weekDuration.find((w) => w.day === 3) ? (
                  <div className="square border green"></div>
                ) : (
                  <div className="square border"></div>
                )}
              </td>
              <td>
                {props.weekDuration.find((w) => w.day === 4) ? (
                  <div className="square border green"></div>
                ) : (
                  <div className="square border"></div>
                )}
              </td>
              <td>
                {props.weekDuration.find((w) => w.day === 5) ? (
                  <div className="square border green"></div>
                ) : (
                  <div className="square border"></div>
                )}
              </td>
              <td>
                {props.weekDuration.find((w) => w.day === 6) ? (
                  <div className="square border green"></div>
                ) : (
                  <div className="square border"></div>
                )}
              </td>
              <td>
                {props.weekDuration.find((w) => w.day === 0) ? (
                  <div className="square border green"></div>
                ) : (
                  <div className="square border"></div>
                )}
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}
