import { tasks } from "./data.js";
import { runApp } from "./index.js";

export function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    tasks.splice(index, 1);

    runApp();
}

export function archiveTask(task) {
    task.isActive = false;

    runApp();
}

export function unarchiveTask(task) {
    task.isActive = true;
    
    runApp();
}

export function showModal(input) {
    const editForm = document.getElementById('editForm');
    const editName = document.getElementById('editName');
    const editCategory = document.getElementById('editCategory');
    const editContent = document.getElementById('editContent');
    const editSubmitButtn = document.getElementById('edit-submit-button');
    
    editForm.style.display = "block";
    editName.value = input.name;
    editCategory.value = input.category;
    editContent.value = input.content;
    
    editSubmitButtn.addEventListener('click', () => {
        const index = tasks.findIndex(task => task.id === input.id);

        tasks[index].name = editName.value;
        tasks[index].category = editCategory.value;
        tasks[index].content = editContent.value;
        editForm.style.display = 'none';

        runApp();
    });
}
