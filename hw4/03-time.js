//Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  let start = new Date(date1);
  let yearStart = start.getFullYear();
  let monthStart = start.getMonth();

  let end = new Date(date2);
  let yearEnd = end.getFullYear();
  let monthEnd = end.getMonth();

  // time_esplased is the difference between date1 and date2 (start-time and end-time)
  // time_esplased will collect all the data from the current date and time of the difference.  
  let time_esplased = new Date(start - end); 

  // time_esplased.getFullYear() gets a full year from the difference. The reason minuses 1970 
  // because A JavaScript date is fundamentally specified as the number of milliseconds 
  // that have elapsed since the ECMAScript epoch, which is defined as January 1, 1970, UTC (equivalent to the UNIX epoch).
  let year_esplased = time_esplased.getFullYear() - 1970;
  let month_esplased = time_esplased.getMonth();

  if (year_esplased.toString() !== "NaN") {
    if (year_esplased > 0) {
      if (month_esplased > 1)
        return("Time esplased: "+ year_esplased + " years, "+ month_esplased+ " months ")
      return("Time esplased: "+ year_esplased + " years, "+ month_esplased+ " month ")
    }
    else {
      if (month_esplased + 1 !== 12) {
        if (month_esplased > 1)        
          return("Time esplased: " + month_esplased + " months ")
        return("Time esplased: " + month_esplased + " month ")
      }
      else 
        return("Error: Invalid input provided. These were the same date!")
    }
  }
  else { // this handles bad inputs. 
    return("Error: Invalid input provided.")
  } 
};

//I figured out that 1635176171332 -->> Monday, October 25, 2021

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, 'May 1, 1995'));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, '1975-8-11'));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, 'birthdate'));
// Error: Invalid input provided.