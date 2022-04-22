let time = prompt("write a number from 0 to 59");
if (time < 15 && time>=0){
    console.log("1");
}else if(time < 30 && time>=15 ){
    console.log("2");
}else if (time < 45 && time>=30){
    console.log("3");
}else if (time < 59 && time>=45){
    console.log("4");
}else{
    console.log("Wrong number");
}

