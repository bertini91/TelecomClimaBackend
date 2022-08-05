# TElecom Clima

<p align="center"><a href="" target="_blank" ><img width="400" height="200"src="./public/Telecom_logo_2021.svg" alt="logo" style="max-width: 100%;border-radius: 10px;padding: 5px;"></a></p>

## Consignas

El siguiente desafío plantea el desarrollo de una aplicación de consulta de clima en la que
el usuario pueda visualizar el pronóstico actual y el de los próximos 5 días de la ciudad en
la que se encuentra, y a su vez un selector que permita cambiar entre 5 ciudades
preseleccionadas

## Iniciar Proyecto

Primero, ejecute el servidor de desarrollo:

```bash
npm install
# o
yarn install
```

Luego debemos crear un archivo .env en la raiz del proyecto, con las propiedades que tiene el archivo .example.env que lo puse a modo de ejemplo

Por ultimo, debemos iniciar nuestro proyecto de manera local. Para ello, vamos a ingresar el siguiente comando en la terminal

```bash
npm run dev
# o
yarn run dev
```

## Descripcion

Este proyecto de backend fue solicitado como challenge en una entrevista de trabajo a cargo de Jennifer Mallo

El proyecto esta desarrollado con NodeJS y Express con typescript.

Al repositorio de frontend lo podemos visualizar en https://github.com/bertini91/TelecomClimaFrontend

## Endpoints

```bash
1- Devuelve los datos de ubicación city según ip-api.
    localhost:8000/v1/location
2- Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo actual. City es un parámetro opcional.
    localhost:8000/v1/current?city=Tucumán
    localhost:8000/v1/current
3- Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días. City es un parámetro opcional.
    localhost:8000/v1/forecast?city=San miguel de Tucumán
    localhost:8000/v1/forecast
```

### Desarrollador

Nicolás Bertini Argañaras
[https://www.nicolas-bertini.com.ar/]
[https://www.linkedin.com/in/nicolas-bertini-argañaras/]
