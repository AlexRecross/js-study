window.TrafficLighter = (function () {
	// NOTE take in mind wery important to stay "timelines" and "states" equal in a length
	var timeLines = [5000, 1000, 2500, 1000];
	var states = [[1,0,0], [1,1,0], [0,0,1], [0,1,0]];

	function TrafficLighter () {
		this.parent = document.createElement('div');
		this.parent.classList.add('TrafficLighter');
		this.counter = 0;
		this.first = false;
		this.second = false;
		this.third = false;
		this.timeout = null;
		this.render();
		this.setupHandlers();
	}

	TrafficLighter.prototype.render = function () {
		this.parent.innerHTML = `
			<button>✖</button>
			<div class="semafore">
				<div class="circle redlight ${this.first ? 'active' : ''}"></div>
				<div class="circle yellowlight ${this.second ? 'active' : ''}"></div>
				<div class="circle greenlight ${this.third ? 'active' : ''}"></div>
			</div>
			<button>⏵</button>
			<button>⏸</button>
		`;
		// NOTE add handlers into buttons
		this.setupHandlers();
	};

	TrafficLighter.prototype.setupHandlers = function() {
		var buttons = this.parent.getElementsByTagName('button');
		buttons[0].addEventListener('click', this.close.bind(this));
		buttons[1].addEventListener('click', this.play.bind(this));
		buttons[2].addEventListener('click', this.pause.bind(this));
	}


	TrafficLighter.prototype.activator = function (first, second, third) {
		this.first = first;
		this.second = second;
		this.third = third;
		this.render();
	}

	TrafficLighter.prototype.run = function () {
		this.counter = ++this.counter % states.length;
		var state = states[this.counter];
		var delay = timeLines[this.counter];
		// this.activator(arg);
		// this.activator.apply(this, state);
		this.first = state[0];
		this.second = state[1];
		this.third = state[2];
		this.render();
		this.timeout = setTimeout(this.run.bind(this), delay);
	}

	TrafficLighter.prototype.play = function () {
		if (this.timeout) { return; }
		this.run();
	}

	TrafficLighter.prototype.pause = function () {
		clearTimeout(this.timeout);
		// delete this.timeout;
		this.timeout = null;
	}

	TrafficLighter.prototype.stop = function () {
		// NOTE the pause
		this.pause();
		// NOTE reset state to initial
		this.counter = 0;
		this.render();
	}

	TrafficLighter.prototype.close = function () {
		this.parent.remove();
	}
	return TrafficLighter;
})()