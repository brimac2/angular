export interface Passenger{
  id: number,
  name: string,
  checkIn: boolean,
  checkinDate?: number | null
  children?: Child[] | null
}

export interface Child{
name: string,
age: number
}
