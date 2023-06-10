import { configureStore } from '@reduxjs/toolkit';

import { isDevelopment } from '@/utils/constant';

import articlesReducer from './article/articlesSlice';
const store = configureStore({
  // 默认包含异步中间件
  reducer: {
    articles: articlesReducer
  },
  devTools: isDevelopment
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
// 类型计算
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
