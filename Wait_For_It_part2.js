import fs from "fs";

fs.readFile('./input.txt',"utf8", (err,data)=>{

    let lines= data.trim().split(/\r?\n/);
    const duration = lines[0].split(':')[1].split(' ').join("");
    const record = lines[1].split(':')[1].split(' ').join("");

    let possibleWins=0;
    var buttonHoldTime= Math.floor(duration/2);

    while(buttonHoldTime*(duration-buttonHoldTime)>record){
        possibleWins++;
        buttonHoldTime--;

    }

    possibleWins= (!(duration%2===0))? possibleWins*2 : (possibleWins*2)-1;
    console.log("PossibleWins are: "+ possibleWins);

});