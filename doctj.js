
function Sum() {
    //let x=prompt('enter no of lab tests');
    let arr=[];
    arr[0]=400;
    arr[1]=450;
    arr[2]=450;
    arr[3]=500;
    arr[4]=500;
    arr[5]=400;
    arr[6]=400;
    arr[7]=400;
    arr[8]=400;
    
let sum=0;
let x=10;
let t=0;
let id=prompt('enter id of Doctor');
while(t<10&&id>=0&&id<10){
sum=sum+arr[id];
id=prompt('enter id of another doctor OR for no other consultation enter -1');
}
alert("your total bill amount is: "+sum+" Rs");
}


function avail(){
    let x=prompt('enter doctors id');
    let t=x+(Math.floor(Math.random() * 10));
    if(t%2===0){
        alert("Doctor is available today!!");
    }
    else{
        alert("Sorry,Doctor is not available today!!");
    }
}
