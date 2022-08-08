class VideoGame {

    constructor(name, plateform, price){
        this.name = name.toUpperCase();
        this.price = parseFloat(price);
        this.plateform = plateform;
        this.rateAverage = function(myArray) {
            let sum = 0;
            for( let i = 0; i < myArray.length; i++) {
                sum += parseInt(myArray[i].rate)
            }
            return sum / myArray.length;
        }
    }
}

const games = [];
games.push(new VideoGame("SUPER MARIO BROS", 10));
games.push(new VideoGame("DONKEY KONG COUNTRY", 8));
games.push(new VideoGame("LEGEND OF ZELDA", 15));
games.push(new VideoGame("METAL GEAR SOLID", 12));

const mags = [{name: "Gamekult", rate: 15},
              {name: "Jeuxvideocom", rate: 12},
              {name: "Gameblog", rate: 16},
              {name: "Millenium", rate: 18}];


for (const game of games) {
    console.log(game.name + " is rated " + game.rateAverage(mags));
}

