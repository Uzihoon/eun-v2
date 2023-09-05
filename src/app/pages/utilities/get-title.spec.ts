import { getTitle, PREFIX } from './get-title';

describe('Utility: getTitle', () => {
  it('should return title', () => {
    const title = `${PREFIX} | test`;
    expect(getTitle('test')).toBe(title);
  });
});
