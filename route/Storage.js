const KEY_LOCALSTORAGE = 'routes';
class Storage {

    constructor() {}

    static setRoutes(routes){
        window.localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(routes));
        return true;
    }

    static getRoutes() {
        return JSON.parse(window.localStorage.getItem(KEY_LOCALSTORAGE));
    }

    static removeRoutes() {
        window.localStorage.removeItem(KEY_LOCALSTORAGE);
        return true;
    }
}