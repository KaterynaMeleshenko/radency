import { tasks, categories } from "./data.js";
import { chooseIcon, countTasks, findDates, showArchive, hideArchive,  } from "./additionalFunctions.js";
import { addNewTask } from "./addButton.js";
import { deleteTask, archiveTask, unarchiveTask, showModal } from "./actions.js";


const mainBody = document.querySelector('#main-body');
const categoryBody = document.querySelector('#category-body');
const archiveBody = document.querySelector('#archive-body');
const submitAdd = document.querySelector('#submit-add-button');
const showButtn = document.querySelector('#show-button');
const hideButtn = document.querySelector('#hide-button');



let activeTasks = [];
let archivedTasks = [];


export function renderMainTable() {
    mainBody.innerHTML = '';
    activeTasks = tasks.filter(task => {
       return task.isActive == true; 
    });
    activeTasks.forEach(task => {
    const div = document.createElement('div');
    div.className = 'body';
    div.innerHTML = `
    <div class="column1"><img src='./assets/${chooseIcon(task.category)}' class="category-icon"></div>
    <div class="column2">${task.name}</div>
    <div class="column3">${task.created}</div>
    <div class="column4">${task.category}</div>
    <div class="column5">${task.content}</div>
    <div class="column6">${findDates(task.content)}</div>
    <div class="column7">
        <img src='./assets/edit.svg' id='edit-${task.id}' class="action-icon">
        <img src='./assets/archive.svg' id='archive-${task.id}' class="action-icon">
        <img src='./assets/delete.svg' id='delete-${task.id}' class="action-icon">
    </div>
    `
    mainBody.appendChild(div);

    //delete icon
    const deleteIconId = 'delete-' + task.id;
    const deleteIcon = document.getElementById(deleteIconId);
    deleteIcon.addEventListener('click', () => deleteTask(task.id));

    //archieve icon
    const archiveIconId = 'archive-' + task.id;
    const archiveIcon = document.getElementById(archiveIconId);
    archiveIcon.addEventListener('click', () => archiveTask(task));

    //edit icon
    const editIconId = 'edit-' + task.id;
    const editIcon = document.getElementById(editIconId);
    editIcon.addEventListener('click', () => showModal(task));
})
}

export function renderCategoryTable() {
    categoryBody.innerHTML = '';
    categories.forEach(category => {
        const div = document.createElement('div');
        div.className = 'body';
        div.innerHTML = `
        <div class="column1"><img src='./assets/${category.icon}' class="category-icon"></div>
        <div class="column2">${category.name}</div>
        <div class="column3">${countTasks(true, category.name)}</div>
        <div class="column4">${countTasks(false, category.name)}</div>
      `
      categoryBody.appendChild(div);
    })
}

export function renderArchiveTable() {
    archiveBody.innerHTML = '';
    archivedTasks = tasks.filter(task => {
        return task.isActive == false; 
     });
     archivedTasks.forEach(task => {
     const div = document.createElement('div');
     div.className = 'body';
     div.innerHTML = `
     <div class="column1"><img src='./assets/${chooseIcon(task.category)}' class="category-icon"></div>
     <div class="column2">${task.name}</div>
     <div class="column3">${task.created}</div>
     <div class="column4">${task.category}</div>
     <div class="column5">${task.content}</div>
     <div class="column6">${findDates(task.content)}</div>
     <div class="column7">
         <img src='./assets/unarchive.svg' id='unarchive-${task.id}' class="action-icon">
     </div>
     `
     archiveBody.appendChild(div);
 
     //unarchieve icon
     const archiveIconId = 'unarchive-' + task.id;
     const archiveIcon = document.getElementById(archiveIconId);
     archiveIcon.addEventListener('click', () => unarchiveTask(task));
 
    })
}

renderMainTable();
renderCategoryTable();
renderArchiveTable();
submitAdd.addEventListener('click', addNewTask);
showButtn.addEventListener('click', showArchive);
hideButtn.addEventListener('click', hideArchive);