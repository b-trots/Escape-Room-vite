import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RequestStatus, SliceName } from '../../../const/app-const';
import {
  FilterByComplexityType,
  FilterByTopicType,
  QuestSlice,
} from '../../../types/store-types/slices-types';
import { questAction, questsAction } from '../../api-actions/quest-actions';
import {
  FILTER_BY_COMPLEXITY,
  FILTER_BY_TOPIC,
} from '../../../const/template-const';

const questState: QuestSlice = {
  quests: [],
  activeQuestId: '',
  quest: null,
  requestStatus: RequestStatus.Idle,
  filterByTopic: FILTER_BY_TOPIC[0],
  filterByComplexity: FILTER_BY_COMPLEXITY[0],
  isError: '',
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
  reducers: {
    setActiveQuestId: (state, action: PayloadAction<string>) => {
      state.activeQuestId = action.payload;
    },
    setFilterByTopic: (state, action: PayloadAction<FilterByTopicType>) => {
      state.filterByTopic = action.payload;
    },
    setFilterByComplexity: (
      state,
      action: PayloadAction<FilterByComplexityType>
    ) => {
      state.filterByComplexity = action.payload;
    },
  },
  selectors: {
    quests: (state) => state.quests,
    activeQuestId: (state) => state.activeQuestId,
    quest: (state) => state.quest,
    filterByTopic: (state) => state.filterByTopic,
    filterByComplexity: (state) => state.filterByComplexity,
    isError: (state) => state.isError,
  },
});

const questSelectors = questSlice.selectors;
const { setActiveQuestId, setFilterByTopic, setFilterByComplexity } =
  questSlice.actions;
const questActions = questSlice.actions;

export {
  questSelectors,
  questSlice,
  questActions,
  setActiveQuestId,
  setFilterByTopic,
  setFilterByComplexity,
};
