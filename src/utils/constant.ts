export const icp_site = 'https://beian.miit.gov.cn/#/Integrated/index';
export const icp_no = '备案号';

export const blogAdminUrl = 'http://47.113.229.110:3000/';

export const siteTitle = '兰生幽谷';
export const pageSize = 10;

// loading
export const smallLoadingUrl = 'https://img.zcool.cn/community/01a851599d4688a801201794912bf9.gif';

// 数据缓存时间
export const staleTime = 180000;
export const siteCountStale = 300000;

// 首页文章分页，每页数据
export const homeSize = 1;
export const msgSize = 10;
export const detailPostSize = 10;

export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

export const baseUrl = isDevelopment ? 'http://127.0.0.1:4000/api' : '/api';

export const defaultPageSize = 10;
