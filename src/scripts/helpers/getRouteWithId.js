export const getRouteWithId = (route, id) => {
  return route.replace(/:\w+Id/, id);
};
