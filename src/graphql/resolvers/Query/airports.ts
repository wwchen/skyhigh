import { Op, Sequelize } from "sequelize";
import { Airport } from "../../../db/models/airport";

type Args = {
  lat: number
  lng: number
  radius: number
}

export default function airports(parent: unknown, { lat, lng, radius }: Args): Promise<Airport[]> {
  return Airport.findAll({ where: { lon_decimal: { [Op.lte]: lat + 1, [Op.gte]: lat - 1 } } })
}
