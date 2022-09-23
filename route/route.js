

const auth_link = "https://www.strava.com/oauth/token"

function getActivites(res){
    const links = [
        `https://www.strava.com/api/v3/routes/3004404626219827088?access_token=${res.access_token}`,
        `https://www.strava.com/api/v3/routes/3007668662019916668?access_token=${res.access_token}`,
        `https://www.strava.com/api/v3/routes/3007668506003092348?access_token=${res.access_token}`,
        `https://www.strava.com/api/v3/routes/3007667833274213244?access_token=${res.access_token}`
    ]

    let map = L.map('map').setView([-29.9320, -51.7100], 12);

    for(var i = 0; i < links.length; i++) {
        fetch(links[i])
        .then((res) => res.json())
        .then(function (data){
            console.log(data)
            console.log(`${res.access_token}`)                    
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            console.log(data.map.summary_polyline)
            var coordinates = L.Polyline.fromEncoded(data.map.summary_polyline).getLatLngs()
            console.log(coordinates)

            L.polyline(
                coordinates,
                {
                    color: "green",
                    weight: 5,
                    opacity: .7,
                    lineJoin: 'round'
                }
            ).addTo(map);
        }
        )
    }    
} 

function reAuthorize() {
    fetch(auth_link, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            /* client_id: '32172',
            client_secret: 'c9dac208d0c515b6e8915afb92ffbccfb1630f71',
            refresh_token: 'f6a3dd6e1e2dad06db03fe04ec88485fc4fa79c8',
            grant_type: 'refresh_token' */

            client_id: '93689',
            client_secret: '05d5dd63dabb33ba2514308b74256983c3edb146',
            refresh_token: 'e162d2a39fe9b35a1c4f1df5bda5157bcfbfd6ea',
            grant_type: 'refresh_token'
        })

    }).then(res => res.json())
        .then(res => getActivites(res))
}

reAuthorize()



/* EXTRA */

/* const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}` */
/* console.log(res.access_token) */
/* function getActivites(res) {
    const activities_link = `https://www.strava.com/api/v3/routes/3005480977233137218?access_token=${res.access_token}`
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link).then((res) => console.log(res.json()))
} */

/* https://www.strava.com/api/v3/routes/3005480977233137218?access_token=79e8d4e1f8235e3438f9a4bb9012470b3fba5bfe   */

/* const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}` */
/* cc981f4b674e7502a71c8fd233d46cf060dd82c8 */