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
    }
  });

})();
