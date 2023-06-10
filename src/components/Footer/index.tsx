import React from 'react';

import { icp_no, icp_site } from '@/utils/constant';

import s from './index.scss';

const Footer: React.FC = () => {

  return (
    <footer className={s.footer}>
      <span>
        个人博客系统
      </span>
      <span>
        <a href={icp_site} target='_blank' rel='noreferrer' className={s.text}>
          {icp_no}
        </a>
      </span>
    </footer>
  );
};

export default Footer;
