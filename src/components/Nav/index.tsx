import {  HomeOutlined,  SettingOutlined } from '@ant-design/icons';
import {  useLocalStorageState } from 'ahooks';
import dayjs from 'dayjs';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { blogAdminUrl } from '@/utils/constant';

import { useLinkList } from './config';
import s from './index.scss';

interface Props {
  navShow?: boolean;
  setNavShow?: Function;
  mode?: number;
  setMode?: Function;
}

const Nav: React.FC<Props> = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [_, setLocalMode] = useLocalStorageState('localMode');
  const { navArr } = useLinkList();
  return (
    <>
      <div className={s.top}>
        <div className={s.title}>yelan.cloud {dayjs().format('YYYY.MM.DD')}</div>
      </div>
      <nav className={s.nav}>
        <div className={s.navContent}>
          {/* 主页 */}
          <div className={s.homeBtn} onClick={() => navigate('/')}>
            <HomeOutlined />
          </div>

          {/* 后台管理 */}
          <a className={s.adminBtn} href={blogAdminUrl} target="_blank" rel="noreferrer">
            <SettingOutlined />
          </a>

          {/* 其他按钮 */}
          {navArr.map((item, index) => (
            <NavLink className={({ isActive }) => (isActive ? s.navActive : s.navBtn)} to={item.to} key={index}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
