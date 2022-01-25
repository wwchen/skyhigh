import { DataTypes, Model } from "sequelize";
import { sqlite } from "../connection";
import { Airport } from "../models/airport";

export class Airport3 extends Model { }

Airport3.init({
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  icao_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  iata_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lat_deg: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  lat_min: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  lat_sec: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  lat_dir: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lon_deg: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  lon_min: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  lon_sec: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  lon_dir: {
    type: DataTypes.STRING,
    allowNull: false
  },
  altitude: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  lat_decimal: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  lon_decimal: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
}, {
  sequelize: sqlite, // We need to pass the connection instance
  timestamps: false,
  tableName: 'Airports'
});

Airport.sync({ alter: true })

Airport3.findAll().then(as => {
  console.log(as)
  as.map(a => Airport.create({ ...a.get() }))
  console.log('done')
})