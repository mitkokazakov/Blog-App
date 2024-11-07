export function ExtractDayYearMonth(date: Date) {

  console.log(date);
  
  const day = date.getDate().toString().padStart(2, "0");
  const month = date
    .toLocaleString("en-EN", { month: "short" })
    
  const monthLong = date.toLocaleString("en-EN", {
    month: "long",
  });
  const year = date.getFullYear();

  const dateInfo = {
    day: day,
    monthShort: month,
    monthLong: monthLong,
    year: year
  }

  return dateInfo;
}
