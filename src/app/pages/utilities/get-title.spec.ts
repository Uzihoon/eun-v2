import { getTitle } from './get-title';

describe('Utility: getTitle', () => {
  it('should return title', () => {
    const title = 'EUN | test';
    expect(getTitle('test')).toBe(title);
  });
});
