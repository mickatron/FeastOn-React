import editWidths, { getWidths } from './widthProps';

const initialWidths = getWidths();

describe('widthProps', () => {
  it('sets Modifiers', () => {
    const widths = editWidths(['edited']);
    expect(widths.values).toEqual(['edited']);
  });

  it('gets widths', () => {
    const widths = getWidths();
    expect(widths).toEqual(['edited', ...initialWidths]);
  });

  it('overwrites widths', () => {
    const widths = editWidths(['overwrites'], true);
    expect(widths.values).toEqual(['overwrites']);
  });
});
