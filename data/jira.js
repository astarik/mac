// jira.js - astarik's module
// author: astarik

var lables = document.getElementById('issuedetails')
var button = document.createElement('A')
var whoiscr = document.createElement('LI')
lables.appendChild(whoiscr)
whoiscr.id='crbutton'
newli = document.getElementById('crbutton')
newli.appendChild(button)
button.id='clickme'
button.href='#'
button.innerHTML='WhoIsCR?:'
document.getElementById('clickme').onclick = function() {
    var cr = document.createElement('SPAN');
    var coder = document.getElementById('coder');
      if (!coder) {
        newli.appendChild(cr);
        cr.id='coder';
        cr.innerHTML='astarykov';
        return false;
      }
      else {
        return false;
      };
};