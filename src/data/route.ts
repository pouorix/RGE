type routeParam = string | number;
export const __RoutePath = {
    blog: '/blog',
    blogDetail: (id: routeParam) => `/blog/${id}/`,
    projectList: (id: routeParam) => `/projectList/${id}/`,
    projectDetail: (id: routeParam) => `/project/${id}/`,
};
