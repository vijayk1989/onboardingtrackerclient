export const dateFormat = (date) => {
  if (date !== undefined && date !== "") {
    var myDate = new Date(date);
    var str =
      myDate.getDate() +
      "-" +
      ("0" + (myDate.getMonth() + 1)).slice(-2) +
      "-" +
      myDate.getFullYear();
    return str;
  }
  return "";
};
