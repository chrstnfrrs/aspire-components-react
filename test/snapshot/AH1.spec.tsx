import { AH1 } from '../../src/AH1/AH1';
import { AS_HEADING_ENUM } from '../enums/as-heading-enum';
import { FONTSIZE_ENUM } from '../enums/fontsize-enum';
import { TYPE_HEADING_ENUM } from '../enums/type-heading-enum';

import { testComponent } from './utils/test-component';
import { testTypography } from './utils/test-typography';

describe('Given AH1 component is used', () => {
  const AH1Props = {
    factory: {
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponent(AH1, 'AH1', AH1Props);
  testTypography(AH1, 'AH1', 'as', AS_HEADING_ENUM);
  testTypography(AH1, 'AH1', 'type', TYPE_HEADING_ENUM);
});
