
const authentication = () => {
    verifyExistsRoutes() ? reAuthorize()
    :!verifyIdRoutes() ? reAuthorize()
    :setRoutesOnMap(dataRoutes);
}

const controler = async (res) => {
    await setLinkRoutes(res);
    setRoutesOnMap(dataRoutes);
}

authentication();