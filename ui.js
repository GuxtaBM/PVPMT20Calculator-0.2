/* =============================================
   KEEPROLLING UI - Visual layer only
   Does NOT touch the core logic in index.js
   ============================================= */

(function () {
    // === NIVEL DOTS ===
    const nivelInput = document.getElementById('nivel');
    const dotsContainer = document.getElementById('nivel-dots');

    const marcos = [1, 5, 10, 11, 15, 20];
    let nivelAtual = 1;

    function buildDots() {
        dotsContainer.innerHTML = '';
        const row1 = document.createElement('div');
        row1.className = 'nivel-row';
        const row2 = document.createElement('div');
        row2.className = 'nivel-row';

        for (let i = 1; i <= 20; i++) {
            const dot = document.createElement('div');
            dot.className = 'nivel-dot' + (marcos.includes(i) ? ' marco' : '');
            dot.dataset.nivel = i;

            const num = document.createElement('span');
            num.className = 'dot-num';
            num.textContent = i;
            dot.appendChild(num);

            dot.addEventListener('click', () => selectNivel(i));
            (i <= 10 ? row1 : row2).appendChild(dot);
        }

        dotsContainer.appendChild(row1);
        dotsContainer.appendChild(row2);
        renderDots();
    }

    function selectNivel(n) {
        nivelAtual = n;
        nivelInput.value = n;
        renderDots();
    }

    function renderDots() {
        document.querySelectorAll('.nivel-dot').forEach(dot => {
            const n = parseInt(dot.dataset.nivel);
            dot.classList.remove('alcancado', 'atual');
            if (n < nivelAtual) dot.classList.add('alcancado');
            if (n === nivelAtual) dot.classList.add('atual');
        });
    }

    buildDots();

    // === FRASCOS DE POÇÃO ===

    function updateFlask(liquidEl, current, max) {
        if (!max || max === 0) {
            liquidEl.style.height = '0%';
            liquidEl.classList.remove('saudavel', 'normal', 'perigo');
            return;
        }
        const pct = Math.max(0, Math.min(1, current / max));
        liquidEl.style.height = (pct * 100) + '%';

        liquidEl.classList.remove('saudavel', 'normal', 'perigo');
        if (pct > 0.5) liquidEl.classList.add('saudavel');
        else if (pct > 0.25) liquidEl.classList.add('normal');
        else liquidEl.classList.add('perigo');

        // Pequeno "splash" visual ao mudar
        const wave = liquidEl.querySelector('.wave-surface');
        if (wave) {
            wave.style.animation = 'none';
            void wave.offsetWidth; // reflow
            wave.style.animation = '';
        }
    }

    // Observa mudanças nos labels de PV/PM/SAN para atualizar os frascos
    function parseLabel(text) {
        // format: "PV: 45/100"
        const match = text.match(/:\s*(-?\d+)\s*\/\s*(\d+)/);
        if (match) return { cur: parseInt(match[1]), max: parseInt(match[2]) };
        return null;
    }

    const pvLabel  = document.getElementById('PV');
    const pmLabel  = document.getElementById('PM');
    const sanLabel = document.getElementById('SAN');

    const liquidPV  = document.getElementById('liquid-pv');
    const liquidPM  = document.getElementById('liquid-pm');
    const liquidSAN = document.getElementById('liquid-san');

    // Start empty
    if (liquidPV)  liquidPV.style.height  = '0%';
    if (liquidPM)  liquidPM.style.height  = '0%';
    if (liquidSAN) liquidSAN.style.height = '0%';

    const observer = new MutationObserver(() => {
        const pvData  = parseLabel(pvLabel?.textContent  || '');
        const pmData  = parseLabel(pmLabel?.textContent  || '');
        const sanData = parseLabel(sanLabel?.textContent || '');

        if (pvData  && liquidPV)  updateFlask(liquidPV,  pvData.cur,  pvData.max);
        if (pmData  && liquidPM)  updateFlask(liquidPM,  pmData.cur,  pmData.max);
        if (sanData && liquidSAN) updateFlask(liquidSAN, sanData.cur, sanData.max);
    });

    if (pvLabel)  observer.observe(pvLabel,  { childList: true, characterData: true, subtree: true });
    if (pmLabel)  observer.observe(pmLabel,  { childList: true, characterData: true, subtree: true });
    if (sanLabel) observer.observe(sanLabel, { childList: true, characterData: true, subtree: true });

})();
