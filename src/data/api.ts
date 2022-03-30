import ENV from '../env.json';

type apiParams = string | number;

export const __API = {
    landing: {
        topBanner: '/user/banner/',
        config: '/admin/config/',
        categoryList: '/user/category/',
        award: '/user/award/',
        recentProject: '/user/firspageProject/',
        history: '/user/history/',
        blog: '/user/blog/',
    },
    categoryProjects: '/user/projectwithcategory/',
    projectDetail: '/user/detailproject',
};
