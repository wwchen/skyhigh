import { User } from "../models/user";

console.log('start')
User.sync({ alter: true })
User.create({
  firstName: 'alice',
  lastName: 'smith',
  email: 'alice@gmail.com'
});
