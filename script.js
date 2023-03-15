//your JS code here. If required.

const age = document.querySelector('#age');
const fullName = document.querySelector('#name');
const btn = document.querySelector('#btn');


// creating of promise
const prom = new Promise((resolve, reject) => {
	if(age >= 18) {
		resolve(`Welcome, ${fullName}. You can vote`);
	}
	else {
		reject(`Oh sorry ${fullName}, You aren't old enough`);
	}
})

btn.addEventListener('click', function() {
	e.preventDefault();
	setTimeout(() => {
		prom.then(() => {
			alert(data);
		})
		.catch(() => {
			alert(data);
		});
	}, 4000);
})