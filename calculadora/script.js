const display = document.getElementById('display');

const buttons = document.querySelectorAll("button");


buttons.forEach((item)=>{
	item.onclick =()=>{
		//clear limpiar pantalla
		if(item.id=="clear"){
			display.innerText="";

			//backspace borrar digito
		}else if (item.id=="backspace"){
			let string = display.innerText.toString();
			display.innerText =string.substr(0,string.length-1);

		}
			//cuenta
		else if(display.innerText !="" && item.id=="equal"){
			display.innerText = eval(display.innerText) 
		}


		else if (display.innerText=="" && item.id=="equal" ){
			display.innerText ="Null";
			setTimeout(()=>(display.innerText=""),2000);
		}else {
			display.innerText +=item.id
		}



	}
})
