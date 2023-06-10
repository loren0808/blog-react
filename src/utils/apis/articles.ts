import { baseUrl } from '@/utils/constant';

import ajax from './ajax';

const articleBaseUrl = baseUrl + '/article';

interface getAllArticlesParams {
  count: number;
  page: number;
}
interface getArticleByStringParams {
  target: string;
  count: number;
  page: number;
}
// 获取文章
export const getAllArticles = (params: getAllArticlesParams) => ajax(articleBaseUrl, '/get/allArticles', params);
// 获取文章总数
export const getTotal = () => ajax(articleBaseUrl, '/get/total');
// 获得文章详细信息
export const getArticle = (params: string) => ajax(articleBaseUrl, '/get/articleById', { articleId: params });
// 模糊查询文章
export const getArticleByString = (params: getArticleByStringParams) =>
  ajax(articleBaseUrl, '/get/articleByString', params);

