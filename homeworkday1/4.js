function r() {
  var r = window.prompt("enter a number");

  if (r < 0) {
    window.alert("negetive");
  } else if (r == 0) {
    window.alert("zero");
  } else {
    window.alert("positive");
  }
}
r();
