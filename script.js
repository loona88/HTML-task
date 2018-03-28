let count = 0;
let link;
function select(id) {
  if (count > 0) {
    check();
  }

  document.getElementById(id).innerHTML = `
                                          <div class='test'>
                                            <div class='rot'>
                                              <div id='test1'></div>
                                              <div id='test2'></div>
                                            </div>
                                          </div>
                                          `;
  count++;
  link = id;
  
  function check() {
    if (id !== link) {
      document.getElementById(link).innerHTML = ' ';
    }
  }
}
