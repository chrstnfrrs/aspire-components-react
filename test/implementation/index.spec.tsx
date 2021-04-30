import * as AContainerFile from '../../src/AContainer/AContainer';
import * as ARowFile from '../../src/ARow/ARow';
import * as AspireComponentsReact from '../../src';

jest.mock('../../src/AContainer/AContainer');
jest.mock('../../src/ARow/ARow');

const { AContainer } = AContainerFile as jest.Mocked<typeof AContainerFile>;
const { ARow } = ARowFile as jest.Mocked<typeof ARowFile>;

describe('Given aspire-components-react', () => {
  test('then the following components should be exported', () => {
    expect(AspireComponentsReact).toMatchObject({
      AContainer,
      ARow,
    });
  });
});