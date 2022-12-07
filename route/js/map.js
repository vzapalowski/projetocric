const setRoutesOnMap = (dataRoutes) => {
    dataRoutes.forEach(e => {
        let map = L.map(e.map, {scrollWheelZoom: false}).setView([-29.932, -51.71], 12);
        const idRoutesUser = e.routes;
        const markerCoords = e.marks;

        idRoutesUser.forEach(e => {
            const route = getRoutes().find(route => route.id_str === e)

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                  attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong>ROTACRIC</strong>',
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
            .bindPopup(`
            ${bindPopupName(e.name)} 
            ${bindPopupImage(e.image)}
            ${bindPopupAddress(e.address)}
            ${bindPopupOpeningHours(e.openingHours)}
            ${bindPopupPhone(e.phone)}
            `,{
            maxWidth: 150,
            keepInView: true,
            className: "testingPopup"
            })
            .addTo(map)
        });
    }
    });
}

const bindPopupName = (name) => {
    return `<h1>${name}</h1>`;
}

const bindPopupImage = (image) => {
    return `<img src=${image}>`;
}

const bindPopupAddress = (address) => {
    return `<p>${address}</p>`;
}

const bindPopupOpeningHours = (hours) => {
    return `<p>${hours}</p>`;
}

const bindPopupPhone = (phone) => {
    return `<p>${phone}</p>`;
}


const getMaps = (dataRoutes) => {
    const userRoutes = [];
    dataRoutes.forEach(element => {
        userRoutes.push(element.routes);
    });
    return userRoutes;
}