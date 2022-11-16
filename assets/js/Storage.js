class Storage {

    static setRoutes(routes){
        window.localStorage.setItem("routes", JSON.stringify(routes));
        return true;
    }

    static getRoutes() {
        return JSON.parse(window.localStorage.getItem("routes"));
    }

    static removeRoutes() {
        window.localStorage.removeItem("routes");
        return true;
    }
}