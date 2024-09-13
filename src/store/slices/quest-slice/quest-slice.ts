import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus, SliceName } from '../../../const/app-const';
import { QuestSlice } from '../../../types/store-types/slices-types';
import { questAction, questsAction } from '../../api-actions/quest-actions';

const questState: QuestSlice = {
  quests: [],
  quest: null,
  requestStatus: RequestStatus.Idle,
};

const questSlice = createSlice({
  name: SliceName.Quest,
  initialState: questState,
  extraReducers: (builder) => {
    builder
      .addCase(questsAction.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(questsAction.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(questsAction.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.quests = action.payload;
      })
      .addCase(questAction.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(questAction.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(questAction.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.quest = action.payload;
      });
  },
  reducers: {},
  selectors: {
    quests: (state) => state.quests,
    questById: (state) => state.quest,
  },
});

const questSelectors = questSlice.selectors;

export { questSelectors, questSlice };
