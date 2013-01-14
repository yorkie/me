
seajs.use(['config'], function (config) {
  
  // render sidebar UI
  renderSidebar(config.catalog);

});

function renderSidebar(list) {
  var elem = document.querySelector('#sidebar>ul');
  for (var i = 0, len = list.length; i < len; i++) {
    var li = document.createElement('li');
    var anchor = document.createElement('a');
    anchor.href = '#';
    anchor.innerText = list[i].name ? list[i].name : list[i].id;
    li.appendChild(anchor);
    elem.appendChild(li);
  }
}