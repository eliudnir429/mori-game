function background()
{
	var background = new Sprite(320,320);
	
	background.x		 = 0;
	background.y		 = 0;
	background.image	 = game.assets['images/bg.png'];
	
	game.rootScene.addChild(background);
}