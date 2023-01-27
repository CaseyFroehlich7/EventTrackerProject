console.log('script.js loaded');

window.addEventListener('load', function(evt){
	console.log('Page Loaded')
	init();
});

function init(){
	carpentryProjects();
}

function carpentryProjects(){
	//AJAX
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/carpentryprojects');
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4){
			if (xhr.status === 200){
				let projects = (JSON.parse(xhr.responseText))
				console.log(projects);
				displayCarpentryProjects(projects);
			}
			else {
				//TODO display an error somewhere
			}
		}
		};
	
	xhr.send();
}

function displayCarpentryProjects(projects){
	//DOM
}

