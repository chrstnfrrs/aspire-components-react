import { AGrid } from '../../src/AGrid/AGrid';
import { LAYOUT_FACTORIES, GAP_ENUM } from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given AGrid component is used', () => {
  const AGridProps = {
    factory: {
      ...LAYOUT_FACTORIES,
      gap: GAP_ENUM,
    },
  };

  testComponent(AGrid, 'AGrid', AGridProps);
});
