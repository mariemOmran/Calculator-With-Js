let divNumbers = document.querySelectorAll(".numbers div");

let hide = document.querySelector("#hidden");

let show = document.querySelector("#show");

let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");

let x = 0;
let y = 0;
let op = " ";

divNumbers.forEach(function(e){
    e.onclick = function (){
    let input = e.innerHTML;
    show.value += input;
        //check if we have an operator or not
        if(op ==" "){
            //the to we have not 
            if(cheakType(input) == 0 ){
                //its number
                hide.value += input;
                x = parseInt(hide.value);
                console.log(x);
            }else{
                //when we have not the operator
                op = input;
                console.log(op);
                hide.value =" ";
            }
        }else{
            //when we have the operator 
            hide.value += input;
            y = parseInt(hide.value);
            console.log(y);
        }
    }
});

function cheakType (char){
    if(isNaN(parseInt(char))){
        return  1;    //if it is charchter
    }else{
        return 0; //if it is number
    }
};

equal.onclick = function(num){
    if(op == "+"){
        add (num);
        show.value = add (num);
        console.log(add (num));
        newWave (add (num));
    }else if (op == "-"){
        sub (num);
        show.value = sub (num);
        console.log(sub (num));
        newWave (sub (num));
    }else if(op == "*"){
        multi (num);
        show.value = multi (num);
        console.log(multi (num));
        newWave (multi (num));
    }else if (op == "/"){
        diveid (num);
        show.value = diveid (num);
        console.log(diveid (num));
        newWave (diveid (num));
    }
};

function add (z){
    z = x + y;
    return z;
}
function sub (z){
    z = x - y;
    return z;
}
function multi (z){
    z = x * y;
    return z;
}
function diveid (z){
    z = x / y;
    return z;
}
function newWave (res){
    x = res;
    y = 0;
    op = " ";
}

clear.onclick = function(){
    show.value = "";
    hide.value = "";
    x = 0;
    y = 0;
    op = " ";
}
