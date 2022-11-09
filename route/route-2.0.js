const auth_link = "https://www.strava.com/oauth/token"

class Rota {
  getRoutes = Storage.getRoutes();

  constructor(map) {
    this.map = map;
  }

  verify() {
    this.getRoutes == null ? this.reAuthorize() 
    : !this.verifyRoutes() || !this.verifyIds() ? this.newRoutes()
    : this.setRoutesOnMap();
  }

  newRoutes() {
    Storage.removeRoutes();

    this.reAuthorize();
  }

  verifyRoutes() {
    return this.getRoutes.length == this.idsRoutes().length;
  }

  getIdsUserRoute() {
    let arrIdsUser = [];
    for(let e of this.getRoutes) {
      arrIdsUser.push(e.id_str);
    }
    return arrIdsUser;
  }

  verifyIds() {
    for(let e of this.idsRoutes()) {
      if(this.getIdsUserRoute().indexOf(e) == -1) {
        return false
      }
    }
    return true
  }

  idsRoutes(){
    const idRoutes = [
      "3007668662019916668",
      "3007667420057044860",
      /*"3007668506003092348",
      /*"3007668224216829820",
      "3007668046252207866",
      "3007667833274213244",  */
    ];
    return idRoutes;
  }

  setLinkRoute(res) {
    let arrLinksRoutes = [];
    for(let rota of this.idsRoutes()) {
      arrLinksRoutes.push(`https://www.strava.com/api/v3/routes/${rota}?access_token=${res.access_token}`);
    }
    return arrLinksRoutes;
  }

  setRoutesOnMap(){

    /* VERIFICAR ATUALIZAÇÃO DO MAPA */

    if(this.getRoutes == null) {
      this.verify();
      return;
    }

    let map = L.map(this.map).setView([-29.932, -51.71], 12)

    for(let route of this.getRoutes) {
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map)

          console.log(route.map.summary_polyline)
          
          var coordinates = L.Polyline.fromEncoded(
            route.map.summary_polyline
          ).getLatLngs()

          console.log(coordinates)
          console.log(route.id_str) 

          L.polyline(coordinates, {
            color: "blue",
            weight: 5,
            opacity: 0.7,
            lineJoin: "round",
          }).addTo(map)  
    }
  }

  getActivites(res) {
    let arrayRoutes = [];
    let links = this.setLinkRoute(res);
    console.log(links.length)

    for (let link of links) {
        fetch(link)
       .then((res) => res.json())
       .then((data) => {arrayRoutes.push(data); Storage.setRoutes(arrayRoutes)})

       arrayRoutes.length = 0;
    }

    console.log(arrayRoutes)

    this.setRoutesOnMap();
  }

  reAuthorize() {
    fetch(auth_link, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        /* client_id: '32172',
                client_secret: 'c9dac208d0c515b6e8915afb92ffbccfb1630f71',
                refresh_token: 'f6a3dd6e1e2dad06db03fe04ec88485fc4fa79c8',
                grant_type: 'refresh_token' */

        client_id: "93689",
        client_secret: "05d5dd63dabb33ba2514308b74256983c3edb146",
        refresh_token: "e162d2a39fe9b35a1c4f1df5bda5157bcfbfd6ea",
        grant_type: "refresh_token",
      }),
    })
      .then((res) => res.json())
      .then((res) => this.getActivites(res))
  }
}






  /* getActivitesAntigo(res) {
    let map = L.map(this.map).setView([-29.932, -51.71], 12)
    let links = this.setLinkRoute(res)
    console.log(links) 

   for(let link of links) {
    fetch(link)
    .then((res) => res.json())
    .then((data) => {

     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
         attribution:
           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
       }).addTo(map)
       var coordinates = L.Polyline.fromEncoded(
         data.map.summary_polyline
       ).getLatLngs()
       console.log(coordinates)
       console.log(data.id_str)

       L.polyline(coordinates, {
         color: "blue",
         weight: 5,
         opacity: 0.7,
         lineJoin: "round",
       }).addTo(map)  

    })
   }
    vetor.length = 0
  } */