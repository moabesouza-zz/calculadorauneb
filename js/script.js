  
  function calcularMedia (){
    var input1 = parseFloat(document.getElementById("Input1").value.replace(",", "."));
    var input2 = parseFloat(document.getElementById("Input2").value.replace(",", "."));
    var input3 = parseFloat(document.getElementById("Input3").value.replace(",", "."));
    
    //var media = parseFloat (input1*2 + input2*6 + input3*2)/10
    var media = parseFloat (input1 + input2 + input3)/3
    var totalMedia = media.toFixed(2)
    var mediaP = parseFloat (50-7*totalMedia )/3
    var totalMediaP= mediaP.toFixed(2) 

    if(totalMedia>=7 ){
      document.getElementById("Media").innerHTML = "Você foi aprovado(a)! Sua média final é " + totalMedia + " Pontos. Parabéns! "
  }
  
    else if(totalMediaP>10){
      document.getElementById("Media").innerHTML = "Sua média é " + totalMedia + " pontos você foi reprovado(a) na disciplina e não pode fazer prova final." 
     
  } 
  
  else{
    document.getElementById("Media").innerHTML = "Você foi reprovado(a)! Sua média final é " + totalMedia+ " Pontos, mas estude e tire " + totalMediaP + " Pontos na prova final. Boa Sorte!"
   
  } 


  }

  function calcularProva (){

    var inputf = parseFloat(document.getElementById("mediaf").value.replace(",", "."));
    var inputp = parseFloat(document.getElementById("notap").value.replace(",", "."));
   
    var count = parseFloat (inputf*7 + inputp*3)/10
    var totalCount = count.toFixed(2) 
    
    if(totalCount >=5){
      document.getElementById("MediaFinal").innerHTML = "Você foi aprovado(a) na prova final! Sua média final é " + totalCount + " Pontos. Parabéns! "
    }
    else if(inputf<=2.85){
          document.getElementById("MediaFinal").innerHTML = "Você foi reprovado(a) na disciplina e não faz prova final" 
          
    }
  
    else{
      document.getElementById("MediaFinal").innerHTML = "Você foi reprovado(a)! Sua média da prova final é: " + totalCount 
      
  }


  }
  
