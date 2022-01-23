import { Airport } from "../../../db/models/airport";

type Args = {
  icao_code: string
}

type Context = {
  models: any
}

export default function airports(parent: unknown, { icao_code }: Args, { models }: Context): Promise<Airport[]> {
  console.log('hello');
  console.log(icao_code);
  console.log(typeof (models));
  const a = Airport.findAll({ where: { icao_code } })
  return a;
}
