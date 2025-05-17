// Brute Force
// str1 = "anagram";
// str2 = "nagaram";
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   str1 = str1.split("").sort().join("");
//   str2 = str2.split("").sort().join("");

//   if (str1 === str2) return true;

//   return false;
// }

// ---------**************************------------------------------------

// OPTIMIZED APPROACH
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  //frequency mapper
  let mp = {};

  for (let i = 0; i < s.length; i++) {
    if (mp[s[i]]) {
      mp[s[i]]++;
    } else {
      mp[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (mp[t[i]]) {
      mp[t[i]]--;
      if (mp[t[i]] === 0) {
        delete mp[t[i]];
      }
    } else {
      return false;
    }
  }

  if (Object.keys(mp).length === 0) return true;

  return false;
};
