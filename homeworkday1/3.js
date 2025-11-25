function grade() {
  var userans = window.prompt("enter your marks");
  if (userans <= 25) {
    window.alert("D grade");
  } else if (userans > 25 && userans <= 50) {
    window.alert("C grade");
  } else if (userans > 50 && userans <= 75) {
    window.alert("B grade");
  } else if (userans > 75 && userans <= 100) {
    window.alert("A grade");
  } else {
    window.alert("Undefined");
  }
}
grade();
