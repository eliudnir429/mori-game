enchant();

window.onload = function(){

	game				= new Game(320,320);
	game.fps			= 30;
	game.totalTime		= 30;
	game.remainingTime	= 30;
	game.frameCount		= 0;
	game.time			= 0;
	game.score			= 0;
	game.keybind(90,"z");
	game.keybind(88,"x");
	game.totalBullet	= 120;
	game.remainingBullet= 120;
	game.bullet			= 0;
	game.missile		= 0;
	
	game.preload('images/chara1.png','images/chara3.png','images/icon0.png','images/bg.png','images/clear.png','images/space1.png','images/space0.png','images/chara3.png');
	
	game.onload = function(){
	
		background();
		
		player();
		
		scoreLabel();
		
		game.rootScene.addEventListener(Event.ENTER_FRAME,function(){
		
			game.time			= game.frameCount / game.fps;
			game.remainingTime	= game.totalTime - game.time;
			game.remainingBullet= game.totalBullet - game.bullet;
			
			if(game.frameCount % 14 == 0){
			
				addMelon2();
			}
			
			if(game.frameCount % 40 == 0){
			
				addMelon();
			}
			
			if(game.frameCount % 300 == 0){
			
				addStone();
			}
			
			if(game.frameCount % 900 == 0){
			
				addTank();
			}
			
			if(game.remainingTime == 0){
			
				scoreLabel.text ="得点："+game.score+"<BR>"+"残り時間："+(game.remainingTime).toFixed(1);
				
				if(game.score > 10){
					game.endScene.image = game.assets['images/clear.png'];
					game.end();
				}else{
					game.end();
				}
			}
			
			game.frameCount++;
		});
	}
	game.start();
}

function rand(num){
	return Math.floor(Math.random() * num);
}
