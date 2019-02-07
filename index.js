//----------Accordion-----////
class Accordion {
  constructor(heading) {
     this.heading = heading;
  }
  
  showOne() {
     const accordionHeading = document.querySelectorAll(this.heading);
     
     accordionHeading.forEach((item, key) => {
        item.addEventListener('click', () => { 
           accordionHeading.forEach(element => {
              element.classList.contains('active') ? 
                 element.classList.remove('active') : null;
           });
           
           item.classList.add('active');
        });
     });
  }
  
  showAll() {
     const accordionHeading = document.querySelectorAll(this.heading);
     
     accordionHeading.forEach((item, key) => {
        item.addEventListener('click', () => { 
           item.classList.contains('active') ? 
              item.classList.remove('active') :            
              item.classList.add('active');
        });
     });
  }
}

const accordion = new Accordion('.title');
// for open every use showAll();
accordion.showOne();