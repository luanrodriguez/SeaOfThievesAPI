import { hash, compare } from "bcrypt";

const SALT = 3;

function hashPassword(pwd) {
  return hash(pwd, SALT);
}

function comparePassword(pwd, hash) {
  return compare(pwd, hash);
}

export { hashPassword, comparePassword };
