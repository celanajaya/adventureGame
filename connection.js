var Connection = function(nextNode, condition) {
   this.nextNode = nextNode;
   this.condition = condition;
}

Connection.prototype.test = function(cond) {
	if (this.condition) {
		return this.condition === cond ? true : false; 
	}
	return true;
}

module.exports = Connection