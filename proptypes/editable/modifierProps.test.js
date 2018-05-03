import editModifiers, { getModifiers } from './modifierProps';

describe('modifierProps', () => {
  it('sets Modifiers', () => {
    const modifiers = editModifiers('EditedModifiersComponent', ['edited']);
    expect(modifiers.EditedModifiersComponent.values).toEqual(['edited']);
  });

  it('gets modifiers', () => {
    const modifiers = getModifiers('EditedModifiersComponent');
    expect(modifiers).toEqual(['edited']);
  });

  it('overwrites Modifiers', () => {
    const modifiers = editModifiers('EditedModifiersComponent', ['overwrites']);
    expect(modifiers.EditedModifiersComponent.values).toEqual(['overwrites']);
  });
});
