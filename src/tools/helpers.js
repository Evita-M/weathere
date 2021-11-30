export function getDateFormatted(dateParam = new Date(), daysOffset = 0) {
  let date;

  if (dateParam === null) {
    date = new Date();
  } else {
    date = dateParam;
  }

  let formattedDate = null;
  let resultDate = new Date(date);

  resultDate.setDate(resultDate.getDate() + daysOffset);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentDayString = days[resultDate.getDay()];
  let currentDay = resultDate.getDate();
  let month = months[resultDate.getMonth()];

  formattedDate = {
    dayStr: currentDayString,
    dayNbr: currentDay,
    month,
  };

  return formattedDate;
}
