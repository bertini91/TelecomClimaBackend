import { application, Router } from "express";
import {
  climateGet,
  getClimateByCity,
  getClimaByDays,
} from "../controllers/climate.controller";
import { checkIP, checkReqIp } from "../middlewares/ipapi";
import { validateData } from"../middlewares/validate-data";

const router = Router();

router.get("/location", [checkIP, checkReqIp], climateGet);
router.get("/current", [checkIP, validateData], getClimateByCity);
router.get("/forecast", [checkIP, validateData], getClimaByDays);

export default router;
