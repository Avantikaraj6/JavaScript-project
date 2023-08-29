let final_date= document.getElementById("date");

function calculate(){
    let birthdate= new Date(final_date.value);

    let m1 = birthdate.getMonth()+1;
    let d1 =  birthdate.getDate();
    let y1 =  birthdate.getYear();

    let todaydate = new Date();

    let m2 = todaydate.getMonth()+1;
    let d2 =  todaydate.getDate();
    let y2 =  todaydate.getYear();

    let y3 = y2 - y1
    
    if (m2>= m1){
        m3 = m2 -m1;
    } 
    else{
        y3--;
        m3 = 12+ m2 -m1;
    }

    if(d2>=d1){
        d3= d2 -d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y1, m1)+d2-d1    }
    if(m3<0){
        m3 =11;
        y3--;
    }
    console.log(y3,m3,d3)
    let result = document. getElementById("result");

    result.innerHTML={y3,m3,d3}
}

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}

