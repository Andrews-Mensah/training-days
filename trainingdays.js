const name = 'Nala'

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

getRandEvent()
console.log (getRandEvent())
 
const getTrainingDays = event => {
   let days
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;

  getRandEvent()
};

console.log (getTrainingDays(getRandEvent()))


 
const logEvent = event => {
  getRandEvent()
};

const logTime = days => {
  getTrainingDays()
};

const event = getRandEvent();
const days = getTrainingDays(getRandEvent());

console.log (event)
console.log (days)


const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);
