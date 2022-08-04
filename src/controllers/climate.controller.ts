import { Response } from "express";
import request from "request";
import { iRequestProfile } from "../interfaces";

export const climateGet = (req: iRequestProfile, res: Response) => {
  const { lang = "en" } = req.query;
  const urlOW = `${process.env.URL_OW}/weather?lat=${req.profile?.latitude}&lon=${req.profile?.longitude}&units=metric&appid=${process.env.KEY_OW}&lang=${lang}`;
  request(urlOW, (err, response, body) => {
    if (err) {
      console.log("error:", err);
      res.status(500).json({ error: "An error occurred on the server" });
    } else {
      body = JSON.parse(body);
      res.status(Number(body.cod)).json(body);
    }
  });
};
export const getClimateByCity = (req: iRequestProfile, res: Response) => {
  const { city, lang = "en" } = req.query;
  let urlOW = "";
  if (city) {
    const normalizeCity = city
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Tuve que aplipar normalize para sacar los acentos por un problema de query
    urlOW = `${process.env.URL_OW}/weather?q=${normalizeCity.replace(
      /\s/g,
      "%20"
    )}&units=metric&appid=${process.env.KEY_OW}&lang=${lang}`;
  } else {
    urlOW = `${process.env.URL_OW}/weather?lat=${req.profile?.latitude}&lon=${req.profile?.longitude}&units=metric&appid=${process.env.KEY_OW}&lang=${lang}`;
  }
  request(urlOW, (err, response, body) => {
    if (err) {
      console.log("error:", err);
      res.status(500).json({ error: "An error occurred on the server" });
    } else {
      body = JSON.parse(body);
      res.status(Number(body.cod)).json(body);
    }
  });
};

// En este caso voy a tomar el nombre de la ciudad que nos brinda ipapi en vez de utilizar latitud y longuitud.
// Es recomendable que utilicemos latitud y longuitud porque es algo mas exacto, pero a modo de ejemplo lo tomaré asi en este endpoint
export const getClimaByDays = (req: iRequestProfile, res: Response) => {
  const { days = 5, lang = "en", city = req.profile?.city } = req.query;
  const normalizeCity = city?.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const urlOW = `${process.env.URL_OW}/forecast?q=${normalizeCity?.toString().replace(
    /\s/g,
    "%20"
  )}&units=metric&appid=${process.env.KEY_OW}&cnt=${days}&lang=${lang}`;
  request(urlOW, (err, response, body) => {
    if (err) {
      console.log("error:", err);
      res.status(500).json({ error: "An error occurred on the server" });
    } else {
      body = JSON.parse(body);
      res.status(Number(body.cod)).json(body);
    }
  });
};
