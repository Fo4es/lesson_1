let day = prompt("write a day from 1 to 31");
if (day < 10 && day>=1){
    console.log("1");
}else if(day < 20 && day>=10 ){
    console.log("2");
}else if (day < 31 && day>=20){
    console.log("3");
}else {
    console.log("Wrong number");
}
