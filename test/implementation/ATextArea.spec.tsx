import { ATextArea } from '../../src/ATextArea/ATextArea';
import { ELEMENT_ENUM, FONTSIZE_ENUM } from '../enums/factories';

import { testComponentWithNoChildren } from './utils/test-component';

describe('Given ATextArea component is used', () => {
  const ATextAreaProps = {
    factory: {
      ...ELEMENT_ENUM,
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponentWithNoChildren(ATextArea, 'ATextArea', ATextAreaProps);
});
