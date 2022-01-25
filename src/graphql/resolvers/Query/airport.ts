import { Airport } from "../../../db/models/airport";

type Args = {
  icao_code: string
}

export default function airports(parent: unknown, { icao_code }: Args): Promise<Airport | null> {
  return Airport.findOne({ where: { icao_code } })
}
