function resultado() {
    var p1, dueno;
     
    // <!-- 1ª pregunta -->
    if (document.getElementById('p13').checked==true) {
        p1="ALEMÁN"
        // alert("EL DUEÑO DEL PEZ ES EL ALEMÁN")+
        window.open('https://www.youtube.com/watch?v=04854XqcfCY&ab_channel=QueenOfficial', 'regalomisterioso');
    }
    else {p1="NO ES CORRECTO"}
     
    dueno=p1;
    alert (' EL DUEÑO DEL PEZ ' + p1)
    location.reload();
}