export const timeDiff = (time: string) => {
  const now = new Date();
  const diff = now.getTime() - new Date(time).getTime();
  const diffInSeconds = diff / 1000;
  const diffInMinutes = diff / (1000 * 60);
  const diffInHours = diff / (1000 * 60 * 60);

  if (diffInSeconds < 60) {
    return `just now`;
  } else if (diffInMinutes < 60) {
    return `${Math.floor(diffInMinutes)}m ago`;
  } else {
    return `${Math.floor(diffInHours)}h ago`;
  }
};

export const formatTimestamp = (timestamp: string) => {
  const now: any = new Date();
  const date: any = new Date(timestamp);
  const diffInMilliseconds = now - date;
  const diffInSeconds = diffInMilliseconds / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;

  // Less than a day old: time in AM/PM format
  if (diffInHours < 24) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  // More than a day old but less than two days: "Yesterday"
  if (diffInDays < 2) {
    return "Yesterday";
  }

  // More than two days old but less than a week: day of the week
  if (diffInDays < 7) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  }

  // More than a week old: date in DD/MM/YYYY format
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  return `${formattedDay}/${formattedMonth}/${year}`;
};
