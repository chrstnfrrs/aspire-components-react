import { ACard } from '../../src/ACard/ACard';
import {
  ALIGN_FACTORY,
  ELEMENT_ENUM,
  ELEVATION_ENUM,
  JUSTIFY_FACTORY,
} from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given ACard component is used', () => {
  const ACardProps = {
    factory: {
      ...ELEMENT_ENUM,
      align: ALIGN_FACTORY,
      elevation: ELEVATION_ENUM,
      justify: JUSTIFY_FACTORY,
    },
  };

  testComponent(ACard, 'ACard', ACardProps);
});
