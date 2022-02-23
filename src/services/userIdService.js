import UUID from "uuid-js";
const USERID_KEY = "user"; // localstorage key

/** check if uniqueID exists */
export const userExists = () => {
  if (localStorage.getItem(USERID_KEY) === null) return false;
  return true;
};
/**  create unique ID */
export const generateUniqueId = () => {
  let uuid = UUID.create();
  return uuid.toString();
};

/** save unique ID */
export const createUserId = () => {
  const userId = generateUniqueId();
  localStorage.setItem(USERID_KEY, userId);
  return userId;
};

/** retrieve unique ID */
export const getUserId = () => {
  if (userExists()) return localStorage.getItem(USERID_KEY);
  return "";
};
