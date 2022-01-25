import {
  Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, Model,
  ModelDefined, Optional, Sequelize
} from "sequelize";
import { postgres, sqlite } from "../connection";

export class Airport extends Model { }

Airport.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  icao_code: {
    type: DataTypes.CHAR(4),
    allowNull: false
  },
  iata_code: {
    type: DataTypes.CHAR(4),
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
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lat_min: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lat_sec: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lat_dir: {
    type: DataTypes.CHAR(1),
    allowNull: false
  },
  lon_deg: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lon_min: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lon_sec: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lon_dir: {
    type: DataTypes.CHAR(1),
    allowNull: false
  },
  altitude: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lat_decimal: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  lon_decimal: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
}, {
  sequelize: postgres, // We need to pass the connection instance
  timestamps: false,
});

console.log('loaded Airport')