import { AH2 } from '../../src/AH2/AH2';
import { AS_HEADING_ENUM } from '../enums/as-heading-enum';
import { FONTSIZE_ENUM } from '../enums/fontsize-enum';
import { TYPE_HEADING_ENUM } from '../enums/type-heading-enum';

import { testComponent } from './utils/test-component';
import { testTypography } from './utils/test-typography';

describe('Given AH2 component is used', () => {
  const AH2Props = {
    factory: {
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponent(AH2, 'AH2', AH2Props);
  testTypography(AH2, 'AH2', 'as', AS_HEADING_ENUM);
  testTypography(AH2, 'AH2', 'type', TYPE_HEADING_ENUM);
});
