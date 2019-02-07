//-----Accordion-----//

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
}
const accordion = new Accordion('.title');
accordion.showOne();



//------Tableau------//

var divElement = document.getElementById('viz1549401526339');
var vizElement = divElement.getElementsByTagName('object')[0]; 

vizElement.style.width = '100%'; 
vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';

var scriptElement = document.createElement('script'); 
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; vizElement.parentNode.insertBefore(scriptElement, vizElement);