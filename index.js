var shouldRun = true;
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

function loadCpu(){
	if (cluster.isMaster) {
		// Fork workers.
		for (var i = 0; i < numCPUs; i++) {
			cluster.fork();
		}
	}
}

function blockCpu() {
	var result = 0;
	while(shouldRun) {
		result += Math.random() * Math.random();
	}	
	return result;
}

function start() {
	shouldRun = true;
	// blockCpu();
	// setTimeout(stop, 1000);
	setInterval(loadCpu, 300);
}

function stop() {
	console.log("Stopping cpu hog");
	shouldRun = true;
}

start();