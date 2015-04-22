
var locked=0;
var state="Menu1";
var state_act="Menu1";
var txt="Pagamento";





/*******************FUNCIONALIDADE NFC ********************************/
function NFC(){
	if(locked==0){
	document.getElementById("imgProfile").style.visibility="hidden";
	

	document.getElementById("pay").style.visibility="visible";
	document.getElementById("Saldo_inicial").style.visibility="visible";
	document.getElementById("edit").style.visibility="visible";
	document.getElementById("passo1").style.visibility="visible";

	state = state_act;
	state_act="NFC";
}

}


function Pay(){
	if(locked==0){
	document.getElementById("NFC_1").style.visibility="hidden";
		document.getElementById("NFC_3").style.visibility="hidden";



	/*document.getElementById("boxerr").style.backgroundImage = "url('sources/fingerprint.jpg')";*/
	
	document.getElementById("NFC_2").style.visibility="visible";
	state=state_act;
	state_act="Pay";
	}
}


function Edit(){
	if(locked==0){
	document.getElementById("NFC_1").style.visibility="hidden";

	document.getElementById("fingerprint").style.visibility="visible";
	state=state_act;
	state_act="edit";	
	}
}



function fingerprint(){
		if(locked==0){
	document.getElementById("NFC_1").style.visibility="hidden";


	/*document.getElementById("boxerr").style.backgroundImage = "url('sources/fingerprint.jpg')";*/
	
	document.getElementById("fingerprint_alt").style.visibility="visible";
	document.getElementById("passo3").style.visibility="visible";
	state=state_act;
	state_act="Pay";
}
}

function Saldo(){}

function Payment_completed(){
	if(locked==0){
	document.getElementById("NFC_2").style.visibility="hidden";


	document.getElementById("sucesso").style.visibility="visible";
	document.getElementById("Ok").style.visibility="visible";
	document.getElementById("passo3").style.visibility="visible";

		state=state_act;
	state_act="payment";
	}
}


/*******************ECRÃS DO MENU PRINCIPAL ********************************/

function Menu_NFC(){
	if(locked==0){
	document.getElementById("imgProfile").style.visibility="hidden";
	document.getElementById("holograma").style.visibility="hidden";
	document.getElementById("state2").style.visibility="hidden";


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
	switch(state) {
    case "NFC":
        Menu_NFC()
        NFC();
        break;
    case "Pay":
    	Menu_NFC()
        NFC();
        Pay();
        break;
    case "edit":
    	Menu_NFC()
        NFC();
        Edit();
        break;
    case "payment":
    	Menu_NFC()
        NFC();
        Pay();
        Payment_completed();
        break;
    case "Menu1":
        Menu_NFC();
        break;
    case "Menu2":
    	Menu_holograma();
    	break;
    case "Menu3":
    	Menu_jogo();
    	break;
    default:
        Menu_NFC();
}
}


/*function rock(){
    document.getElementById('image1').style.display = 'block';
    document.getElementById('image2').style.display = 'none';
    document.getElementById('image3').style.display = 'none';
}
*/