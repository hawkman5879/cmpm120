
var gam = new Phaser.Game(800, 600, Phaser.AUTO);
var i = 3;
// define MainMenu state and methods
var MainMenu = function(game) {};
MainMenu.prototype = {
	preload: function() {
		
	},
	create: function() {
	},
	update: function() {
		// main menu logic
		if (i = 4)
			console.log("we Op");
		}
	
}

game.state.start('MainMenu');
