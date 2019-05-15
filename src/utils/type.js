export function parseIntOrNull (value) {
  const res = parseInt(value)

  return isNaN(res) ? null : res
}
