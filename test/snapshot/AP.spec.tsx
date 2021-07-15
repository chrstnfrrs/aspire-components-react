import { AP } from '../../src/AP/AP';
import { AS_BODY_ENUM } from '../enums/as-body-enum';
import { FONTSIZE_ENUM } from '../enums/fontsize-enum';
import { TYPE_BODY_ENUM } from '../enums/type-body-enum';

import { testComponent } from './utils/test-component';
import { testTypography } from './utils/test-typography';

describe('Given AP component is used', () => {
  const APProps = {
    factory: {
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponent(AP, 'AP', APProps);
  testTypography(AP, 'AP', 'as', AS_BODY_ENUM);
  testTypography(AP, 'AP', 'type', TYPE_BODY_ENUM);
});
