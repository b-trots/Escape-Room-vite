import { createSelector } from '@reduxjs/toolkit';
import { questSelectors } from './quest-slice';


const questById = createSelector(
  questSelectors.quests,
  questSelectors.activeQuestId,
  (quests, id) => quests.find((quest) => quest.id === id)
);

// const toSortOffers = createSelector(
//   offersByCity,
//   activeSelectors.sortOption,
//   (offers: ThumbnailOffer[], sortType: SortType) => {
//     if (sortType === 'Popular') {
//       return offers;
//     }
//     switch (sortType) {
//       case 'PriceHighToLow':
//         return [...offers].sort(priceHighSort);
//       case 'PriceLowToHigh':
//         return [...offers].sort(priceLowSort);
//       case 'TopRatedFirst':
//         return [...offers].sort(topRatedSort);
//     }
//   }
// );

export { questById, toSortOffers };
