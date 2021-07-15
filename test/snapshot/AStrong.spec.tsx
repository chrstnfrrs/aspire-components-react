import { AStrong } from '../../src/AStrong/AStrong';
import { AS_BODY_ENUM } from '../enums/as-body-enum';
import { FONTSIZE_ENUM } from '../enums/fontsize-enum';
import { TYPE_BODY_ENUM } from '../enums/type-body-enum';

import { testComponent } from './utils/test-component';
import { testTypography } from './utils/test-typography';

describe('Given AStrong component is used', () => {
  const AStrongProps = {
    factory: {
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponent(AStrong, 'AStrong', AStrongProps);
  testTypography(AStrong, 'AStrong', 'as', AS_BODY_ENUM);
  testTypography(AStrong, 'AStrong', 'type', TYPE_BODY_ENUM);
});
