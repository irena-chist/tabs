CSS:

.hide {
  display: none;
}
.show {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}


JS:

let tab = document.querySelectorAll('.NAMEOFTAB'),
        info = document.querySelector('.NAMEOFWRAPPER'),
        content = document.querySelectorAll('.NAMEOFCONTENT');

    function hideTabContent(a) {
        for (let i = a; i < content.length; i++) {
            content[i].classList.remove('show');
            content[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (content[b].classList.contains('hide')) {
            content[b].classList.remove('hide');
            content[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('NAMEOFTAB')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
