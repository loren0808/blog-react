import './global.custom.scss';

import classNames from 'classnames';
import React from 'react';

import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Nav from '@/components/Nav';

import s from './App.scss';
import BackToTop from './components/BackToTop';

interface Props {
  mode?: number;
  setMode?: Function;
}

const App: React.FC<Props> = () => {
  return (
    <div className={classNames(s.AppBox, s.bg0)}>
      <Nav />
      <Main />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App