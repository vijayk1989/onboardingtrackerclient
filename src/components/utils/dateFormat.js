export const dateFormat = (date) => {
  if (date !== undefined && date !== "") {
    var myDate = new Date(date);
    // var months = [
    //   "Jan",
    //   "Feb",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "Aug",
    //   "Sep",
    //   "Oct",
    //   "Nov",
    //   "Dec",
    // ];
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    // var str =
    //   myDate.getDate() +
    //   "-" +
    //   months[myDate.getMonth()] +
    //   "-" +
    //   myDate.getFullYear();
    return myDate.toLocaleDateString("en-IN", options);
  }
  return "";
};
