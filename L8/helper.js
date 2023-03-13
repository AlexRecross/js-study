function genInt (from = 0, to = 100) {
	return Math.floor(Math.random() * (from - to) + to);
}

function genArr (lenght = 10) {
	var result = [];
	while (lenght) {
		var randNum = genInt();
		result.push(randNum);
		--lenght;
	} 
	return result;
}
