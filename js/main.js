function valideForms(form){
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
          },
          messages: {
            name: "Пожалуйста, введите своё имя",
            phone: "Пожалуйста, введите свой номер телефона"
          }
    });
};
valideForms('#order form');

window.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.overlay-hamburger'),
          hamburgerBtn = document.querySelector('#mobile-menu-btn'),
          hamburgerClosed = document.querySelector('.hamburger-close'),
          modalOpen = document.querySelectorAll('[data-modal]'),
          modalClose = document.querySelector('.modal-close'),
          modal = document.querySelector('.overlay'),
          tabs = document.querySelectorAll('.catalog-tab'),
          tabContent = document.querySelectorAll('.tabs-container-item'),
          tabParent = document.querySelector('.tabs-link'),
          anchors = document.querySelectorAll('a[href*="#"]');

    function openWindow(item) {
        item.classList.remove('hide');
        item.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closedWindow(item) {
        item.classList.remove('show');
        item.classList.add('hide');
        document.body.style.overflow = '';
    }

    hamburgerBtn.addEventListener('click', () => {
        openWindow(hamburgerMenu);
    });

    hamburgerClosed.addEventListener('click', () => {
        closedWindow(hamburgerMenu);
    });

    hamburgerMenu.addEventListener('click', (e) => {
        if(e.target === hamburgerMenu) {
            closedWindow(hamburgerMenu);
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            closedWindow(hamburgerMenu);
        }
    });

    modalOpen.forEach(item => {
        item.addEventListener('click', () => {
            openWindow(modal);
        });
    });

    modalClose.addEventListener('click', () => {
        closedWindow(modal);
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closedWindow(modal);
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            closedWindow(modal);
        }
    });

    // Tabs
    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
           item.classList.remove('catalog-tab-active');
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].classList.add('show');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('catalog-tab-active');
    }

    tabParent.addEventListener('click', (e) => {
        const target = e.target;

        if(target && target.classList.contains('catalog-tab')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    hideTabContent();
    showTabContent();

    // Scrolling
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            
            const blockID = anchor.getAttribute('href').substr(1);
            
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});