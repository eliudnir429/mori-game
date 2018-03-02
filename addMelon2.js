function addMelon2(){

	var melon	= new Sprite(16,16);
	melon.x	 	= rand(304);
	melon.y		= 0;
	melon.image = game.assets['images/icon0.png']
	melon.frame = 18;
	
	melon.addEventListener(Event.ENTER_FRAME, function(){
	
		if(melon.intersect(player)){
			game.rootScene.removeChild(melon);
			game.score ++;
		}else{
			melon.y +=3;
			
			if(melon.y >= (game.height * 0.75) + (player.height / 2)){
				game.rootScene.removeChild(melon);
			}
		}
		
	});
	
	game.rootScene.addChild(melon);
}