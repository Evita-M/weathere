//Example Use Cases
// const { dayStr, dayNbr, month } = getDateFormatted();
//   console.log(getDateFormatted());
//   console.log(getDateFormatted(new Date(), 3));
//   console.log(getDateFormatted(null, 3));
//   console.log(getDateFormatted(new Date(2021, 10, 24), 5));
//   console.log(getDateFormatted(new Date(2021, 10, 24)));

/* eslint-disable no-extend-native */
Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export function getDateFormatted(dateParam = new Date(), daysOffset = 0) {
  let date;

  if (dateParam === null) {
    date = new Date();
  } else {
    date = dateParam;
  }

  let formattedDate = null;
  let resultDate = new Date(date);

  resultDate = date.addDays(Number(daysOffset));

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

export const makeFirstCapital = (text) => {
  let newText = `${text.charAt(0).toUpperCase()}${
    text.length > 1 ? text.slice(1) : ""
  }`;

  return newText;
};
