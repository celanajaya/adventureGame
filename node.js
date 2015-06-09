var Connection = require('./connection')

var Node = function(title, text) {
	this.title = title;
	this.text = text;
	this.connections = [];
}

Node.prototype.connect = function(node, condition) {
	if (this.hasConnectionCondition(condition)) {
		throw new Error();
	}
	var child = new Connection(node, condition);
		this.connections.push(child);
};

Node.prototype.route = function(condition) {
	if (this.connections.length === 1) {
		return this.connections[0].nextNode;
	}
	for (var i = 0; i < this.connections.length; i++) {
		if (this.connections[i].condition === condition) {
			return this.connections[i].nextNode;
		}
	}
	return undefined;
}

Node.prototype.getConnectionStrings = function() {
	var cStrings = []
	this.connections.forEach(function(connection) {
		cStrings.push(connection.condition);
	});
	return cStrings;
}

Node.prototype.hasConnectionCondition = function(condition) {
	var connectionConditions = this.getConnectionStrings();
	return connectionConditions.some(function(connectionCond){ 
		return connectionCond === condition;
	});
}

module.exports = Node