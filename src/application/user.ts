export type User = {
  id: number;
  name: string;
};

type Users = {
  [key: number]: User;
};

const USERS: Users = {
  [1]: {
    id: 1,
    name: "user-1",
  },
  [2]: {
    id: 2,
    name: "user-1",
  },
};

export class UserApplicationService {
  static getUser(id: number) {
    const user = USERS[id];
    if (!user) {
      throw new Error(`user does not exist: ${id}`);
    }

    return user;
  }

  static getUsers() {
    return USERS;
  }

  static createUser(user: User) {
    if (USERS[user.id]) {
      throw new Error(`user already exists: ${user.id}`);
    }
    USERS[user.id] = user;

    return user;
  }
}
