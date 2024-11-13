let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.item-carrossel');
  const totalSlides = slides.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  document.querySelector('.slide-carrossel').style.transform = `translateX(-${currentIndex * 50}%)`;
}

document.addEventListener("DOMContentLoaded", function() {
  moveSlide(0);
});

function atualizarPrecoTotal() {
  const precoUnitario = 34.90; 
  const quantidade = parseInt(document.getElementById('quantidade').value) || 1; 
  document.getElementById('preco-total').textContent = (precoUnitario * quantidade).toFixed(2); 
}

function atualizarQuantidade(incremento) {
  let quantidade = parseInt(document.getElementById('quantidade').value) || 1;
  quantidade = Math.max(1, quantidade + incremento);
  document.getElementById('quantidade').value = quantidade; 
  atualizarPrecoTotal();
}

document.getElementById('aumentar-btn').addEventListener('click', () => atualizarQuantidade(1));
document.getElementById('diminuir-btn').addEventListener('click', () => atualizarQuantidade(-1));

document.getElementById('quantidade').addEventListener('input', atualizarPrecoTotal);

atualizarPrecoTotal();

