// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"
function whatCentury(year) {
  return year.replace(/\d{2}$/, "").replace(/\d{2}/, (n) => {
    let incremented = (+n + 1).toString();
    if(/(?<=[^1])1/.test(incremented)) return incremented + "st";
    if(/(?<=[^1])2/.test(incremented)) return incremented + "nd";
    if(/(?<=[^1])3/.test(incremented)) return incremented + "rd";
    else return incremented + "th";
  });
}
