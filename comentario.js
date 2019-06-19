function post() {
	
	var username = document.getElementById("username").value
	
	var comment = document.getElementById("comment").value
	var emptyDiv = document.getElementById("emptyDiv").value

	var d = new Date()
	var p = document.createElement("p")
	
	var h1 = document.createElement("p")
	var h3 = document.createElement("p")
	
	
	p.innerHTML = d.toString()
	
	h1.innerHTML = username
	h3.innerHTML = comment
	
	
	document.getElementById("emptyDiv").appendChild(p)
	
	document.getElementById("emptyDiv").appendChild(h1)
	document.getElementById("emptyDiv").appendChild(h3)
	

}
