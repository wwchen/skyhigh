import {
  Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, Model,
  ModelDefined, Optional, Sequelize
} from "sequelize";
import { postgres } from "../connection";
import { Plane } from "./plane";

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

export class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  declare id: number; // Note that the `null assertion` `!` is required in strict mode.
  declare firstName: string;
  declare lastName: string;
  declare email: string;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
  declare getPlanes: HasManyGetAssociationsMixin<Plane>; // Note the null assertions!
  declare addPlane: HasManyAddAssociationMixin<Plane, number>;
  declare hasPlane: HasManyHasAssociationMixin<Plane, number>;
  declare countPlanes: HasManyCountAssociationsMixin;
  declare createPlane: HasManyCreateAssociationMixin<Plane>;

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  declare readonly planes?: Plane[]; // Note this is optional since it's only populated when explicitly requested in code

  declare static associations: {
    planes: Association<User, Plane>;
  };
}

User.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
  sequelize: postgres, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  tableName: 'Users',
  timestamps: false,
});
