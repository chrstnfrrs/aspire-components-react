import AContainer from '../../src/AContainer/AContainer';

import { testComponent } from './helpers/component';
import { ALIGN_FACTORY, JUSTIFY_FACTORY } from './enums/factories';

describe('Given AContainer component is used', () => {
  const AContainerFactories = {
    factory: {
      align: ALIGN_FACTORY,
      justify: JUSTIFY_FACTORY,
    },
  };

  testComponent(AContainer, 'AContainer', AContainerFactories);
});
