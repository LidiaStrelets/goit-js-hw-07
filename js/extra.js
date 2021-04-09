function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
for (let i = 0; i < 10; i += 1) {
  console.log(randomInteger(0, 255));
}
