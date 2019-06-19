function post() {
	//collect user input
	var username = document.getElementById("username").value
	
	var comment = document.getElementById("comment").value
	var emptyDiv = document.getElementById("emptyDiv").value
	//creating new tags
	var d = new Date()
	var p = document.createElement("p")
	
	var h1 = document.createElement("p")
	var h3 = document.createElement("p")
	
	//putting information into the new tags
	p.innerHTML = d.toString()
	
	h1.innerHTML = username
	h3.innerHTML = comment
	
	//putting the new tags into the emptyDiv on page
	document.getElementById("emptyDiv").appendChild(p)
	
	document.getElementById("emptyDiv").appendChild(h1)
	document.getElementById("emptyDiv").appendChild(h3)
	

}
