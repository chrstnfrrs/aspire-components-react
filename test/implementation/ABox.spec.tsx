import { ABox } from '../../src/ABox/ABox';
import { LAYOUT_FACTORIES } from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given ABox component is used', () => {
  const ABoxProps = {
    factory: {
      ...LAYOUT_FACTORIES,
    },
  };

  testComponent(ABox, 'ABox', ABoxProps);
});
