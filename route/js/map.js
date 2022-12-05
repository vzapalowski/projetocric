const setRoutesOnMap = (dataRoutes) => {

    dataRoutes.forEach(e => {
        let map = L.map(e.map).setView([-29.932, -51.71], 12);
        const idRoutesUser = e.routes;
        const markerCoords = e.marks;

        idRoutesUser.forEach(e => {
            const route = getRoutes().find(route => route.id_str === e)

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                  attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }).addTo(map)
    
                var coordinates = L.Polyline.fromEncoded(
                  route.map.summary_polyline
                ).getLatLngs();
        
                L.polyline(coordinates, {
                  color: "blue",
                  weight: 5,
                  opacity: 0.7,
                  lineJoin: "round",
                }).addTo(map); 
        });

        markerCoords.forEach(e => {
            const newIcon = new L.Icon({
                iconUrl: e.icon,
                iconSize: [30, 40],
                iconAnchor: [5, 30],
                popupAnchor: [10, -20]
            })

            L.marker([e.lat, e.lng],{icon: newIcon})
            .bindPopup("<h1>OI</h1> <p>Testando</p> <img src='iconsMarkers/repair.svg'/>", {
            minWidth: 100,
            keepInView: true
            })
            .addTo(map)
        });
    });
}

const getMaps = (dataRoutes) => {
    const userRoutes = [];
    dataRoutes.forEach(element => {
        userRoutes.push(element.routes);
    });
    return userRoutes;
}