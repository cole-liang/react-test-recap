googleDatabase = [
  "cats.com",
  "nicesoup.com",
  "myfavouritecat.com",
  "catdiary.com",
  "excelrecipe.com",
  "catshistory.com",
  "fooddelivery.com",
  "soupforhero.com",
];

const googleSearch = (search) => {
  const matches = googleDatabase.filter((website) => website.includes(search));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch("cat"));
