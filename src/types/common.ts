import { FILTER_BY_COMPLEXITY, FILTER_BY_TOPIC } from '../const';

type FilterTopicType = (typeof FILTER_BY_TOPIC)[number];
type FilterComplexityType = (typeof FILTER_BY_COMPLEXITY)[number];

export type { FilterTopicType, FilterComplexityType };
