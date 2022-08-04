import cors from "cors";
import express, { Application } from "express";
import climateRoutes from '../routes/climate.routes'

class Server {
  private app: Application;
  private port: string;
  private apiPath = {
    climate: "/v1",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.middlewares();
    this.routes();

  }
  middlewares() {
    // CORS
    this.app.use(cors());
    // Lectura del body
    this.app.use(express.json());

    //Carpeta publica
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.apiPath.climate, climateRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;
