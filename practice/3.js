function a() {
  let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var city = " bhopal";
  var age = " 26";
  let b = "javascript";
  // console.log(a.length);
  // console.log(a[25]);
  // console.log(city + age);
  // console.log(a.concat(age, city));
  console.log("javascript".slice(0, 5)); // "java" // slice
  console.log(a.slice(4, 11));
  console.log(b.slice(4, 10));
  console.log(b.toUpperCase()); // all uppercase
  console.log("BHOPAL".toLowerCase()); // all lowercase
  console.log(a[0] + a[15] + a[15] + a[11] + a[4]);
  // replace , bom-browser object model-shows alert
}
a();
