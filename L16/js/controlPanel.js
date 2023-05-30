window.ControlPanel = (function	() {
	//Control panel module

	function ControlPanel() {
		this.parent = document.createElement('div');
		this.semaforeContainer = document.createElement('div');
		this.buildTLControlPanel();
		this.setupHandler();
	}

	ControlPanel.prototype.buildTLControlPanel = function (position = 'afterbegin') {
		this.parent.classList.add('container');
		var buttonPanel = document.createElement('div');
		buttonPanel.classList.add('buttonPanel');
		buttonPanel.innerHTML = '<button>➕</button>';
		this.semaforeContainer.classList.add('semaforeContainer');
		this.parent.append(buttonPanel);
		this.parent.append(this.semaforeContainer);
		document.body.append(this.parent);
	}

	ControlPanel.prototype.setupHandler = function () {
		var buttons = this.parent.getElementsByTagName('button');
		buttons[0].addEventListener('click', this.addOne.bind(this));
	}

	ControlPanel.prototype.addOne = function () {
		var tl = new TrafficLighter();
		this.semaforeContainer.append(tl.parent)
	}

	return ControlPanel;
})()