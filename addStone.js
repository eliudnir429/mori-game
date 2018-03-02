function addStone(){

	var stone	= new Sprite(64,64);
	stone.x	 	= rand(304);
	stone.y		= 0;
	stone.image = game.assets['images/space1.png']
	stone.frame = 11;
	
	stone.addEventListener(Event.ENTER_FRAME, function(){
	
		if(stone.intersect(player)){
			game.rootScene.removeChild(stone);
			game.score = game.score - 200;
			
		}//else if(stone.intersect()){
		//	game.rootScene.removeChild(stone);
			
		else{
			stone.y +=rand(5);
			stone.y -=rand(3);
			
			stone.x +=rand(8);
			stone.x -=rand(8);
			
			if(stone.y >= (game.height * 0.75) + (player.height / 2)){
				game.rootScene.removeChild(stone);
			}
		}
		
	});
	
	game.rootScene.addChild(stone);
}