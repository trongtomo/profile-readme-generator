import { Sections } from 'types';

import { generateTextSection } from './text';
import { generateImageSection } from './image';
import { generateStatsSection } from './stats';
import { generateTechsSection } from './techs';
import { generateSocialsSection } from './socials';
import { generateProfileViewsSection } from './profile-views';

const sectionsGeneratorMap = {
  [Sections.TEXT]: generateTextSection,
  [Sections.IMAGE]: generateImageSection,
  [Sections.STATS]: generateStatsSection,
  [Sections.TECHS]: generateTechsSection,
  [Sections.SOCIALS]: generateSocialsSection,
  [Sections.PROFILE_VIEWS]: generateProfileViewsSection,
};

export { sectionsGeneratorMap };
