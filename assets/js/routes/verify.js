
const verifyExistsRoutes = () => {
  return getRoutes() == null;
}

const verifyIdRoutes = () => {
  for(let e of idRoutes) {
    if(getIdRoutesUser().indexOf(e) == -1) {
      return false;
    }
  }
  return true;
} 