import { tasks } from "./data.js";
import { runApp} from "./index.js";
import { getDate } from "./additionalFunctions.js";

let maxId = 6;

const addButton = document.querySelector('#add-button');
const modal = document.querySelector("#myModal");
export const editForm = document.querySelector("#editForm");

addButton.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } if (event.target == editForm) {
    editForm.style.display = "none";
  }
}


export function addNewTask() {
    maxId += 1;

    const nameField = document.querySelector('#fname');
    const categoryField = document.querySelector('#fcategory');
    const contentField = document.querySelector('#fcontent');
    const newTask = {
        id: maxId,
        name: nameField.value,
        created: getDate(),
        category: categoryField.value,
        content: contentField.value,
        isActive: true,
    }
    
    tasks.push(newTask);
    runApp();
}
