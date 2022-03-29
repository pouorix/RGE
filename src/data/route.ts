type routeParam = string | number;
export const __RoutePath = {
    blog: '/blog',
    projectList: (id: routeParam) => `/projectList/${id}/`,
};
