import get from 'lodash/get';

export default function normalizeFormBuilderData(data, defaultValues={}) {
  const normalizedData= {};
  for (const each in data) {
    if (data[each].constructor === 'Object') {
      normalizedData[each] = normalizeFormBuilderData(data[each]);
      continue;
    } else {
      const value = data[each].value;
      const isDefaultValue = value === get(defaultValues, each);
      const isValid = data[each].isValid.valid;
      if (isValid && value && !isDefaultValue) normalizedData[each] = value;
    }
  }
  return normalizedData;
}