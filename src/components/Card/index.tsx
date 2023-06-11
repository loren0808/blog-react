import { Skeleton } from 'antd';
import classNames from 'classnames';
import React, { MouseEventHandler, PropsWithChildren } from 'react';

import s from './index.scss';

interface Props {
  className?: string;
  loading?: boolean;
  middle?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<PropsWithChildren<Props>> = ({ children, className, loading, middle, onClick }) => {
  return (
    <div className={classNames(s.card, { [s.middle]: middle }, className)} onClick={onClick}>
      {loading ? <Skeleton paragraph={{ rows: 1 }} /> : children}
    </div>
  );
};

export default Card;
