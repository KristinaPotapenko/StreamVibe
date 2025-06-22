export const getRouteWithId = (route, id) => {
  return route.replace(/:\w+Id/, id);
};

export const getRouteWithParams = (route, params) => {
  return Object.entries(params).reduce((result, [key, value]) => {
    return result.replace(`:${key}`, value);
  }, route);
};
