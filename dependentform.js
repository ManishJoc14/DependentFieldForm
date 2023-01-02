
function $(element){
    return document.getElementById(element);
}
$("issueDistrict").addEventListener("change",()=>{
    var s1=$("issueDistrict");
    var s2=$("issueMunicipality");
    s2.innerHTML="";
     
    
    if(s1.value=="D1"){
        var optarray=['a1/A1','b1/B1','c1/C1','d1/D1'];
    }
    else if(s1.value=="D2"){
        var optarray=['a2/A2','b2/B2','c2/C2','d2/D2'];
    }
    else if(s1.value=="D3"){
        var optarray=['a3/A3','b3/B3','c3/C3','d3/D3'];
    }
    else if(s1.value=="D4"){
        var optarray=['a4/A4','b4/B4','c4/C4','d4/D4'];
    }

    for(var option in optarray){
        var pair =optarray[option].split("/");
        var newOption=document.createElement("option");
        newOption.value=pair[0];
        newOption.innerHTML=pair[1];
        s2.options.add(newOption);

    }
})