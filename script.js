window.onload = function() {
  // Close contact card when clicked outside
  document.onclick = function(e) {
    if(e.target.id === 'overlay' || e.target.id === 'nav'){
      console.log(e.target.id);
      document.querySelector('.contact-container').classList.remove('show');
      document.querySelector('#contact-btn').classList.remove('active-contact');
      document.querySelector('#contact-info').classList.remove('show');            
    }
  };

  // Shadow on nav when scrolling
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('#nav');
    if (window.pageYOffset > 0){
      nav.classList.add("shadow-header");
    }
    else{
      nav.classList.remove('shadow-header');
    }
  });
};

function openContact() {
  document.querySelector('.contact-container').classList.toggle('show');
  document.querySelector('#contact-btn').classList.toggle('active-contact');
};     

function closeContact() {
  document.querySelector('.contact-container').classList.toggle('show');
  document.querySelector('#contact-btn').classList.toggle('active-contact');
  document.querySelector('#contact-info').classList.remove('show');
};

function showInfo() {
  document.querySelector('#contact-info').classList.toggle('show');
};  