import { tasks, categories } from "./data.js";

export function chooseIcon(iconName) {
    let iconLink = '';

    categories.forEach(category => {
        if (category.name == iconName) {
          iconLink = category.icon;  
        }
    })

    return iconLink;
}

export function countTasks(status, category) {
    let total = 0;
    tasks.forEach(task => {
      if (task.isActive == status && task.category == category) {
          total = total + 1
      }
    })

    return total;
}

export function findDates(inputText) {
    const wordsInString = inputText.split(' ');
    const regex = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
    const dates = wordsInString.filter(word => word.match(regex)).join(', ');

    return dates;
}

export function getDate() {
    const date = new Date().toString();
    const dateParts = date.split(' ');
    const formattedDate = dateParts[1] + ' ' + dateParts[2] + ', ' + dateParts[3];

    return formattedDate;
}

export function showArchive() {
    const archiveTable = document.getElementById('archive-table');

    archiveTable.style.display = "block";
}

export function hideArchive() {
    const archiveTable = document.getElementById('archive-table');
    
    archiveTable.style.display = "none";
}


