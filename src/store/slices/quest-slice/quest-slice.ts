import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus, SliceName } from '../../../const/app-const';
import { QuestsSlice } from '../../../types/store-types/slices-types';
import { questsAction } from '../../api-actions/quest-actions';

const questsState: QuestsSlice = {
  quests: [],
  requestStatus: RequestStatus.Idle,
};


const questsSlice = createSlice({
  name: SliceName.Quests,
  initialState: questsState,
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
      });
  },
  reducers: {},
  selectors: {
    quests: (state) => state.quests,
  },
});

const questsSelectors = questsSlice.selectors;

export { questsSelectors, questsSlice };
