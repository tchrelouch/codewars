// Section numbers are strings of dot-separated integers. The highest level sections (chapters) are numbered 1, 2, 3, etc. Second level sections are numbered 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, etc. Next level sections are numbered 1.1.1, 1.1.2, 1.1.2, 1.2.1, 1.2.2, erc. There is no bound on the number of sections a document may have, nor is there any bound on the number of levels.

// A section of a certain level may appear directly inside a section several levels higher without the levels between. For example, section 1.0.1 may appear directly under section 1, without there being any level 2 section. Section 1.1 comes after section 1.0.1. Sections with trailing ".0" are considered to be the same as the section with the trailing ".0" truncated. Thus, section 1.0 is the same as section 1, and section 1.2.0.0 is the same as section 1.2.

// Write a function cmp(section1, section2) that returns -1, 0, or 1 depending on whether section1 is before, same as, or after section2 respectively.
let clear = str => str.split(".").map(e=>Number(e));

function cmp(section1, section2){
  let length = Math.max(section1.length, section2.length);
  
	for(let i = 0; i < length; i++){
  let s1 = clear(section1)[i] || 0;
  let s2 = clear(section2)[i] || 0;
    
  if(s1 > s2) return 1;
  if(s1 < s2) return -1;
  }
  return 0;
}
