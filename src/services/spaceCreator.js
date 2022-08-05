const spaceCreator = (num) => {
	var formatter = new Intl.NumberFormat('ru');
	return formatter.format(num)
}

export default spaceCreator;