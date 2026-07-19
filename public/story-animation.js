(() => {
  const target = document.querySelector('.story-visual');
  if (!target) return;

  target.innerHTML = `
    <div class="music-data-stage" aria-hidden="true">
      <div class="music-orbit music-orbit-a"></div>
      <div class="music-orbit music-orbit-b"></div>
      <div class="music-orbit music-orbit-c"></div>

      <div class="note-runner note-runner-1">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18.2a3.2 3.2 0 1 1-1.2-2.5V6.1l10-2.2v10.8a3.2 3.2 0 1 1-1.2-2.5V7.8L9 9.5v8.7Z"/></svg>
      </div>
      <div class="note-runner note-runner-2">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.2 18.7a2.8 2.8 0 1 1-1-2.2V6.8l9.7-2v3.1l-7.3 1.5v6.9a2.8 2.8 0 0 1-1.4 2.4Zm9.5-2.9a2.8 2.8 0 1 1-1-2.2V7.9l2-.4v6.2a2.8 2.8 0 0 1-1 2.1Z"/></svg>
      </div>
      <div class="note-runner note-runner-3">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.1 18.4a3 3 0 1 1-1.1-2.3V5.7l8.1-1.8v3.4l-5.8 1.3v7.6a3 3 0 0 1-1.2 2.2Z"/></svg>
      </div>

      <div class="conversion-gate">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      <div class="data-cluster">
        <div class="data-bars">
          <i style="--h:.32"></i><i style="--h:.66"></i><i style="--h:.48"></i><i style="--h:.88"></i><i style="--h:.56"></i><i style="--h:.76"></i><i style="--h:.38"></i>
        </div>
        <div class="data-code"><span>01</span><span>10</span><span>11</span><span>01</span></div>
      </div>

      <div class="signal-line"></div>
      <div class="cycle-label"><span>MUSIC</span><i>→</i><span>SIGNAL</span><i>→</i><span>DATA</span><i>→</i><span>IMPROVE</span></div>
    </div>`;
})();
