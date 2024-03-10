// for(let i=0;i<15;i++){
//     console.log(`<span id="date`+i+`"></span>`);
//     console.log(`<span id="dollar`+i+`"></span>`);
//     console.log(`<span id="riel`+i+`"></span>`);
//     console.log(`<span id="dollar`+i+`20"></span>`);
//     console.log(`<span id="riel`+i+`20"></span>`);
// }

// for(let i=0;i<15;i++){
//     let w=0;
//     if((i+1)%5==0){
//         w=5;
//     }
//     console.log("m"+(Math.floor(i/5)+1)+"-w"+((1+i)%5+w)+"-date");
// }

// for(let i=0;i<=14;i++){
//     console.log(`dollar`+i);
// }

// function getSundays() {
//     let sundays = [];

//     let sunday = new Date()
//     sunday.setDate(sunday.getDate() + 7 - sunday.getDay());

//     for (var i = 0; i < 12; i++) {
//         console.log(sunday.toLocaleString());
//         sundays.push(new Date(sunday.getTime()));
//         sunday.setDate(sunday.getDate() + 7);
//     }

//     return sundays;
// }

// getSundays();


// Get sundays:
var sundays = [];
var year = 2024;
var month = 2;
for(let i=1;i<=new Date(year,month+1,0).getDate();i++){
    if(new Date(year,month,i+1).getDay()==0){
        sundays.push(i+1);
    }
}
console.log(sundays);
