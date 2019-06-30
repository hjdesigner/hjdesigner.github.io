(function() {
  
  const nigthMode = document.querySelector('[data-js="lamp"]');
  
  nigthMode.addEventListener('click', function(){
    
    this.classList.toggle('active');
    
    if (!this.classList.contains('active')) {
      document.documentElement.style.setProperty('--color-black', '#FFFFFF');
      document.documentElement.style.setProperty('--color-white', '#000000');
      document.documentElement.style.setProperty('--color-lightGray', '#000000');
      document.documentElement.style.setProperty('--color-lightBlue', '#005f97');
      document.documentElement.style.setProperty('--color-yellow', '#7d6004');
      document.documentElement.style.setProperty('--color-green', '#096701');
      document.documentElement.style.setProperty('--color-footer', '#e8e8e8');
      return;
    }
    
    document.documentElement.style.setProperty('--color-black', '#000000');
    document.documentElement.style.setProperty('--color-white', '#FFFFFF');
    document.documentElement.style.setProperty('--color-lightGray', '#b3b3b3');
    document.documentElement.style.setProperty('--color-lightBlue', '#58A9f3');
    document.documentElement.style.setProperty('--color-yellow', '#FBC54C');
    document.documentElement.style.setProperty('--color-green', '#7BE473');
    document.documentElement.style.setProperty('--color-footer', '#171616');
    
  });

})();
