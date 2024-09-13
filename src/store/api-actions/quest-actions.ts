import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const/app-const';
import { Quest, QuestPreview } from '../../types/quest';
import { AppDispatch, RootState } from '../../types/store-types/store-type';


const appCreateAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>();

const questsAction = appCreateAsyncThunk<QuestPreview[], undefined>(
  'data/quests',
  async (_arg, { extra: api }) => {
    const { data: quests } = await api.get<QuestPreview[]>(APIRoute.Quest);

    return quests;
  }
);

const questAction = appCreateAsyncThunk<Quest, string>(
  'data/quest',
  async (questId, { extra: api }) => {
    const { data: quest } = await api.get<Quest>(
      `${APIRoute.Quest}/${questId}`
    );
    return quest;
  }
);


export { questsAction, questAction, appCreateAsyncThunk };
