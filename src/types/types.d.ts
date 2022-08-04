import express from "express";
import { iProfile } from "../interfaces";

//export {};

// declare
declare global {
  namespace Express {
    interface Request {
      // profile?: Record<string, any, iProfile, null>;
      // profile?: iProfile;
      profile?: Record<string, any, iProfile, null>;
      // profile?: any;
    }
  }
}
