let a = ["azim", "riya", "shubham", "rajat", `paneer`, "salman", "aamir"];
// a.push("anna");
// a.pop();
// a.unshift("shruti");

// console.log(
//   a[1] +
//     `
//   ` +
//     a[2] +
//     `
//     ` +
//     a[0] +
//     a[3]
// );
// console.log(a[4]);
let len = a.length;
let index = a.indexOf(`paneer`);

a.sort();
a.reverse();
for (let i = len - 1; i >= 0; i--) {
  console.log(a[i]);
}

/*console.log(len + "," + index);*/
