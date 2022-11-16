class Verify {

    static verifyExistsRoutes(routes) {
        return routes == null
    }

    static verifyIdRoutes(idRoutes, arrIdsUser) {
        for(let e of idRoutes) {
            if(arrIdsUser.indexOf(e) == -1) {
              return false;
            }
          }
          return true;
    }  
}