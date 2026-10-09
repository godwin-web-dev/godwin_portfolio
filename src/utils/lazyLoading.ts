const lazyLoading = (): void => {
    const lazyImgs: NodeListOf<HTMLImageElement> = document.querySelectorAll('.lazy');
  
    const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let img: HTMLImageElement = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('loading');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
  
    lazyImgs.forEach(img => {
      observer.observe(img);
    });
  };
  
  export default lazyLoading;
  
  