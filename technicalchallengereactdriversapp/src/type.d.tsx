export type Driver = {
    name: string
    registration: string
    weekDuration: Duration[]
    total: number
}

export type Duration = {
    date: string,
    day: number,
    numberOfMinutes: number
}