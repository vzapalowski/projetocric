const auth_link = "https://www.strava.com/oauth/token";

const idRoutes = [
    "3007668662019916668",
    "3007667420057044860",
    "3007668506003092348",
    "3007668224216829820",
    "3007668046252207866",
    "3007667833274213244",
    "3024729101863555016",
    "3024728961245899346",
    "3024728289614917202",
    "3024728126930025042",
    "3024727868187306952"
];

const coordsMapView =
  {
    saoJeronimo: [-29.95, -51.73],
    charqueadas: [-29.95, -51.64],
    generalCamara: [-29.90, -51.78],
    valeVerde: [-29.78, -52.20],
    arroioDosRatos: [-30.09, -51.75]
  }

function reAuthorize() {
    fetch(auth_link, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: "93689",
        client_secret: "05d5dd63dabb33ba2514308b74256983c3edb146",
        refresh_token: "e162d2a39fe9b35a1c4f1df5bda5157bcfbfd6ea",
        grant_type: "refresh_token",
      }),
    })
      .then((res) => res.json())
      .then((res) => controler(res))
  }
