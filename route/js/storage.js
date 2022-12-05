const KEY_LOCALSTORAGE = 'routes';
const setRoutes = (routes) => {
        window.localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(routes));
        return true;
    }

const getRoutes = () => {
    return JSON.parse(window.localStorage.getItem(KEY_LOCALSTORAGE));
}

const removeRoutes = () => {
        window.localStorage.removeItem(KEY_LOCALSTORAGE);
        return true;
}