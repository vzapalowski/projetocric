const dataRoutes = [
    {
      map: 'map',
      routes: ["3007668662019916668","3007668224216829820","3007667420057044860"],
      marks: [
        {
          message: "LOCAL01",
          lat: -29.95887,
          lng: -51.69044,
          icon: markerIcons.food
        },
        {
          message: "LOCAL02",
          lat: -29.96383,
          lng: -51.63643,
          icon: markerIcons.gas_station
        }
      ]
    },
    {
      map: 'map02',
      routes: [
        "3007667420057044860",
        "3007668506003092348"
      ],
      marks: [
        {
          message: "LOCAL03",
          lat: -29.96383,
          lng: -51.63643,
          icon: markerIcons.hospital
        },
        {
          message: "LOCAL01",
          lat: -29.95887,
          lng: -51.69044,
          icon: markerIcons.repair
        }
      ]
    },
    {
      map: "map03",
      routes: [
      "3007668662019916668",
      "3007667420057044860",
      "3007668506003092348",
      "3007668224216829820",
      "3007668046252207866",
      "3007667833274213244"
      ]
    }
  ]
 
const authentication = () => {
    verifyExistsRoutes() ? reAuthorize()
    :!verifyIdRoutes() ? reAuthorize()
    :setRoutesOnMap(dataRoutes);
}

const controler = async (res) => {
    await setLinkRoutes(res);
    setRoutesOnMap(dataRoutes);
}

authentication();