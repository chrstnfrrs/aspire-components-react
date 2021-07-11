import { AH4 } from '../../src/AH4/AH4';
import { AS_HEADING_ENUM } from '../enums/as-heading-enum';
import { FONTSIZE_ENUM } from '../enums/fontsize-enum';
import { TYPE_HEADING_ENUM } from '../enums/type-heading-enum';

import { testComponent } from './utils/test-component';
import { testTypography } from './utils/test-typography';

describe('Given AH4 component is used', () => {
  const AH4Props = {
    factory: {
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponent(AH4, 'AH4', AH4Props);
  testTypography(AH4, 'AH4', 'as', AS_HEADING_ENUM);
  testTypography(AH4, 'AH4', 'type', TYPE_HEADING_ENUM);
});
