function addMissile(){

	var missile	= new Sprite(32,64);
	missile.x	 	= player.x;
	missile.y		= player.y-64;
	missile.image = game.assets['images/space0.png']
	missile.frame = 15;
	
	missile.addEventListener(Event.ENTER_FRAME, function(){
	
		missile.y -=5;
	
	});
	
	if(missile.intersect(Sprite)){
		game.rootScene.removeChild(missile);
	
	}
	
	game.rootScene.addChild(missile);
}