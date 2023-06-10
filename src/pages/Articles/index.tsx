import { useRequest, useSafeState } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import MyPagination from '@/components/MyPagination';
import { getArticleByString } from '@/utils/apis/articles';
import { pageSize } from '@/utils/constant';

import { Title } from '../titleConfig';
import ArticleList from './ArticleList';
import s from './index.scss';
import Search from './Search';
const Articles: React.FC = () => {
  const [page, setPage] = useSafeState(1);
  const { data, loading, run } = useRequest((target = '') => getArticleByString({ target, page, count: pageSize }), {
    retryCount: 3,
    refreshDeps: [page]
  });
  return (
    <Layout title={Title.Articles} className={s.head} middle={true}>
      <Search page={page} setPage={setPage} run={run} />
      <ArticleList articles={data?.data.articles} loading={loading} />
      <MyPagination
        current={page}
        defaultPageSize={pageSize}
        total={data?.data.pageData.totalCount}
        setPage={setPage}
        autoScroll={true}
        scrollToTop={440}
      />
    </Layout>
  );
};

export default Articles;
