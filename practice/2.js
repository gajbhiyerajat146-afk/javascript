function a() {
  let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var city = " bhopal";
  var age = " 26";
  console.log(a.length);
  console.log(a[25]);
  console.log(city + Number(age));
  console.log(city + age);
  console.log(a.concat(age, city));
}
a();
