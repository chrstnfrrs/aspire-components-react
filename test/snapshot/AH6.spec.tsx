import { AH6 } from '../../src/AH6/AH6';
import { AS_HEADING_ENUM } from '../enums/as-heading-enum';
import { FONTSIZE_ENUM } from '../enums/fontsize-enum';
import { TYPE_HEADING_ENUM } from '../enums/type-heading-enum';

import { testComponent } from './utils/test-component';
import { testTypography } from './utils/test-typography';

describe('Given AH6 component is used', () => {
  const AH6Props = {
    factory: {
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponent(AH6, 'AH6', AH6Props);
  testTypography(AH6, 'AH6', 'as', AS_HEADING_ENUM);
  testTypography(AH6, 'AH6', 'type', TYPE_HEADING_ENUM);
});
