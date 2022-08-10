const spaceCreator = num => {
  const fixTwo = Number(num).toFixed(2);
  var formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
  });
  return formatter.format(fixTwo);
};

export default spaceCreator;
