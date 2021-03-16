import AContainer from '../../src/AContainer/AContainer';
import { ALIGN_FACTORY, JUSTIFY_FACTORY } from '../enums/factories';

import { testComponent } from './utils/testComponent';

describe('Given AContainer component is used', () => {
  const AContainerProps = {
    factory: {
      align: ALIGN_FACTORY,
      justify: JUSTIFY_FACTORY,
    },
  };

  testComponent(AContainer, 'AContainer', AContainerProps);
});
