function genInt (from = 0, to = 100) {
	return Math.floor(Math.random() * (from - to) + to);
}

function genArr (length = 10, min, max) {
	var result = [];
	while (length) {
		var randNum = genInt(min, max);
		result.push(randNum);
		--length;
	} 
	return result;
}


