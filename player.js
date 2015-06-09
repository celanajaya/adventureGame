var inquirer = require('inquirer');

var game = require('./game.source');

var nextQuestion = function(answer) {
	var answerTitle = Object.keys(answer)[0];
	var prevNode = game.getNode(answerTitle);
	var node = prevNode.route(answer[answerTitle]);
	if (node.connections.length === 0) {
		return console.log(node.text);
	}

	inquirer.prompt([
		{
			type: "list",
			name: node.title,
			message: node.text,
			choices: node.getConnectionStrings()
		}]
	, nextQuestion);
};

inquirer.prompt([
	{
		type: "list",
		name: game.startingPoint.title,
		message: game.startingPoint.text,
		choices: game.startingPoint.getConnectionStrings()
	}],
	nextQuestion);
/*

This file has no test specs. It might be a tricky one. You need to look at 
the docs for the inquirer npm package, and see if you can figure out how 
to make the game run!

If you're running out of time, check out my solution to the problem:
https://gist.github.com/zekenie/e90faf30a789d65c6459

*/