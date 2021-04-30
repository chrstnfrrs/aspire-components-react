import { ASection } from '../../src/ASection/ASection';
import { LAYOUT_FACTORIES } from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given ASection component is used', () => {
  const ASectionProps = {
    factory: {
      ...LAYOUT_FACTORIES,
    },
  };

  testComponent(ASection, 'ASection', ASectionProps);
});
