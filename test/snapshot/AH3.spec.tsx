import { AH3 } from '../../src/AH3/AH3';
import { AS_HEADING_ENUM } from '../enums/as-heading-enum';
import { FONTSIZE_ENUM } from '../enums/fontsize-enum';
import { TYPE_HEADING_ENUM } from '../enums/type-heading-enum';

import { testComponent } from './utils/test-component';
import { testTypography } from './utils/test-typography';

describe('Given AH3 component is used', () => {
  const AH3Props = {
    factory: {
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponent(AH3, 'AH3', AH3Props);
  testTypography(AH3, 'AH3', 'as', AS_HEADING_ENUM);
  testTypography(AH3, 'AH3', 'type', TYPE_HEADING_ENUM);
});
