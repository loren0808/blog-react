import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { BackTop } from 'antd';
import React from 'react';

import s from './index.scss';

const BackToTop: React.FC = () => {
  const backTop = () => {};

  return (
    <BackTop duration={700} visibilityHeight={300} onClick={backTop} className="BackTop">
      <div className={s.backTop}>
        <VerticalAlignTopOutlined />
      </div>
    </BackTop>
  );
};

export default BackToTop;
