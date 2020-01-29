const addDays = days=>{
  let currentDate = new Date();
  return new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+days);
}
let oneweekfromtoday = addDays(7).toISOString()
console.log('oneweekfromtoday',oneweekfromtoday)