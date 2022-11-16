class Map {
    constructor() {
    }

    static setRoutesOnMap(mapa){

        let map = L.map(mapa).setView([-29.932, -51.71], 12)
    
        for(let route of Storage.getRoutes()) {
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
}