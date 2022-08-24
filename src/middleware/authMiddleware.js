import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ fail: "Token não inserido" });
  }
  jwt.verify(token, "secret", (err, userInfo) => {
    if (err) {
      return res.status(403).json(err);
    }
    next();
  });
}

export { authMiddleware };
