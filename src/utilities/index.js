export const convertRouteToUrl = (route) => {
    if(!route.length) return '';
    return route.replace(/ /g, '-');
 
}