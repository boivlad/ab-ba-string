module.exports.subString = function(s) {
  const res1 = s.indexOf("AB");
  const res2 = s.indexOf("BA");
  return !(res1 == -1 || res2 == -1 || res1+1 == res2 || res2+1 == res1);
};
