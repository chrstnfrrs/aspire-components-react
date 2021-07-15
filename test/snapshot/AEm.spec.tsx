import { AEm } from '../../src/AEm/AEm';
import { AS_BODY_ENUM } from '../enums/as-body-enum';
import { FONTSIZE_ENUM } from '../enums/fontsize-enum';
import { TYPE_BODY_ENUM } from '../enums/type-body-enum';

import { testComponent } from './utils/test-component';
import { testTypography } from './utils/test-typography';

describe('Given AEm component is used', () => {
  const AEmProps = {
    factory: {
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponent(AEm, 'AEm', AEmProps);
  testTypography(AEm, 'AEm', 'as', AS_BODY_ENUM);
  testTypography(AEm, 'AEm', 'type', TYPE_BODY_ENUM);
});
