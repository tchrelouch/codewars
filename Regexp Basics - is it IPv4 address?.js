// Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) separated by dots.

// It should only accept addresses in canonical representation, so no leading 0s, spaces etc.
String.prototype.ipv4Address=function(){
  return this.split(".").length === 4 && this.split(".").every(n=> n >= 0 && n < 256 && (/^[1-9]\d*$/.test(n) || /^0$/.test(n)));
}
