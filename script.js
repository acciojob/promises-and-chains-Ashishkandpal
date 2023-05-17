function check(){
	let age = document.getElementById("age").value;
	let name = document.getElementById("name").value;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>18){
			alert(`Welcome, ${name}. You can vote.`)
			}
			else{
				alert(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000)
	})
}


btn.addEventListener("click", function (e) {
  e.preventDefault();
  check();
});
