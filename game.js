var Node = require('./node')

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
}

Game.prototype.addNode = function(nodeTitle, nodeText) {
	if (this.nodes[nodeTitle]) {
		throw new Error();
	}
	
	var node = new Node(nodeTitle, nodeText);
	
	if (!this.startingPoint) {
		this.startingPoint = node;
	}

	return this.nodes[nodeTitle] = node;
};

Game.prototype.getNode = function(nodeTitle) {
	return this.nodes[nodeTitle];
};

Game.prototype.connect = function(nodeTitle1, nodeTitle2, condition) {
	var node1 = this.getNode(nodeTitle1);
	var node2 = this.getNode(nodeTitle2);
	node1.connect(node2, condition);
}

module.exports = Game