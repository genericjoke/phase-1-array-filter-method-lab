// Code your solution here
function findMatching(collection, name) {
    let match = [];
    for (const driver of collection) {
      if ((driver).toLowerCase() == name.toLowerCase()) {
        match.push(driver);
      }
    }
    return match;
  }
  function fuzzyMatch(collection, lets){
    let match = [];
    for (const driver of collection) {
      if ((driver.slice(0,lets.length).toLowerCase()).includes(lets.toLowerCase())) {
        match.push(driver);
      }
    }
    return match;
  }

  function matchName(collection, name){
    let match = [];
    for (const driver of collection) {
      if ((driver.name.toLowerCase()).includes(name.toLowerCase())) {
        match.push(driver);
      }
    }
    return match;
  }