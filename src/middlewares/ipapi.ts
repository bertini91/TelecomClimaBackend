import { Response } from "express";
import { iRequestProfile } from '../interfaces/index';
const ipapi = require("ipapi.co");

export const checkIP = async (req: iRequestProfile, res: Response, next: any) => {
  const callback = (response: object) => {
    req.profile = response;
    next();
  };
  ipapi.location(callback);
};
// Validador creado con el objetivo del endpoint /location que solo es por localizacion.
export const checkReqIp = async (req: iRequestProfile, res: Response, next: any) => {
  if (req.profile) {
    next();
  } else {
    res.status(400).json({ msg: "We have a localization problem" });
  }
};

module.exports = { checkIP, checkReqIp };
