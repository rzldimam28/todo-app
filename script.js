const submitBtn = document.querySelector('.btn-submit');
const input = document.querySelector('.todo-input');
const myList = document.querySelector('.list-todo');
const errMsg = document.querySelector('.err-msg');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();

  // Membuat Kegiatan Baru
  if ( input.value ) {
    const liBaru = document.createElement('li')
    liBaru.classList.add('todo-list')
    const teksLiBaru = document.createTextNode(input.value);
    liBaru.appendChild(teksLiBaru);
    myList.appendChild(liBaru);

    const hapusBtn = document.createElement('button');
    hapusBtn.classList.add('btn-hapus');
    // const teksHapusBtn = document.createTextNode('Selesai');
    // hapusBtn.appendChild(teksHapusBtn);
    hapusBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
    </svg>`
    hapusBtn.setAttribute('title', 'Done')

    liBaru.appendChild(hapusBtn);

    errMsg.innerText = ''
  } else {
    errMsg.innerText = 'Tolong isi form'
  }

  // reset input value menjadi kosong
  input.value = '';

})

document.addEventListener('click', function(e) {

  // Tangkap tombol hapus
  if ( e.target.classList.contains('btn-hapus') ) {
    // console.log(e.target.previousElementSibling);
    e.target.parentElement.remove();
  } 

})