import {calculatingRate} from "./rateOfInterest.js"
function calculator(){
    console.log("Money Interest Calculation")
    console.log("--------------------------")
    var interest=0;
    if(true){
        let principalAmount=500;
        let n=10
        const rate=calculatingRate(5)        
        interest=principalAmount*n*rate;
        console.log("Principal Amount ",principalAmount,"years ",n,"rate of interest ",rate)

     }
    console.log("Money Interest : ",interest)
}
calculator()
    
