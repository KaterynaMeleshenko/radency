import { tasks } from "./data.js";
import { renderCategoryTable, renderMainTable, renderArchiveTable } from "./index.js";

export function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    renderMainTable();
    renderCategoryTable();
    renderArchiveTable();
}

export function archiveTask(task) {
    task.isActive = false;
    renderMainTable();
    renderCategoryTable();
    renderArchiveTable();
}

export function unarchiveTask(task) {
    task.isActive = true;
    renderMainTable();
    renderCategoryTable();
    renderArchiveTable();
}

export function showModal(input) {
    const editForm = document.getElementById('editForm');
    editForm.style.display = "block";
    const editName = document.getElementById('editName');
    const editCategory = document.getElementById('editCategory');
    const editContent = document.getElementById('editContent');
    editName.value = input.name;
    editCategory.value = input.category;
    editContent.value = input.content;
    const editSubmitButtn = document.getElementById('edit-submit-button');
    editSubmitButtn.addEventListener('click', () => {
        const index = tasks.findIndex(task => task.id === input.id);
        tasks[index].name = editName.value;
        tasks[index].category = editCategory.value;
        tasks[index].content = editContent.value;
        editForm.style.display = 'none';
        renderMainTable();
        renderCategoryTable();
        renderArchiveTable();
    });
}
