import { useMount, useRequest, useSafeState } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import MyPagination from '@/components/MyPagination';
import { receiveAllArticles, receiveTotal } from '@/redux/article/articlesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getAllArticles, getTotal } from '@/utils/apis/articles';
import { pageSize } from '@/utils/constant';

import s from './index.scss';
import PostCard from './PostCard';

interface theAtc {
  _id: string;
  title: string;
  tag: [];
  series: [];
  content: string;
  create_at: string;
}

interface Props {
  artSum?: number;
}

const Section: React.FC<Props> = ({ artSum }) => {
  const navigate = useNavigate();
  const [page, setPage] = useSafeState(1);
  const dispatch = useAppDispatch();
  const { articles, total, done } = useAppSelector((store) => store.articles);
  const { run: searchRun, loading } = useRequest(
    (page: number) => Promise.all([getAllArticles({ count: pageSize, page }), getTotal()]),
    {
      manual: true,
      onSuccess: (res) => {
        dispatch(receiveAllArticles(res[0].data));
        dispatch(receiveTotal(res[1].data));
      }
    }
  );
  const changePage = (page: number) => {
    setPage(page);
    if (!new Set(done).has(page)) {
      searchRun(page);
    }
  };
  useMount(() => {
    changePage(1);
  });
  return (
    <section className={s.section}>
      {articles[page]?.map(({ _id, title, content, create_at, tag }: theAtc) => {
        const s = content.match(/\(([http:\/\/|https:\/\/].+)\)/);
        return (
          <PostCard
            key={_id}
            title={title}
            content={content.replace(/\s+|[\r\n]|\[.*\]|\(.*\)/g, '')}
            date={create_at}
            tags={tag}
            loading={loading}
            url={s?.length ? s[1] : undefined}
            onClick={() => navigate(`/post?id=${encodeURIComponent(_id)}`)}
          />
        );
      })}
      <MyPagination
        current={page}
        defaultPageSize={pageSize}
        total={total}
        setPage={changePage}
        autoScroll={true}
        scrollToTop={document.body.clientHeight - 44}
      />
    </section>
  );
};

export default Section;
