const dataRoutes = [
    {
      map: 'map',
      routes: ["3007668662019916668","3007668224216829820","3007667420057044860"],
      marks: [
        {
          lat: -29.95887,
          lng: -51.69044,
          icon: markerIcons.food,
          title: "LOCAL01",
          description: "Descrição local01",
          image: 'restaurant.jpg'
        },
        {
          lat: -29.96383,
          lng: -51.63643,
          icon: markerIcons.gas_station,
          title: "LOCAL02",
          description: "Descrição local02",
          image: './restaurant.jpg'
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
          lat: -29.96383,
          lng: -51.63643,
          icon: markerIcons.hospital,
          title: "LOCAL03",
          description: "Descrição local03",
          image: './restaurant.jpg'
        },
        {
          lat: -29.95887,
          lng: -51.69044,
          icon: markerIcons.repair,
          title: "LOCAL04",
          description: "Descrição local04",
          image: './restaurant.jpg'
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
      "3007667833274213244",
      "3024729101863555016",
      "3024728961245899346",
      "3024728289614917202",
      "3024728126930025042",
      "3024727868187306952"
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