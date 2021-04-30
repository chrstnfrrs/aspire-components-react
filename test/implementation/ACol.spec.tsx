import { ACol } from '../../src/ACol/ACol';
import { LAYOUT_FACTORIES } from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given ACol component is used', () => {
  const AColProps = {
    factory: {
      ...LAYOUT_FACTORIES,
    },
  };

  testComponent(ACol, 'ACol', AColProps);
});
