import capitalizeFirstLetter from './capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
  it('first letter is capitalized', () => {
    expect(capitalizeFirstLetter('someString')).toBe('SomeString');
  });
});

