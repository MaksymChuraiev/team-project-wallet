const spaceCreator = num => {
  const fixTwo = Number(num).toFixed(2);
  var formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
  });

  // console.log('FORMAT ', typeof formatter.format(fixTwo));
  // console.log('FORMAT ');
  return formatter.format(fixTwo);
};

export default spaceCreator;
