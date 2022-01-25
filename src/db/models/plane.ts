import {
  Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, Model,
  ModelDefined, Optional, Sequelize
} from "sequelize";
import { postgres } from "../connection";

postgres.define('Aircraft', {
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: DataTypes.STRING,
  },
  class: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  tail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  callsign: {
    type: DataTypes.STRING,
  },
  manufacturer: {
    type: DataTypes.STRING,
  },
  model: {
    type: DataTypes.STRING,
  },
});

console.log('loaded Aircraft')