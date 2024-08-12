var fuck ='';

function random(){
  let randomnum= Math.floor(Math.random()*10);
  if(randomnum>=1 && randomnum<10)
  {
    return randomnum;
  }
  else
  {
    random();
  }
}


function usrinput(str){

  if(document.getElementById(`${str}`).innerHTML==='')
  {
     document.getElementById(`${str}`).innerHTML='O';

        setTimeout(computerinput,500);
    
     }
  else
  {
    alert ('choose an empty box');
  }

  
}

function computerinput()
{   if(check()===false)
  {
     let c= random();
     if (c>0 && c<9)
     {
      let iidd ='b' + c;
      if(document.getElementById(`${iidd}`).innerHTML=='')
      {
         document.getElementById(`${iidd}`).innerHTML='X';
         if(check()!=false)
         {
          document.getElementById('b1').innerHTML='';
          document.getElementById('b2').innerHTML='';
          document.getElementById('b3').innerHTML='';
          document.getElementById('b4').innerHTML='';
          document.getElementById('b5').innerHTML='';
          document.getElementById('b6').innerHTML='';
          document.getElementById('b7').innerHTML='';
          document.getElementById('b8').innerHTML='';
          document.getElementById('b9').innerHTML='';
         }
      }
      else
      {
         computerinput();
      }
    }
    else {
      computerinput();
    }
  }

  else if(check()!= false)
  {
    document.getElementById('b1').innerHTML='';
    document.getElementById('b2').innerHTML='';
    document.getElementById('b3').innerHTML='';
    document.getElementById('b4').innerHTML='';
    document.getElementById('b5').innerHTML='';
    document.getElementById('b6').innerHTML='';
    document.getElementById('b7').innerHTML='';
    document.getElementById('b8').innerHTML='';
    document.getElementById('b9').innerHTML='';

  }
}
 
  
function  check(){
     if(
     (document.getElementById('b1').innerHTML=='O' && document.getElementById('b2').innerHTML=='O' && document.getElementById('b3').innerHTML=='O') ||
     (document.getElementById('b4').innerHTML=='O' && document.getElementById('b5').innerHTML=='O' && document.getElementById('b6').innerHTML=='O') ||
     (document.getElementById('b7').innerHTML=='O' && document.getElementById('b8').innerHTML=='O' && document.getElementById('b9').innerHTML=='O') ||
     (document.getElementById('b1').innerHTML=='O' && document.getElementById('b4').innerHTML=='O' && document.getElementById('b7').innerHTML=='O') ||
     (document.getElementById('b2').innerHTML=='O' && document.getElementById('b5').innerHTML=='O' && document.getElementById('b8').innerHTML=='O') ||
     (document.getElementById('b3').innerHTML=='O' && document.getElementById('b6').innerHTML=='O' && document.getElementById('b9').innerHTML=='O') ||
     (document.getElementById('b1').innerHTML=='O' && document.getElementById('b5').innerHTML=='O' && document.getElementById('b9').innerHTML=='O') ||
     (document.getElementById('b3').innerHTML=='O' && document.getElementById('b5').innerHTML=='O' && document.getElementById('b7').innerHTML=='O'))
     {
      alert ('User is the winner');
      return true;
     }
     else if (
      (document.getElementById('b1').innerHTML=='X' && document.getElementById('b2').innerHTML=='X' && document.getElementById('b3').innerHTML=='X') ||
      (document.getElementById('b4').innerHTML=='X' && document.getElementById('b5').innerHTML=='X' && document.getElementById('b6').innerHTML=='X') ||
      (document.getElementById('b7').innerHTML=='X' && document.getElementById('b8').innerHTML=='X' && document.getElementById('b9').innerHTML=='X') ||
      (document.getElementById('b1').innerHTML=='X' && document.getElementById('b4').innerHTML=='X' && document.getElementById('b7').innerHTML=='X') ||
      (document.getElementById('b2').innerHTML=='X' && document.getElementById('b5').innerHTML=='X' && document.getElementById('b8').innerHTML=='X') ||
      (document.getElementById('b3').innerHTML=='X' && document.getElementById('b6').innerHTML=='X' && document.getElementById('b9').innerHTML=='X') ||
      (document.getElementById('b1').innerHTML=='X' && document.getElementById('b5').innerHTML=='X' && document.getElementById('b9').innerHTML=='X') ||
      (document.getElementById('b3').innerHTML=='X' && document.getElementById('b5').innerHTML=='X' && document.getElementById('b7').innerHTML=='X'))
        {
        alert ('computer is the winner');
        return true;
      }
    
     else
     {
       return false;
     } 
  }