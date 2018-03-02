function player(){

	player		 = new Sprite(32,32);
	player.x	 = (game.width/2)-(player.width/2);
	player.y	 = game.height * 0.75;
	player.image = game.assets['images/chara1.png']
	player.chara = 5
	player.frame = player.chara;
	player.pose  = 0;

	player.addEventListener(Event.ENTER_FRAME, function(){
	
	if (game.input.z){
		
		player.image = game.assets['images/chara3.png']
		player.chara = 12;
		player.frame = player.chara;
		player.pose  = 0;
		game.missile = 1;
		
		}
	if (game.missile == 1){
		if(game.remainingBullet > 0){
			if(game.input.x){
				player.chara = player.chara + 6;
				addMissile();
				game.bullet = game.bullet + 1;
			}
		}
	}
	
	if (game.input.right){
	
		if (player.x < 320-32){
	
			player.x += 5;
			player.scaleX = 1;
	
			if(game.frameCount % 3 ==0){
			
				player.pose ++;
				player.pose %= 2;
			}
	
			player.frame = player.chara + player.pose + 1;
			
		}
		
	}else if (game.input.left){
	
		if(player.x > 0){
	
			player.x += -5;
			player.scaleX = -1;

			if(game.frameCount % 3 ==0){
				
				player.pose ++;
				player.pose %= 2;
			}
			
			player.frame = player.chara + player.pose + 1;
		}
			
	}else{
	
		player.frame = player.chara;
	}
	});
	
	game.rootScene.addChild(player);
}