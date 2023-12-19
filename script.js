function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const statusElement = document.getElementById('status');
const modalElement = document.getElementById('myModal');
const modalStatusElement = document.getElementById('modalStatus');
let reconnecting = false;

function updateStatus() {
  if (navigator.onLine) {
    if (reconnecting) {
      showModal('Reconnected');
      reconnecting = false;
    }
  } else {
    statusElement.textContent = 'Offline';
    statusElement.classList.remove('online');
    statusElement.classList.add('offline');
    showModal('Offline');
    reconnecting = true;
  }
}

function showModal(status) {
  modalStatusElement.textContent = status;
  modalElement.style.display = 'flex';
}

function closeModal() {
  modalElement.style.display = 'none';
}


window.addEventListener('offline', updateStatus);

// Initial status check
updateStatus();