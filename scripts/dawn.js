function qs(s, c = document) {
   return c.querySelector(s);
}

function qsa(s, c = document) {
   return Array.from(c.querySelectorAll(s));
}

function initFooter() {
   qsa('.footer-toggle').forEach(btn => btn.addEventListener('click', () => {
      let p = qs('#' + btn.dataset.target);
      if (p) p.classList.toggle('show');
   }));
}

function initSlides() {
   qsa('.slideshow').forEach(show => {
      let slides = qsa('.slide', show),
         dots = qsa('.dot', show),
         i = 0;

      function go(n) {
         if (!slides.length) return;
         slides[i].classList.remove('active');
         dots[i]?.classList.remove('active');
         i = (n + slides.length) % slides.length;
         slides[i].classList.add('active');
         dots[i]?.classList.add('active');
      }
      qsa('.prev', show).forEach(b => b.onclick = () => go(i - 1));
      qsa('.next', show).forEach(b => b.onclick = () => go(i + 1));
      dots.forEach((d, n) => d.onclick = () => go(n));
      go(0);
   });
}



function initMenu() {
   if (qs('#menuDisplay')) {
      qsa('.menu-filter').forEach(b => b.onclick = () => groupItems(b.dataset.cat));
      groupItems('baked');
      qs('.close')?.addEventListener('click', () => qs('#itemModal').style.display = 'none');
      window.addEventListener('click', e => {
         if (e.target.id === 'itemModal') e.target.style.display = 'none';
      });
   }
}

function initOrder() {
   let sel = qs('#itemSelect');

   if (!sel || typeof menuItems === "undefined") {
      return;
   }


   menuItems.forEach(function (it, index) {
      let opt = document.createElement('option');
      opt.value = index;
      opt.textContent = it.name + " - $" + it.price.toFixed(2);
      sel.appendChild(opt);
   });

   let selected = [];

   function render() {
      let box = qs('#summaryItems');
      box.innerHTML = '';

      let subtotal = 0;

      selected.forEach(function (s) {
         let it = menuItems[s.index];
         let line = it.price * s.qty;
         subtotal += line;

         let div = document.createElement('div');
         div.className = 'selected-item';

         div.innerHTML = `
    <img src="${it.image}" alt="${it.alt}">
    <div>
        <strong>${it.name}</strong><br>
        <span class="muted">${it.description}</span><br>
        Qty: ${s.qty} × $${it.price.toFixed(2)} =
        <strong>$${line.toFixed(2)}</strong><br>
        <button type="button" class="remove-item">Remove</button>
    </div>
`;

         div.querySelector(".remove-item").onclick = function () {
            selected = selected.filter(function (x) {
               return x.index !== s.index;
            });

            render();
         };

         box.appendChild(div);
      });

      let delivery = qs('input[name=fulfillment]:checked')?.value === 'delivery' ? 5 : 0;

      qs('#subtotal').textContent = '$' + subtotal.toFixed(2);
      qs('#deliveryFee').textContent = '$' + delivery.toFixed(2);
      qs('#orderTotal').textContent = '$' + (subtotal + delivery).toFixed(2);
   }

   qs('#addItem').onclick = function () {
      let index = sel.value;
      let qty = parseInt(qs('#itemQty').value) || 1;

      if (index === "") {
         return;
      }

      let old = selected.find(function (x) {
         return x.index === Number(index);
      });

      if (old) {
         old.qty += qty;
      } else {
         selected.push({
            index: Number(index),
            qty: qty
         });
      }

      render();
   };

   qsa('input[name=fulfillment]').forEach(function (r) {
      r.onchange = function () {
         qs('#pickupDetails').classList.toggle('hidden', r.value !== 'pickup' || !r.checked);
         qs('#deliveryDetails').classList.toggle('hidden', r.value !== 'delivery' || !r.checked);
         render();
      };
   });

   qsa('.form-tab').forEach(function (b) {
      b.onclick = function () {
         qsa('.form-tab').forEach(function (x) {
            x.classList.remove('active');
         });

         b.classList.add('active');

         qsa('.form-panel').forEach(function (p) {
            p.classList.remove('active');
         });

         qs('#' + b.dataset.form).classList.add('active');
      };
   });

   qsa('input[name=customFulfillment]').forEach(function (r) {
      r.onchange = function () {
         qs('#customPickupDetails').classList.toggle('hidden', r.value !== 'pickup' || !r.checked);
         qs('#customDeliveryDetails').classList.toggle('hidden', r.value !== 'delivery' || !r.checked);
      };
   });

   qs('#customType')?.addEventListener('change', function (e) {
      qs('#customOtherBox').classList.toggle('hidden', e.target.value !== 'other');
   });

   render();
}

function initSupportServices() {
   qsa('.support-toggle').forEach(function (button) {
      button.addEventListener('click', function () {
         let description = button.nextElementSibling;
         let isOpen = description && !description.classList.contains('hidden');

         qsa('.support-description').forEach(function (desc) {
            desc.classList.add('hidden');
         });

         if (description && !isOpen) {
            description.classList.remove('hidden');
         }
      });
   });
}

function initEvents() {
   if (!qs('#eventPanels')) return;
   qsa('.event-filter').forEach(b => b.onclick = () => {
      qsa('.event-filter').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      qsa('.event-panel').forEach(p => p.classList.remove('active'));
      qs('#' + b.dataset.event).classList.add('active');
   });
}

function initTestimonials() {
   qsa('.stars button').forEach((b, i, arr) => b.onclick = () => {
      arr.forEach((x, n) => x.classList.toggle('selected', n <= i));
      qs('#ratingValue').value = i + 1;
   });
}

function initFAQ() {
   qsa('.faq-q').forEach(q => q.onclick = () => q.nextElementSibling.classList.toggle('show'));
}

function initContact() {
   let reason = qs('#reason');
   if (reason) reason.onchange = () => qs('#reasonOtherBox').classList.toggle('hidden', reason.value !== 'other');
   let form = qs('#contactForm');
   if (form) form.addEventListener('submit', e => {
      ['firstName', 'lastName', 'city'].forEach(id => {
         let el = qs('#' + id);
         if (el && el.value) el.value = el.value.charAt(0).toUpperCase() + el.value.slice(1).toLowerCase();
      });
      if (!form.checkValidity()) {
         e.preventDefault();
         alert('Please complete the required fields using the requested format.');
      }
   });
}

function validateForms() {
   qsa('form').forEach(form => form.addEventListener('submit', e => {
      if (!form.checkValidity()) {
         e.preventDefault();
         alert('Please complete all required fields before submitting.');
      }
   }));
}

document.addEventListener('DOMContentLoaded', () => {
   initFooter();
   initSlides();
   initMenu();
   initOrder();
   initEvents();
   initTestimonials();
   initFAQ();
   initContact();
   initSupportServices();
   validateForms();
});


function setRequiredInBox(box, required) {
   if (!box) return;
   box.querySelectorAll('input, select, textarea').forEach(function (el) {
      if (required) {
         el.setAttribute('required', 'required');
      } else {
         el.removeAttribute('required');
      }
   });
}

function updateFulfillmentRequirements() {
   var menuChoice = document.querySelector('input[name="fulfillment"]:checked');
   setRequiredInBox(document.getElementById('pickupDetails'), menuChoice && menuChoice.value === 'pickup');
   setRequiredInBox(document.getElementById('deliveryDetails'), menuChoice && menuChoice.value === 'delivery');
   var customChoice = document.querySelector('input[name="customFulfillment"]:checked');
   setRequiredInBox(document.getElementById('customPickupDetails'), customChoice && customChoice.value === 'pickup');
   setRequiredInBox(document.getElementById('customDeliveryDetails'), customChoice && customChoice.value === 'delivery');
}

function initFinalValidation() {
   document.querySelectorAll('input[name="fulfillment"], input[name="customFulfillment"]').forEach(function (r) {
      r.addEventListener('change', updateFulfillmentRequirements);
   });
   updateFulfillmentRequirements();
   var customType = document.getElementById('customType');
   var customOther = document.querySelector('#customOtherBox textarea');
   if (customType && customOther) {
      customType.addEventListener('change', function () {
         customOther.required = customType.value === 'other';
      });
   }
   var reason = document.getElementById('reason');
   var reasonOther = document.querySelector('#reasonOtherBox textarea');
   if (reason && reasonOther) {
      reason.addEventListener('change', function () {
         reasonOther.required = reason.value === 'other';
      });
   }
   var shareForm = document.querySelector('form .stars')?.closest('form');
   if (shareForm) {
      shareForm.addEventListener('submit', function (e) {
         var rating = document.getElementById('ratingValue');
         if (rating && !rating.value) {
            e.preventDefault();
            alert('Please select a star rating before submitting your experience.');
         }
      });
   }
}
document.addEventListener('DOMContentLoaded', initFinalValidation);