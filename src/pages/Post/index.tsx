import './index.css';

import useUrlState from '@ahooksjs/use-url-state';
import { useRequest, useSafeState } from 'ahooks';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import VditorShow from '@/components/VditorShow';
import { useAppDispatch } from '@/redux/hooks';
import { getArticle } from '@/utils/apis/articles';

import Layout from '../../components/Layout';
import s from './index.scss';
const Post: React.FC = () => {
  const [text, setText] = useSafeState('');
  const [state, setState] = useUrlState();
  const dispatch = useAppDispatch();
  const { data, loading } = useRequest(() => getArticle(state.id), {
    refreshDeps: [state],
    onSuccess: (data) => {
      if (data.data.errMsg) {
        setText('没有该文章');
      } else {
        setText(data.data.text);
      }
    }
  });
  console.log(data);
  return (
    <Layout
      title={data?.data.title}
      loading={loading}
      isPost={true}
      date={data?.data.create_at}
      series={data?.data.series[0].name}
    >
      <div className={s.wrapper}>
        <div className={s.body}>{text && <VditorShow text={text} />}</div>
      </div>
    </Layout>
  );
};

export default Post;
