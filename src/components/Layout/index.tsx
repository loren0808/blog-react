import { useTitle } from 'ahooks';
import classNames from 'classnames';
import dayjs from 'dayjs';
import React from 'react';

import { siteTitle } from '@/utils/constant';

import Card from '../Card';
import LayoutLoading from '../LayoutLoading';
import PageTitle from '../PageTitle';
import s from './index.scss';

interface Props {
  title?: string;
  middle?: boolean;
  className?: string;
  loading?: boolean;
  isPost?: boolean;
  series?: string;
  date?: number;
  rows?: number;
}

const Layout: React.FC<Props> = ({
  title,
  className,
  loading,
  children,
  series,
  date,
  isPost = false,
  middle = false,
  rows
}) => {
  useTitle(`${siteTitle} | ${title || ''}`);
  return (
    <>
      <PageTitle title={title} className={classNames({ [s.postTitle]: isPost }, className)}>
        {isPost && (
          <div>
            <span className={s.articleClass}>{series}</span>
            <span className={s.articleDate}>{dayjs(date).format('YYYY-MM-DD HH:mm:ss')}</span>
          </div>
        )}
      </PageTitle>
      {isPost ? (
        loading ? (
          <LayoutLoading rows={rows} />
        ) : (
          children
        )
      ) : (
        <Card middle={middle}>{loading ? <LayoutLoading rows={rows} /> : children}</Card>
      )}
    </>
  );
};

export default Layout;
