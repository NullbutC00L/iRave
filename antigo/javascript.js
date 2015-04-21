
var locked=0;
var state="Menu1";
var state_act="Menu1";
var txt="Pagamento";

function NFC(){
	if(locked==0){
	document.getElementById("imgProfile").style.visibility="hidden";
	document.getElementById("arrow_right").style.visibility="hidden";
	document.getElementById("arrow_left").style.visibility="hidden";
	document.getElementById("state1").style.visibility="hidden";

	document.getElementById("pay").style.visibility="visible";
	document.getElementById("edit").style.visibility="visible";
	document.getElementById("Saldo_inicial").style.visibility="visible";
	document.getElementById("passo1").style.visibility="visible";

	state=state_act;
	state_act="NFC";
}

}


function Pay(){
	if(locked==0){
	document.getElementById("pay").style.visibility="hidden";
	document.getElementById("edit").style.visibility="hidden";
	document.getElementById("Saldo_inicial").style.visibility="hidden";
	document.getElementById("passo1").style.visibility="hidden";
	document.getElementById("passo2_alt").style.visibility="hidden";

	/*document.getElementById("boxerr").style.backgroundImage = "url('sources/fingerprint.jpg')";*/
	
	document.getElementById("fingerprint").style.visibility="visible";
	document.getElementById("passo2").style.visibility="visible";
	state=state_act;
	state_act="Pay";
}
}
function Ok_alt(){

}

function Edit(){
	if(locked==0){
	document.getElementById("passo1").style.visibility="hidden";
	document.getElementById("pay").style.visibility="hidden";
	document.getElementById("edit").style.visibility="hidden";
	document.getElementById("Saldo_inicial").style.visibility="hidden";

	document.getElementById("passo2_alt").style.visibility="visible";
	document.getElementById("Ok_alt").style.visibility="visible";
	document.getElementById("forma").style.visibility="visible";
	document.getElementById("edit_form").style.visibility="visible";
	state=state_act;
	state_act="edit";	
	}
}



function fingerprint_set(){
		if(locked==0){
	document.getElementById("pay").style.visibility="hidden";
	document.getElementById("edit").style.visibility="hidden";
	document.getElementById("Saldo_inicial").style.visibility="hidden";
	document.getElementById("passo1").style.visibility="hidden";
	document.getElementById("passo2_alt").style.visibility="hidden";
	document.getElementById("forma").style.visibility="hidden";
	document.getElementById("Ok_alt").style.visibility="hidden";

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
		document.getElementById("passo2").style.visibility="hidden";
	document.getElementById("fingerprint").style.visibility="hidden";
	document.getElementById("sucesso").style.visibility="visible";
	document.getElementById("Ok").style.visibility="visible";
	document.getElementById("passo3").style.visibility="visible";

		state=state_act;
	state_act="payment";
	}
}

function Menu_NFC(){
	if(locked==0){
	document.getElementById("sucesso").value=txt;
	document.getElementById("sucesso").style.visibility="hidden";
	document.getElementById("Ok").style.visibility="hidden";
	document.getElementById("pay").style.visibility="hidden";
	document.getElementById("edit").style.visibility="hidden";
	document.getElementById("Saldo_inicial").style.visibility="hidden";
	document.getElementById("fingerprint").style.visibility="hidden";
	document.getElementById("passo1").style.visibility="hidden";
	document.getElementById("passo2").style.visibility="hidden";
	document.getElementById("passo3").style.visibility="hidden";
	document.getElementById("passo2_alt").style.visibility="hidden";
		document.getElementById("Ok_alt").style.visibility="hidden";
		document.getElementById("fingerprint_alt").style.visibility="hidden";
		document.getElementById("holograma").style.visibility="hidden";
		document.getElementById("hologame").style.visibility="hidden";

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
			document.getElementById("sucesso").value=txt;
	document.getElementById("sucesso").style.visibility="hidden";
	document.getElementById("Ok").style.visibility="hidden";
	document.getElementById("pay").style.visibility="hidden";
	document.getElementById("edit").style.visibility="hidden";
	document.getElementById("Saldo_inicial").style.visibility="hidden";
	document.getElementById("fingerprint").style.visibility="hidden";
	document.getElementById("passo1").style.visibility="hidden";
	document.getElementById("passo2").style.visibility="hidden";
	document.getElementById("passo3").style.visibility="hidden";
	document.getElementById("passo2_alt").style.visibility="hidden";
		document.getElementById("Ok_alt").style.visibility="hidden";
		document.getElementById("fingerprint_alt").style.visibility="hidden";
	document.getElementById("imgProfile").style.visibility="hidden";
	document.getElementById("state1").style.visibility="hidden";

	document.getElementById("holograma").style.visibility="visible";	
		state=state_act;
		state_act="Menu2";
	}	
}
function Menu_jogo(){
	if(locked==0){
		document.getElementById("holograma").style.visibility="hidden";
		document.getElementById("imgProfile").style.visibility="hidden";
		document.getElementById("imgProfile").style.visibility="hidden";

		document.getElementById("hologame").style.visibility="visible";
		state=state_act;
		state_act="Menu3";
	}
}

function MenuChoice_dir(){
	switch(state) {
	    case "Menu1":
	    	Menu_holograma();
	    	break;
	    case "Menu2":
	    	Menu_jogo();
	    	break;
	    case "Menu3":
	    	Menu_NFC();
	    	break;
	    default:
	    	Menu_NFC();
    

	}

}
function MenuChoice_left(){
	switch(state) {
	    case "Menu1":
	    	Menu_hologame();
	    	break;
	    case "Menu2":
	    	Menu_NFC();
	    	break;
	    case "Menu3":
	    	Menu_holograma();
	    	break;
	    default:
	    	Menu_holograma();
    

	}

}

function Block(){
	
	if(locked==0){
		locked=1;
		document.getElementById("sucesso").style.visibility="hidden";
	document.getElementById("Ok").style.visibility="hidden";
	document.getElementById("pay").style.visibility="hidden";
	document.getElementById("edit").style.visibility="hidden";
	document.getElementById("Saldo_inicial").style.visibility="hidden";
	document.getElementById("fingerprint").style.visibility="hidden";
		document.getElementById("imgProfile").style.visibility="hidden";
	document.getElementById("arrow_right").style.visibility="hidden";
	document.getElementById("arrow_left").style.visibility="hidden";
	document.getElementById("state").style.visibility="hidden";
	document.getElementById("passo1").style.visibility="hidden";
	document.getElementById("passo2").style.visibility="hidden";
	document.getElementById("passo3").style.visibility="hidden";
	document.getElementById("passo2_alt").style.visibility="hidden";
		document.getElementById("Ok_alt").style.visibility="hidden";
		document.getElementById("fingerprint_alt").style.visibility="hidden";

	/*document.getElementById("locked_screen").style.visibility="visible";*/
	document.getElementById("boxerr").style.backgroundImage = "url('sources/locked_screen.png')";
	
	}
	else{
		locked=0;
		document.getElementById("boxerr").style.backgroundImage = "url('')";
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