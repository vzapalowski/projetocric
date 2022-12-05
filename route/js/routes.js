const getLinkRoutes = (res) => {
    let arrayLinks = [];
    for(let rota of idRoutes)
    {
        arrayLinks.push(`https://www.strava.com/api/v3/routes/${rota}?access_token=${res.access_token}`);
    }
    return arrayLinks;
}

const setLinkRoutes = async (res) => {
    let arrayRoutes = [];
    const links = getLinkRoutes(res)
    for (let link of links) {
        arrayRoutes.push(await fetch(link)
       .then((res) => res.json())
        );
    }

    setRoutes(arrayRoutes);
    return true;
}

const getIdRoutesUser = () => {
    const arrIdsUser = [];
    for(let e of getRoutes()) {
      arrIdsUser.push(e.id_str);
    }
    return arrIdsUser;
}