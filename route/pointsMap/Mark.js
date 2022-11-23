class Mark {

        constructor(map, data) {
            this.map = map;
            this.data = data;
        }

    static markMap(map, lat, long, message) {

      console.log(lat)
      console.log(long)
      console.log(message)

    //  console.log(map)

    // console.log(marks)


        // var locations = [
        //     ["LOCAL1", -29.96136, -51.62225],
        //     ["LOCAL2", -29.96383, -51.63643]
        //   ]

         
           L.marker([lat, long])
            // {
            //   iconSize: [100, 100]
            //   // icon: iconteste
            // })
            .bindPopup(message)
            .addTo(map);
          
    }
}