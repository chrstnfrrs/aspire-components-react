import { AH5 } from '../../src/AH5/AH5';
import { AS_HEADING_ENUM } from '../enums/as-heading-enum';
import { FONTSIZE_ENUM } from '../enums/fontsize-enum';
import { TYPE_HEADING_ENUM } from '../enums/type-heading-enum';

import { testComponent } from './utils/test-component';
import { testTypography } from './utils/test-typography';

describe('Given AH5 component is used', () => {
  const AH5Props = {
    factory: {
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponent(AH5, 'AH5', AH5Props);
  testTypography(AH5, 'AH5', 'as', AS_HEADING_ENUM);
  testTypography(AH5, 'AH5', 'type', TYPE_HEADING_ENUM);
});
