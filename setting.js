document.getElementById('add').addEventListener('click', function(){
	const inputField = document.getElementById('inputId');
	

	const parentDiv = document.getElementById('three-col')

	const listParentCreate = document.createElement('div')
	listParentCreate.classList.add('list-of-note')
	parentDiv.appendChild(listParentCreate)

	const inputCreate = document.createElement('input');
	inputCreate.classList.add('single-list');
	inputCreate.type = 'text';
	inputCreate.value = inputField.value;
	inputCreate.setAttribute('readonly', 'readonly');
	listParentCreate.appendChild(inputCreate)
	
	const btnParent = document.createElement('div');
	btnParent.classList.add('actions');

	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.innerText = 'Edit'

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerText = "Delete"

	btnParent.appendChild(editBtn);
	btnParent.appendChild(deleteBtn);
	listParentCreate.appendChild(btnParent);
	inputField.value = ''
})