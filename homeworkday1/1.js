function age() {
  var userans = window.prompt("Enter your age");
  if (userans >= 18) {
    window.alert("you are eligible to vote");
  } else {
    window.alert("sorry you cant vote");
  }
}
age();
