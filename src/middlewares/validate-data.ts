import { response, Response, Request } from "express";
import { iRequestProfile } from "../interfaces";

export const validateData = (req: iRequestProfile, res: Response = response, next: any) => {
  if (!req.profile && !req.query.city) {
    return res.status(400).json({ msg: "You must send the city name" });
  }
  next();
};

module.exports = {
  validateData,
};
