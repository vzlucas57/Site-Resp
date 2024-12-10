
        function cumprimentarUsuario() {
          var hoje = new Date();
          var hora = hoje.getHours();
          var cumprimento;
      
          if (hora >= 6 && hora < 12) {
            cumprimento = 'Bom dia';
          } else if (hora >= 12 && hora < 18) {
            cumprimento = 'Boa tarde';
          } else {
            cumprimento = 'Boa noite';
          }
      
          var nome = prompt("Qual é o seu nome?");
          var mensagem = cumprimento + ', ' + nome + '!';
      
          // Exibindo a mensagem na página
          document.getElementById('mensagem').textContent = mensagem;
        }
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Função para adicionar a classe 'in-view' quando as seções entrarem na tela
    function checkSections() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            
            // Se a seção está visível, adicione a classe 'in-view'
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add('in-view');
            } else {
                section.classList.remove('in-view');
            }
        });
    }

    // Executa a verificação sempre que o usuário rolar
    window.addEventListener('scroll', checkSections);

    // Verifica as seções assim que a página for carregada
    document.addEventListener('DOMContentLoaded', checkSections);

    //Seleciona as imagens do carrosel
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active'); // Remove a classe da imagem atual
        currentIndex = (currentIndex + 1) % images.length; // Muda para a próxima imagem
        images[currentIndex].classList.add('active'); //Adiciona a classe na nova imagem
    }

    // Muda de imagem a cada 7 segundos
    setInterval(showNextImage, 5000);