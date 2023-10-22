let test = {"templateName":"test", "wordCount":0, "pageCount":0, "numFiles":[0], "fileExtensions":[""], "notFolder":[""]};
window.localStorage.setItem(test.templateName, JSON.stringify(test));
let get = JSON.parse(localStorage.getItem(test.templateName));
console.log(get.templateName);
// load in templates
function loadTemplates(templateName){
    
    
}

function createTemplate(){

}

function criteria(){

}

function folder(){

}

function checkSubmission(){

}

function backup(){

}

function restore(){

}
