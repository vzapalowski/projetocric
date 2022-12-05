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
                }).addTo(map);
    
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

        if(markerCoords != undefined) {
        markerCoords.forEach(e => {
            const newIcon = new L.Icon({
                iconUrl: e.icon,
                iconSize: [30, 40],
                iconAnchor: [5, 30],
                popupAnchor: [10, -20]
            })

            L.marker([e.lat, e.lng],{icon: newIcon})
            .bindPopup(`${bindPopupTitle(e.title)} ${bindPopupDescription(e.description)} ${bindPopupImage(e.image)}`, 
            {
            maxWidth: 250,
            keepInView: true,
            className: "testingPopup"
            })
            .addTo(map)
        });
    }
    });
}

const bindPopupTitle = (title) => {
    return `<h1>${title}</h1>`;
}

const bindPopupDescription = (description) => {
    return `<p>${description}</p>`;
}

const bindPopupImage = (image) => {
    return `<img src=${image}>`;
}

const getMaps = (dataRoutes) => {
    const userRoutes = [];
    dataRoutes.forEach(element => {
        userRoutes.push(element.routes);
    });
    return userRoutes;
}