
function setTemplate(){
    let template = {"templateName":"Steve Hendriske", "fileExtensions":[".pdf"], "!fileExtensions":[".zip"]};
    window.localStorage.setItem(template.templateName, JSON.stringify(template));
    
}

function getTemplate(templateName){
    let get = JSON.parse(localStorage.getItem(templateName));
}

function criteria(){

}

function folder(){

}

function checkSubmission(){

}
