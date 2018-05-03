const widthClasses = [
  'one-sixteenth',
  'one-eighth',
  'one-sixth',
  'one-fifth',
  'one-quarter',
  'two-eighths',
  'three-eighths',
  'one-third',
  'two-sixths',
  'two-fifths',
  'one-halve',
  'one-half',
  'three-sixths',
  'four-eighths',
  'three-fifths',
  'five-eighths',
  'two-thirds',
  'four-sixths',
  'three-quarters',
  'six-eighths',
  'four-fifths',
  'five-sixths',
  'seven-eighths',
  'one-seventh',
  'two-sevenths',
  'three-sevenths',
  'four-sevenths',
  'five-sevenths',
  'six-sevenths',
  'one-whole',
];
const newWidths = {};

export default function editWidths(newWidthClasses, merge = true) {
  newWidths.values = newWidthClasses;
  newWidths.merge = merge;
  return newWidths;
}

export function getWidths() {
  if (newWidths.values) {
    const { values, merge } = newWidths;
    return merge ? [...values, ...widthClasses] : values;
  }
  return widthClasses;
}
