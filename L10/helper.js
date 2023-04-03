var num = 0;

function ageHobbit (from = 12, to = 100) {
	return Math.floor(Math.random() * (from - to) + to);
}

var arrWithNames = [
	'Bilbo',
	'Dildo',
	'Sam',
	'Frodo',
	'Smeagorl',
	'Peregreen',
	'Meriadoc',
	'Hamfast',
	'Rouse',
];

function Hobbit () {
	this.name = arrWithNames[ageHobbit(0, arrWithNames.length - 1)];
	this.age  = ageHobbit()+' yrs old';
	this.N = ++num;
}

function generatorHobbit () {
	var a = new Hobbit;
	hobbitArr.push(a);
}

function genHobitonia (X = 24) {
	for (var i = 0; i < X; i++){
		generatorHobbit();
	}
}