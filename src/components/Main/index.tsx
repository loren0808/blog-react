import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';
import Post from '@/pages/Post';

import s from './index.scss';

const Home = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Home'));
const Articles = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Articles'));
// const Classes = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Classes'));
// const Tags = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Tags'));

const Main: React.FC = () => {
  return (
    <main className={s.main}>
        <ErrorBoundary>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="articles" element={<Articles />} />
              <Route path="post" element={<Post />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
    </main>
  );
};

export default Main;
