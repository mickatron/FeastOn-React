const modifiers = {};

export default function editModifiers(componentName, newModifiers, merge = true) {
  modifiers[componentName] = {
    values: newModifiers,
    merge,
  };
  return modifiers;
}

export function getModifiers(componentName, defaultProps = []) {
  if (modifiers[componentName]) {
    const { values, merge } = modifiers[componentName];
    return merge ? [...values, ...defaultProps] : values;
  }

  return defaultProps;
}
