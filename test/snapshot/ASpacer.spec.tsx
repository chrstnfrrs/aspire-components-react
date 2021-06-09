import { ASpacer } from '../../src/ASpacer/ASpacer';
import { ELEMENT_ENUM } from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given ASpacer component is used', () => {
  const ASpacerProps = {
    factory: {
      ...ELEMENT_ENUM,
    },
  };

  testComponent(ASpacer, 'ASpacer', ASpacerProps);
});
