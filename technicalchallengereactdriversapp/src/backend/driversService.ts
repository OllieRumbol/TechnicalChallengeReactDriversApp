import DriversData from "../assets/drivers.json";
import { Driver, Duration } from "../type.d";

export { GetDrivers };

const GetDrivers = () => {
  let drivers: Driver[] = [];

  for (const driver of DriversData.data) {
    let durations: Duration[] = [];

    for (const trace of driver.traces) {
      durations.push({
        date: trace.date,
        day: new Date(trace.date).getDay(),
        numberOfMinutes: trace.activity.reduce((sum, current) => sum + current.duration, 0),
        numberOfMinutesAvailable: trace.activity
          .filter((item) => item.type === "available")
          .reduce((sum, current) => sum + current.duration, 0),
        numberOfMinutesDrive: trace.activity
          .filter((item) => item.type === "drive")
          .reduce((sum, current) => sum + current.duration, 0),
        numberOfMinutesRest: trace.activity
          .filter((item) => item.type === "rest")
          .reduce((sum, current) => sum + current.duration, 0),
        numberOfMinutesWork: trace.activity
          .filter((item) => item.type === "work")
          .reduce((sum, current) => sum + current.duration, 0),
      });
    }

    drivers.push({
      name: driver.forename + " " + driver.surname,
      registration: driver.vehicleRegistration,
      weekDuration: durations,
      totalDurationForWeek: durations
        .filter((item) => item.numberOfMinutes)
        .reduce((sum, current) => sum + current.numberOfMinutes, 0),
    });
  }

  return drivers;
};
