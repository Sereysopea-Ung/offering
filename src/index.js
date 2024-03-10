var radioTrisemester1 = document.getElementById("tri-1");
var radioTrisemester2 = document.getElementById("tri-2");
var radioTrisemester3 = document.getElementById("tri-3");
var radioTrisemester4 = document.getElementById("tri-4");
var month = [];

var month1week1 = document.getElementById("month1-week1");
var month1week2 = document.getElementById("month1-week2");
var month1week3 = document.getElementById("month1-week3");
var month1week4 = document.getElementById("month1-week4");
var month1week5 = document.getElementById("month1-week5");


var month2week1 = document.getElementById("month2-week1");
var month2week2 = document.getElementById("month2-week2");
var month2week3 = document.getElementById("month2-week3");
var month2week4 = document.getElementById("month2-week4");
var month2week5 = document.getElementById("month2-week5");

var month3week1 = document.getElementById("month3-week1");
var month3week2 = document.getElementById("month3-week2");
var month3week3 = document.getElementById("month3-week3");
var month3week4 = document.getElementById("month3-week4");
var month3week5 = document.getElementById("month3-week5");


radioTrisemester1.onclick = handleTrisemesterOne;
function handleTrisemesterOne(){
    month1week1.textContent = "ខែ​មករា​ អាទិត្យ​ទី​១​";
    month1week2.textContent = "ខែ​មករា​ អាទិត្យទី​២";
    month1week3.textContent = "ខែ​មករា​ អាទិត្យទី​៣";
    month1week4.textContent = "ខែ​មករា​ អាទិត្យទី​៤";
    month1week5.textContent = "ខែ​មករា​ អាទិត្យទី​៥";

    month2week1.textContent = "ខែ​កុម្ភៈ​ អាទិត្យ​ទី​១​";
    month2week2.textContent = "ខែកុម្ភៈ​ អាទិត្យទី​២";
    month2week3.textContent = "ខែកុម្ភៈ​ អាទិត្យទី​៣";
    month2week4.textContent = "ខែកុម្ភៈ​ អាទិត្យទី​៤";
    month2week5.textContent = "ខែកុម្ភៈ​ អាទិត្យទី​៥";

    month3week1.textContent = "ខែ​មីនា​ អាទិត្យ​ទី​១​";
    month3week2.textContent = "ខែមីនា​ អាទិត្យទី​២";
    month3week3.textContent = "ខែមីនា​ អាទិត្យទី​៣";
    month3week4.textContent = "ខែមីនា​ អាទិត្យទី​៤";
    month3week5.textContent = "ខែមីនា អាទិត្យទី​៥";

    month=["មករា","កុម្ភៈ","មីនា"];
    for(let i=0;i<=2;i++){
        document.getElementById("month0").textContent = month[0];
        document.getElementById("month1").textContent = month[1];
        document.getElementById("month2").textContent = month[2];
    }
    document.getElementById("tri").textContent = "១";
    
}

radioTrisemester2.onclick = handleTrisemesterTwo;
function handleTrisemesterTwo(){
    month1week1.textContent = "ខែ​មេសា​ អាទិត្យ​ទី​១​";
    month1week2.textContent = "ខែ​មេសា​ អាទិត្យទី​២";
    month1week3.textContent = "ខែ​មេសា​ អាទិត្យទី​៣";
    month1week4.textContent = "ខែ​មេសា​ អាទិត្យទី​៤";
    month1week5.textContent = "ខែ​មេសា​ អាទិត្យទី​៥";

    month2week1.textContent = "ខែ​ឧសភា អាទិត្យ​ទី​១​";
    month2week2.textContent = "ខែ​ឧសភា​ អាទិត្យទី​២";
    month2week3.textContent = "ខែ​ឧសភា​ អាទិត្យទី​៣";
    month2week4.textContent = "ខែ​ឧសភា​ អាទិត្យទី​៤";
    month2week5.textContent = "ខែ​ឧសភា​ អាទិត្យទី​៥";

    month3week1.textContent = "ខែ​មិថុនា​ អាទិត្យ​ទី​១​";
    month3week2.textContent = "ខែមិថុនា​ អាទិត្យទី​២";
    month3week3.textContent = "ខែមិថុនា​ អាទិត្យទី​៣";
    month3week4.textContent = "ខែមិថុនា​ អាទិត្យទី​៤";
    month3week5.textContent = "ខែមិថុនា អាទិត្យទី​៥";
    month=["មេសា","ឧសភា","មិថុនា"];
    for(let i=0;i<=2;i++){
        document.getElementById("month0").textContent = month[0];
        document.getElementById("month1").textContent = month[1];
        document.getElementById("month2").textContent = month[2];
    }
    document.getElementById("tri").textContent = "២";
}

radioTrisemester3.onclick = handleTrisemesterThree;
function handleTrisemesterThree(){
    month1week1.textContent = "ខែ​កក្កដា​ អាទិត្យ​ទី​១​";
    month1week2.textContent = "ខែ​កក្កដា​ អាទិត្យទី​២";
    month1week3.textContent = "ខែ​កក្កដា​ អាទិត្យទី​៣";
    month1week4.textContent = "ខែ​កក្កដា​ អាទិត្យទី​៤";
    month1week5.textContent = "ខែ​កក្កដា​ អាទិត្យទី​៥";

    month2week1.textContent = "ខែសីហា អាទិត្យ​ទី​១​";
    month2week2.textContent = "ខែសីហា​ អាទិត្យទី​២";
    month2week3.textContent = "ខែសីហា​ អាទិត្យទី​៣";
    month2week4.textContent = "ខែសីហា​ អាទិត្យទី​៤";
    month2week5.textContent = "ខែសីហា​ អាទិត្យទី​៥";

    month3week1.textContent = "ខែ​កញ្ញា​ អាទិត្យ​ទី​១​";
    month3week2.textContent = "ខែ​កញ្ញា​ អាទិត្យទី​២";
    month3week3.textContent = "ខែ​កញ្ញា​ អាទិត្យទី​៣";
    month3week4.textContent = "ខែ​កញ្ញា​ អាទិត្យទី​៤";
    month3week5.textContent = "ខែ​កញ្ញា អាទិត្យទី​៥";
    month=["កក្កដា","សីហា","កញ្ញា"];
    for(let i=0;i<=2;i++){
        document.getElementById("month0").textContent = month[0];
        document.getElementById("month1").textContent = month[1];
        document.getElementById("month2").textContent = month[2];
    }
    document.getElementById("tri").textContent = "៣";
}

radioTrisemester4.onclick = handleTrisemesterFour;
function handleTrisemesterFour(){
    month1week1.textContent = "ខែ​តុលា​ អាទិត្យ​ទី​១​";
    month1week2.textContent = "ខែ​តុលា​ អាទិត្យទី​២";
    month1week3.textContent = "ខែ​តុលា​ អាទិត្យទី​៣";
    month1week4.textContent = "ខែ​តុលា​ អាទិត្យទី​៤";
    month1week5.textContent = "ខែ​តុលា​ អាទិត្យទី​៥";

    month2week1.textContent = "ខែវិច្ឆិកា អាទិត្យ​ទី​១​";
    month2week2.textContent = "ខែវិច្ឆិកា​ អាទិត្យទី​២";
    month2week3.textContent = "ខែវិច្ឆិកា អាទិត្យទី​៣";
    month2week4.textContent = "ខែវិច្ឆិកា​ អាទិត្យទី​៤";
    month2week5.textContent = "ខែវិច្ឆិកា​ អាទិត្យទី​៥";

    month3week1.textContent = "ខែធ្នូ​ អាទិត្យ​ទី​១​";
    month3week2.textContent = "ខែធ្នូ​ អាទិត្យទី​២";
    month3week3.textContent = "ខែធ្នូ អាទិត្យទី​៣";
    month3week4.textContent = "ខែធ្នូ​ អាទិត្យទី​៤";
    month3week5.textContent = "ខែធ្នូ អាទិត្យទី​៥";
    month=["តុលា","វិច្ឆិកា","ធ្នូ"];
    for(let i=0;i<=2;i++){
        document.getElementById("month0").textContent = month[0];
        document.getElementById("month1").textContent = month[1];
        document.getElementById("month2").textContent = month[2];
    }
    document.getElementById("tri").textContent = "៤";
}

var cal_button=document.getElementById('cal');
cal_button.addEventListener('click', function(event){
    document.getElementById("church-name").textContent = document.getElementById('church').value;
    document.getElementById("thisYear").textContent = document.getElementById('year').value;
    document.getElementById('sent').style.visibility = 'visible';

    for(let i = 1;i<=3;i++){
        document.getElementById("thisYear"+i).textContent = document.getElementById('year').value; 
    }

    for(let i=0;i<=14;i++){
        let w=0;
        if((i+1)%5==0){
            w=5;
        }
        document.getElementById(`date`+i).textContent = document.getElementById("m"+(Math.floor(i/5)+1)+"-w"+((1+i)%5+w)+"-date").value;
        document.getElementById(`dollar`+i).textContent = parseFloat(document.getElementById("m"+(Math.floor(i/5)+1)+"-w"+((1+i)%5+w)+"-date-dollar").value).toFixed(2);
        document.getElementById(`riel`+i).textContent = parseFloat(document.getElementById("m"+(Math.floor(i/5)+1)+"-w"+((1+i)%5+w)+"-date-riel").value).toFixed(2);
        document.getElementById(`dollar`+i+20).textContent = parseFloat((document.getElementById("m"+(Math.floor(i/5)+1)+"-w"+((1+i)%5+w)+"-date-dollar").value)*0.2).toFixed(2);
        document.getElementById(`riel`+i+20).textContent = parseFloat((document.getElementById("m"+(Math.floor(i/5)+1)+"-w"+((1+i)%5+w)+"-date-riel").value)*0.2).toFixed(2);
    }

    for(let i=0;i<=2;i++){
        document.getElementById('sumdollar'+i+20).textContent = (parseFloat(document.getElementById(`dollar`+5*i+20).textContent) + parseFloat(document.getElementById(`dollar`+(5*i+1)+20).textContent) +parseFloat(document.getElementById(`dollar`+(5*i+2)+20).textContent) +parseFloat(document.getElementById(`dollar`+(5*i+3)+20).textContent)+ parseFloat(document.getElementById(`dollar`+(5*i+4)+20).textContent)).toFixed(2);
        document.getElementById('sumriel'+i+20).textContent = (parseFloat(document.getElementById(`riel`+5*i+20).textContent) + parseFloat(document.getElementById(`riel`+(5*i+1)+20).textContent) +parseFloat(document.getElementById(`riel`+(5*i+2)+20).textContent) +parseFloat(document.getElementById(`riel`+(5*i+3)+20).textContent)+ parseFloat(document.getElementById(`riel`+(5*i+4)+20).textContent)).toFixed(2);
    }

    document.getElementById('finaldollar20').textContent = (parseFloat(document.getElementById('sumdollar020').textContent) + parseFloat(document.getElementById('sumdollar120').textContent) + parseFloat(document.getElementById('sumdollar220').textContent)).toFixed(2) ;
    document.getElementById('finalriel20').textContent = (parseFloat(document.getElementById('sumriel020').textContent) + parseFloat(document.getElementById('sumriel120').textContent) + parseFloat(document.getElementById('sumriel220').textContent)).toFixed(2) ;

    document.getElementById("table").style.visibility = 'visible';

});

