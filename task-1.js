// TODO: Забираємо всі теги з масиву tweets в новий масив. Використовуємо метод reduce()
// Маємо отримати результат:
// ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs","react"]

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tagsTweets = tweets.reduce((acc, tweet) => acc.concat(tweet.tags), []);
console.log(tagsTweets);
