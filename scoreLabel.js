function scoreLabel(){

	scoreLabel		 = new Label("");
	scoreLabel.x	 = 10;
	scoreLabel.y	 = 10;
	scoreLabel.color = "White";
	
	scoreLabel.addEventListener(Event.ENTER_FRAME, function(){
	
		scoreLabel.text = "得点：" + game.score + "<BR>" + "残り時間：" + (game.remainingTime).toFixed(1) + "<BR>" + "残弾: " + game.remainingBullet;
	});
	game.rootScene.addChild(scoreLabel);
}