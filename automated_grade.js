//---- Automated Grade ----//

//The function autoGrade should take as an argument a report (string) of all student grades
//and return both the class average and the average of each student, rounding any calculations to the nearest 2
//decimal places.
//For example: "Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18"  
//              => { "all": 15.93, "Jon": 15.8, "Jeremy": 13.4, "Jesse": 18.6 }

function autograde (report) {
  //split the string into an array of student and they're grades
  var split = report.split('\n');
  //split each array on spaces
  for (var i = 0; i < split.length; i++) {
    split[i] = split[i].split(' ');
  }
  
  //iterate through each students array separating their name and scores
      
  //push key-value pair of student and their averaged scores to result object
   
  //average total score
  console.log(split);
  return result;
}

var example = "Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18";
autograde(example);