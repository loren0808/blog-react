import { useMount, useSafeState, useTitle } from 'ahooks';
import React from 'react';

import PageTitle from '@/components/PageTitle';
import { siteTitle } from '@/utils/constant';

// 使用s['className']保证类名唯一性
import s from './index.scss';
import Section from './Section';

interface Props {
  setNavShow?: Function;
}

const getPoem = require('jinrishici');

const Home: React.FC<Props> = () => {
  useTitle(siteTitle);

  const [poem, setPoem] = useSafeState('');
  useMount(() => {
    getPoem.load(
      (res: {
        data: {
          content: string;
        };
      }) => setPoem(res.data.content)
    );
  });

  return (
    <>
      <PageTitle title={siteTitle} desc={poem || ''} className={s.homeTitle} />
      <div className={s.body}>
        <Section />
      </div>
    </>
  );
};

export default Home;
