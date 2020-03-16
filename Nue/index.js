require(['./node_modules/nue.js/index']);

function applyNueLocal () {
    applyNue();
}

function makeButtonsInteresting () {
    applyNueToElement(".button");
    applyNueToElement("button");
}

function removeNueFromFormInputs() {
    removeNueFromElement(".row");
}
 
function applyNueWithLS(direction) {
    applyNue(direction);
    applyNueToElement(".button");
    applyNueToElement("button");
    removeNueFromElement(".row");
}