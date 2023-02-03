import React from "react";
import DetailRowActivityDurationWeeklyButton from "./DetailRowActivityDurationWeeklyButton";
import { Duration } from "../../type.d";
import "../../style/DetailRowActivityDurationWeekly.css";

type DetailRowActivityDurationWeeklyProps = {
  weekDuration: Duration[];
  isTittle: boolean;
};

export default function DetailRowActivityDurationWeekly(
  props: DetailRowActivityDurationWeeklyProps
) {
  const monday = props.weekDuration.find((w) => w.day === 1);
  const tuesday = props.weekDuration.find((w) => w.day === 2);
  const wednesday = props.weekDuration.find((w) => w.day === 3);
  const thursday = props.weekDuration.find((w) => w.day === 4);
  const friday = props.weekDuration.find((w) => w.day === 5);
  const saturday = props.weekDuration.find((w) => w.day === 6);
  const sunday = props.weekDuration.find((w) => w.day === 0);

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
                {monday != undefined ? (
                  <DetailRowActivityDurationWeeklyButton duration={monday} />
                ) : (
                  <div className="square border"></div>
                )}
              </td>
              <td>
                {tuesday !== undefined ? (
                  <DetailRowActivityDurationWeeklyButton duration={tuesday} />
                ) : (
                  <div className="square border"></div>
                )}
              </td>
              <td>
                {wednesday !== undefined ? (
                  <DetailRowActivityDurationWeeklyButton duration={wednesday} />
                ) : (
                  <div className="square border"></div>
                )}
              </td>
              <td>
                {thursday !== undefined ? (
                  <DetailRowActivityDurationWeeklyButton duration={thursday} />
                ) : (
                  <div className="square border"></div>
                )}
              </td>
              <td>
                {friday !== undefined ? (
                  <DetailRowActivityDurationWeeklyButton duration={friday} />
                ) : (
                  <div className="square border"></div>
                )}
              </td>
              <td>
                {saturday !== undefined ? (
                  <DetailRowActivityDurationWeeklyButton duration={saturday} />
                ) : (
                  <div className="square border"></div>
                )}
              </td>
              <td>
                {sunday !== undefined ? (
                  <DetailRowActivityDurationWeeklyButton duration={sunday} />
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
