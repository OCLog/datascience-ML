// Desired weekday order
const weekOrder = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

// Unordered array of weekdays
const inputWeekdays = [
  'Sunday',
  'Tuesday',
  'Monday',
  'Thursday',
  'Wednesday',
  'Saturday',
  'Friday'
];

// Sorting logic
const sortedWeekdays = inputWeekdays.slice().sort(
  (a, b) => weekOrder.indexOf(a) - weekOrder.indexOf(b)
);

console.log(sortedWeekdays);
// Output: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
