window.addEventListener('DOMContentLoaded', () =>{

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  });

  const modal = document.querySelector('.modal');
  const  modalClose = document.querySelector('.modal_close');
  const  contact = document.querySelector('.fa-bars');
  console.log(contact);
   
  function showModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  contact.addEventListener('click', showModal);

  function hideModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    clearTimeout(timerModal);
  }

  modalClose.addEventListener('click', hideModal);
   
  modal.addEventListener('click', (Event) =>{
    if(Event.target == modal){
      hideModal();
    }
  })


});
