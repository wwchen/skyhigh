import {
  Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, Model,
  ModelDefined, Optional, Sequelize
} from "sequelize";
import { sqlite } from "../connection";

/*
             (
               id integer  primary key autoincrement,
               icao_code   char   ( 4),
               iata_code   char   ( 3),
               name        varchar(50),
               city        varchar(50),
               country     varchar(50),
               lat_deg     int        ,
               lat_min     int        ,
               lat_sec     int        ,
               lat_dir     char   ( 1),
               lon_deg     int        ,
               lon_min     int        ,
               lon_sec     int        ,
               lon_dir     char   ( 1),
               altitude    int        ,
               lat_decimal double     ,
               lon_decimal double
             );
*/
interface AirportAttributes {
  id: number;
  icao_code: string;
  iata_code: string;
  name: string;
  city: string;
  country: string;
  lat_deg: number;
  lat_min: number;
  lat_sec: number;
  lat_dir: string;
  lon_deg: number;
  lon_min: number;
  lon_sec: number;
  lon_dir: string;
  altitude: number;
  lat_decimal: number;
  lon_decimal: number;
}

// Some attributes are optional in `Airport.build` and `Airport.create` calls
interface AirportCreationAttributes extends Optional<AirportAttributes, "id"> { }

export class Airport extends Model<AirportAttributes, AirportCreationAttributes>
  implements AirportAttributes {
  declare id: number; // Note that the `null assertion` `!` is required in strict mode.
  declare readonly icao_code: string;
  declare readonly iata_code: string;
  declare readonly name: string;
  declare readonly city: string;
  declare readonly country: string;
  declare readonly lat_deg: number;
  declare readonly lat_min: number;
  declare readonly lat_sec: number;
  declare readonly lat_dir: string;
  declare readonly lon_deg: number;
  declare readonly lon_min: number;
  declare readonly lon_sec: number;
  declare readonly lon_dir: string;
  declare readonly altitude: number;
  declare readonly lat_decimal: number;
  declare readonly lon_decimal: number;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
  /*
  declare getProjects: HasManyGetAssociationsMixin<Project>; // Note the null assertions!
  declare addProject: HasManyAddAssociationMixin<Project, number>;
  declare hasProject: HasManyHasAssociationMixin<Project, number>;
  declare countProjects: HasManyCountAssociationsMixin;
  declare createProject: HasManyCreateAssociationMixin<Project>;

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  declare readonly projects?: Project[]; // Note this is optional since it's only populated when explicitly requested in code

  declare static associations: {
    projects: Association<Airport, Project>;
  };
  */
}

Airport.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
  // Other model options go here
  sequelize: sqlite, // We need to pass the connection instance
  modelName: 'Airport', // We need to choose the model name
  tableName: 'Airports',
  timestamps: false,
});
