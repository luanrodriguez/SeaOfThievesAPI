import { hash, compare } from "bcrypt";

function hashPassword(pwd) {
  return hash(pwd, parseInt(process.env.HASH_SALT));
}

function comparePassword(pwd, hash) {
  return compare(pwd, hash);
}

export { hashPassword, comparePassword };
