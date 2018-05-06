ar game = new Phaser.Game(800, 600, Phaser.AUTO);
var i = 2;
// define MainMenu state and methods
var MainMenu = function(game) {};
MainMenu.prototype = {
	preload: function() {
		
	},
	create: function() {
	},
	update: function() {
		// main menu logic
		if (i = 3)
			console.log("we Op");
		}
	
}

game.state.start('MainMenu');
