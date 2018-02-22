export default function normalizeEventName(name) {
  return name.replace('on', '').toLowerCase();
}