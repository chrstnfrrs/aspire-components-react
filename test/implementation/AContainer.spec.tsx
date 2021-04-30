import AContainer from '../../src/AContainer/AContainer';
import { LAYOUT_FACTORIES } from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given AContainer component is used', () => {
  const AContainerProps = {
    factory: {
      ...LAYOUT_FACTORIES,
    },
  };

  testComponent(AContainer, 'AContainer', AContainerProps);
});
