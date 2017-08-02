// Initialize global variables
let numPeople = document.getElementById("numPeople");
let numGroups = document.getElementById("numGroups");
let peoplePerGroup = document.getElementById("peoplePerGroup");
let calcGroups = document.getElementById("calcGroups");
let finalGroups = document.getElementById("finalGroups");
let groupRemainder = document.getElementById("groupRemainder");
let countOff = document.getElementById("countOff");
let resetGroups = document.getElementById("resetGroups");

function resetOutput(){
  finalGroups.textContent = "";
  groupRemainder.textContent = "";
  countOff.textContent = "";
};

calcGroups.addEventListener('click', function(){
  resetOutput();
  let peopleVal = numPeople.value;
  let groupsVal = numGroups.value;
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

    finalGroups.textContent = `There will be ${groupsVal - calcRem} group(s) of ${calcDown}`;
    if (calcRem > 0) {
      groupRemainder.textContent = `with ${calcRem} group(s) of ${calcDown + 1}`;
    }
    countOff.textContent = `Count off by ${calcDown}s`

  } else if (perGroupVal) {
    let calcDown = Math.floor(peopleVal / perGroupVal);
    let calcRem = peopleVal % perGroupVal;

    finalGroups.textContent = `There will be ${calcDown} group(s) of ${perGroupVal}`;
    if (calcRem > 0) {
      groupRemainder.textContent = `with one group of ${calcRem}`;
    }
    countOff.textContent = `Count off by ${perGroupVal}s`;
  }
});
resetGroups.addEventListener('click', function() {
  numPeople.value = "";
  numGroups.value = "";
  peoplePerGroup.value = "";
  resetOutput();
})
