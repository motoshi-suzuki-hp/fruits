window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const headermenu = document.getElementById("header-menu");
    // const hb1 = document.getElementById("hb1");
    // const hb2 = document.getElementById("hb2");
    // const hb3 = document.getElementById("hb3");
    const about = document.getElementById("about");
    const scroll = window.pageYOffset;
    const wid = this.window.innerWidth;
    // let header_w = document.getElementById("header").clientWidth;

    if (scroll > wid/2) {
    //   header.style.backgroundColor = 'white';
        header.classList.add('header-fix');
        about.classList.add('about-margin')
        // headermenu.classList.add('header-fix');
    //   hb1.classList.add('header-fix');
    //   hb2.classList.add('header-fix');
    //   hb3.classList.add('header-fix');
        
    }
    else {
        header.classList.remove('header-fix');
        about.classList.remove('about-margin')
        // headermenu.classList.remove('header-fix');
    //   hb1.classList.remove('header-fix');
    //   hb2.classList.remove('header-fix');
    //   hb3.classList.remove('header-fix');
    }
});
