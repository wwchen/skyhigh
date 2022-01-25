import { User } from "../../../db/models/user";

type Args = {
}

export default function user(parent: unknown, { }: Args): Promise<User> {
  return User.findAll().then(u => u[0]);
}
