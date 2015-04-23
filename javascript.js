var locked=0;
var state="Menu1";
var state_act="Menu1";
var txt="Pagamento";
var Timer1=null;
var Timer2=null;
var Timer3=null;
var audio = new Audio('sounds/beep.wav');

var holi="";

var Help=0;


/*******************FUNCIONALIDADE NFC ********************************/
function NFC(){
	if(locked==0){
	document.getElementById("imgProfile").style.visibility="hidden";
	document.getElementById("state1").style.visibility="hidden";
	document.getElementById("arrow_right").style.visibility="hidden";
	document.getElementById("arrow_left").style.visibility="hidden";
	document.getElementById("loading").style.visibility="hidden";
	document.getElementById("sensor_text").style.visibility="hidden";
	document.getElementById("help_main_menu").style.visibility="hidden";
	document.getElementById("help_autenticacao").style.visibility="hidden";
	document.getElementById("help_sucesso").style.visibility="hidden";
	document.getElementById("help_loading").style.visibility="hidden";
	
	document.getElementById("auth_text").style.visibility="visible";
	document.getElementById("fingerprint").style.visibility="visible";

	state = state_act;
	state_act="NFC";
}
}
function finger(){
	if(locked==0){
		document.getElementById("help_loading").style.visibility="hidden";
	document.getElementById("auth_text").style.visibility="hidden";
	document.getElementById("fingerprint").style.visibility="hidden";
	document.querySelector(".framee").style.backgroundColor = "white";
    document.querySelector(".dashboard").style.backgroundColor = "white";
	document.querySelector(".header").style.backgroundColor = "white";


	document.getElementById("loading").style.visibility="visible";
	document.getElementById("sensor_text").style.visibility="visible";
	state=state_act;
	state_act="finger";
	}
}

function sucesso(){
	clearTimeout(Timer3);
	if(locked==0){
	  
	  audio.play();
	
	document.getElementById("sensor_text").style.visibility="hidden";
	document.getElementById("loading").style.visibility="hidden";
	document.getElementById("thephoto").style.visibility="hidden";
	document.querySelector(".framee").style.backgroundColor = "rgb(52, 73, 94)";
	document.querySelector(".header").style.backgroundColor = "rgb(52, 73, 94)";
    document.querySelector(".dashboard").style.backgroundColor = "rgb(41, 128, 185)";
	document.getElementById('quat').style.visibility = 'hidden';


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
		document.getElementById("cartaz1_alt").style.visibility="hidden";
		document.getElementById("cartaz2_alt").style.visibility="hidden";
		document.getElementById("cartaz3_alt").style.visibility="hidden";
		document.getElementById("cartaz4_alt").style.visibility="hidden";
		document.getElementById("start").style.visibility="hidden";
		document.getElementById("cartaz1").style.opacity="0.99";
		document.getElementById("cartaz2").style.opacity="0.99";
		document.getElementById("cartaz3").style.opacity="0.99";
		document.getElementById("cartaz4").style.opacity="0.99";
		document.getElementById("cartaz1").style.visibility="hidden";
		document.getElementById("cartaz2").style.visibility="hidden";
		document.getElementById("cartaz3").style.visibility="hidden";
		document.getElementById("cartaz4").style.visibility="hidden";
		document.getElementById("holograma").style.visibility="hidden";
		document.getElementById("state2").style.visibility="hidden";
		document.getElementById("arrow_right").style.visibility="hidden";
		document.getElementById("arrow_left").style.visibility="hidden";
		document.getElementById("help_holograma").style.visibility="hidden";	

		document.getElementById("cartaz1").style.visibility="visible";
		document.getElementById("cartaz2").style.visibility="visible";
		document.getElementById("cartaz3").style.visibility="visible";
		document.getElementById("cartaz4").style.visibility="visible";

		state=state_act;
		state_act="holograma";
	}
}

function press1(){
	if(locked==0){
		holi="1";
		document.getElementById("help_holograma_1").style.visibility="hidden";
		document.getElementById("cartaz1").style.visibility="hidden";
		document.getElementById("cartaz1_alt").style.visibility="visible";
		document.getElementById("start").style.visibility="visible";
		document.getElementById("cartaz2").style.opacity = "0.2";
		document.getElementById("cartaz3").style.opacity = "0.2";
		document.getElementById("cartaz4").style.opacity = "0.2";
		state=state_act;
		state_act="press1";
	}
}
function press2(){
	if(locked==0){
		holi="2";
		document.getElementById("help_holograma_1").style.visibility="hidden";
		document.getElementById("cartaz2").style.visibility="hidden";
		document.getElementById("cartaz2_alt").style.visibility="visible";
		document.getElementById("start").style.visibility="visible";
		document.getElementById("cartaz3").style.opacity = "0.2";
		document.getElementById("cartaz1").style.opacity = "0.2";
		document.getElementById("cartaz4").style.opacity = "0.2";
		state=state_act;
		state_act="press2";
	}
}
function press3(){
	if(locked==0){
		holi="3";
		document.getElementById("help_holograma_1").style.visibility="hidden";
		document.getElementById("cartaz3").style.visibility="hidden";
		document.getElementById("cartaz3_alt").style.visibility="visible";
		document.getElementById("start").style.visibility="visible";
		document.getElementById("cartaz1").style.opacity = "0.2";
		document.getElementById("cartaz2").style.opacity = "0.2";
		document.getElementById("cartaz4").style.opacity = "0.2";
		state=state_act;
		state_act="press3";
	}
}
function press4(){
	if(locked==0){
		holi="4";
		document.getElementById("help_holograma_1").style.visibility="hidden";
		document.getElementById("cartaz4").style.visibility="hidden";
		document.getElementById("cartaz4_alt").style.visibility="visible";
		document.getElementById("start").style.visibility="visible";
		document.getElementById("cartaz1").style.opacity = "0.2";
		document.getElementById("cartaz2").style.opacity = "0.2";
		document.getElementById("cartaz3").style.opacity = "0.2";
		state=state_act;
		state_act="press4";
	}
}
function reproduzir(){
	if(locked==0){
		document.getElementById("cartaz1").style.opacity = "0.99";
		document.getElementById("cartaz1").style.opacity = "0.99";
		document.getElementById("cartaz2").style.opacity = "0.99";
		document.getElementById("cartaz3").style.opacity = "0.99";
		document.getElementById("cartaz1").style.visibility="hidden";
		document.getElementById("cartaz2").style.visibility="hidden";
		document.getElementById("cartaz3").style.visibility="hidden";
		document.getElementById("cartaz4").style.visibility="hidden";
		document.getElementById("start").style.visibility="hidden";

		document.getElementById("feixe").style.visibility="visible";
		document.getElementById("parar").style.visibility="visible";

		switch (holi){
			case "1":
				document.getElementById("cartaz2").style.visibility= "visible";
				document.getElementById("cartaz3").style.visibility= "visible";
				document.getElementById("cartaz4").style.visibility= "visible";
				document.getElementById("cartaz2").style.opacity = "0.2";
				document.getElementById("cartaz3").style.opacity = "0.2";
				document.getElementById("cartaz4").style.opacity = "0.2";

				document.getElementById("cartaz1_grande").style.visibility="visible";
			break;
			case "2":
				document.getElementById("cartaz1").style.opacity = "0.2";
				document.getElementById("cartaz3").style.opacity = "0.2";
				document.getElementById("cartaz4").style.opacity = "0.2";
				document.getElementById("cartaz1").style.visibility= "visible";
				document.getElementById("cartaz3").style.visibility= "visible";
				document.getElementById("cartaz4").style.visibility= "visible";

				document.getElementById("cartaz2_grande").style.visibility="visible";
			break;
			case "3":
				document.getElementById("cartaz2").style.opacity = "0.2";
				document.getElementById("cartaz1").style.opacity = "0.2";
				document.getElementById("cartaz4").style.opacity = "0.2";
				document.getElementById("cartaz2").style.visibility= "visible";
				document.getElementById("cartaz1").style.visibility= "visible";
				document.getElementById("cartaz4").style.visibility= "visible";

				document.getElementById("cartaz3_grande").style.visibility="visible";
			break;
			case "4":
				document.getElementById("cartaz2").style.opacity = "0.2";
				document.getElementById("cartaz3").style.opacity = "0.2";
				document.getElementById("cartaz1").style.opacity = "0.2";
				document.getElementById("cartaz2").style.visibility= "visible";
				document.getElementById("cartaz3").style.visibility= "visible";
				document.getElementById("cartaz1").style.visibility= "visible";
				
				document.getElementById("cartaz4_grande").style.visibility="visible";
			break;
			default:

		}
		state=state_act;
		state_act="reproduzir";

	}
}

function parar(){
		if(locked==0){
			document.getElementById("cartaz1").style.opacity = "0.2";
			document.getElementById("cartaz1").style.opacity = "0.2";
			document.getElementById("cartaz2").style.opacity = "0.2";
			document.getElementById("cartaz3").style.opacity = "0.2";
			document.getElementById("feixe").style.visibility="hidden";
			document.getElementById("parar").style.visibility="hidden";
			document.getElementById("start").style.visibility="visible";

			document.getElementById("cartaz1").style.visibility="visible";
			document.getElementById("cartaz2").style.visibility="visible";
			document.getElementById("cartaz3").style.visibility="visible";
			document.getElementById("cartaz4").style.visibility="visible";

			switch (holi){
			case "1":
				document.getElementById("cartaz1_grande").style.visibility="hidden";
				document.getElementById("cartaz1").style.visibility="hidden";
				document.getElementById("cartaz1_alt").style.visibility="visible";
			break;
			case "2":
				document.getElementById("cartaz2_grande").style.visibility="hidden";
				document.getElementById("cartaz2").style.visibility="hidden";
				document.getElementById("cartaz2_alt").style.visibility="visible";
			break;
			case "3":
				document.getElementById("cartaz3").style.visibility="hidden";
				document.getElementById("cartaz3_grande").style.visibility="hidden";
				document.getElementById("cartaz3_alt").style.visibility="visible";
			break;
			case "4":
				document.getElementById("cartaz4").style.visibility="hidden";
				document.getElementById("cartaz4_grande").style.visibility="hidden";
				document.getElementById("cartaz4_alt").style.visibility="visible";
			break;
			default:

		}
		state=state_act;
		state_act="parar";
	}
}








	/*document.getElementById("boxerr").style.backgroundImage = "url('sources/fingerprint.jpg')";*/


	/*document.getElementById("boxerr").style.backgroundImage = "url('sources/fingerprint.jpg')";*/




/*******************ECRÃS DO MENU PRINCIPAL ********************************/

function Menu_NFC(){
	if(locked==0){
			parar();
			document.querySelector(".framee").style.backgroundColor = "rgb(52, 73, 94)";
			document.querySelector(".header").style.backgroundColor = "rgb(52, 73, 94)";
   			document.querySelector(".dashboard").style.backgroundColor = "rgb(41, 128, 185)";
			document.getElementById("parar").style.visibility="hidden";
		document.getElementById("cartaz1_alt").style.visibility="hidden";
		document.getElementById("cartaz2_alt").style.visibility="hidden";
		document.getElementById("cartaz3_alt").style.visibility="hidden";
		document.getElementById("cartaz4_alt").style.visibility="hidden";
		document.getElementById("start").style.visibility="hidden";
		document.getElementById("cartaz1").style.opacity="0.99";
		document.getElementById("cartaz2").style.opacity="0.99";
		document.getElementById("cartaz3").style.opacity="0.99";
		document.getElementById("cartaz4").style.opacity="0.99";
		document.getElementById("cartaz1").style.visibility="hidden";
		document.getElementById("cartaz2").style.visibility="hidden";
		document.getElementById("cartaz3").style.visibility="hidden";
		document.getElementById("cartaz4").style.visibility="hidden";
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
		document.getElementById("help_holograma").style.visibility="hidden";
		document.getElementById("help_holograma_1").style.visibility="hidden";
	


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
		document.getElementById("cartaz1").style.visibility="hidden";
		document.getElementById("cartaz2").style.visibility="hidden";
		document.getElementById("cartaz3").style.visibility="hidden";
		document.getElementById("cartaz4").style.visibility="hidden";
		document.getElementById("imgProfile").style.visibility="hidden";
		document.getElementById("state1").style.visibility="hidden";
		document.getElementById("help_main_menu").style.visibility="hidden";
		document.getElementById("help_autenticacao").style.visibility="hidden";
		document.getElementById("help_sucesso").style.visibility="hidden";
		document.getElementById("help_loading").style.visibility="hidden";
		document.getElementById("help_holograma").style.visibility="hidden";
		document.getElementById("help_holograma_1").style.visibility="hidden";

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
	if (Help==0){
		switch(state_act) {
	    case "NFC":
	        Menu_NFC();
	        break;
	    case "finger":
	    	document.querySelector(".framee").style.backgroundColor = "rgb(52, 73, 94)";
			document.querySelector(".header").style.backgroundColor = "rgb(52, 73, 94)";
   			document.querySelector(".dashboard").style.backgroundColor = "rgb(41, 128, 185)";
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
	    case "holograma":
	    	Menu_holograma();
	    	break;
	    case "back":
	    	Menu_holograma();
	    	holo();
	    	break
	   	case "reproduzir":
	   		switch(holi){
	   			case "1":
	   				parar();
	   				press1();
	   			break;
	   			case "2":
	   				parar();
	   				press2();
	   			break;
	   			case "3":
	   				parar();
	   				press3();
	   			break;
	   			case "4":
	   				parar();
	   				press4();
	   			break;

	   		}
	   		
	   		
	   		break;

	    default:
	        Menu_holograma();
	    	holo();
		}
	}
	//back para o caso de anes ter estado no menu de
	switch(state_act) {
	    case "NFC":
	        NFC();
	        Help=0;
	        break;
	    case "finger":
	    	finger();
	    	
	    	Help=0;
	        break;
	    case "sucesso":
	        Menu_NFC();
	        Help=0;
	        break;
	    case "Menu1":
	        Menu_NFC();
	        Help=0;
	        break;

	    case "Menu2":
	    	Menu_holograma();
	    	Help=0;
	    	break;
	    case "holograma":
	    	Help=0;
	    	holo()
	    	break;
	    case "back":
	    	Help=0;
	    	Menu_holograma();
	    	holo();
	    	break
	    case "press1":
	   		Help=0;
	   		document.getElementById("cartaz2").style.visibility= "visible";
			document.getElementById("cartaz3").style.visibility= "visible";
			document.getElementById("cartaz4").style.visibility= "visible";
	    	press1();

	    	break;
	    case "press2":
	   		Help=0;
	   		document.getElementById("cartaz1").style.visibility= "visible";
			document.getElementById("cartaz3").style.visibility= "visible";
			document.getElementById("cartaz4").style.visibility= "visible";
	    	press2();
	    	break;
	    case "press3":
	   		Help=0;
	   		document.getElementById("cartaz2").style.visibility= "visible";
			document.getElementById("cartaz1").style.visibility= "visible";
			document.getElementById("cartaz4").style.visibility= "visible";
	    	press3();
	    	break;
	    case "press4":
	   		Help=0;
	   		document.getElementById("cartaz2").style.visibility= "visible";
			document.getElementById("cartaz3").style.visibility= "visible";
			document.getElementById("cartaz1").style.visibility= "visible";
	    	press4();
	    	break;
	    case "reproduzir":
	   		Help=0;

	   		switch(holi){
	   			case "1":
	   				document.getElementById("help_holograma_2").style.visibility="hidden";
	   				press1();
	   				reproduzir();
	   			break;
	   			case "2":
	   				document.getElementById("help_holograma_2").style.visibility="hidden";
	   				press2();
	   				reproduzir();
	   			break;
	   			case "3":
	   				document.getElementById("help_holograma_2").style.visibility="hidden";
	   				press3();
	   				reproduzir();
	   			break;
	   			case "4":
	   				document.getElementById("help_holograma_2").style.visibility="hidden";
	   				press4();
	   				reproduzir();
	   			break;

	   		}
	   		

	    	
	    	break;


	     case "parar":
	   		Help=0;

	   		switch(holi){
	   			case "1":
	   				document.getElementById("cartaz2").style.visibility= "visible";
					document.getElementById("cartaz3").style.visibility= "visible";
					document.getElementById("cartaz4").style.visibility= "visible";
	   				document.getElementById("help_holograma_1").style.visibility="hidden";
	   				press1();
	   				
	   			break;
	   			case "2":
	   				document.getElementById("cartaz1").style.visibility= "visible";
					document.getElementById("cartaz3").style.visibility= "visible";
					document.getElementById("cartaz4").style.visibility= "visible";
	   				document.getElementById("help_holograma_1").style.visibility="hidden";
	   				press2();
	   				
	   			break;
	   			case "3":
	   				document.getElementById("cartaz2").style.visibility= "visible";
					document.getElementById("cartaz1").style.visibility= "visible";
					document.getElementById("cartaz4").style.visibility= "visible";
	   				document.getElementById("help_holograma_1").style.visibility="hidden";
	   				press3();
	   				
	   			break;
	   			case "4":
	   				document.getElementById("cartaz2").style.visibility= "visible";
					document.getElementById("cartaz3").style.visibility= "visible";
					document.getElementById("cartaz1").style.visibility= "visible";
	   				document.getElementById("help_holograma_1").style.visibility="hidden";
	   				press4();
	   				
	   			break;

	   		}
	   		

	    	
	    	break;



	    	
	    default:
	        Help=0;
	        Menu_holograma();
	    	holo();
		}
}
/******************************/

/* Animações */
function um(){
  	  document.getElementById('uno').style.visibility = 'hidden';
      document.getElementById('dos').style.visibility = 'visible';

      Timer1 = setInterval("dois()",1000);
      
      
}

function dois(){
  document.getElementById('dos').style.visibility = 'hidden'
      document.getElementById('tres').style.visibility = 'visible';
      clearTimeout(Timer1);
      Timer2 = setInterval("tres()",1000);
      
     
}

function tres(){
  document.getElementById('tres').style.visibility = 'hidden';
  document.getElementById('quat').style.visibility = 'visible';
  clearTimeout(Timer2);


   Timer3 = setInterval("sucesso()",1000);
  
  
}

// function showImage(){
//   document.getElementById('quat').style.visibility = 'hidden';
//   if(count!=2){
//   	count++;
//     document.getElementById('uno').style.visibility = 'visible';
	
//     var Timer = setInterval("um()",1000);
    
//   }
//   else{
//    	sucesso();
//   }
// }

/***** DISPLAY HELP FUNCT ******/
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
		document.getElementById("cartaz1").style.visibility="hidden";
		document.getElementById("cartaz2").style.visibility="hidden";
		document.getElementById("cartaz3").style.visibility="hidden";
		document.getElementById("cartaz4").style.visibility="hidden";
		document.getElementById("cartaz1_alt").style.visibility="hidden";
		document.getElementById("cartaz2_alt").style.visibility="hidden";
		document.getElementById("cartaz3_alt").style.visibility="hidden";
		document.getElementById("cartaz4_alt").style.visibility="hidden";
		document.getElementById("start").style.visibility="hidden";

		switch(state_act){
		    case "NFC":
				document.getElementById("help_autenticacao").style.visibility="visible";		
		        Help=1;
		        break;
		    case "finger":
		    	Help=1;
		    	document.getElementById("help_loading").style.visibility="visible";
		        break;
		    case "sucesso":
		    	Help=1;
		    	document.getElementById("help_sucesso").style.visibility="visible";
		        break;
		    case "Menu1":
		        Help=1;
		        document.getElementById("help_main_menu").style.visibility="visible";
		        break;
		    case "Menu2":
		    	Help=1;
		    	document.getElementById("help_main_menu").style.visibility="visible";
		    	break;
        	case "holograma":
		    	Help=1;
		    	document.getElementById("help_holograma").style.visibility="visible";
		    	break;
	    	case "press1":
	    		Help=1;
	    		document.getElementById("help_holograma_1").style.visibility="visible";
		    	break;
	    	case "press2":
	    		Help=1;
	    		document.getElementById("help_holograma_1").style.visibility="visible";
		    	break;
	    	case "press3":
	    		Help=1;
	    		document.getElementById("help_holograma_1").style.visibility="visible";
		    	break;
	    	case "press4":
	    		Help=1;
	    		document.getElementById("help_holograma_1").style.visibility="visible";
		    	break;
		    case "reproduzir":
		    	Help=1;
		    	document.getElementById("help_holograma_2").style.visibility="visible";
		    	document.getElementById("parar").style.visibility="hidden";
		    	break;
		    case "parar":
		    	Help=1;
		    	document.getElementById("help_holograma_1").style.visibility="visible";
		    	document.getElementById("parar").style.visibility="hidden";
		    	break;

		}
	}
}