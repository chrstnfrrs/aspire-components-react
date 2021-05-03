import { ASpacer } from '../../src/ASpacer/ASpacer';
import { PADDING_FACTORY } from '../enums/factories';

import { testComponent } from './utils/test-component';

describe('Given ASpacer component is used', () => {
  const ASpacerProps = {
    factory: {
      padding: PADDING_FACTORY,
    },
  };

  testComponent(ASpacer, 'ASpacer', ASpacerProps);
});
