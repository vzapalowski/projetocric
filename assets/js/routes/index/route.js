const markerIconsIndex = {
  food: "./assets/iconsMarkers/restaurant.svg",
  gas_station: "./assets/iconsMarkers/gas_station.svg",
  repair: "./assets/iconsMarkers/repair.svg",
  hotel: "./assets/iconsMarkers/hotel.svg",
  hospital: "./assets/iconsMarkers/hospital.svg",
  tourist_spots: "./assets/iconsMarkers/tourist_spots.svg",
  phamacy: "./assets/iconsMarkers/pharmacy.svg",
  shopping: "./assets/iconsMarkers/shopping.svg",
  drink: "./assets/iconsMarkers/drink.svg"
}

const dataRoutes = [
    {
      map: "map",
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
      ],
      view: coordsMapView.saoJeronimo,
      marks: [
        {
          lat: -29.957687103462153,
          lng: -51.62773814677592,
          icon: markerIconsIndex.hotel,
          name: "BG Hotel e Restaurante",
          image: './assets/images/photosMarkers/charqueadas/bg_hotel_e_restaurante.jpeg',
          address: "Av Dr José Athanásio - 293, Centro",
          openingHours: "11h às 15h",
          phone: "(51) 3658-1720"
        },
        {
          lat: -29.955289118853706,
          lng: -51.62571347302185,
          icon: markerIconsIndex.hotel,
          name: "Hotel Ouro Verde",
          image: './assets/images/photosMarkers/charqueadas/hotel_ouro_verde.jpeg',
          address: "Av. Bento Gonçalves, 740 - Centro",
          openingHours: "08h às 00:00h",
          phone: "(51) 3658-1111"
        },
        {
            lat: -29.954837291597133,
            lng: -51.62507423540608,
            icon: markerIconsIndex.hotel,
            name: "Hotel Atlanta",
            image: './assets/images/photosMarkers/charqueadas/hotel_atlanta.jpg',
            address: "Av. Bento Gonçalves, 691 - Centro",
            openingHours: "8h às 00:00h",
            phone: "(51) 3658-7773"
          },
          {
            lat: -29.960059326926494,
            lng: -51.62413805721184,
            icon: markerIconsIndex.shopping,
            name: "Supermercados Macropan",
            image: './assets/images/photosMarkers/charqueadas/supermercados_macropan.jpg',
            address: "Av. Primeiro de Maio, 660 - Centro",
            openingHours: "08:30h às 20:00h",
            phone: "(51) 3658-2992"
          },
          {
            lat: -29.960333545165863,
            lng: -51.6236841204011,
            icon: markerIconsIndex.phamacy,
            name: "Farmácias Agafarma",
            image: './assets/images/photosMarkers/charqueadas/farmacias_agafarma.jpeg',
            address: "Av. Primeiro de Maio, 1000 - Centro",
            openingHours: "8h às 20h",
            phone: "(51) 98595-3976"
          },
          {
            lat: -29.96081264887375,
            lng: -51.62376324155656,
            icon: markerIconsIndex.food,
            name: "Empório Pasteis",
            image: './assets/images/photosMarkers/charqueadas/emporio_pasteis.jpeg',
            address: "Av. Getúlio Vargas, 36",
            openingHours: "17:30h às 00:30h",
            phone: "(51) 98458-2942"
          },
          {
            lat: -29.96102708090075,
            lng: -51.62267933000616,
            icon: markerIconsIndex.food,
            name: "Camarote Food & Music",
            image: './assets/images/photosMarkers/charqueadas/camarote_food_music.jpeg',
            address: "Av. Getúlio Vargas, 54",
            openingHours: "15h às 02:00h",
            phone: "(51) 99606-5551"
          },
          {
            lat: -29.9610719495622,
            lng: -51.622468299681884,
            icon: markerIconsIndex.drink,
            name: "Depósito do Parkão",
            image: './assets/images/photosMarkers/charqueadas/deposito_do_parkao.jpeg',
            address: "Av. Getúlio Vargas, 110 - Centro",
            openingHours: "9h às 02:30h",
            phone: "(51) 996805930"
          },
          {
            lat: -29.961310594171046,
            lng: -51.62250016495766,
            icon: markerIconsIndex.drink,
            name: "Depósito do Quadrado",
            image: './assets/images/photosMarkers/charqueadas/deposito_do_quadrado.jpeg',
            address: "Av. Getúlio Vargas, 138 - Centro",
            openingHours: "10h às 05:00h",
            phone: "(51) 981587736"
          },
          {
            lat: -29.966924388457688,
            lng: -51.627666595256656,
            icon: markerIconsIndex.repair,
            name: "Gastão Borracharia",
            image: './assets/images/photosMarkers/charqueadas/gastao_borracharia.jpeg',
            address: "R. Agice José Ramos, 49 - Centro",
            openingHours: "8h às 20:00h",
            phone: "Não possui telefone para contato!"
          },
          {
            lat: -29.966991392189758,
            lng: -51.628719609123024,
            icon: markerIconsIndex.food,
            name: "Manu's Bar",
            image: './assets/images/photosMarkers/charqueadas/manus_bar.png',
            address: "RS-401, 1003 - Centro",
            openingHours: "10h às 00:00h",
            phone: "(51) 3080-1029"
          },
          {
            lat: -29.96809621993717,
            lng: -51.62817761663346,
            icon: markerIconsIndex.shopping,
            name: "Desco Atacado",
            image: './assets/images/photosMarkers/charqueadas/desco_atacado.jpeg',
            address: "Rua Silmar Berbigier, 11",
            openingHours: "8h às 21h",
            phone: "(51) 3658-3538"
          },
          {
            lat: -29.9679442410388,
            lng: -51.62917599334668,
            icon: markerIconsIndex.repair,
            name: "Pneumax",
            image: './assets/images/photosMarkers/charqueadas/pneumax.jpeg',
            address: "R. Orvalino Prates Dornelles, 947",
            openingHours: "07:30h às 18:30h",
            phone: "(51) 3658-6272"
          },
          {
            lat: -29.961014219833803,
            lng: -51.623017683027776,
            icon: markerIconsIndex.food,
            name: "Duzeca Pizzaria",
            image: './assets/images/photosMarkers/charqueadas/duzeca_pizzaria.jpeg',
            address: "Av. Getúlio Vargas, 24 - Centro",
            openingHours: "19h às 23h",
            phone: "(51) 3080-2121"
          },
          {
            lat: -29.97088463653178,
            lng: -51.62870001821727,
            icon: markerIconsIndex.food,
            name: "Padaria Yung",
            image: './assets/images/photosMarkers/charqueadas/padaria_yung.jpeg',
            address: "Av. Silmar Berbigier, 101 - Sul America",
            openingHours: "8h às 20h",
            phone: "(51) 3658-4593"
          },
          {
            lat: -29.973761269796345,
            lng: -51.628932049954464,
            icon: markerIconsIndex.food,
            name: "Parada Obrigatória",
            image: './assets/images/photosMarkers/charqueadas/parada_obrigatoria.jpeg',
            address: "R. Silmar Berbiguer, 695 - Sul America",
            openingHours: "10h às 22h",
            phone: "(51) 98612-9103"
          },
          {
            lat: -29.95883882508328,
            lng: -51.62392364381867,
            icon: markerIconsIndex.food,
            name: "Frubel o Ponto do Confeiteteiro",
            image: './assets/images/photosMarkers/charqueadas/frubel.jpg',
            address: "Av. Primeiro de Maio, 864 - Centro",
            openingHours: "9h às 18:30h",
            phone: "(51) 99662-9059"
          },
          {
            lat: -29.887630,
            lng: -52.065229,
            icon: markerIconsIndex.shopping,
            name: "Agropecuária GA",
            image: "./assets/images/photosMarkers/vale_verde/agropecuaria_ga.jpeg",
            address: "RS244, Km 39 - Monte Alegre",
            openingHours: "Seg à Sab: 07h às 12h e das 13h às 18h Dom: 07h às 11:45h",
            phone: "(51) 998786480"
        },
        {
            lat: -29.788217,
            lng: -52.177155,
            icon: markerIconsIndex.hotel,
            name: "Pousada Rural Recando Verde",
            image: "./assets/images/photosMarkers/vale_verde/pousada_rural_recando_verde.jpg",
            address: "R. Arnaldo Roberto Seibert, 632 - Centro",
            openingHours: "Horário mediante reserva",
            phone: "(51) 98021-4471"
        },
        {
            lat: -29.788095,
            lng: -52.174603,
            icon: markerIconsIndex.food,
            name: "Refeições da Leni",
            image: "./assets/images/photosMarkers/vale_verde/refeicoes_da_leni.jpg",
            address: "R. Arnaldo Roberto Seibert, 1166 Centro",
            openingHours: "Não informado",
            phone: "(51) 9997-3225"
        },
        {
            lat: -29.784305,
            lng: -52.185406,
            icon: markerIconsIndex.hotel,
            name: "Pousada e Restaurante do Alemão",
            image: "./assets/images/photosMarkers/vale_verde/pousada_e_restaurante_do_alemao.jpeg",
            address: "R. Assis Brasil, 237 - Centro",
            openingHours: "Seg à Sab: 06h às 13:30 e das 18h às 19:30h",
            phone: "(51) 3655-9032, (51) 99609-1100 ou (51) 99790-4165"
        },
        {
            lat: -29.774513,
            lng: -52.177448,
            icon: markerIconsIndex.shopping,
            name: "Mais Saúde e Flor Casa de Produtos Naturais e Flores",
            image: "./assets/images/photosMarkers/vale_verde/mais_saude_e_flor.jpeg",
            address: "ERS 405 Km 01, 1732 - Centro",
            openingHours: "Seg à sexta: 8h às 11:30h e das 14h às 18h Sab: 08h às 12h",
            phone: "(51) 99870-9536"
        },
        {
            lat: -29.820942,
            lng: -52.187810,
            icon: markerIconsIndex.hotel,
            name: "Refúgio Montevale",
            image: "./assets/images/photosMarkers/vale_verde/refugio_montevale.jpg",
            address: "Potreirinho - Interior",
            openingHours: "Horário mediante reserva",
            phone: "(51) 98114-5302"
        },
        {
            lat: -29.782419,
            lng: -52.186365,
            icon: markerIconsIndex.food,
            name: "Lancheria e Choperia Complexo",
            image: "./assets/images/photosMarkers/vale_verde/lancheria_e_choperia_complexo.jpeg",
            address: "R. Assis Brasil, 358 - Centro",
            openingHours: "Seg, Qua e Qui: 14h às 22h Ter: 18h às 22h Sex, Sab e Dom: 18h às 23h",
            phone: "(51) 99712-1123 ou  (51) 99800-7874"
        },
        {
            lat: -29.782778,
            lng: -52.186173,
            icon: markerIconsIndex.food,
            name: "Restaurante do Vale",
            image: null,
            address: "R. Assis Brasil, 422 - Centro",
            openingHours: "Seg à Sex: 11h às 14h",
            phone: "(51) 3655- 9056, (51) 99601-1184 ou (51) 99903-3024"
        },
        {
            lat: -29.781422,
            lng: -52.186899,
            icon: markerIconsIndex.shopping,
            name: "Padaria e Confeitaria Pães & Cia",
            image: null,
            address: "R. Alfredo Kirst, 72 - Centro",
            openingHours: "07h às 12h e das 14h às 19h",
            phone: "(51) 99541-0883"
        },
        {
            lat: -29.781422,
            lng: -52.186899,
            icon: markerIconsIndex.food,
            name: "Brut's Hamburgueria",
            image: "./assets/images/photosMarkers/vale_verde/brutus.jpeg",
            address: "R. Assis Brasil, 216 - Centro",
            openingHours: "Quar à Dom: 19h às 23h",
            phone: "(51) 99574-6332"
        },
        {
            lat: -29.783661,
            lng: -52.184044,
            icon: markerIconsIndex.phamacy,
            name: "Drogaria Mais Saúde",
            image: "./assets/images/photosMarkers/vale_verde/drogaria_mais_saude.jpeg",
            address: "R. Alfredo Kirst, 133 - Centro",
            openingHours: "Seg à Sex: 8h às 12h e das 13:30h às 18h Sab: 8h às 12h",
            phone: "(51) 99758-4082"
        }
      ]
    }
  ]