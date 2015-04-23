var locked=0;
var state="Menu1";
var state_act="Menu1";
var txt="Pagamento";


/*******************FUNCIONALIDADE NFC ********************************/
function NFC(){
	if(locked==0){
	document.getElementById("imgProfile").style.visibility="hidden";
	document.getElementById("state1").style.visibility="hidden";
	document.getElementById("arrow_right").style.visibility="hidden";
	document.getElementById("arrow_left").style.visibility="hidden";
	document.getElementById("loading").style.visibility="hidden";
	document.getElementById("sensor_text").style.visibility="hidden";
	
	document.getElementById("auth_text").style.visibility="visible";
	document.getElementById("fingerprint").style.visibility="visible";

	state = state_act;
	state_act="NFC";
}
}
function finger(){
	if(locked==0){
	document.getElementById("auth_text").style.visibility="hidden";
	document.getElementById("fingerprint").style.visibility="hidden";


	document.getElementById("loading").style.visibility="visible";
	document.getElementById("sensor_text").style.visibility="visible";
	state=state_act;
	state_act="finger";
	}
}

function sucesso(){
	if(locked==0){
	
	document.getElementById("sensor_text").style.visibility="hidden";
	document.getElementById("loading").style.visibility="hidden";
	document.getElementById("thephoto").style.visibility="hidden";
	



	document.getElementById("cartao").style.visibility="visible";
	document.getElementById("sucesso_text").style.visibility="visible";
	document.getElementById("certo").style.visibility="visible";
	state=state_act;
	state_act="sucesso";
	}
}


/*******************FUNCIONALIDADE HOLOGRAMA ********************************/


function holo(){
	if(locked==0){
		document.getElementById("holograma").style.visibility="hidden";
		document.getElementById("state2").style.visibility="hidden";
		document.getElementById("arrow_right").style.visibility="hidden";
		document.getElementById("arrow_left").style.visibility="hidden";	

		document.getElementById("cartaz1").style.visibility="visible";
		document.getElementById("cartaz2").style.visibility="visible";
		document.getElementById("cartaz3").style.visibility="visible";
		document.getElementById("cartaz4").style.visibility="visible";

		state=state_act;
		state_act="holograma";
	}
}






	/*document.getElementById("boxerr").style.backgroundImage = "url('sources/fingerprint.jpg')";*/


	/*document.getElementById("boxerr").style.backgroundImage = "url('sources/fingerprint.jpg')";*/




/*******************ECRÃS DO MENU PRINCIPAL ********************************/

function Menu_NFC(){
	if(locked==0){
	document.getElementById("cartao").style.visibility="hidden";
	document.getElementById("sucesso_text").style.visibility="hidden";
	document.getElementById("certo").style.visibility="hidden";
	document.getElementById("loading").style.visibility="hidden";
	document.getElementById("auth_text").style.visibility="hidden";
	document.getElementById("fingerprint").style.visibility="hidden";
	document.getElementById("imgProfile").style.visibility="hidden";
	document.getElementById("holograma").style.visibility="hidden";
	document.getElementById("state2").style.visibility="hidden";
	document.getElementById("sensor_text").style.visibility="hidden";
	document.getElementById("loading").style.visibility="hidden";
	document.getElementById("thephoto").style.visibility="hidden";
	document.getElementById("help_main_menu").style.visibility="hidden";
	document.getElementById("help_autenticacao").style.visibility="hidden";
	document.getElementById("help_sucesso").style.visibility="hidden";
	document.getElementById("help_loading").style.visibility="hidden";
	


	document.getElementById("imgProfile").style.visibility="visible";
	document.getElementById("state1").style.visibility="visible";
	document.getElementById("arrow_right").style.visibility="visible";
	document.getElementById("arrow_left").style.visibility="visible";
	state=state_act;
	state_act="Menu1";
	}
}

function Menu_holograma(){
	if(locked==0){
	document.getElementById("imgProfile").style.visibility="hidden";
	document.getElementById("state1").style.visibility="hidden";

	document.getElementById("holograma").style.visibility="visible";
	document.getElementById("state2").style.visibility="visible";
	document.getElementById("arrow_right").style.visibility="visible";
	document.getElementById("arrow_left").style.visibility="visible";	
		state=state_act;
		state_act="Menu2";
	}	
}

function MenuChoice_dir(){
	if(state_act=="Menu1"){
		Menu_holograma();
	}
	else{
		Menu_NFC();
	}
}


/*******************TECLA DE BLOQUEIO DO ECRÃ ********************************/
function Block(){
	
	if(locked==0){
		locked=1;
		document.getElementById("NFC_1").style.visibility="hidden";
		document.getElementById("NFC_2").style.visibility="hidden";
		document.getElementById("NFC_3").style.visibility="hidden";
		document.getElementById("main_menu").style.visibility="hidden";


	/*document.getElementById("locked_screen").style.visibility="visible";*/
	document.getElementById("boxe").style.backgroundImage = "url('sources/locked_screen.png')";
	
	}
	else{
		locked=0;
		document.getElementById("boxe").style.backgroundImage = "url('')";
		Menu_NFC();

	}
}

function back(){
	switch(state_act) {
    case "NFC":
        Menu_NFC();
        break;
    case "finger":
    	NFC();
        break;
    case "sucesso":
        Menu_NFC();
        break;
    case "Menu1":
        Menu_NFC();
        break;
    case "Menu2":
    	Menu_holograma();
    	break;
    default:
        Menu_NFC();
}
}
/******************************/
function showImage(){
  document.getElementById('quat').style.visibility = 'hidden';
  if(count!=2){
  	count++;
    document.getElementById('uno').style.visibility = 'visible';
	
    var Timer = setInterval("um()",1000);
    
  }
  else{
   	sucesso();
  }
}

/* Animações */
function um(){
  	  document.getElementById('uno').style.visibility = 'hidden';
      document.getElementById('dos').style.visibility = 'visible';

      var Timer = setInterval("dois()",1000);
}

function dois(){
  document.getElementById('dos').style.visibility = 'hidden'
      document.getElementById('tres').style.visibility = 'visible';

      var Timer = setInterval("tres()",1000);
}

function tres(){
  document.getElementById('tres').style.visibility = 'hidden';
  document.getElementById('quat').style.visibility = 'visible';

  var Timer = setInterval("showImage()",1000);
}

/*function rock(){
    document.getElementById('image1').style.display = 'block';
    document.getElementById('image2').style.display = 'none';
    document.getElementById('image3').style.display = 'none';
}
*/

function help(){
	if(locked==0){
		document.getElementById("cartao").style.visibility="hidden";
		document.getElementById("sucesso_text").style.visibility="hidden";
		document.getElementById("certo").style.visibility="hidden";
		document.getElementById("loading").style.visibility="hidden";
		document.getElementById("auth_text").style.visibility="hidden";
		document.getElementById("fingerprint").style.visibility="hidden";
		document.getElementById("imgProfile").style.visibility="hidden";
		document.getElementById("holograma").style.visibility="hidden";
		document.getElementById("state2").style.visibility="hidden";
		document.getElementById("sensor_text").style.visibility="hidden";
		document.getElementById("loading").style.visibility="hidden";
		document.getElementById("thephoto").style.visibility="hidden";
		document.getElementById("imgProfile").style.visibility="hidden";
		document.getElementById("state1").style.visibility="hidden";
		document.getElementById("arrow_right").style.visibility="hidden";
		document.getElementById("arrow_left").style.visibility="hidden";

		switch(state_act){
		    case "NFC":
				document.getElementById("help_autenticacao").style.visibility="visible";		
		        break;
		    case "finger":
		    	document.getElementById("help_loading").style.visibility="visible";
		        break;
		    case "sucesso":
		    	document.getElementById("help_sucesso").style.visibility="visible";
		        break;
		    case "Menu1":
		        document.getElementById("help_main_menu").style.visibility="visible";
		        break;
		    case "Menu2":
		    	document.getElementById("help_holograma").style.visibility="visible";
		    	break;
		}
	}
}