const jwt = require("jsonwebtoken");
const errorThrower = require("../exception/errorThrower");

const secretKey = "d3v3l0pm3nt";

const generateJwt = (data) => {
  const { id, role, fullname, username } = data;

  const time = new Date();
  const currentTime = time.getTime();
  const expiration = time.getTime() + 60 * 60 * 8 * 1000;
  const payload = {
    iss: "apotek",
    sub: id,
    aud: "web-app",
    exp: expiration,
    iat: currentTime,
    role: role,
    fullname : fullname,
    username: username
  };
  const token = jwt.sign(payload, secretKey, { algorithm: "HS256" });

  return token;
};

const verifyJwt = (token) => {
  try {
    const verify = jwt.verify(token, secretKey, { algorithm: "HS256" });
    return verify;
  } catch (error) {
    throw errorThrower(error);
  }
};

module.exports = { generateJwt, verifyJwt };
