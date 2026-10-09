const mobileNav = () => {
    const headerBtn = document.querySelector<HTMLElement>('.header__bars');
    const mobileNav = document.querySelector<HTMLElement>('.mobile-nav');
    const mobileLinks = document.querySelectorAll<HTMLElement>('.mobile-nav__link');
  
    // State
    let isMobileNavOpen = false;
  
    headerBtn?.addEventListener('click', () => {
      isMobileNavOpen = !isMobileNavOpen;
      if (isMobileNavOpen) {
        mobileNav!.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
      } else {
        mobileNav!.style.display = 'none';
        document.body.style.overflowY = 'auto';
      }
    });
  
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        isMobileNavOpen = false;
        mobileNav!.style.display = 'none';
        document.body.style.overflowY = 'auto';
      });
    });
  };
  
  export default mobileNav;
  
  