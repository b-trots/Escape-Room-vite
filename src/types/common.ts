import { FILTER_BY_COMPLEXITY, FILTER_BY_TOPIC, OrganizationContact } from '../const';

type FilterTopicType = (typeof FILTER_BY_TOPIC)[number];
type FilterComplexityType = (typeof FILTER_BY_COMPLEXITY)[number];
type OrganizationContactType = keyof typeof OrganizationContact;

export type { FilterTopicType, FilterComplexityType, OrganizationContactType };
