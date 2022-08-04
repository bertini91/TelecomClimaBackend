import { Request } from "express";

export interface iProfile {
  city?: string;
  latitude?: string;
  longitude?: string;
}

export interface iRequestProfile extends Request {
  profile?: iProfile;
}
