function addMelon(){

	var melon	= new Sprite(16,16);
	melon.x	 	= rand(304);
	melon.y		= 0;
	melon.image = game.assets['images/icon0.png']
	melon.frame = 11;
	
	melon.addEventListener(Event.ENTER_FRAME, function(){
	
		if(melon.intersect(player)){
			game.rootScene.removeChild(melon);
			game.score = game.score - 7;
		}else{
			melon.y +=rand(15);
			melon.y -=rand(10);
			
			melon.x +=rand(10);
			melon.x -=rand(10);
			
			if(melon.y >= (game.height * 0.75) + (player.height / 2)){
				game.rootScene.removeChild(melon);
			}
		}
		
	});
	
	game.rootScene.addChild(melon);
}