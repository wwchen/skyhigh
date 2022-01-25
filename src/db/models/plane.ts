import {
  Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, Model,
  ModelDefined, Optional, Sequelize
} from "sequelize";
import { postgres } from "../connection";


interface PlaneAttributes {
  id: number;
  tail: string;
  callsign: string;
  manufacturer: string;
  model: string;
}

// Some attributes are optional in `Plane.build` and `Plane.create` calls
interface PlaneCreationAttributes extends Optional<PlaneAttributes, "id"> { }

export class Plane extends Model<PlaneAttributes, PlaneCreationAttributes>
  implements PlaneAttributes {
  declare id: number; // Note that the `null assertion` `!` is required in strict mode.
  declare tail: string;
  declare callsign: string;
  declare manufacturer: string;
  declare model: string;

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
    projects: Association<Plane, Project>;
  };
  */
}

Plane.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  callsign: {
    type: DataTypes.STRING,
    allowNull: false
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
  sequelize: postgres, // We need to pass the connection instance
  modelName: 'Plane', // We need to choose the model name
  tableName: 'Planes',
  timestamps: false,
});
