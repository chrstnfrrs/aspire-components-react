import * as ABoxFile from '../../src/ABox/ABox';
import * as AColFile from '../../src/ACol/ACol';
import * as AContainerFile from '../../src/AContainer/AContainer';
import * as ARowFile from '../../src/ARow/ARow';
import * as ASectionFile from '../../src/ASection/ASection';
import * as AspireComponentsReact from '../../src';

jest.mock('../../src/ABox/ABox');
jest.mock('../../src/ACol/ACol');
jest.mock('../../src/AContainer/AContainer');
jest.mock('../../src/ARow/ARow');
jest.mock('../../src/ASection/ASection');

const { ABox } = ABoxFile as jest.Mocked<typeof ABoxFile>;
const { ACol } = AColFile as jest.Mocked<typeof AColFile>;
const { AContainer } = AContainerFile as jest.Mocked<typeof AContainerFile>;
const { ARow } = ARowFile as jest.Mocked<typeof ARowFile>;
const { ASection } = ASectionFile as jest.Mocked<typeof ASectionFile>;

describe('Given aspire-components-react', () => {
  test('then the following components should be exported', () => {
    expect(AspireComponentsReact).toMatchObject({
      ABox,
      ACol,
      AContainer,
      ARow,
      ASection,
    });
  });
});
