let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

let darkModeIcone = document.querySelector('#darkMode-icon');

darkModeIcone.onclick = () => {
    darkModeIcone.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
};

<script>
    document.getElementById
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e. preventDefault();
    const name = document.getElementById('fuul name').value.trim();
    const mobile = document.getElementById('mobile number').value.trim();
    const email = document.getElementById('emaill address').value.trim();
    const subject = document.getElementById('emaill subject').value.trim();
    const message = document.getElementById('your message').value.trim();

    if (!name || !mobile || !email || !subject || !message) {
      e. preventDefault();
      alert('Por favor, preencha todos os campos obrigatórios.');
     } else { 
        alert('Formulario enviado com sucesso');
        this. submit();
    }
  });
</script>
