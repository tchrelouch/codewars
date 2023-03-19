// Implement a class/function, which should parse time expressed as HH:MM:SS, or null/nil/None otherwise.

// Any extra characters, or minutes/seconds higher than 59 make the input invalid, and so should return null/nil/None.
String.prototype.toSeconds = function () {
  let match = this.match(/^(\d\d):([0-5]\d):([0-5]\d)$/)
  return match ? 3600 * match[1] + 60 * match[2] + 1 * match[3] : null
}
