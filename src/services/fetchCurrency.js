const fetchCurrency = async () => {
	try {
		const response = await fetch(
			"https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
		);
		const rates = response.json();
		return rates;
	} catch (error) {
		throw error;
	}
};
export default fetchCurrency;
