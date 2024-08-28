import {
  onMounted,
  nextTick,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// Só funciona 1 componente por página
export default {
  setup() {
    onMounted(() => {
      // Scrollspy -------------------------------------
      // para funcionar mobile no t2k e no geral
      const menuItens = document.querySelectorAll(".sidenav a[href^='#']");

      menuItens.forEach((link) => {
        link.addEventListener("click", scrollToIdOnClick);
      });

      function scrollToIdOnClick(event) {
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute("href");
        const to = document.querySelector(id).offsetTop;

        window.scroll({
          top: to - 60,
          behavior: "smooth",
        });
      }

      // Use nextTick to ensure DOM updates are finished
      nextTick(() => {
        // Sidenav initialization
        var elems = document.querySelectorAll(".sidenav");
        var instances = M.Sidenav.init(elems, {
          // specify options here
        });
      });
    });

    return {};
  },

  //html
  template: //html
   `

  <ul id="slide-out" class="sidenav">
    <li class="mb-24">
      <div class="user-view">
        <img src="src/img/logo-sesi-vida.webp" alt="logo-sesi-vida" style="max-width: 120px;"/>
        <p class=" blue-deep-text">Segurança e saúde no trabalho</p>
        <h2 class="sidenav__specific-title">
        Uso correto do protetor auditivo
        </h2>
        <div class="progress-box">
          <div class="progress">
            <div class="determinate"></div>
          </div> 
          <h3>
            <span class="progress-box__number">1%</span> concluído
          </h3>
        </div>
      </div>
    </li>

    <li>
      <a href="#hero">01: Início</a>
    </li>
    <li>
      <a href="#introducao">02: Introdução</a>
    </li>
    <li>
      <a href="#historia">03: História do protetor auditivo</a>
    </li>
    <li>
      <a href="#equipamentos">04: O que são equipamentos de proteção auditivas (EPAS?)</a>
    </li>
    <li>
      <a href="#risco">05: Conhecendo o risco ruído e limites de tolerância</a>
    </li>
    <li>
      <a href="#limites">06: Fatores que influenciam na perda da audição devido ao ruído</a>
    </li>
    <li>
      <a href="#saude">07: Limites de tolerância do ruído</a>
    </li>
    <li>
      <a href="#protecao">08: Efeitos do ruído na saúde auditiva geral</a>
    </li>
    <li>
      <a href="#tipos">09: Equipamento de proteção auditiva (EPA)</a>
    </li>
    <li>
      <a href="#utilizacao">10: Modo de utilização dos EPA</a>
    </li>
    <li>
      <a href="#cuidados">11: Cuidados e conservação do protetor tipo PLUG</a>
    </li>
    <li>
      <a href="#dicas">12: Dicas importantes para escolha correta e manutenção do seu EPA</a>
    </li>
    <li>
      <a href="#cuidados-concha">13: Cuidados e conservação do protetor tipo concha</a>
    </li>
    <li>
      <a href="#concluir">14: Conclusão</a>
    </li>
  </ul>
  `,
};
