/*
Validate all numbers to make local calls from the capital city at the Mexican United States.

The first two digits are the lada. Lada can only be 55 or 56 for those Mexico City phone numbers.

The first two digits of the phone numbers when dialed locally are known as lada. To make phone numbers more readable some people write the lada between parenthesis. As you will see in further Katas lada concept is actually deeper than area code.

Example
Valid numbers:

(56) 84 65 52
(56) 84 6552
(56) 846552
(56)846552
56 84 65 52
56 84 6552
56 846552
56846552
55 95 64 85
55 95 6485
55 956485
55956485
Non-Valid numbers:

99956485
abcdefgh
(56) 84 6 552
*/
var isValidMXPhoneNumber = function(str) {
  return /^(\((56|55)\)|55|56)(\s?\d\d){3}$/.test(str);
};
