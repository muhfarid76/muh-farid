let $button=document.querySelectorAll("button");
let ui=document.querySelector(".userentry");
let finalcalc=document.querySelector(".finalcalc");
let opPressed=false;

let valOne=[];
let valTwo=[];
var operator=[];
let finalAnswer=0;
[...$button].map(x=>{
    x.addEventListener("click",function(e){

        switch(this.innerHTML){
            case"AC":
            clearDisplay();
            break;
            case"DEL":
            removeNumber();
            break;
            case"+/-":
            makeNegative();
            break;
            case"=":
            makeCalculation();
            break;
            case"+":
            operator.splice(0,1,this.innerHTML)
            console.log(operator);

            storeValue();
            break;
            case"*":
            operator.splice(0,1,this.innerHTML)
            console.log(operator);

            storeValue();
            break;
            case"/":
            operator.splice(0,1,this.innerHTML)
            console.log(operator);

            storeValue();
            break;
            case"-":
            operator.splice(0,1,this.innerHTML)
            console.log(operator);
            storeValue();
            break;
            default:
                if(valOne.length>11){
                    alert("No more values beyond 8");
                }
                else{
                    valOne.push(this.innertext);
                    ui.textContent=valOne.join("");
                    console.log(valOne);
                }
                break;
                case".":
                if(valOne.includes(".")){
                    alert("You cannot use anymore decimals");
                }else{
                    valOne.push(this.innertext);
                    ui.textContent=valOne.join("");
                }
                break;
        }
    })
})
//function add(a,b){
    // return a+b;
//}
//function subtractc(a,b){
    // return a-b;
//}
//function divide(a,b){
    // return a/b;
//}
//function multiply(a,b){
    // return a*b;
//}
//function module(a,b){
    //return a%b;
//}

function clearDisplay(){
    ui.textContent="";
    finalcalc.textContent=""
    valOne=[];
    valTwo=[];
    operator=[];
}

function removeNumber(e){
    valOne.pop();
    ui.textContent=valOne.join("");
}

function makeNegative(){
    if(valOne.length<1){
        return false;
    }else if(valOne[0]=="-"){
        valOne.shift()
    }else{
        valOne.unshift("-")
    }
    ui.textContent=valOne.join("");
}

function makeCalculation(){
    if(valTwo.length > 0 && operator.length!==0){
        //finalAnswer = valTwo.concat(operator.valOne).join("");
        finalAnswer=eval(valTwo+operator+valOne.join(""));
        finalcalc.textContent="";
        finalcalc.textContent=eval(finalAnswer).toFixed(2);
        ui.textContent="";
        valTwo=eval(finalAnswer);
        valOne=[];
        //operator=[];
    }else if (operator.length==0){
        alert("invalid calculation there is no operator");
    }
    else{
        //finalAnswer=valTwo.concat(operator,valOne).join
        finalAnswer=finalAnswer=eval(valTwo+operator+valOne.join(""));
        console.log("finalAnswer");
        console.log(finalAnswer);
        finalcalc.textContent="";
        ui.textContent="";
        finalcalc.textContent=eval(finalAnswer).toFixed(2);
        //operator=[];
        valTwo=eval(finalAnswer);
        valOne=[];
    }
}




function storeValue(){
    if(valOne.length==0 &&valTwo.length==0){
        return false;
    }else if (valTwo.length>0){
        finalcalc.textContent=valTwo+""+operator;
    }else if(valTwo.length==0){
        valTwo.push(valOne.join(""));
        valOne=[];
        ui.textContent="";
        finalcalc.textContent="";
        finalcalc.textContent=valTwo+""+operator
    }
    finalcalc.textContent=valTwo+""+operator
}

