import { createSlice } from '@reduxjs/toolkit';


interface ArticlesState {
  articles: any[];
  done: number[];
  total: number;
  detail: {
    _id: string;
    title: string;
    tag: [];
    series: [];
    text: string;
    create_at: string;
    view: number;
    state: string;
  };
  needUpdate: boolean;
}
const initialState: ArticlesState = {
  articles: [],
  done: [],
  total: 0,
  detail: {
    _id: '',
    title: '',
    tag: [],
    series: [],
    text: '',
    create_at: '',
    view: 0,
    state: ''
  },
  needUpdate: true
};
export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    receiveAllArticles: (
      state,
      { payload: { data, pageData } }: { payload: { data: any; pageData: { page: number } } }
    ) => {
      const newValue: any = [...state.articles];
      newValue[pageData.page] = data;
      const newDone: any = [...new Set([...state.done, pageData.page])];
      return {
        ...state,
        articles: newValue,
        done: newDone
      };
    },
    receiveTotal: (state, action) => {
      state.total = action.payload.total;
    },
    detailArticle: (state, { payload }) => {
      state.detail = payload;
    },
    detailReset: (state) => {
      state.detail = { ...initialState.detail };
    },
    update: (state, { payload }) => {
      state.needUpdate = payload;
    }
  }
});

export const { receiveAllArticles, receiveTotal, detailArticle, detailReset, update } = articlesSlice.actions;
export default articlesSlice.reducer;
