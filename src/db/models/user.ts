import {
  Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, Model,
  ModelDefined, Optional, Sequelize
} from "sequelize";
import { postgres } from "../connection";

export class User extends Model { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  firstName: {
    type: DataTypes.STRING,
    field: 'first_name',
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    field: 'last_name',
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize: postgres,
})

console.log('loaded Users')