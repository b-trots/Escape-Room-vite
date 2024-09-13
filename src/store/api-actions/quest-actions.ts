import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const/app-const';
import { Quest } from '../../types/quest';
import { AppDispatch, RootState } from '../../types/store-types/store-type';


const appCreateAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>();

const questsAction = appCreateAsyncThunk<Quest[], undefined>(
  'data/quests',
  async (_arg, { extra: api }) => {
    const { data: quests } = await api.get<Quest[]>(APIRoute.Quests);

    return quests;
  }
);


export { questsAction };
