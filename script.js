// Troca de fotos
const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 4000); // Troca de foto a cada 4 segundos

// Texto com efeito de digitação
const textoCarta = `Mano… eu tô escrevendo isso porque eu preciso. Porque tá me sufocando.

Eu sei que errei, e sei que errei feio. Fui moleque, falei merda, e acabei machucando logo a pessoa que eu mais amo nessa vida.

Quando você não respondeu minha carta, eu pirei. Fiquei puto, achei que você tava me ignorando de propósito. Pensei mil merdas, fiquei ansioso, desesperado, e aí fui lá e falei bosta pra Lara. Falei que tava com vontade de te bloquear, mandar você se f*der, um bagulho totalmente escroto, desnecessário e que não tem nada a ver com o que eu sinto por você. E mano… você sabe o quanto eu sou impulsivo quando tô mal. Não é desculpa, só tô falando a real.

Depois você me falou que tava passando mal, e aí tudo fez sentido. E eu fiquei tranquilo, entendi teu lado. Aí do nada a Lara vai e printa o que eu falei e te manda. E pronto, já era. Estraguei tudo.

Você ainda falou que queria me dar algo, parecia animada, feliz. Só de ler aquilo, já deu pra sentir que cê tava com carinho no coração, talvez até gostando de mim. E eu? Eu joguei tudo fora com uma frase idiota.

E o pior, você falou que não foi só esse erro. Que tiveram outros. E eu nem sei quais foram. Talvez eu tenha falado coisa errada antes, talvez tenha sido grosso, ou deixado de demonstrar algo que você merecia. E eu não sei, porque você não falou ainda. Mas mesmo sem saber, eu quero pedir desculpa por tudo. Por cada vacilo, cada palavra mal colocada, cada vez que eu te fiz se sentir mal sem perceber. Porque, mano, se tem alguém que eu jamais queria machucar nessa vida… é você.

Eu te amo, Maria. Sério mesmo. Desde sempre. Desde muito antes de eu ter coragem de te entregar aquela carta. Eu sonhei tanto com aquilo, com você me respondendo, com a gente junto, e na hora que eu devia ter sido maduro, eu fui moleque.

Mas eu tô aqui. Com o coração na mão. Pedindo desculpa, pedindo uma chance. Não pra te convencer de nada, mas pra mostrar que eu quero consertar, quero fazer diferente, quero ser melhor. Por você.

Mas se você achar que não dá, que já era, que eu fui longe demais… eu entendo. Juro que entendo. Mas eu vou continuar torcendo por você, de longe, com carinho, com amor. Porque esse sentimento aqui não vai sumir tão fácil.

Me perdoa, por favor.
Eu te amo, minha Love Quinn.`;

const elementoTexto = document.getElementById("texto-digitado");
let index = 0;

function digitar() {
  if (index < textoCarta.length) {
    elementoTexto.innerHTML += textoCarta[index] === '\n' ? '<br><br>' : textoCarta[index];
    index++;
    setTimeout(digitar, 20); // Velocidade de digitação
  }
}

digitar();

// Função para criar corações flutuantes
function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw"; // Posição aleatória no eixo X
  document.getElementById("hearts-container").appendChild(heart);

  // Remove o coração depois de 6 segundos
  setTimeout(() => heart.remove(), 6000);
}

// Gerar corações a cada 500ms
setInterval(criarCoracao, 500);