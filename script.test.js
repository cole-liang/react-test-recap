const { googleSearch } = require("./script");

fakeDatabase = ["dogs.com", "dogsFood.com", "opera.com", "javascript.com"];

it("search test", () => {
  expect(googleSearch("cat", fakeDatabase).length).toBe(0);
  expect(googleSearch("dog", fakeDatabase)).toEqual([
    "dogs.com",
    "dogsFood.com",
  ]);
});
