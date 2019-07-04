// Select the node that will be observed for mutations
var targetNode = document.getElementById('pane-main').getElementsByClassName('cscore--live')[0];
var team1 = document.getElementById('pane-main').getElementsByClassName('cscore_item--home')[0].getElementsByClassName('cscore_name--abbrev')[0].innerHTML; 
var team2 = document.getElementById('pane-main').getElementsByClassName('cscore_item--away')[0].getElementsByClassName('cscore_name--abbrev')[0].innerHTML;

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
        let score1 = document.getElementById('pane-main').getElementsByClassName('cscore_item--home')[0].getElementsByClassName('cscore_score')[0].innerText  
        let score2 = document.getElementById('pane-main').getElementsByClassName('cscore_item--away')[0].getElementsByClassName('cscore_score')[0].innerText
        let overs1 = ""
        let overs2 = ""
        if(score1.indexOf('*')!=-1) {
            overs1 = document.getElementById('pane-main').getElementsByClassName('cscore_item--home')[0].getElementsByClassName('cscore_overs')[0].innerText
        }  
        if(score2.indexOf('*')!=-1) {
            overs2 = document.getElementById('pane-main').getElementsByClassName('cscore_item--away')[0].getElementsByClassName('cscore_overs')[0].innerText
        } 
        let score = overs1!=='' ? team1 + " " + score1 :team2 + " " + score2
        fetch('http://localhost:3001/score',{method:'post',headers: {'Content-Type':'application/json'},body:JSON.stringify({score:score})})
        console.log(score)
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);