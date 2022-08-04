import express from "express";
import { iProfile } from "../../interfaces/index";
//export {};

// declare
declare global {
  namespace Express {
    interface Request {
      // profile?: Record<string, any, iProfile, null>;
      profile?: iProfile;
      // profile?: any;
    }
  }
}
