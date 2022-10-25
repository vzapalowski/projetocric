const auth_link = "https://www.strava.com/oauth/token"
let vetor = []

class Rota {
  constructor(link, map) {
    this.link = link
    this.map = map
  }

  getRoute(res) {
    for (var i = 0; i < this.link.length; i++) {
      vetor.push(this.link[i] + `${res.access_token}`)
    }
    return vetor
  }

  getActivites(res) {
    let map = L.map(this.map).setView([-29.932, -51.71], 12)
    // console.log(this.map)
    console.log(L)
    let links = this.getRoute(res)
    console.log(links)
    for (var i = 0; i < links.length; i++) {
      console.log(links[i])

      fetch(links[i])
        .then((res) => res.json())
        .then(function (data) {
          console.log(data)

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map)
          console.log(data.map.summary_polyline)
          var coordinates = L.Polyline.fromEncoded(
            data.map.summary_polyline
          ).getLatLngs()
          console.log(coordinates)

          L.polyline(coordinates, {
            color: "green",
            weight: 5,
            opacity: 0.7,
            lineJoin: "round",
          }).addTo(map)
        })
    }
    vetor.length = 0
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
