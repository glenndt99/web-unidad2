function actual() {
			fecha=new Date(); //Actualizar fecha.
			hora=fecha.getHours(); //hora actual
			minuto=fecha.getMinutes(); //minuto actual
			segundo=fecha.getSeconds(); //segundo actual
			if (hora<10) { //dos cifras para la hora
				hora="0"+hora;
			}
			if (minuto<10) { //dos cifras para el minuto
				minuto="0"+minuto;
			}
			if (segundo<10) { //dos cifras para el segundo
				segundo="0"+segundo;
			}
			//devolver los datos:
			mireloj = hora+" : "+minuto+" : "+segundo;	
			return mireloj
		}
			
		function actualizar() { //función del temporizador
			mihora=actual(); //recoger hora actual
			mireloj=document.getElementById("reloj"); //buscar elemento reloj
			mireloj.innerHTML=mihora; //incluir hora en elemento
		}
	setInterval(actualizar,1000); //iniciar temporizador

var emailArray=[];
        var passwordArray=[];

        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
        var forgetBox = document.getElementById("forgot");

        var loginTab = document.getElementById("lt");
        var regTab = document.getElementById("rt");

        function regTabFun(){
            event.preventDefault();

            regBox.style.visibility="visible";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="hidden";

            regTab.style.backgroundColor="rgb(12, 132, 189)";
            loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
        }
        function loginTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="visible";
            forgetBox.style.visibility="hidden";

            loginTab.style.backgroundColor="rgb(12, 132, 189)";
            regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
        }
        function forTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="visible";

            regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
            loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

        }


        function register(){
            event.preventDefault();

            var email = document.getElementById("re").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rrp").value;

            if (email == ""){
                alert("Ingresa email.");
                return ;
            }
            else if (password == ""){
                alert("Ingresa contraseña.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Ingresa contraseña.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("No coinciden las contraseñas. Escribir de nuevo");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);

                alert(email + "  Gracias por registrarte. \nIntenta iniciar sesión");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
            }
            else{
                alert(email + " ya registrado.");
                return ;
            }
        }
        function login(){
            event.preventDefault();

            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Ingresa email.");
                    return ;
                }
                alert("Email no existente.");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Ingresa password.");
                    return ;
                }
                alert("No coinciden las contraseñas.");
                return ;
            }
            else {
                alert(email + " Inicio de sesión correcto \n Bienvenido a Microtech.");

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                return ;
            }

        }
        function forgot(){
            event.preventDefault();

            var email = document.getElementById("fe").value;

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Ingresa email.");
                    return ;
                }
                alert("Email no existente.");
                return ;
            }

            alert("Revisa tu correo electrónico en 24 horas. \n Gracias");
            document.getElementById("fe").value ="";
        }
		
		function openForm() {
			document.getElementById("myForm").style.display = "block";
		}

		function closeForm() {
		  document.getElementById("myForm").style.display = "none";
		}
        function sendContact(){
            var bool = new Boolean(false);
            re=/^([\da-z_.-]+)@([\da-z,-]+).([a-z.]{2,6})$/
            if(document.forma.nombre.value ==''){
            alert("Ingrese un nombre.");
            document.forma.nombre.focus();
            return false;
            }
            if(document.forma.apellido.value ==''){
                alert("Ingrese un apellido.");
                document.forma.apellido.focus();
                bool = true;
                return false;
            }
    
            if(!re.exec(document.forma.email.value)){
                alert('email no valido');
                bool = true;
            }
    
            if(document.forma.question.value ==''){
                alert("Ingrese un comentario.");
                document.forma.question.focus();
                bool = true;
                return false;
            }
            
            if (bool == false){
            alert('Mensaje enviado!')
            return;
            }
            
        }