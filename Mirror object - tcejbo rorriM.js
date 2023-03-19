// Mirror - Mirror
// Can you mirror the properties on an object?

// Given an object with properties with no value

// abc: -
// arara: -
// xyz: -
// Return a new object that have the properties with its mirrored key!

// abc: cba
// arara: arara
// xyz: zyx
// "You cannot change the original object, because if you did that the reflection would change."
const mirror = obj => {
	let copy = Object.create(obj);
	let originalProps = Object.keys(obj);
  let modifiedProps = originalProps.map(prop=> prop.split("").reverse().join(""));
  let i = 0;
  for(let prop of originalProps){
    copy[prop] = modifiedProps[i];
    i++
  }
  return copy;
};
