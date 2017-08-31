// Initialize global variables
let numberOfPeople = document.getElementById("numPeople");
let numberOfGroups = document.getElementById("numGroups");
let peoplePerGroup = document.getElementById("pplPerGroup");
let calculateGroups = document.getElementById("calcGroups");
let resultGroups = document.getElementById("finalGroups");
let anyRemainder = document.getElementById("groupRemainder");
let countOffBy = document.getElementById("countOff");
let resetButton = document.getElementById("resetGroups");

function resetOutput(){
  resultGroups.textContent = "";
  anyRemainder.textContent = "";
  countOffBy.textContent = "";
};

calculateGroups.addEventListener('click', function(){
  resetOutput();
  let peopleVal = numberOfPeople.value;
  let groupsVal = numberOfGroups.value;
  let perGroupVal = peoplePerGroup.value;

  if (!peopleVal) {
    alert("Please include the number of people");
  } else if (!groupsVal && !perGroupVal) {
    alert("Please choose either number of groups or people per group")
  } else if (groupsVal > 0 && perGroupVal > 0) {
    alert("Please choose either number of groups OR people per group");
  } else if (groupsVal) {
    let calcDown = Math.floor(peopleVal / groupsVal);
    let calcRem = peopleVal % groupsVal;

    resultGroups.textContent = `There will be ${groupsVal - calcRem} group(s) of ${calcDown}`;
    if (calcRem > 0) {
      anyRemainder.textContent = `with ${calcRem} group(s) of ${calcDown + 1}`;
    }
    countOffBy.textContent = `Count off by ${calcDown}s`

  } else if (perGroupVal) {
    let calcDown = Math.floor(peopleVal / perGroupVal);
    let calcRem = peopleVal % perGroupVal;

    resultGroups.textContent = `There will be ${calcDown} group(s) of ${perGroupVal}`;
    if (calcRem > 0) {
      anyRemainder.textContent = `with one group of ${calcRem}`;
    }
    countOffBy.textContent = `Count off by ${perGroupVal}s`;
  }
});
resetButton.addEventListener('click', function() {
  numberOfPeople.value = "";
  numberOfGroups.value = "";
  peoplePerGroup.value = "";
  resetOutput();
})
