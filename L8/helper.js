function genInt (from = 0, to = 100) {
	return Math.floor(Math.random() * (from - to) + to);
}

function genArr (lenght = 10, min, max) {
	var result = [];
	while (lenght) {
		var randNum = genInt(min, max);
		result.push(randNum);
		--lenght;
	} 
	return result;
}
