
function loadTemplates(templateName){
    let template = {"templateName":"Steve Hendriske", "fileExtensions":[".pdf"], "!fileExtensions":[".zip"]};
    window.localStorage.setItem(template.templateName, JSON.stringify(template));
    
}

function getTemplate(){
    let get = JSON.parse(localStorage.getItem(test.templateName));
}

function criteria(){

}

function folder(){

}

function checkSubmission(){

}
