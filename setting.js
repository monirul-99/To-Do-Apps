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
	editBtn.setAttribute('id', 'editSave')
	editBtn.classList.add('edit');
	editBtn.innerText = 'Edit'

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerText = "Delete"

	btnParent.appendChild(editBtn);
	btnParent.appendChild(deleteBtn);
	listParentCreate.appendChild(btnParent);
	inputField.value = ''

	editBtn.addEventListener('click', () => {
		if (editBtn.innerText.toLowerCase() == "edit") {
			editBtn.innerText = "Save";
			editBtn.style.cursor = 'pointer'
			inputCreate.removeAttribute("readonly");
			inputCreate.focus();
		} else {
			editBtn.innerText = "Edit";
			inputCreate.setAttribute("readonly", "readonly");
		}
	});
})

// document.getElementById('editSave').addEventListener('click', function(e){
// 	console.log(e.target.innerText)
// 	// if (e.innerText.toLowerCase() == "edit") {
// 	// 	editBtnTarget.innerText = "Save";
// 	// 	editBtnTarget.removeAttribute("readonly");
// 	// 	editBtnTarget.focus();
// 	// } else {
// 	// 	editBtnTarget.innerText = "Edit";
// 	// 	editBtnTarget.setAttribute("readonly", "readonly");
// 	// }
// });