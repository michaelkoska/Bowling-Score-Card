const bowling = {
	score: 0,
	frame: 1,
	firstRoll: true,
	hasSecondRoll: false,
	pinsLeft: 10,
	//make sure array is between 0 and 10
	validRoll: function(score){
		let invalidScore = !score.some(s => s < 0 || s > 10);
		if(!invalidScore){
			console.log("enter numbers between 0 and 10");
		}
		return invalidScore;
	},
/*
	frameCheck: function(roll){
		if(this.hasSecondRoll){
			this.hasSecondRoll = false;
			this.firstRoll = true;
			this.frame += 1;
		}
		if(this.firstRoll && roll === 10){
			this.hasSecondRoll = false;
			this.frame += 1;
		} else if(this.firstRoll && roll < 10){
			this.hasSecondRoll = true;
			this.firstRoll = false;
			this.pinsLeft -= roll;
		}
	},*/
	scoreKeeper: function(playCard){
		for(var ballRoll = 0; ballRoll < playCard.length; ballRoll++){
			this.score += playCard[ballRoll];
			if(playCard[ballRoll] === 10){
				this.score += playCard[ballRoll + 1] + playCard[ballRoll + 2];
			}
		}
		return this.score;
	}

}


module.exports = bowling;