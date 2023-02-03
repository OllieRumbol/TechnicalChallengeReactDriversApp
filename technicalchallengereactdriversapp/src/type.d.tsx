// Details about the driver for the week
export type Driver = {
    name: string
    registration: string
    weekDuration: Duration[]
    totalDurationForWeek: number
}

 // Details about the duration per day
export type Duration = {
    date: string,
    day: number,
    numberOfMinutes: number
    numberOfMinutesRest: number
    numberOfMinutesWork: number
    numberOfMinutesAvailable: number
    numberOfMinutesDrive: number
}