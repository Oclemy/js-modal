//  Let's Get modal element
var modal = document.getElementById('modalID');

//  Let's Get open modal button
var modalBtn = document.getElementById('modalBtn');

//  Let's  Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Let's Listen for open click
modalBtn.addEventListener('click', openModal);

//  Let's Listen for close click
closeBtn.addEventListener('click', closeModal);

//  Let's Listen for outside click, or window click
window.addEventListener('click', clickOutside)

//  Let's create a Function to open modal
function openModal() {
  modal.style.display = 'block';
}

//  Let's create a Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

//  Let's create a Function to close modal on outside click
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

