let phone = document.querySelectorAll(".img")

phone[0].addEventListener("click", function(){
	var pitems = document.querySelectorAll('.phone');
	for (var i = 0; i < pitems.length; i++) {
		if (pitems[i].style.display === "none") {
        pitems[i].style.display = "block";
    } else{
    	pitems[i].style.display = "none";
    } 
	}
	for (; i < pitems.length; i++) {
		if (pitems[i].style.display === "block" ){
			pitems[i].style.display = "none";
		} 
	}
	
})
phone[1].addEventListener("click", function(){
	var email = document.querySelectorAll('.email');
	for (var i = 0; i < email.length; i++) {
		if (email[i].style.display === "none"){
			email[i].style.display = "block";
		} else {
			email[i].style.display = "none";
		}
	}
	for (; i < email.length; i++) {
		if (email[i].style.display === "block"){
			email[i].style.display = "none";
		} 
	}
})
phone[2].addEventListener("click", function(){
	var adress = document.querySelectorAll('#adress');
	for (var i = 0; i < adress.length; i++) {
		if (adress[i].style.display === "none"){
			adress[i].style.display = "block";
		} else{
			adress[i].style.display = "none";
		}
	}
		for (; i < adress.length; i++) {
		if (adress[i].style.display === "block"){
			adress[i].style.display = "none";
		} 
	}
})
