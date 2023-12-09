import fs from "fs";
let errorMargin=1;

fs.readFile('./input.txt',"utf8", (err,data)=>{

    let lines= data.trim().split(/\r?\n/);
    const durations = lines[0].split(':')[1].split(' ').filter(s => s.length > 0).map(s => Number(s));
    const records = lines[1].split(':')[1].split(' ').filter(s => s.length > 0).map(s => Number(s));

    for(let i=0;i<durations.length;i++){
        let possibleWins=0;
        var buttonHoldTime= Math.floor(durations[i]/2);

        while(buttonHoldTime*(durations[i]-buttonHoldTime)>records[i]){
            possibleWins++;
            buttonHoldTime--;

        }

        console.log("half PossibleWins are: "+ possibleWins);

        possibleWins= (!(durations[i]%2===0))? possibleWins*2 : (possibleWins*2)-1;
        console.log("PossibleWins are: "+ possibleWins);
        errorMargin*=possibleWins; 
        console.log("error margin is: "+ errorMargin);

    }

    console.log(errorMargin);
});