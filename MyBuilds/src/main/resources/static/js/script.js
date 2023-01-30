console.log('script.js loaded');

window.addEventListener('load', function(evt){
	console.log('Page Loaded')
	init();
	//getProject();
});

function init() {
	document.projectForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let projectId = document.projectForm.projectId.value;
		if (!isNaN(projectId) && projectId > 0) {
			loadProject(projectId);
		}
	});

	document.newProjectForm.addProjectButton.addEventListener('click', createProject);
	
	
}

//CREATE
function createProject(e) {
		e.preventDefault();
		console.log('Adding project')
		let newProject = { 
			title: document.newProjectForm.title.value,
			description: document.newProjectForm.description.value,
			jobType: document.newProjectForm.jobType.value,
			location: document.newProjectForm.location.value,
			imgUrl: document.newProjectForm.imgUrl.value,
			date: document.newProjectForm.date.value,
			helpers: document.newProjectForm.helpers.value,
			customerName: document.newProjectForm.customerName.value
		};

	let xhr = new XMLHttpRequest();
	
	xhr.open('POST', 'api/carpentryprojects');
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let project = JSON.parse(xhr.responseText);
				displayProject(project);
			}
			else {
				displayError("Error Creating Project: " + xhr.status);
			}
		}
	};
	xhr.send(JSON.stringify(newProject));
}

	


//GOOD
function loadProject() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/carpentryprojects');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			let project = JSON.parse(xhr.responseText);
			displayCarpentryProjects(project);
			 if (xhr.status === 200) {
				displayError("Error: Project Not Found. Please Try Again.")
			}
			else {
				console.log(xhr.status);
			}
		}
	};

	xhr.send();
}

function displayCarpentryProjects(projects) {
	console.log(projects);
	createTable(projects);
	}
	
	
	let createTable = function(projects) {
		console.log('Creating Table');
		console.log(projects);
		
		let projectOutput = document.getElementById('output');
		projectOutput = textContent = '';
		let table = document.createElement('table');
		createHead(table);
		createBody(table, projects);
		projectOutput.appendChild(table);
	}
	
	let createHead = function(table) {
		let headers = [
			"title",
			"description",
			"jobType",
			"location",
			"imgUrl",
			"date",
			"helpers",
			"customerName"
		];
		
		let thead = document.createElement('thead');
		let trow = document.createElement('tr');
		for(i = 0; i <= headers.length; i++){
			let th = document.createElement('th');
			th.textContent = headers[i];
			trow.appendChild(th);
		}
		table.appendChild(thead);
		trow.appendChild(trow);
	};
	
	let createBody = function(table, projects) {
		let tbody = document.createElement('tbody');
		projects.forEach(function(projects) {
		
			let trow = document.createElement('tr');

		let title = document.createElement('td');
		title.textContent = projects.title;
		trow.appendChild(title);


		let description = document.createElement('td');
		description.textContent = projects.description;
		trow.appendChild(description);


		let jobType = document.createElement('td');
		jobType.textContent = projects.jobType;
		trow.appendChild(jobType);

		let location = document.createElement('td');
		location.textContent = projects.location;
		trow.appendChild(location);

		let imgUrl = document.createElement('td');
		imgUrl.textContent = projects.imgUrl;
		trow.appendChild(imgUrl);

		let date = document.createElement('td');
		date.textContent = projects.date;
		trow.appendChild(date);
		
		let helpers = document.createElement('td');
		helpers.textContent = projects.helpers;
		trow.appendChild(helpers);
		
		let customerName = document.createElement('td');
		customerName.textContent = projects.customerName;
		trow.appendChild(customerName);

		tbody.appendChild(trow);
		table.appendChild(tbody);
		});
	
 }
 
 















//GOOD
function displayProject(project) {
	console.log('Displaying Project')
	console.log(project)
	let projectDataDiv = document.getElementById('projectData');
	projectDataDiv.textContent = '';
	let id = document.createElement('div');
	id.textContent = project.id;
	id.style.display="none";
	projectDataDiv.append(id);
	let h1 = document.createElement('h1');
	h1.textContent = project.title;
	projectDataDiv.appendChild(h1);
	
	let ul = document.createElement('ul');
	projectDataDiv.appendChild(ul);
	let li = document.createElement('li');
	li.textContent = project.description;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = project.jobType;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = project.location;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = project.imgUrl;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = project.date;
	ul.appendChild(li);
	li.textContent = project.helpers;
	ul.appendChild(li);
	li.textContent = project.customerName;
	ul.appendChild(li);
	let br = document.createElement("br");
	li.appendChild(br)


	let deleteBtn = document.createElement('input');
	deleteBtn.type = 'button';
	deleteBtn.name = 'delete';
	deleteBtn.value = 'Delete';
	deleteBtn.addEventListener('click', deleteProjectButton);
	li.appendChild(deleteBtn);


	let edit = document.createElement("input");
	edit.type = "button";
	edit.name = "edit";
	edit.value = "Edit";
	edit.addEventListener('click', updateProject);
	li.append(edit);
	
}



function displayAllProjects() {
	console.log(getProjectId)
	// TODO:
	// * Use XMLHttpRequest to perform a GET request to "api/films/"
	//   with the filmId appended.
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/carpentryprojects')
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			// * On success, if a response was received parse the film data
			//   and pass the film object to displayFilm().
			if (xhr.status === 200) {
				let projects = JSON.parse(xhr.responseText);
				displayCarpentryProjects(projects);
			}
			else {
				// * On failure, or if no response text was received, put "Film not found" 
				//   in the filmData div.
				displayError('Project not found.');
			}
		}
	};

	xhr.send();
}




function displayError(message) {
	let div = document.getElementById('projectData');
	div.textContent = message;
	div.textContent = '';
}



function getProjectId(id) {
	let xhr = new XMLHttpRequest();
	console.log('Getting Project ID: ')
	console.log("Project ID: " + id)
	xhr.open("GET", "api/carpentryprojects/" + id);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let project = JSON.parse(xhr.responseText);
				updateProject(project);
			} else {
				console.log(xhr.status);
			}
		}
	};

	xhr.send();



};

function editProjectForm() {
	let div = document.getElementById("projectData");
	console.log('Update Project Form')
	let id = div.firstElementChild.textContent;
	console.log(id)
	div.textContent = "";
	console.log('test')
	getDiveId(id);
	console.log('test')
	console.log(id);

	let hiddenId = document.createElement("div");
	hiddenId.textContent = id;
	hiddenId.style.display = "none";
	console.log(id);

	let editForm = document.createElement("form");
	let title = document.createElement("input");
	let description = document.createElement("input");
	let jobType = document.createElement("input");
	let location = document.createElement("input");
	let imgUrl = document.createElement("input");
	let date = document.createElement("input");
	let helpers = document.createElement("input");
	let customerName = document.createElement("input");

	let submit = document.createElement("button");


	editForm.name = "editForm";
	
	title.type = "text";
	title.name = "title";
	
	description.type = "text";
	description.name = "description"
	
	jobType.type = "text;"
	jobType.name = "jobType";
	
	location.type = "text";
	location.name = "location";

	imgUrl.type = "text";
	imgUrl.name = "imgUrl";
	
	date.type = "date";
	date.name = "date";
	
	helpers.type = "text";
	helpers.name = "helpers";
	
	customerName.type = 'text';
	customerName.name = 'customerName';
	
	submit.name = "submit";
	submit.value = "Submit";
	submit.innerHTML = "Submit"

	editForm.appendChild(hiddenId);
	console.log('after hiddenId')
	console.log(id)
	editForm.appendChild(title);
	editForm.appendChild(description);
	editForm.appendChild(jobType);
	editForm.appendChild(imgUrl);
	editForm.appendChild(date);
	editForm.appendChild(helpers);
	editForm.appendChild(customerName);
	editForm.appendChild(submit);
	div.appendChild(editForm);

	for (input of editForm) {
		let br = document.createElement('br');
		input.after(br);
	}

}


function updateProject(e) {
	e.preventDefault();
	let updateForm = document.updateProjectForm;
	let id = updateForm.firstElementChild.textContent;
	let xhr = new XMLHttpRequest();
	
	let updatedProject = {
		title: document.newProjectForm.title.value,
		description: document.newProjectForm.description.value,
		jobType: document.newProjectForm.jobType.value,
		location: document.newProjectForm.location.value,
		imgUrl: document.newProjectForm.imgUrl.value,
		date: document.newProjectForm.date.value,
		helpers: document.newProjectForm.helpers.value,
		customerName: document.newProjectForm.customerName.value
		
	};
	  console.log(JSON.stringify(updatedProject));
	xhr.open('PUT', 'api/carpentryprojects/' + projectId);

  xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let project = JSON.parse(xhr.responseText);
				displayProject(project);
			} else if (xhr.status === 404) {
				let projectData = document.getElementById('projectData');
				projectData.textContent = 'Project not found';
			}
		}
	}
  xhr.send(JSON.stringify(updatedProject));
}












function deleteProjectButton() {
	console.log('Delete Prject Button')
	let id = document.getElementById("projectData").firstElementChild.textContent;
	console.log('id is: ' + id);
	deleteProject(id);
	
	}
	
function deleteProject(projectId) {
	let xhr = new XMLHttpRequest();

	xhr.open('DELETE', 'api/carpentryprojects/' + projectId);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204 || xhr.status === 200) {
				alert("The project has been deleted")
			} else if (xhr.status === 404) {
				displayError("Error: Project Not Found.");
			} else {
				console.log('Bad Request');
			}
		}
	}
	xhr.send();
}











