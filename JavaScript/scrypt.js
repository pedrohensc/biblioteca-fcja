// Botão Voltar ao Topo
const btnTopo = document.getElementById("btnTopo");
window.onscroll = function () {
  btnTopo.style.display = window.scrollY > 100 ? "block" : "none";
};
btnTopo.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Inicialização do Google Maps
function initMap() {
  const localizacao = { lat: -7.138529991724886, lng: -34.81818810308097 }; // Coordenadas exatas da FCJA
  const map = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 17,
    center: localizacao,
  });
  new google.maps.Marker({
    position: localizacao,
    map: map,
    title: "Fundação Casa de José Américo",
  });
}
window.initMap = initMap;

// Animação estatísticas
function animarEstatisticas() {
  document.querySelectorAll(".stats-number").forEach((el) => {
    const final = parseInt(el.innerText.replace(/\D/g, ""));
    let cont = 0;
    const incremento = Math.ceil(final / 30);
    const intervalo = setInterval(() => {
      cont += incremento;
      if (cont >= final) {
        el.innerText = final.toLocaleString("pt-BR");
        clearInterval(intervalo);
      } else {
        el.innerText = cont.toLocaleString("pt-BR");
      }
    }, 50);
  });
}
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animarEstatisticas();
    observer.disconnect();
  }
}, { threshold: 0.1 });
observer.observe(document.querySelector(".stats-number"));
