
    (function() {
      'use strict';

      /* ------------------------------------------------------------------------
         0A. 「小靈魂」可重複使用原創 SVG 角色元件 (LittleSoulComponent)
             - 造型：站起來的柔和光芒水滴，頭大圓潤、頂端微收尖，身體小巧，極短手腳
             - 材質：暖奶白色，介於霧面陶土與柔和光體之間
             - 五官：僅兩個極小的深灰色眼睛 (#43403C)，無鼻、無嘴、無衣飾/翅膀/光環
             - 視角：支援 'front' (正面)、'side' (側面)、'back' (背面)
             - 動作：支援 'float' (光界漂浮)、'gate-forward' (穿過光門)、
                     'walk' (彩虹橋慢步)、'curious' (抵達地球歪頭停頓轉身)、'still' (安靜佇立)
         ------------------------------------------------------------------------ */
      const LittleSoulComponent = (function() {
        const instances = {};

        function createMarkup(instanceId, initialView = 'front', initialPose = 'float') {
          return `
            <g id="${instanceId}" class="little-soul-instance" data-view="${initialView}" data-pose="${initialPose}">
              <!-- 底部溫潤霧面投影 -->
              <ellipse class="soul-ground-shadow" cx="0" cy="36" rx="13.5" ry="4.5" fill="#CFC7B8" opacity="0.36"/>

              <!-- 角色動作主體 -->
              <g class="soul-actor">
                <!-- 光體漫射柔光（屬於光體本身的溫潤邊緣，非外加光環配件） -->
                <ellipse cx="0" cy="-6" rx="32" ry="38" fill="url(#littleSoulSoftAuraGrad)"/>

                <!-- ==================== 1. 正面視角 (Front View) ==================== -->
                <g class="soul-view soul-view-front">
                  <g class="soul-body-rig">
                    <!-- 極短的雙腳 -->
                    <g class="soul-leg-left">
                      <path d="M -6.2,23 C -6.5,29 -5.5,32.5 -3.6,32.5 C -1.8,32.5 -1.2,29 -1.5,23 Z" fill="#DFD5C5"/>
                    </g>
                    <g class="soul-leg-right">
                      <path d="M 1.5,23 C 1.2,29 1.8,32.5 3.6,32.5 C 5.5,32.5 6.5,29 6.2,23 Z" fill="#D7CCB9"/>
                    </g>

                    <!-- 極短的雙手（水滴芽狀小短手） -->
                    <g class="soul-arm-left">
                      <path d="M -9.5,5 C -14.2,7.5 -15.5,13.5 -12.8,15.5 C -10.8,16.8 -8.5,13.5 -8.2,9.5 Z" fill="#EAE1D2"/>
                    </g>
                    <g class="soul-arm-right">
                      <path d="M 9.5,5 C 14.2,7.5 15.5,13.5 12.8,15.5 C 10.8,16.8 8.5,13.5 8.2,9.5 Z" fill="#E0D6C5"/>
                    </g>

                    <!-- 小巧圓潤的暖奶白身體 -->
                    <path d="M -8.5,1 C -11.5,10 -10.8,22.5 -6.2,25.5 C -2.5,27.5 2.5,27.5 6.2,25.5 C 10.8,22.5 11.5,10 8.5,1 Z" fill="url(#littleSoulTorsoGrad)"/>
                  </g>

                  <!-- 大而圓潤、頂端略微收尖的水滴光芒頭部 -->
                  <g class="soul-head-rig">
                    <path d="M 0,-44 C 4.5,-38.5 20.5,-26 20.5,-11.5 C 20.5,0.5 11.8,6.5 0,6.5 C -11.8,6.5 -20.5,0.5 -20.5,-11.5 C -20.5,-26 -4.5,-38.5 0,-44 Z" fill="url(#littleSoulClayLightGrad)"/>
                    <!-- 霧面陶土柔光高光面（左上方微亮） -->
                    <ellipse cx="-6.5" cy="-21" rx="6.5" ry="9" transform="rotate(-18 -6.5 -21)" fill="#FFFFFF" opacity="0.42"/>
                    <!-- 兩個極小的深灰色眼睛（不畫鼻子、不畫嘴巴） -->
                    <circle class="soul-eye-left" cx="-5.2" cy="-10.5" r="1.55" fill="#43403C"/>
                    <circle class="soul-eye-right" cx="5.2" cy="-10.5" r="1.55" fill="#43403C"/>
                  </g>
                </g>

                <!-- ==================== 2. 側面視角 (Side View - 面向右側/遠方) ==================== -->
                <g class="soul-view soul-view-side">
                  <g class="soul-body-rig">
                    <!-- 遠側短腳 -->
                    <g class="soul-leg-left">
                      <path d="M -1.5,23 C -1.8,28.8 -0.8,32 1.0,32 C 2.6,32 3.2,28.8 2.8,23 Z" fill="#D5C9B6"/>
                    </g>
                    <!-- 遠側小短手 -->
                    <g class="soul-arm-left">
                      <path d="M 2.5,6 C 6.8,8.5 8.5,13 6.5,14.8 C 4.8,16 2.5,13 2.0,9.5 Z" fill="#DDD2C0"/>
                    </g>

                    <!-- 側面小巧身軀（微帶水滴弧度） -->
                    <path d="M -6.8,1 C -9.2,10 -8.5,22 -4.2,25.2 C -1.0,27.2 3.8,27 6.4,24.8 C 9.2,21.5 9.2,10 6.5,1 Z" fill="url(#littleSoulTorsoGrad)"/>

                    <!-- 近側短腳 -->
                    <g class="soul-leg-right">
                      <path d="M -3.8,23 C -4.2,29.2 -3.0,32.5 -1.2,32.5 C 0.8,32.5 1.5,29.2 1.2,23 Z" fill="#E5DDD0"/>
                    </g>
                    <!-- 近側小短手 -->
                    <g class="soul-arm-right">
                      <path d="M -1.2,6.5 C -3.8,10.5 -3.5,15.5 -1.0,16.2 C 1.2,16.8 2.6,13.2 2.2,8.5 Z" fill="#F0E9DC"/>
                    </g>
                  </g>

                  <!-- 側面水滴光芒頭部（頂端微向後收尖，臉部朝右前方） -->
                  <g class="soul-head-rig">
                    <path d="M -1.5,-44 C 3.8,-38 19.5,-25.5 19.8,-11.5 C 20.0,0.2 11.5,6.5 0.5,6.5 C -10.8,6.5 -18.8,0.2 -18.8,-11.5 C -18.8,-25.5 -5.5,-38 -1.5,-44 Z" fill="url(#littleSoulClayLightGrad)"/>
                    <ellipse cx="-4.5" cy="-21" rx="5.8" ry="8.5" transform="rotate(-12 -4.5 -21)" fill="#FFFFFF" opacity="0.4"/>
                    <!-- 側面視角的兩顆極小深灰眼睛（近側與遠側微透視排列） -->
                    <circle cx="7.2" cy="-10.8" r="1.55" fill="#43403C"/>
                    <circle cx="13.2" cy="-11.2" r="1.35" fill="#43403C" opacity="0.9"/>
                  </g>
                </g>

                <!-- ==================== 3. 背面視角 (Back View - 走向遠方地球) ==================== -->
                <g class="soul-view soul-view-back">
                  <g class="soul-body-rig">
                    <!-- 背面極短雙腳（隨步伐交替微抬） -->
                    <g class="soul-leg-left">
                      <path d="M -6.0,23 C -6.3,29 -5.3,32.5 -3.5,32.5 C -1.7,32.5 -1.1,29 -1.4,23 Z" fill="#DDD2C0"/>
                    </g>
                    <g class="soul-leg-right">
                      <path d="M 1.4,23 C 1.1,29 1.7,32.5 3.5,32.5 C 5.3,32.5 6.3,29 6.0,23 Z" fill="#D5C9B6"/>
                    </g>

                    <!-- 背面極短雙手 -->
                    <g class="soul-arm-left">
                      <path d="M -9.2,5.5 C -13.8,8 -15.0,13.5 -12.4,15.5 C -10.5,16.6 -8.2,13.5 -8.0,9.5 Z" fill="#E5DDD0"/>
                    </g>
                    <g class="soul-arm-right">
                      <path d="M 9.2,5.5 C 13.8,8 15.0,13.5 12.4,15.5 C 10.5,16.6 8.2,13.5 8.0,9.5 Z" fill="#DDD2C0"/>
                    </g>

                    <!-- 背面小巧身軀 -->
                    <path d="M -8.5,1 C -11.5,10 -10.8,22.5 -6.2,25.5 C -2.5,27.5 2.5,27.5 6.2,25.5 C 10.8,22.5 11.5,10 8.5,1 Z" fill="url(#littleSoulTorsoGrad)"/>
                  </g>

                  <!-- 背面水滴光芒頭部（純淨溫潤的暖奶白背影，無五官） -->
                  <g class="soul-head-rig">
                    <path d="M 0,-44 C 4.5,-38.5 20.5,-26 20.5,-11.5 C 20.5,0.5 11.8,6.5 0,6.5 C -11.8,6.5 -20.5,0.5 -20.5,-11.5 C -20.5,-26 -4.5,-38.5 0,-44 Z" fill="url(#littleSoulClayLightGrad)"/>
                    <!-- 背部頂端溫潤柔光暈染 -->
                    <ellipse cx="-4.5" cy="-22" rx="7" ry="9.5" transform="rotate(-15 -4.5 -22)" fill="#FFFFFF" opacity="0.34"/>
                  </g>
                </g>

              </g>
            </g>
          `;
        }

        function mount(containerId, instanceId, options = {}) {
          const container = document.getElementById(containerId);
          if (!container) return null;
          const view = options.view || 'front';
          const pose = options.pose || 'float';
          container.innerHTML = createMarkup(instanceId, view, pose);
          const el = document.getElementById(instanceId);
          instances[instanceId] = el;
          return el;
        }

        function setState(instanceId, { view, pose } = {}) {
          const el = instances[instanceId] || document.getElementById(instanceId);
          if (!el) return;
          if (view) el.setAttribute('data-view', view);
          if (pose) el.setAttribute('data-pose', pose);
        }

        return {
          mount,
          setState
        };
      })();

      /* ------------------------------------------------------------------------
         0. 528Hz 聲音設計與背景音樂系統 (Web Audio API 合成 + 外部音檔擴充架構)
         ------------------------------------------------------------------------ */
      const AUDIO_CONFIG = {
        USE_EXTERNAL_AUDIO_FILES: false,
        EXTERNAL_PATHS: {
          tone528: 'assets/audio/528hz-sustained-warm-sine.mp3',
          ambientPad: 'assets/audio/ambient-pad-loop.mp3',
          softWind: 'assets/audio/gentle-wind-loop.mp3',
          harpCuriosity: 'assets/audio/harp-act3-curiosity.mp3',
          harpDescent: 'assets/audio/harp-act4-rainbow-descent.mp3'
        }
      };

      const StorySoundEngine = (function() {
        let audioCtx = null;
        let masterGain = null;
        let tone528Gain = null;
        let padGain = null;
        let padFilter = null;
        let windGain = null;
        let isEnabled = false;
        let isInitialized = false;
        let currentActIndex = 0;
        let harpInterval = null;
        let act4StageTimers = [];
        const externalTracks = {};

        function initContext() {
          if (isInitialized) return;
          isInitialized = true;

          if (AUDIO_CONFIG.USE_EXTERNAL_AUDIO_FILES) {
            Object.keys(AUDIO_CONFIG.EXTERNAL_PATHS).forEach(key => {
              const audio = new Audio(AUDIO_CONFIG.EXTERNAL_PATHS[key]);
              audio.preload = 'auto';
              if (key === 'tone528' || key === 'ambientPad' || key === 'softWind') {
                audio.loop = true;
              }
              externalTracks[key] = audio;
            });
            return;
          }

          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          if (!AudioContextClass) return;

          audioCtx = new AudioContextClass();
          masterGain = audioCtx.createGain();
          masterGain.gain.value = 0.0001;
          masterGain.connect(audioCtx.destination);

          // 1. 獨立 528Hz 柔和持續音層（含 264Hz 溫暖八度與慢速 LFO 呼吸調變）
          tone528Gain = audioCtx.createGain();
          tone528Gain.gain.value = 0.055;
          tone528Gain.connect(masterGain);

          const osc528 = audioCtx.createOscillator();
          osc528.type = 'sine';
          osc528.frequency.value = 528.0;

          const osc264 = audioCtx.createOscillator();
          osc264.type = 'sine';
          osc264.frequency.value = 264.0;
          const subGain = audioCtx.createGain();
          subGain.gain.value = 0.35;
          osc264.connect(subGain);

          const breathLfo = audioCtx.createOscillator();
          breathLfo.type = 'sine';
          breathLfo.frequency.value = 0.07;
          const breathDepth = audioCtx.createGain();
          breathDepth.gain.value = 0.015;
          breathLfo.connect(breathDepth);
          breathDepth.connect(tone528Gain.gain);

          osc528.connect(tone528Gain);
          subGain.connect(tone528Gain);
          osc528.start();
          osc264.start();
          breathLfo.start();

          // 2. 空靈氛圍音 Ambient Pad
          padFilter = audioCtx.createBiquadFilter();
          padFilter.type = 'lowpass';
          padFilter.frequency.value = 560;

          padGain = audioCtx.createGain();
          padGain.gain.value = 0.11;
          padFilter.connect(padGain);
          padGain.connect(masterGain);

          const padFreqs = [176.0, 264.0, 352.0, 396.0];
          padFreqs.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
            osc.frequency.value = freq;
            osc.detune.value = (idx - 1.5) * 3.5;
            const voiceGain = audioCtx.createGain();
            voiceGain.gain.value = 0.22;
            osc.connect(voiceGain);
            voiceGain.connect(padFilter);
            osc.start();
          });

          // 3. 微風環境音
          const bufferSize = audioCtx.sampleRate * 3;
          const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          let b0 = 0, b1 = 0, b2 = 0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.997 * b0 + white * 0.029;
            b1 = 0.985 * b1 + white * 0.032;
            b2 = 0.950 * b2 + white * 0.045;
            output[i] = (b0 + b1 + b2) * 0.18;
          }
          const whiteNoise = audioCtx.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          whiteNoise.loop = true;

          const windFilter = audioCtx.createBiquadFilter();
          windFilter.type = 'bandpass';
          windFilter.frequency.value = 340;
          windFilter.Q.value = 1.8;

          windGain = audioCtx.createGain();
          windGain.gain.value = 0.016;

          whiteNoise.connect(windFilter);
          windFilter.connect(windGain);
          windGain.connect(masterGain);
          whiteNoise.start();
        }

        function pluckHarpNote(freq, volume = 0.12, duration = 3.6) {
          if (!isEnabled || !audioCtx || AUDIO_CONFIG.USE_EXTERNAL_AUDIO_FILES) return;
          if (audioCtx.state === 'suspended') {
            audioCtx.resume();
          }

          const now = audioCtx.currentTime;
          const osc = audioCtx.createOscillator();
          const harmonicOsc = audioCtx.createOscillator();
          const noteGain = audioCtx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now);

          harmonicOsc.type = 'sine';
          harmonicOsc.frequency.setValueAtTime(freq * 2, now);
          const harmGain = audioCtx.createGain();
          harmGain.gain.setValueAtTime(volume * 0.18, now);
          harmGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.45);

          noteGain.gain.setValueAtTime(0.0001, now);
          noteGain.gain.linearRampToValueAtTime(volume, now + 0.035);
          noteGain.gain.exponentialRampToValueAtTime(0.0008, now + duration);

          osc.connect(noteGain);
          harmonicOsc.connect(harmGain);
          harmGain.connect(noteGain);
          noteGain.connect(masterGain);

          osc.start(now);
          harmonicOsc.start(now);
          osc.stop(now + duration + 0.05);
          harmonicOsc.stop(now + duration + 0.05);
        }

        function clearActTimers() {
          if (harpInterval) {
            clearInterval(harpInterval);
            harpInterval = null;
          }
          act4StageTimers.forEach(t => clearTimeout(t));
          act4StageTimers = [];
        }

        function morphBackgroundLayers(target528Gain, targetPadGain, targetWindGain, targetFilterFreq, rampTime = 1.8) {
          if (!audioCtx || !tone528Gain || !padGain || !windGain || !padFilter) return;
          const now = audioCtx.currentTime;
          tone528Gain.gain.cancelScheduledValues(now);
          tone528Gain.gain.setValueAtTime(tone528Gain.gain.value, now);
          tone528Gain.gain.linearRampToValueAtTime(target528Gain, now + rampTime);

          padGain.gain.cancelScheduledValues(now);
          padGain.gain.setValueAtTime(padGain.gain.value, now);
          padGain.gain.linearRampToValueAtTime(targetPadGain, now + rampTime);

          windGain.gain.cancelScheduledValues(now);
          windGain.gain.setValueAtTime(windGain.gain.value, now);
          windGain.gain.linearRampToValueAtTime(targetWindGain, now + rampTime);

          padFilter.frequency.cancelScheduledValues(now);
          padFilter.frequency.setValueAtTime(padFilter.frequency.value, now);
          padFilter.frequency.linearRampToValueAtTime(targetFilterFreq, now + rampTime);
        }

        function scheduleForAct(actIndex) {
          currentActIndex = actIndex;
          clearActTimers();
          if (!isEnabled) return;

          if (AUDIO_CONFIG.USE_EXTERNAL_AUDIO_FILES) {
            if (actIndex === 2 && externalTracks.harpCuriosity) {
              externalTracks.harpCuriosity.currentTime = 0;
              externalTracks.harpCuriosity.play().catch(() => {});
            } else if (actIndex === 3 && externalTracks.harpDescent) {
              const t = setTimeout(() => {
                externalTracks.harpDescent.currentTime = 0;
                externalTracks.harpDescent.play().catch(() => {});
              }, 3600);
              act4StageTimers.push(t);
            }
            return;
          }

          if (!audioCtx) return;

          if (actIndex === 0 || actIndex === 1) {
            morphBackgroundLayers(0.055, 0.11, 0.015, 540, 1.8);
            const earlyNotes = [528.0, 660.0, 594.0, 396.0, 440.0];
            let step = 0;
            pluckHarpNote(earlyNotes[0], 0.11, 3.8);
            harpInterval = setInterval(() => {
              step = (step + 1) % earlyNotes.length;
              pluckHarpNote(earlyNotes[step], 0.10, 3.8);
            }, 2800);
          } 
          else if (actIndex === 2) {
            morphBackgroundLayers(0.068, 0.10, 0.018, 490, 2.2);
            const curiousNotes = [528.0, 792.0, 660.0, 880.0, 594.0];
            let idx = 0;
            const tFirst = setTimeout(() => {
              pluckHarpNote(curiousNotes[0], 0.10, 4.2);
            }, 600);
            act4StageTimers.push(tFirst);

            harpInterval = setInterval(() => {
              idx = (idx + 1) % curiousNotes.length;
              pluckHarpNote(curiousNotes[idx], 0.095, 4.3);
            }, 3900);
          } 
          else if (actIndex === 3) {
            morphBackgroundLayers(0.062, 0.105, 0.020, 510, 1.5);
            pluckHarpNote(528.0, 0.085, 3.8);

            const tQuiet = setTimeout(() => {
              morphBackgroundLayers(0.065, 0.095, 0.022, 460, 1.4);
            }, 1500);

            const descendingMelody = [880.0, 792.0, 660.0, 594.0, 528.0, 440.0, 396.0, 352.0, 330.0, 297.0, 264.0];
            const tDescent = setTimeout(() => {
              morphBackgroundLayers(0.068, 0.135, 0.020, 640, 3.0);
              let dStep = 0;
              pluckHarpNote(descendingMelody[0], 0.115, 3.8);
              harpInterval = setInterval(() => {
                dStep++;
                if (dStep < descendingMelody.length) {
                  pluckHarpNote(descendingMelody[dStep], 0.115, 3.9);
                } else {
                  clearInterval(harpInterval);
                  harpInterval = null;
                }
              }, 820);
            }, 3600);

            const tWarmArrival = setTimeout(() => {
              morphBackgroundLayers(0.072, 0.15, 0.016, 780, 2.4);
              pluckHarpNote(352.0, 0.10, 4.5);
              setTimeout(() => pluckHarpNote(528.0, 0.12, 4.8), 450);
            }, 11500);

            act4StageTimers.push(tQuiet, tDescent, tWarmArrival);
          } 
          else if (actIndex === 4) {
            morphBackgroundLayers(0.060, 0.13, 0.015, 700, 2.2);
            const archipelagoNotes = [264.0, 352.0, 396.0, 528.0, 660.0, 528.0, 440.0];
            let aStep = 0;
            pluckHarpNote(528.0, 0.11, 4.0);
            harpInterval = setInterval(() => {
              aStep = (aStep + 1) % archipelagoNotes.length;
              pluckHarpNote(archipelagoNotes[aStep], 0.095, 4.2);
            }, 3400);
          }
        }

        function enableAudio(actIdx = currentActIndex) {
          initContext();
          isEnabled = true;

          if (AUDIO_CONFIG.USE_EXTERNAL_AUDIO_FILES) {
            if (externalTracks.tone528) externalTracks.tone528.play().catch(() => {});
            if (externalTracks.ambientPad) externalTracks.ambientPad.play().catch(() => {});
            if (externalTracks.softWind) externalTracks.softWind.play().catch(() => {});
          } else if (audioCtx) {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            const now = audioCtx.currentTime;
            masterGain.gain.cancelScheduledValues(now);
            masterGain.gain.setValueAtTime(Math.max(0.0001, masterGain.gain.value), now);
            masterGain.gain.linearRampToValueAtTime(0.72, now + 1.5);
          }

          scheduleForAct(actIdx);
          updateAudioButtonUI();
        }

        function disableAudio() {
          isEnabled = false;
          clearActTimers();

          if (AUDIO_CONFIG.USE_EXTERNAL_AUDIO_FILES) {
            Object.values(externalTracks).forEach(t => t.pause());
          } else if (audioCtx && masterGain) {
            const now = audioCtx.currentTime;
            masterGain.gain.cancelScheduledValues(now);
            masterGain.gain.setValueAtTime(masterGain.gain.value, now);
            masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.8);
          }

          updateAudioButtonUI();
        }

        function toggleAudio() {
          if (isEnabled) {
            disableAudio();
          } else {
            enableAudio(currentActIndex);
          }
        }

        function updateAudioButtonUI() {
          const btn = document.getElementById('audioToggleBtn');
          const iconMuted = document.getElementById('audioIconMuted');
          const iconPlaying = document.getElementById('audioIconPlaying');
          const label = document.getElementById('audioToggleText');
          if (!btn) return;

          btn.setAttribute('aria-pressed', isEnabled ? 'true' : 'false');
          if (isEnabled) {
            iconMuted.classList.add('hidden');
            iconPlaying.classList.remove('hidden');
            label.textContent = '528Hz 音樂：播放中';
          } else {
            iconMuted.classList.remove('hidden');
            iconPlaying.classList.add('hidden');
            label.textContent = '528Hz 音樂：已靜音';
          }
        }

        return {
          enableOnUserAction: function(actIdx) {
            if (!isInitialized) {
              enableAudio(actIdx);
            } else if (isEnabled) {
              scheduleForAct(actIdx);
            }
          },
          setAct: scheduleForAct,
          toggle: toggleAudio,
          isEnabled: () => isEnabled
        };
      })();

      /* ------------------------------------------------------------------------
         1. 小靈魂五幕故事資料定義
         ------------------------------------------------------------------------ */
      const STORY_ACTS = [
        {
          id: 'story-1',
          actTitle: '第一幕・光的故鄉',
          lines: [
            '「很久很久以前，',
            '有一個小小的靈魂，',
            '生活在光裡。」'
          ],
          buttonText: '開始故事',
          sceneConfig: {
            cameraBreathe: false,
            cameraRigTransform: 'translate(0px, 0px) scale(1)',
            soulTransform: 'translate(400px, 235px) scale(1.08)',
            soulOpacity: '1',
            soulView: 'front',
            soulPose: 'float',
            earthTransform: 'translate(620px, 120px) scale(0.2)',
            earthOpacity: '0',
            gateBridgeOpacity: '0',
            rainbowBridgeOpacity: '0',
            gateLightOpacity: '0',
            previewOpacity: '0',
            previewTransform: 'translateY(40px)',
            cloudsOpacity: '0',
            cloudsLeftX: '0px',
            cloudsRightX: '0px',
            ambientOpacity: '1'
          }
        },
        {
          id: 'story-2',
          actTitle: '第二幕・好奇',
          lines: [
            '「有一天，',
            '小靈魂發現了一個有趣的地方。',
            '',
            '那裡有歡笑，有眼淚，',
            '有人相遇，也有人告別。」'
          ],
          buttonText: '然後呢？',
          sceneConfig: {
            cameraBreathe: false,
            cameraRigTransform: 'translate(0px, 0px) scale(1)',
            soulTransform: 'translate(290px, 255px) scale(0.95)',
            soulOpacity: '1',
            soulView: 'side',
            soulPose: 'float',
            earthTransform: 'translate(545px, 175px) scale(0.88)',
            earthOpacity: '1',
            gateBridgeOpacity: '0',
            rainbowBridgeOpacity: '0',
            gateLightOpacity: '0',
            previewOpacity: '0',
            previewTransform: 'translateY(40px)',
            cloudsOpacity: '0',
            cloudsLeftX: '0px',
            cloudsRightX: '0px',
            ambientOpacity: '0.85'
          }
        },
        {
          id: 'story-3',
          actTitle: '第三幕・凝望地球',
          lines: [
            '「小靈魂很好奇。',
            '如果我也成為一個人，',
            '會遇見什麼樣的故事呢？」'
          ],
          buttonText: '我想去看看',
          sceneConfig: {
            cameraBreathe: true,
            cameraRigTransform: 'translate(0px, 0px) scale(1)',
            soulTransform: 'translate(400px, 140px) scale(0.4)',
            soulOpacity: '0',
            soulView: 'back',
            soulPose: 'still',
            earthTransform: 'translate(400px, 350px) scale(1)',
            earthOpacity: '1',
            gateBridgeOpacity: '0',
            rainbowBridgeOpacity: '0',
            gateLightOpacity: '0',
            previewOpacity: '0',
            previewTransform: 'translateY(40px)',
            cloudsOpacity: '0',
            cloudsLeftX: '0px',
            cloudsRightX: '0px',
            ambientOpacity: '0.95'
          }
        },
        {
          id: 'story-4',
          actTitle: '第四幕・彩虹橋上的啟程',
          lines: [
            '「於是，',
            '一場名為人生的旅程，',
            '開始了。」'
          ],
          buttonText: '前往地球',
          isChoreographedAct4: true,
          sceneConfig: {
            cameraBreathe: false,
            cameraRigTransform: 'translate(0px, 0px) scale(1)',
            soulTransform: 'translate(400px, 142px) scale(0.46)',
            soulOpacity: '1',
            soulView: 'back',
            soulPose: 'gate-forward',
            earthTransform: 'translate(400px, 412px) scale(0.76)',
            earthOpacity: '1',
            gateBridgeOpacity: '1',
            rainbowBridgeOpacity: '1',
            gateLightOpacity: '0.92',
            previewOpacity: '0',
            previewTransform: 'translateY(40px)',
            cloudsOpacity: '0',
            cloudsLeftX: '0px',
            cloudsRightX: '0px',
            ambientOpacity: '0.8'
          }
        },
        {
          id: 'story-5',
          actTitle: '第五幕・世界展開',
          lines: [
            '「你已經來到這個世界。',
            '',
            '接下來，',
            '你想去哪裡看看？」'
          ],
          buttonText: '遇見地球引路人',
          sceneConfig: {
            cameraBreathe: false,
            cameraRigTransform: 'translate(0px, 0px) scale(1)',
            soulTransform: 'translate(400px, 128px) scale(0.68)',
            soulOpacity: '0.96',
            soulView: 'front',
            soulPose: 'curious',
            earthTransform: 'translate(400px, 430px) scale(1.35)',
            earthOpacity: '0',
            gateBridgeOpacity: '0',
            rainbowBridgeOpacity: '0',
            gateLightOpacity: '0',
            previewOpacity: '1',
            previewTransform: 'translateY(0px)',
            cloudsOpacity: '0.85',
            cloudsLeftX: '-160px',
            cloudsRightX: '160px',
            ambientOpacity: '0.4'
          }
        }
      ];

      /* ------------------------------------------------------------------------
         2. 花精島三朵花精深度互動資料
         ------------------------------------------------------------------------ */
      const FLOWER_ESSENCES = {
        scleranthus: {
          id: 'scleranthus',
          nameZh: '線球草',
          nameEn: 'Scleranthus',
          theme: '反覆猶豫，在兩個選項之間搖擺，難以決定。',
          colorAccent: '#9CAF9E',
          dailyScenario: '週末難得有一段完整的空檔。你原本想留在家裡安靜休息，但朋友剛好傳訊息問要不要一起出門走走。你打開對話框，打了字又刪掉——覺得出門好像不錯，又怕回來太累；想待在家裡，卻又擔心錯過相聚的時光。整個下午，心就像鐘擺一樣在兩邊來回晃動。',
          options: [
            {
              label: 'A. 先不回覆，繼續查資料或滑手機，看看哪一邊的感覺會突然變清楚。',
              reflection: '在兩個都很吸引人、或各有顧慮的選項之間停頓，其實代表你很在乎這段時間的品質。當思緒一直左右擺盪時，試著先放下「一定要選出最完美答案」的壓力。你可以輕輕問自己：「如果不管對錯，現在身體比較想要動一動，還是安靜躺著？」只要順著當下微小的傾聽做選擇，無論選哪一邊，都是值得的體驗。'
            },
            {
              label: 'B. 勉強答應出門，但走在路上心裡還是忍不住想：「早知道就待在家了。」',
              reflection: '有時候最消耗力氣的不是決定本身，而是決定之後還在腦海裡上演「另一個平行時空」。當你發現自己又開始回頭比較時，試著溫柔地把注意力帶回眼前的風景——感受吹過臉頰的風，或手裡那杯飲料的溫度。你已經在路上了，允許自己安心地待在這個選擇裡吧。'
            },
            {
              label: 'C. 翻來覆去想了好久，最後乾脆哪裡都不去，卻也因為糾結太久而沒有真正休息到。',
              reflection: '當心裡像天平一樣搖晃不停時，真的會讓人感到疲憊呢。這時候不需要責怪自己「怎麼這麼優柔寡斷」。你可以給自己設定一個溫和的小小停損點，例如深呼吸三次後，先做一件最小的事（像是泡一杯溫水）。當腳步落實下來，心裡的搖擺也會慢慢安靜下來。'
            }
          ]
        },
        centaury: {
          id: 'centaury',
          nameZh: '矢車菊',
          nameEn: 'Centaury',
          theme: '因為不想讓人失望，習慣把自己的需要擺在最後。',
          colorAccent: '#8FA2B2',
          dailyScenario: '忙碌了一整天，你原本計畫準時離開，去吃一頓想了很久的晚餐。這時同事帶著苦惱的表情走過來，輕聲問你：「這份資料我有點卡住了，你現在有空幫我看一下嗎？」你感覺肩膀微微一沉，但嘴角還是習慣性地揚起微笑。',
          options: [
            {
              label: 'A. 話到嘴邊馬上說「好啊沒問題」，把自己的晚餐計畫默默往後延。',
              reflection: '你有一顆非常體貼、願意接住別人的心，這是很珍貴的溫柔。只是，當這份溫柔總是優先給了別人，心裡那個疲憊的自己也會需要被照顧。下一次，在立刻說「好」之前，試著給自己三秒鐘的呼吸空間，感受一下自己現在剩餘的力氣。照顧好自己的界線，你的善意才能走得長久而輕盈。'
            },
            {
              label: 'B. 雖然心裡很累，但很怕拒絕會讓對方覺得自己冷漠，只好硬著頭皮幫忙。',
              reflection: '擔心讓人失望，往往是因為你很珍惜人與人之間的和諧。但真正的連結，是可以容納彼此真實狀態的。你可以練習用溫和而清楚的方式表達：「我今天剛好有安排需要先離開，明天早上十點我們再一起看好嗎？」你會發現，溫柔地說出自己的限制，並不會減少別人對你的信任。'
            },
            {
              label: 'C. 幫忙的過程中一直告訴自己「沒關係啦，反正我的事不急」，直到回家才覺得莫名委屈。',
              reflection: '那些被你說「沒關係」而輕輕推開的小願望，其實心裡都還記得。那份回家後浮現的委屈，並不是你不夠大度，而是內在正在輕聲提醒你：「我也好希望被自己重視喔。」今晚，不妨為自己留一段不被打擾的時光，好好補償那個努力了一整天的自己。'
            }
          ]
        },
        mimulus: {
          id: 'mimulus',
          nameZh: '溝酸漿',
          nameEn: 'Mimulus',
          theme: '面對已經知道的具體恐懼，練習理解自己的害怕。',
          colorAccent: '#DFC5C0',
          dailyScenario: '過幾天有一場需要上台分享的聚會（或是一通你一直不敢撥出的重要電話）。只要一想到那個畫面，手心就會微微出汗，腦海裡自動播放各種「萬一講錯話、萬一場面尷尬怎麼辦」的細節，讓你好想找個理由躲開。',
          options: [
            {
              label: 'A. 在腦海裡反覆排練每一句話，希望能完全避開任何出錯的可能。',
              reflection: '你之所以這麼認真地反覆預演，是因為你很在乎這件事，也想保護自己不受傷。看見這份「想要做好」的心意後，試著對緊繃的肩膀說聲辛苦了。真正的勇氣不是一點都不緊張，而是帶著一點點發抖，依然願意允許自己像個普通人一樣，自然地站在那裡。'
            },
            {
              label: 'B. 一直把這件事往後推延，直到最後一刻才在焦慮中匆忙面對。',
              reflection: '想要避開讓自己害怕的事，是非常自然的本能反應。與其催促自己「不要怕、快去做」，不如先陪自己看一看這份害怕：「我現在最擔心的那件事，具體是什麼呢？」當恐懼被清楚地看見、不再只是模糊的黑影時，我們往往就能長出踏出小小一步的安定感。'
            },
            {
              label: 'C. 心裡覺得「別人好像都很從容，為什麼只有我這麼膽小」，對自己的緊張感到懊惱。',
              reflection: '每個人都有屬於自己敏感與細膩的角落。對具體事物感到害怕，往往也代表你對環境的感受力特別敏銳。請不要因為緊張而責備自己，試著像陪伴一位害羞的好朋友那樣，輕輕握住自己的手：「我知道你現在有點害怕，沒關係，我會陪著你一起走過去。」'
            }
          ]
        }
      };

      /* ------------------------------------------------------------------------
         3. 六座群島完整內容定義（含課程預留區、生命數字島雙入口、人間劇場七大主題）
         ------------------------------------------------------------------------ */
      const THEATER_LIFE_TOPICS = [
        {
          id: 'boundaries',
          title: '人際關係與界線',
          tag: '人際與界線',
          storyPreview: '在說「好」與「不好意思拒絕」之間，看見我們對關係和諧的在乎，也練習溫柔地替自己留出呼吸的空間。',
          formats: ['短篇圖文故事（準備中）', '四格日常漫畫（準備中）', '1 分鐘覺察短影音（準備中）'],
          reflectionQuestion: '最近有沒有哪個時刻，你其實很想說「我需要先休息一下」，卻還是微笑著答應了呢？'
        },
        {
          id: 'intimacy',
          title: '感情與親密關係',
          tag: '感情與親密',
          storyPreview: '越靠近的人，有時候越容易踩到彼此敏感的角落。那些反覆出現的爭執或沉默，往往藏著「希望被好好理解」的心意。',
          formats: ['關係對話故事（準備中）', '伴侶視角漫畫（準備中）', '日常覺察短影音（準備中）'],
          reflectionQuestion: '在親密的關係裡，你最常使用「生氣」、「沉默」還是「討好」來保護自己不受傷呢？'
        },
        {
          id: 'choices',
          title: '選擇困難與人生方向',
          tag: '選擇與方向',
          storyPreview: '站在十字路口猶豫不決，不是因為你不夠勇敢，而是因為你很認真對待自己的人生。',
          formats: ['旅人故事集（準備中）', '生活選擇漫畫（準備中）', '視角轉換短影音（準備中）'],
          reflectionQuestion: '如果暫時拿掉「怕選錯」的擔心，哪一個選項想起來會讓你有一點點好奇？'
        },
        {
          id: 'pressure',
          title: '工作與生活壓力',
          tag: '工作與壓力',
          storyPreview: '當待辦清單永遠勾不完、肩膀不知不覺聳起來的時候，陪自己從「一直撐著」的慣性裡稍微鬆開一點點。',
          formats: ['職場日常故事（準備中）', '共鳴插畫漫畫（準備中）', '放鬆練習短影音（準備中）'],
          reflectionQuestion: '今天結束之前，有哪一件小事其實「做到六十分」就已經很足夠了？'
        },
        {
          id: 'fear',
          title: '恐懼與焦慮',
          tag: '恐懼與焦慮',
          storyPreview: '腦海裡不斷預演還沒發生的風暴，其實是內在想保護我們的一種方式。看見害怕，就不必再責怪自己膽小。',
          formats: ['安心繪本故事（準備中）', '內在小劇場漫畫（準備中）', '安定陪伴短影音（準備中）'],
          reflectionQuestion: '此刻讓你最不安的那個念頭，如果能對它說一句溫柔的話，你會說什麼？'
        },
        {
          id: 'identity',
          title: '自我認同與生命意義',
          tag: '自我與意義',
          storyPreview: '卸下別人的期待與社會角色之後，「我是誰？我喜歡什麼？」這是一段可以慢慢走、不必急著交卷的旅程。',
          formats: ['靈魂散步故事（準備中）', '繪本式漫畫（準備中）', '深度提問短影音（準備中）'],
          reflectionQuestion: '回想小時候或某個沒有壓力的午後，做什麼事情最容易讓你忘記時間？'
        },
        {
          id: 'unsure',
          title: '我還不知道怎麼形容',
          tag: '說不出的感受',
          storyPreview: '有時候心裡就是有一團霧霧的、說不上來的感覺。沒關係，不需要急著替感受命名，能安靜地陪著它就很好。',
          formats: ['無字繪本故事（準備中）', '溫柔留白漫畫（準備中）', '靜心陪伴短影音（準備中）'],
          reflectionQuestion: '如果把現在說不出來的感覺比喻成一種天氣，它像是起霧的清晨、悶熱的午後，還是微涼的傍晚呢？'
        }
      ];

      const ISLANDS_DATA = {
        flower: {
          id: 'flower',
          name: '花精島',
          subtitle: '巴哈花精、漫畫、覺察工具及教學',
          slogan: '「在情緒與關係裡，重新認識自己。」',
          welcome: '歡迎來到花精島。這裡沒有標準答案，也沒有把人分類的標籤。每一株植物都像一面溫柔的鏡子，映照出我們在日常生活裡偶爾會遇見的猶豫、體貼與害怕。請在花園裡散散步，點選吸引你的花朵，聽聽心裡的聲音。',
          palette: {
            badgeBg: '#EBF0EB',
            badgeBorder: '#9CAF9E',
            badgeText: '#3E5241'
          },
          isFlowerIsland: true,
          courseSection: {
            freeIntro: '你可以隨時在上方溫室花園免費體驗三朵巴哈花精的情境覺察練習，並閱讀花精日常漫畫與自我照顧文章（陸續新增中），認識情緒背後的溫柔訊號。',
            deepIntro: '若你希望系統性地認識 38 種巴哈花精的植物觀察、情緒對應與日常自我照顧應用，我們提供循序漸進的花精整理與陪伴教學。本課程旨在協助日常情緒覺察與自我認識，不涉及任何醫療診斷或疾病治療。',
            curriculum: '38 種巴哈花精完整認識、七大情緒指標分類、日常情境傾聽練習、自我與親友陪伴應用的界線與倫理（詳細單元大綱由網站擁有者補充中）。',
            durationAndMode: '課程時數與進行方式（線上直播／實體工作坊／自主學習方案）待網站擁有者確認後公布。',
            fee: '待網站擁有者提供正式課程費用資訊（絕不於對話中強制推銷）。',
            registration: '正式報名連結與開課梯次整理中，將於確認後開放。'
          }
        },
        light: {
          id: 'light',
          name: '光的課程島',
          subtitle: '延伸探索・17 級光階學習地圖',
          slogan: '光的課程｜讓心越來越寬，讓生命越來越自在。',
          welcome: '這是一張可以自由停留的學習地圖。現有 13 級、65 道原創情境題；最後 4 級內容準備中。每一階只是不同的反思視角，不代表靈性高低，也不是心理診斷、修習資格認證或正式級次評量。',
          palette: {
            badgeBg: '#F7F2E4',
            badgeBorder: '#D9C59A',
            badgeText: '#665430'
          },
          isLightIsland: true,
          courseSection: {
            freeIntro: '上方17級學習地圖目前提供13級、共65道原創生活化覺察問答，其餘4級準備中。完成任一級五題即可閱讀當下反應分析與日常微練習，並自由探索其他級次。',
            deepIntro: '《光的課程》（A Course in Light）是一套循序漸進的內在意識探索與靜心學習體系。注意：本島互動問答為原創生活化改寫，正式課程教材與本題庫創作分別呈現；更高級次主題僅作故事式公開探索，不提供拙火啟動、正式冥想技法或修行晉級判定。',
            curriculum: '初階第一至四級次（身體、情緒感受、理性、乙太星光體）與行星一至九級次之正式教材共修與生活實踐討論（詳細課程大綱待網站擁有者補充）。',
            durationAndMode: '每週固定共修時段與進行方式（線上或實體帶領）待網站擁有者確認後提供。',
            fee: '待網站擁有者提供正式課程費用資訊（絕不於對話或問答中強制推銷）。',
            registration: '報名方式與最新開課梯次待網站擁有者確認後更新。'
          }
        },
        reiki: {
          id: 'reiki',
          name: '靈氣島',
          subtitle: '靈氣介紹、學習資訊及課程',
          slogan: '「讓自己回到安定與平衡。」',
          welcome: '走過淡青綠色的石階，庭院中央是一座安靜的水池。當外界的聲音太吵雜、生活節奏太快時，你可以來到這裡坐一會兒。不用勉強自己立刻振作，只要看著水面的波紋慢慢平息，身體也會記起如何放鬆。',
          palette: {
            badgeBg: '#EBF1F4',
            badgeBorder: '#8FA2B2',
            badgeText: '#3A4E5C'
          },
          explorations: [
            {
              title: '掌心的溫度｜把注意力帶回身體',
              summary: '我們的思緒常常跑到很遠的未來或過去，但身體一直都在當下。透過雙手輕輕交疊的溫度，就能把散落的力氣收回來。',
              prompt: '現在試著把一隻手輕輕放在胸口或腹部，感受三次起伏的呼吸，那裡感覺是溫暖、微涼，還是有點緊繃呢？'
            },
            {
              title: '靜水漣漪｜不抗拒情緒的流動',
              summary: '就像風吹過水池會起波紋，情緒來臨時也是如此。不去壓抑、也不急著攪動它，水面自然會慢慢恢復清澈。',
              prompt: '此刻你的心情如果是一池水，它是平靜的、微風吹拂的，還是正在下著小雨呢？'
            },
            {
              title: '留白的練習｜為日常保留緩衝帶',
              summary: '平衡不是把每一分鐘都精準分配，而是在忙碌與忙碌之間，留給自己喝一杯溫水的安靜空檔。',
              prompt: '今天結束前，你可以為自己留出哪十分鐘，什麼都不做、只是安靜地休息？'
            }
          ],
          courseSection: {
            freeIntro: '在庭院中，你可以免費體驗上方三個日常呼吸與掌心放鬆練習，認識靈氣「回到當下、溫柔自我照顧」的基本精神。',
            deepIntro: '靈氣（Reiki）是一門源於傳統手觸放鬆與靜心的自我照顧學習。課程旨在陪伴學員練習身心放鬆、日常安定與自我覺察，不宣稱具有任何醫療診斷或治療疾病之功效。',
            curriculum: '靈氣歷史與核心理念、自我靜心與手位放鬆練習、日常生活中的平衡與界線照顧（詳細課程內容待網站擁有者補充）。',
            durationAndMode: '課程時數、階次安排與上課形式待網站擁有者確認後公布。',
            fee: '待網站擁有者提供正式課程費用資訊。',
            registration: '報名連結與開課資訊待網站擁有者確認後更新。'
          }
        },
        theater: {
          id: 'theater',
          name: '人間劇場島',
          subtitle: '生活故事、漫畫、短影音與自我覺察',
          slogan: '「那些讓人哭笑不得的日常，都是理解自己的線索。」',
          welcome: '歡迎來到人間劇場島。在這裡，我們不談深奧的大道理，也沒有任何心理診斷與人格標籤。我們把生活裡那些「怎麼又這樣了」的小插曲，搬上溫暖的陶土色小舞台，透過故事、漫畫與短影音，陪你一起溫柔看懂自己。',
          palette: {
            badgeBg: '#F6ECE8',
            badgeBorder: '#C89B87',
            badgeText: '#664334'
          },
          isTheaterIsland: true,
          explorations: [
            {
              title: '第一幕：小劇場導演椅｜拉開一點點觀察距離',
              summary: '當我們在氣頭上或委屈裡時，整個世界就像特寫鏡頭一樣壓迫。試著退後兩步坐回觀眾席，你會看見更完整的畫面。',
              prompt: '如果把最近讓你哭笑不得的一件小事拍成三分鐘短片，你會幫這部短片取什麼名字？'
            },
            {
              title: '第二幕：熟悉的台詞｜聽見反覆出現的內在渴望',
              summary: '「算了都我來」、「每次都這樣」——那些我們脫口而出的習慣台詞背後，其實都藏著一個渴望被理解的自己。',
              prompt: '在你心裡最常出現的一句「OS（內心獨白）」是什麼？那句話其實最希望誰能聽見？'
            },
            {
              title: '第三幕：即興改寫｜給今天一個小小的新反應',
              summary: '不需要一次改變整個人生，只要在熟悉的情境裡，換一句話說、或慢半拍回應，故事就會開始轉彎。',
              prompt: '如果下次又遇到類似的場景，你想試著為台上的自己加上什麼新動作？'
            }
          ]
        },
        library: {
          id: 'library',
          name: '智慧圖書館島',
          subtitle: '文章、電子書及延伸閱讀',
          slogan: '「在文字與知識裡，遇見新的視角。」',
          welcome: '走進這座由米白與沙金色堆疊而成的圖書塔，書架上放的不是厚重的教科書，而是一扇扇不同角度的小窗。你可以自由翻閱主題文章、電子書摘與延伸閱讀，在安靜的文字裡遇見新的理解。',
          palette: {
            badgeBg: '#F4EFE4',
            badgeBorder: '#C6B79D',
            badgeText: '#594D38'
          },
          explorations: [
            {
              title: '專題文章區｜日常裡的心靈散步筆記',
              summary: '收錄關於情緒理解、關係界線與內在探索的溫和長文，陪伴你在通勤或睡前讀一段不急躁的文字。',
              prompt: '現在的你，正在學習適應或摸索哪一件「還不太熟練」的事呢？給還在練習的自己一句鼓勵吧。'
            },
            {
              title: '電子書與小冊子｜可深入閱讀的主題指南',
              summary: '整理生命數字象徵、花精日常觀察與靜心入門的主題電子書（網站擁有者陸續上架中）。',
              prompt: '如果最近的一種情緒是一封信，你覺得信裡面寫的一句話會是什麼？'
            },
            {
              title: '延伸閱讀書單｜連結更多溫暖的智慧視角',
              summary: '不需要讀完世界上所有的建議，只要有一本書或一句話能讓你今天覺得被理解，那就足夠了。',
              prompt: '最近有沒有哪一句話、歌詞或書裡的片段，讓你心裡覺得暖暖的？'
            }
          ]
        },
        numerology: {
          id: 'numerology',
          name: '生命數字島',
          subtitle: '生日與姓名・生活裡的自我探索',
          slogan: '「從一個數字，開始多理解自己一點。」',
          welcome: '在安靜的幾何石碑旁，先看見兩個數字，再帶著自己的生活來讀。你可以留下有感的部分，也可以說：這段不太像我。',
          palette: {
            badgeBg: '#EFEBF5',
            badgeBorder: '#8E889B',
            badgeText: '#474254'
          },
          isNumerologyIsland: true
        }
      };

      /* ------------------------------------------------------------------------
         3.5 生命數字島：沿用最新修正的運算引擎
             （新版介面固定採鑽石規則；舊引擎其他欄位保留，不參與本版解讀）
         ------------------------------------------------------------------------ */
      const DiamondNumerologyEngine = (function() {
        // 1. 畢達哥拉斯字母對照表（《鑽石生命靈數》李連興 LIAN HIOG LI = 3915 8967 39 標準表）
        const PYTHAGOREAN_MAP = {
          A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9,
          J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9,
          S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8
        };

        // 2. 王煒午《原數力量》附錄一字母對照表
        const WANG_ORIGINAL_MAP = {
          A:1, I:1, J:1, Q:1, Y:1,
          B:2, K:2, R:2,
          G:3, L:3,
          D:4, M:4,
          H:5, N:5,
          S:6, U:6, V:6, W:6,
          E:7, O:7, X:7, Z:7,
          C:8, F:8, P:8,
          T:9
        };

        const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

        // 將任意整數各位數相加一次
        function sumDigitsOnce(num) {
          return String(Math.abs(num))
            .split('')
            .reduce((acc, d) => acc + (parseInt(d, 10) || 0), 0);
        }

        // 鑽石生命靈數化約規則：保留個位數，若過程或本身為 11 或 22，回傳 { value: 2, display: '2/11', isMaster: true }
        function reduceDiamond(num) {
          let n = Math.abs(parseInt(num, 10) || 0);
          let has11 = (n === 11);
          let has22 = (n === 22);

          while (n > 9) {
            if (n === 11) has11 = true;
            if (n === 22) has22 = true;
            n = sumDigitsOnce(n);
          }

          if (has11 && n === 2) {
            return { value: 2, display: '2/11', rawMaster: 11 };
          }
          if (has22 && n === 4) {
            return { value: 4, display: '4/22', rawMaster: 22 };
          }
          return { value: n, display: String(n), rawMaster: null };
        }

        // 純個位數化約（用於相減計算挑戰數等基礎運算）
        function reduceSingleDigit(num) {
          let n = Math.abs(parseInt(num, 10) || 0);
          while (n > 9) {
            n = sumDigitsOnce(n);
          }
          return n;
        }

        // 計算生日鑽石基本圖 13 個指標 + 原數力量主命數與先天九宮格
        function calculateBirthChart(dateStr) {
          if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return null;
          const [yearStr, monthStr, dayStr] = dateStr.split('-');
          const year = parseInt(yearStr, 10);
          const month = parseInt(monthStr, 10);
          const day = parseInt(dayStr, 10);
          // 防止非法日期（例如 2025-02-31）被當成有效生日計算。
          const verifiedDate = new Date(Date.UTC(year, month - 1, day));
          if (year < 1 || month < 1 || month > 12 || day < 1 ||
              verifiedDate.getUTCFullYear() !== year ||
              verifiedDate.getUTCMonth() !== month - 1 ||
              verifiedDate.getUTCDate() !== day) return null;

          // 三幕子題（三個週期循環數字）
          const cycle1 = reduceDiamond(month);
          const cycle2 = reduceDiamond(day);
          const cycle3 = reduceDiamond(year);

          // 全片主題（生命歷程數字）：依郝明義書中公式 = 三幕子題單數相加再化約
          const lifePathSum = cycle1.value + cycle2.value + cycle3.value;
          const lifePath = reduceDiamond(lifePathSum);

          // 第一主角（生日數字）
          const birthday = reduceDiamond(day);

          // 四個正面配角（四個高峰數字）
          const pinnacle1 = reduceDiamond(cycle1.value + cycle2.value);
          const pinnacle2 = reduceDiamond(cycle2.value + cycle3.value);
          const pinnacle3 = reduceDiamond(pinnacle1.value + pinnacle2.value);
          const pinnacle4 = reduceDiamond(cycle1.value + cycle3.value);

          // 四個反面配角（四個挑戰數字）：大減小，0 ~ 8
          const c1Val = Math.abs(cycle1.value - cycle2.value);
          const c2Val = Math.abs(cycle2.value - cycle3.value);
          const c3Val = Math.abs(c1Val - c2Val);
          const c4Val = Math.abs(cycle1.value - cycle3.value);

          // 正面/反面配角出場年齡區間（第一階段：出生至 36 - 全片主題數）
          const p1EndAge = 36 - lifePath.value;
          const p2StartAge = p1EndAge + 1;
          // 依《鑽石生命靈數》書中明列年齡區間：以29歲結束為例，
          // 接著為30–39、40–49、50歲以後（書內另說有約兩年緩衝）。
          const p2EndAge = p1EndAge + 10;
          const p3StartAge = p2EndAge + 1;
          const p3EndAge = p2EndAge + 10;
          const p4StartAge = p3EndAge + 1;

          // 王煒午《原數力量》主命數與後天數計算：(年各位數和) + (月各位數和) + (日各位數和)
          const yearRawSum = sumDigitsOnce(yearStr);
          const monthRawSum = sumDigitsOnce(monthStr);
          const dayRawSum = sumDigitsOnce(dayStr);
          const wangTotal = yearRawSum + monthRawSum + dayRawSum;
          let wangChain = `${wangTotal}`;
          let tempW = wangTotal;
          const postNatalDigits = [];
          String(wangTotal).split('').forEach(d => postNatalDigits.push(parseInt(d, 10)));
          while (tempW > 9) {
            tempW = sumDigitsOnce(tempW);
            wangChain += `/${tempW}`;
            if (tempW > 9) {
              String(tempW).split('').forEach(d => postNatalDigits.push(parseInt(d, 10)));
            }
          }

          // 先天數九宮格統計（1~9 與 0）
          const rawDateDigits = (yearStr + monthStr + dayStr).split('').map(d => parseInt(d, 10));
          const innateCounts = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 0:0 };
          rawDateDigits.forEach(d => {
            if (innateCounts[d] !== undefined) innateCounts[d]++;
          });

          // 今年個人流年數（附錄二：出生月化約 + 出生日化約 + 今年年份化約）
          const currentYear = new Date().getFullYear();
          const personalYear = reduceDiamond(cycle1.value + cycle2.value + reduceSingleDigit(currentYear));

          return {
            dateStr,
            year, month, day,
            cycle1, cycle2, cycle3,
            lifePath,
            birthday,
            pinnacle1, pinnacle2, pinnacle3, pinnacle4,
            challenge1: { value: c1Val, display: String(c1Val) },
            challenge2: { value: c2Val, display: String(c2Val) },
            challenge3: { value: c3Val, display: String(c3Val) },
            challenge4: { value: c4Val, display: String(c4Val) },
            ages: {
              p1Range: `出生～${p1EndAge} 歲`,
              p2Range: `${p2StartAge}～${p2EndAge} 歲`,
              p3Range: `${p3StartAge}～${p3EndAge} 歲`,
              p4Range: `${p4StartAge} 歲之後`
            },
            wangSystem: {
              yearRawSum,
              monthRawSum,
              dayRawSum,
              formulaText: `${yearRawSum}（年）+ ${monthRawSum}（月）+ ${dayRawSum}（日）= ${wangChain}`,
              mainLifeNum: tempW,
              wangChain
            },
            innateCounts,
            currentYear,
            personalYear
          };
        }

        // 計算姓名羅馬拼音擴增圖指標（表現數、渴望數、個性數、潛意識主角、平衡數、理性數、成熟數）
        function calculateRomanNameChart(romanName, birthChart = null, systemType = 'pythagorean') {
          const cleaned = String(romanName || '').toUpperCase().replace(/[^A-Z\s\-]/g, '').trim();
          if (!cleaned) return null;

          const map = systemType === 'wang' ? WANG_ORIGINAL_MAP : PYTHAGOREAN_MAP;
          const words = cleaned.split(/[\s\-]+/).filter(Boolean);
          if (words.length === 0) return null;

          const letterBreakdown = [];
          let totalSum = 0;
          let vowelSum = 0;
          let consonantSum = 0;
          let initialsSum = 0;

          const gridPresence = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0 };

          words.forEach((word, wIdx) => {
            const chars = word.split('');
            const wordItems = [];
            let wordSum = 0;
            chars.forEach((ch, cIdx) => {
              const val = map[ch] || 0;
              const isVowel = VOWELS.has(ch);
              wordItems.push({ letter: ch, value: val, isVowel });
              wordSum += val;
              totalSum += val;
              if (isVowel) {
                vowelSum += val;
              } else {
                consonantSum += val;
              }
              if (cIdx === 0) {
                initialsSum += val;
              }
              if (val >= 1 && val <= 9) {
                gridPresence[val]++;
              }
            });
            letterBreakdown.push({ word, items: wordItems, wordSum, wordReduced: reduceDiamond(wordSum) });
          });

          // 1. 導演拍攝手法（表現數字 Expression Number）
          const expression = reduceDiamond(totalSum);
          // 2. 渴望主題（內心欲望數字 Heart's Desire Number - 母音）
          const heartsDesire = reduceDiamond(vowelSum);
          // 3. 行銷主題（個性數字 Personality Number - 子音）
          const personality = reduceDiamond(consonantSum);
          // 4. 潛意識主角（潛意識自我數字 Subconscious Self Number - 九宮格出現幾種數字）
          const distinctDigitsCount = Object.values(gridPresence).filter(count => count > 0).length;
          const subconscious = { value: distinctDigitsCount, display: String(distinctDigitsCount) };
          // 5. 平衡演員（平衡數字 Balance Number - 各單字首字母總和化約）
          const balance = reduceDiamond(initialsSum);
          // 6. 理性演員（Rational Number）：First name + Middle name 的所有字母總和，
          // 再加生日數。不可漏掉 Middle name；原書李連興範例應為 3。
          // 輸入順序請採 First [Middle] Last；僅一個單字時視為名字。
          const givenNameWords = letterBreakdown.length > 1
            ? letterBreakdown.slice(0, -1)
            : letterBreakdown;
          const givenNameSum = givenNameWords.reduce((acc, word) => acc + word.wordSum, 0);
          const rational = birthChart
            ? reduceDiamond(reduceSingleDigit(givenNameSum) + birthChart.birthday.value)
            : null;
          // 7. 第二主題（成熟數字 Maturity Number = 全片主題 + 導演拍攝手法）
          const maturity = birthChart
            ? reduceDiamond(birthChart.lifePath.value + expression.value)
            : null;

          return {
            cleaned,
            systemType,
            letterBreakdown,
            totalSum,
            expression,
            heartsDesire,
            personality,
            subconscious,
            balance,
            rational,
            maturity,
            gridPresence
          };
        }

        return {
          calculateBirthChart,
          calculateRomanNameChart
        };
      })();

      /* ------------------------------------------------------------------------
         4. 狀態管理與 DOM 參照（純本機記憶體狀態，絕不外傳至伺服器）
         ------------------------------------------------------------------------ */
      let currentStage = 'story'; // 'story' | 'guide' | 'map' | 'island'
      let currentStoryStep = 0;
      let currentGuideStep = 1;   // 1 ~ 8 段小光對話
      let guideSubState = null;   // 用於同一段內的子回應狀態
      let pendingGuideResumeStep = null;

      const visitorProfile = {
        earthName: '',
        birthDate: '',
        romanizedName: '',
        romanizedConfirmed: false,
        romanSystem: 'pythagorean', // 'pythagorean' (鑽石生命靈數畢氏表) | 'wang' (王煒午原數力量表)
        selectedNumberDetail: null, // 點擊鑽石圖表任一位置可查看該數字的光明/黑暗面與電影角色
        selectedNumerologyRole: null, // 對應圖中指標的閱讀角度，不將不同位置解讀成相同人格標籤
        selectedLifeTopic: 'boundaries',
        numerologyActiveTab: 'birthdate'
      };

      let currentIslandId = null;
      let currentFlowerId = 'scleranthus';
      let currentFlowerChoiceIndex = null;
      let storyLineTimers = [];
      let act4ChoreographyTimers = [];

      // 光的課程島：讀取獨立 JSON 題庫與本機記憶體作答狀態（預設只存瀏覽器記憶體，不上傳第三方）
      let LIGHT_SPIRAL_BANK = null;
      let lightBankLoading = false;
      async function loadLightBank() {
        if (lightBankLoading) return;
        lightBankLoading = true;
        try {
          const response = await fetch('./light-levels.json');
          if (!response.ok) throw new Error('題庫回應異常');
          const bank = await response.json();
          if (!Array.isArray(bank.levels) || bank.levels.length !== 17 || !bank.traits) throw new Error('題庫格式不符');
          const ids = new Set();
          for (const level of bank.levels) {
            if (ids.has(level.id) || !Array.isArray(level.questions) || ![0, 5].includes(level.questions.length)) throw new Error('級次格式不符');
            ids.add(level.id);
            for (const q of level.questions) if (!q.id || !q.situation || !Array.isArray(q.options) || q.options.length !== 3) throw new Error('題目格式不符');
          }
          LIGHT_SPIRAL_BANK = bank;
        } catch (_) { LIGHT_SPIRAL_BANK = null; }
        finally {
          lightBankLoading = false;
          if (currentStage === 'island' && lightJourney.isMap() && document.querySelector('[data-light-bank-state]')) renderIslandDetail('light');
        }
      }

      const lightSpiralState = {
        activeLevelId: 'L01',
        currentQuestionIndex: 0, // 0 ~ 4
        viewMode: 'quiz',        // 'quiz' | 'result'
        answersByLevel: {},      // { L01: { L01Q1: 'A', ... }, ... }
        completedLevels: {},     // { L01: true, ... }
        pickedQuestionByLevel: {} // 當五題皆為不同 trait 時，使用者自選最有感的一題 ID
      };

      // DOM 元素
      const bodyEl = document.body;
      const stageStory = document.getElementById('stageStory');
      const stageGuide = document.getElementById('stageGuide');
      const stageMap = document.getElementById('stageMap');
      const stageIsland = document.getElementById('stageIsland');

      const audioToggleBtn = document.getElementById('audioToggleBtn');
      const skipStoryBtn = document.getElementById('skipStoryBtn');
      const skipGuideTopBtn = document.getElementById('skipGuideTopBtn');
      const resumeGuideTopBtn = document.getElementById('resumeGuideTopBtn');
      const talkToGuideTopBtn = document.getElementById('talkToGuideTopBtn');
      const backToMapTopBtn = document.getElementById('backToMapTopBtn');
      const replayStoryBtn = document.getElementById('replayStoryBtn');
      const brandHomeBtn = document.getElementById('brandHomeBtn');

      // Story DOM
      const storyCameraRig = document.getElementById('storyCameraRig');
      const storySoulGroup = document.getElementById('storySoulGroup');
      const storyEarthGroup = document.getElementById('storyEarthGroup');
      const storyGateAndBridgeGroup = document.getElementById('storyGateAndBridgeGroup');
      const storyRainbowBridge = document.getElementById('storyRainbowBridge');
      const gateInnerLight = document.getElementById('gateInnerLight');
      const gateDoorLeft = document.getElementById('gateDoorLeft');
      const gateDoorRight = document.getElementById('gateDoorRight');
      const act4SoftLightCurtain = document.getElementById('act4SoftLightCurtain');
      const storyArchipelagoPreview = document.getElementById('storyArchipelagoPreview');
      const storyCloudsLeft = document.getElementById('storyCloudsLeft');
      const storyCloudsRight = document.getElementById('storyCloudsRight');
      const storyAmbientGroup = document.getElementById('storyAmbientGroup');
      const storyActLabel = document.getElementById('storyActLabel');
      const storyTextContainer = document.getElementById('storyTextContainer');
      const storyNextBtn = document.getElementById('storyNextBtn');
      const storyNextBtnText = document.getElementById('storyNextBtnText');
      const storyReplayAct4Btn = document.getElementById('storyReplayAct4Btn');
      const storyStepDots = document.querySelectorAll('#storyStepDots button');

      // Guide DOM
      const guidePrevStepBtn = document.getElementById('guidePrevStepBtn');
      const guideStepIndicator = document.getElementById('guideStepIndicator');
      const guideSkipAllBtn = document.getElementById('guideSkipAllBtn');
      const guideDialogCard = document.getElementById('guideDialogCard');
      const clearVisitorDataBtn = document.getElementById('clearVisitorDataBtn');

      // Map & Island DOM
      const mapHoverHint = document.getElementById('mapHoverHint');
      const archipelagoNodes = document.querySelectorAll('.archipelago-node');
      const quickIslandBtns = document.querySelectorAll('.quick-island-btn');
      const islandDetailContent = document.getElementById('islandDetailContent');

      /* ------------------------------------------------------------------------
         5. 開場故事渲染與第四幕五階段啟程運鏡
         ------------------------------------------------------------------------ */
      function clearStoryTimers() {
        storyLineTimers.forEach(t => clearTimeout(t));
        storyLineTimers = [];
        act4ChoreographyTimers.forEach(t => clearTimeout(t));
        act4ChoreographyTimers = [];
      }

      function resetAct4Elements() {
        if (gateDoorLeft) gateDoorLeft.style.transform = 'translateX(0px)';
        if (gateDoorRight) gateDoorRight.style.transform = 'translateX(0px)';
        if (act4SoftLightCurtain) act4SoftLightCurtain.setAttribute('opacity', '0');
        storySoulGroup.style.transitionDuration = '1400ms';
        storyEarthGroup.style.transitionDuration = '1800ms';
        storyCameraRig.style.transitionDuration = '1800ms';
      }

      function runAct4Choreography() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
          if (gateDoorLeft) gateDoorLeft.style.transform = 'translateX(-16px)';
          if (gateDoorRight) gateDoorRight.style.transform = 'translateX(16px)';
          gateInnerLight.setAttribute('opacity', '0.92');
          storyRainbowBridge.style.opacity = '1';
          LittleSoulComponent.setState('storyLittleSoul', { view: 'back', pose: 'still' });
          storySoulGroup.style.opacity = '1';
          storySoulGroup.style.transform = 'translate(400px, 285px) scale(0.32)';
          storyEarthGroup.style.transform = 'translate(400px, 402px) scale(1.06)';
          return;
        }

        storySoulGroup.style.transitionDuration = '1100ms';
        storyEarthGroup.style.transitionDuration = '1500ms';
        storyCameraRig.style.transitionDuration = '1500ms';

        if (gateDoorLeft) gateDoorLeft.style.transform = 'translateX(0px)';
        if (gateDoorRight) gateDoorRight.style.transform = 'translateX(0px)';
        gateInnerLight.setAttribute('opacity', '0.25');
        storyRainbowBridge.style.opacity = '0.92';
        LittleSoulComponent.setState('storyLittleSoul', { view: 'back', pose: 'gate-forward' });
        storySoulGroup.style.opacity = '0';
        storySoulGroup.style.transform = 'translate(400px, 128px) scale(0.44)';
        storyEarthGroup.style.opacity = '1';
        storyEarthGroup.style.transform = 'translate(400px, 412px) scale(0.76)';
        storyCameraRig.style.transform = 'translate(0px, 0px) scale(1)';
        if (act4SoftLightCurtain) act4SoftLightCurtain.setAttribute('opacity', '0');

        // 第一階段：光門開啟，小靈魂柔和向前穿出光門
        const tPhase1 = setTimeout(() => {
          if (gateDoorLeft) gateDoorLeft.style.transform = 'translateX(-17px)';
          if (gateDoorRight) gateDoorRight.style.transform = 'translateX(17px)';
          gateInnerLight.setAttribute('opacity', '0.95');
          storyRainbowBridge.style.opacity = '1';
          LittleSoulComponent.setState('storyLittleSoul', { view: 'back', pose: 'gate-forward' });
          storySoulGroup.style.opacity = '1';
          storySoulGroup.style.transform = 'translate(400px, 148px) scale(0.48)';
        }, 200);

        // 第二階段：來到彩虹橋前安靜停留凝望約兩秒（停止步行）
        const tPhase2 = setTimeout(() => {
          LittleSoulComponent.setState('storyLittleSoul', { view: 'back', pose: 'still' });
          storySoulGroup.style.transitionDuration = '900ms';
          storySoulGroup.style.transform = 'translate(400px, 152px) scale(0.48)';
        }, 1600);

        // 第三、四階段：踏上彩虹橋，使用簡單自然的緩慢步行動作向下方地球前進
        const tPhase3And4 = setTimeout(() => {
          LittleSoulComponent.setState('storyLittleSoul', { view: 'back', pose: 'walk' });
          storySoulGroup.style.transitionDuration = '7800ms';
          storySoulGroup.style.transitionTimingFunction = 'cubic-bezier(0.35, 0, 0.25, 1)';
          storySoulGroup.style.transform = 'translate(400px, 342px) scale(0.26)';

          storyEarthGroup.style.transitionDuration = '8200ms';
          storyEarthGroup.style.transform = 'translate(400px, 396px) scale(1.12)';

          storyCameraRig.style.transitionDuration = '8200ms';
          storyCameraRig.style.transform = 'translate(0px, -24px) scale(1.06)';
        }, 3600);

        // 第五階段：接近地球，柔和轉場
        const tPhase5 = setTimeout(() => {
          LittleSoulComponent.setState('storyLittleSoul', { view: 'back', pose: 'float' });
          if (act4SoftLightCurtain) {
            act4SoftLightCurtain.setAttribute('opacity', '0.52');
          }
          storyCloudsLeft.style.opacity = '0.5';
          storyCloudsRight.style.opacity = '0.5';
          storyCloudsLeft.style.transform = 'translateX(-45px)';
          storyCloudsRight.style.transform = 'translateX(45px)';
        }, 11200);

        act4ChoreographyTimers.push(tPhase1, tPhase2, tPhase3And4, tPhase5);
      }

      function renderStoryStep(stepIndex) {
        clearStoryTimers();
        resetAct4Elements();
        currentStoryStep = Math.max(0, Math.min(STORY_ACTS.length - 1, stepIndex));
        const act = STORY_ACTS[currentStoryStep];
        const cfg = act.sceneConfig;

        bodyEl.setAttribute('data-scene', act.id);
        StorySoundEngine.setAct(currentStoryStep);

        if (storyReplayAct4Btn) {
          if (act.isChoreographedAct4) {
            storyReplayAct4Btn.classList.remove('hidden');
          } else {
            storyReplayAct4Btn.classList.add('hidden');
          }
        }

        if (cfg.cameraBreathe) {
          storyCameraRig.classList.add('anim-fpv-breathe');
        } else {
          storyCameraRig.classList.remove('anim-fpv-breathe');
          storyCameraRig.style.transform = cfg.cameraRigTransform || 'translate(0px, 0px) scale(1)';
        }

        storyGateAndBridgeGroup.style.opacity = cfg.gateBridgeOpacity;
        storyRainbowBridge.style.opacity = cfg.rainbowBridgeOpacity;
        gateInnerLight.setAttribute('opacity', cfg.gateLightOpacity);

        storyArchipelagoPreview.style.opacity = cfg.previewOpacity;
        storyArchipelagoPreview.style.transform = cfg.previewTransform;

        storyCloudsLeft.style.opacity = cfg.cloudsOpacity;
        storyCloudsRight.style.opacity = cfg.cloudsOpacity;
        storyCloudsLeft.style.transform = `translateX(${cfg.cloudsLeftX})`;
        storyCloudsRight.style.transform = `translateX(${cfg.cloudsRightX})`;

        storyAmbientGroup.style.opacity = cfg.ambientOpacity;

        if (act.isChoreographedAct4) {
          runAct4Choreography();
        } else {
          LittleSoulComponent.setState('storyLittleSoul', {
            view: cfg.soulView || 'front',
            pose: cfg.soulPose || 'float'
          });
          storySoulGroup.style.transform = cfg.soulTransform;
          storySoulGroup.style.opacity = cfg.soulOpacity;
          storyEarthGroup.style.transform = cfg.earthTransform;
          storyEarthGroup.style.opacity = cfg.earthOpacity;
        }

        storyStepDots.forEach((dot, idx) => {
          if (idx === currentStoryStep) {
            dot.className = 'w-6 h-2 rounded-full bg-ink transition-all duration-300';
            dot.setAttribute('aria-current', 'step');
          } else if (idx < currentStoryStep) {
            dot.className = 'w-2 h-2 rounded-full bg-ink/50 transition-all duration-300';
            dot.removeAttribute('aria-current');
          } else {
            dot.className = 'w-2 h-2 rounded-full bg-ink/20 transition-all duration-300';
            dot.removeAttribute('aria-current');
          }
        });

        storyActLabel.textContent = act.actTitle;
        storyNextBtnText.textContent = act.buttonText;

        storyTextContainer.innerHTML = '';
        act.lines.forEach((lineText, idx) => {
          if (lineText === '') {
            const spacer = document.createElement('div');
            spacer.className = 'h-2';
            storyTextContainer.appendChild(spacer);
            return;
          }
          const p = document.createElement('p');
          p.className = 'story-line';
          p.textContent = lineText;
          storyTextContainer.appendChild(p);

          const timer = setTimeout(() => {
            p.classList.add('visible');
          }, 160 + idx * 360);
          storyLineTimers.push(timer);
        });
      }

      /* ------------------------------------------------------------------------
         6. 舞台切換（故事 / 地球引路人小光 / 群島總覽 / 單一島嶼頁）
         ------------------------------------------------------------------------ */
      function getDisplayTravelerName() {
        const trimmed = (visitorProfile.earthName || '').trim();
        return trimmed.length > 0 ? trimmed : '小旅人';
      }

      function hasAnyVisitorData() {
        const hasLightAnswers = Object.keys(lightSpiralState.answersByLevel).length > 0;
        return Boolean(
          visitorProfile.earthName ||
          visitorProfile.birthDate ||
          visitorProfile.romanizedName ||
          hasLightAnswers
        );
      }

      function updateClearDataButtonVisibility() {
        if (!clearVisitorDataBtn) return;
        if (hasAnyVisitorData()) {
          clearVisitorDataBtn.classList.remove('hidden');
        } else {
          clearVisitorDataBtn.classList.add('hidden');
        }
      }

      function clearAllVisitorData() {
        numerologyExplorer.reset();
        visitorProfile.earthName = '';
        visitorProfile.birthDate = '';
        visitorProfile.romanizedName = '';
        visitorProfile.romanizedConfirmed = false;
        visitorProfile.selectedLifeTopic = 'boundaries';
        lightSpiralState.answersByLevel = {};
        lightSpiralState.completedLevels = {};
        lightSpiralState.pickedQuestionByLevel = {};
        lightSpiralState.currentQuestionIndex = 0;
        lightSpiralState.viewMode = 'quiz';
        updateClearDataButtonVisibility();
        if (currentStage === 'guide') {
          renderGuideStep(currentGuideStep);
        } else if (currentStage === 'island' && currentIslandId) {
          renderIslandDetail(currentIslandId);
        }
      }

      function switchStage(targetStage, options = {}) {
        currentStage = targetStage;
        clearStoryTimers();

        // 先隱藏所有頂部情境按鈕，再依當前舞台精確開啟
        skipStoryBtn.classList.add('hidden');
        if (skipGuideTopBtn) skipGuideTopBtn.classList.add('hidden');
        if (resumeGuideTopBtn) resumeGuideTopBtn.classList.add('hidden');
        if (talkToGuideTopBtn) talkToGuideTopBtn.classList.add('hidden');
        backToMapTopBtn.classList.add('hidden');
        replayStoryBtn.classList.add('hidden');

        stageStory.className = 'stage-panel stage-hidden w-full flex flex-col items-center justify-between my-auto py-2';
        if (stageGuide) {
          stageGuide.className = 'stage-panel stage-hidden w-full flex flex-col items-center justify-between my-auto py-2';
        }
        stageMap.className = 'stage-panel stage-hidden w-full flex flex-col items-center justify-between my-auto';
        stageIsland.className = 'stage-panel stage-hidden w-full max-w-5xl mx-auto my-auto py-4';

        if (targetStage === 'story') {
          skipStoryBtn.classList.remove('hidden');
          stageStory.className = 'stage-panel stage-active w-full flex flex-col items-center justify-between my-auto py-2';
          renderStoryStep(options.stepIndex !== undefined ? options.stepIndex : 0);
        } 
        else if (targetStage === 'guide') {
          bodyEl.setAttribute('data-scene', 'guide-stage');
          StorySoundEngine.setAct(4); // 保持與故事自然銜接的 528Hz 溫暖背景音樂
          if (skipGuideTopBtn) skipGuideTopBtn.classList.remove('hidden');
          replayStoryBtn.classList.remove('hidden');

          // 確保抵達地球的小靈魂處於好奇（歪頭、停頓、微轉身）狀態
          LittleSoulComponent.setState('guideLittleSoul', { view: 'front', pose: 'curious' });

          if (stageGuide) {
            stageGuide.className = 'stage-panel stage-active w-full flex flex-col items-center justify-between my-auto py-2';
          }
          if (options.guideStep !== undefined) {
            currentGuideStep = options.guideStep;
          }
          guideSubState = options.subState || null;
          renderGuideStep(currentGuideStep, guideSubState);
        }
        else if (targetStage === 'map') {
          bodyEl.setAttribute('data-scene', 'archipelago-map');
          StorySoundEngine.setAct(4);
          if (talkToGuideTopBtn) talkToGuideTopBtn.classList.remove('hidden');
          replayStoryBtn.classList.remove('hidden');

          stageMap.className = 'stage-panel stage-active w-full flex flex-col items-center justify-between my-auto';
        } 
        else if (targetStage === 'island' && options.islandId) {
          currentIslandId = options.islandId;
          bodyEl.setAttribute('data-scene', `island-${options.islandId}`);
          
          // 若是從小光對話途中前往島嶼，顯示「返回小光對話」按鈕，同時也保留「返回群島」
          if (pendingGuideResumeStep !== null && resumeGuideTopBtn) {
            resumeGuideTopBtn.classList.remove('hidden');
          } else if (talkToGuideTopBtn) {
            talkToGuideTopBtn.classList.remove('hidden');
          }
          backToMapTopBtn.classList.remove('hidden');
          replayStoryBtn.classList.remove('hidden');

          if (options.islandId === 'light') lightJourney.resetEntry();
          renderIslandDetail(options.islandId);
          stageIsland.className = 'stage-panel stage-active w-full max-w-5xl mx-auto my-auto py-4';
        }

        updateClearDataButtonVisibility();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      /* ------------------------------------------------------------------------
         6.5 地球引路人「小光」八段互動對話系統
         ------------------------------------------------------------------------ */
      function escapeHtml(str) {
        return String(str || '')
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }

      // 輔助：在小光對話期間，讓抵達地球的小靈魂自然切換「正面歪頭好奇」與「轉身側面傾聽」
      function syncGuideSoulCuriousReaction(step, subState) {
        if (step === 2 || step === 5 || subState === 'greeted' || subState === 'recommended') {
          // 轉向側面望向小光，並保留歪頭停頓的好奇神態
          LittleSoulComponent.setState('guideLittleSoul', { view: 'side', pose: 'curious' });
        } else {
          // 正面歪頭、停頓、微轉身打量地球世界
          LittleSoulComponent.setState('guideLittleSoul', { view: 'front', pose: 'curious' });
        }
      }

      function renderGuideStep(step, subState = null) {
        currentGuideStep = Math.max(1, Math.min(8, step));
        guideSubState = subState;
        syncGuideSoulCuriousReaction(currentGuideStep, guideSubState);

        if (guideStepIndicator) {
          guideStepIndicator.textContent = `地球引路人・小光 (${currentGuideStep} / 8)`;
        }
        if (guidePrevStepBtn) {
          if (currentGuideStep > 1 || guideSubState !== null) {
            guidePrevStepBtn.classList.remove('invisible');
          } else {
            guidePrevStepBtn.classList.add('invisible');
          }
        }

        updateClearDataButtonVisibility();
        const travelerName = escapeHtml(getDisplayTravelerName());

        // 第一段：歡迎來到地球
        if (currentGuideStep === 1) {
          guideDialogCard.innerHTML = `
            <p class="text-xs tracking-[0.2em] text-inkLight mb-3">第一段・初抵地球</p>
            <div class="font-serif text-lg sm:text-xl text-ink leading-relaxed space-y-2">
              <p>「歡迎來到地球！</p>
              <p>這裡有好多故事等著你呢。</p>
              <p>別擔心，你不需要一次弄懂所有事情。」</p>
            </div>
            <div class="mt-6 flex justify-center">
              <button type="button" data-guide-next="2" class="btn-story">
                <span>你好，小光！</span>
              </button>
            </div>
          `;
        }

        // 第二段：地球名字
        else if (currentGuideStep === 2) {
          if (guideSubState === 'greeted') {
            guideDialogCard.innerHTML = `
              <p class="text-xs tracking-[0.2em] text-inkLight mb-3">第二段・地球上的稱呼</p>
              <div class="font-serif text-lg sm:text-xl text-ink leading-relaxed space-y-2 py-2">
                <p>「很高興認識你，${travelerName}！」</p>
              </div>
              <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button type="button" data-guide-sub="edit" class="btn-quiet">修改稱呼</button>
                <button type="button" data-guide-next="3" class="btn-story">
                  <span>繼續</span>
                </button>
              </div>
            `;
          } else {
            guideDialogCard.innerHTML = `
              <p class="text-xs tracking-[0.2em] text-inkLight mb-3">第二段・地球上的稱呼</p>
              <div class="font-serif text-lg sm:text-xl text-ink leading-relaxed mb-5">
                <p>「對了，你在地球上叫什麼名字？」</p>
              </div>
              <div class="max-w-sm mx-auto text-left">
                <label for="guideNameInput" class="block text-xs tracking-wider text-inkLight mb-1.5">我的地球名字（可輸入真實姓名或暱稱）</label>
                <input id="guideNameInput" type="text" maxlength="40" value="${escapeHtml(visitorProfile.earthName)}" placeholder="例如：小安、旅人 A..."
                  class="w-full px-4 py-2.5 rounded-xl border border-[#CFC6B6] bg-[#FFFFFF] text-ink text-base focus:outline-none focus:border-ink transition-colors"/>
              </div>
              <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button type="button" id="guideSkipNameBtn" class="btn-quiet">暫時不說（以「小旅人」稱呼）</button>
                <button type="button" id="guideConfirmNameBtn" class="btn-story">告訴小光</button>
              </div>
            `;
          }
        }

        // 第三段：降生日期
        else if (currentGuideStep === 3) {
          if (guideSubState === 'acknowledged') {
            guideDialogCard.innerHTML = `
              <p class="text-xs tracking-[0.2em] text-inkLight mb-3">第三段・降生之日</p>
              <div class="font-serif text-lg sm:text-xl text-ink leading-relaxed space-y-2 py-2">
                <p>「每個生日，都可以成為認識自己的一扇窗。」</p>
                ${visitorProfile.birthDate ? `<p class="text-sm font-sans text-inkLight">已記下你的降生日期：${escapeHtml(visitorProfile.birthDate)}</p>` : `<p class="text-sm font-sans text-inkLight">（你選擇暫時保留生日，隨時都可以在數字島自由填入）</p>`}
              </div>
              <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button type="button" data-guide-sub="edit" class="btn-quiet">重新選擇日期</button>
                <button type="button" data-guide-next="4" class="btn-story">繼續</button>
              </div>
            `;
          } else {
            guideDialogCard.innerHTML = `
              <p class="text-xs tracking-[0.2em] text-inkLight mb-3">第三段・降生之日</p>
              <div class="font-serif text-lg sm:text-xl text-ink leading-relaxed mb-5">
                <p>「那麼，${travelerName}，你是哪一天來到地球的呢？」</p>
              </div>
              <div class="max-w-xs mx-auto text-left">
                <label for="guideBirthInput" class="block text-xs tracking-wider text-inkLight mb-1.5">選擇出生日期（選填）</label>
                <input id="guideBirthInput" type="date" value="${escapeHtml(visitorProfile.birthDate)}"
                  class="w-full px-4 py-2.5 rounded-xl border border-[#CFC6B6] bg-[#FFFFFF] text-ink text-base focus:outline-none focus:border-ink transition-colors"/>
              </div>
              <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button type="button" id="guideSkipBirthBtn" class="btn-quiet">先跳過</button>
                <button type="button" id="guideConfirmBirthBtn" class="btn-story">選好了</button>
              </div>
            `;
          }
        }

        // 第四段：生命數字島
        else if (currentGuideStep === 4) {
          guideDialogCard.innerHTML = `
            <p class="text-xs tracking-[0.2em] text-inkLight mb-3">第四段・數字的象徵</p>
            <div class="font-serif text-lg sm:text-xl text-ink leading-relaxed space-y-2">
              <p>「想不想先去數字島看看？</p>
              <p>我們可以從生日與名字的數字象徵，</p>
              <p>探索你可能具有的特質與人生課題。」</p>
            </div>
            <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button type="button" data-guide-visit-island="numerology" data-resume-step="5" class="btn-story">
                <span>前往生命數字島</span>
              </button>
              <button type="button" data-guide-next="5" class="btn-quiet">
                <span>繼續聽小光說</span>
              </button>
            </div>
          `;
        }

        // 第五段：人間劇場
        else if (currentGuideStep === 5) {
          if (guideSubState === 'recommended') {
            const chosenTopic = THEATER_LIFE_TOPICS.find(t => t.id === visitorProfile.selectedLifeTopic) || THEATER_LIFE_TOPICS[0];
            guideDialogCard.innerHTML = `
              <p class="text-xs tracking-[0.2em] text-inkLight mb-3">第五段・日常的線索</p>
              <div class="font-serif text-lg sm:text-xl text-ink leading-relaxed space-y-2">
                <p>「謝謝你願意告訴我，${travelerName}。</p>
                <p>在地球上，許多人也在『<span class="underline decoration-[#C89B87] underline-offset-4">${escapeHtml(chosenTopic.title)}</span>』裡慢慢摸索。</p>
                <p class="text-base text-inkLight pt-1">要不要去人間劇場島看看相關的故事、漫畫與短影音？有時候看著別人的日常，心裡也會鬆一口氣呢。」</p>
              </div>
              <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button type="button" data-guide-visit-island="theater" data-resume-step="6" class="btn-story">
                  <span>去人間劇場看看</span>
                </button>
                <button type="button" data-guide-next="6" class="btn-quiet">
                  <span>先探索其他地方</span>
                </button>
              </div>
            `;
          } else {
            guideDialogCard.innerHTML = `
              <p class="text-xs tracking-[0.2em] text-inkLight mb-3">第五段・日常的線索</p>
              <div class="font-serif text-lg sm:text-xl text-ink leading-relaxed space-y-1.5 mb-5">
                <p>「不過，比起數字，我更想知道……</p>
                <p>最近的人生，你過得還好嗎？」</p>
                <p class="pt-1">「有沒有什麼事情，讓你覺得特別不容易？」</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-lg mx-auto">
                ${THEATER_LIFE_TOPICS.map(topic => `
                  <button type="button" data-guide-topic="${topic.id}"
                    class="px-3.5 py-2.5 rounded-xl border text-sm transition-all text-left flex items-center justify-between ${
                      visitorProfile.selectedLifeTopic === topic.id
                        ? 'border-[#C89B87] bg-[#F6ECE8] text-ink font-medium'
                        : 'border-[#DFD9CE] bg-[#FFFFFF] text-ink hover:border-[#C89B87]'
                    }">
                    <span>${topic.title}</span>
                    <span class="text-xs text-inkLight">→</span>
                  </button>
                `).join('')}
              </div>
            `;
          }
        }

        // 第六段：找回自己
        else if (currentGuideStep === 6) {
          if (guideSubState === 'willing') {
            guideDialogCard.innerHTML = `
              <p class="text-xs tracking-[0.2em] text-inkLight mb-3">第六段・內在意識旅程</p>
              <div class="font-serif text-lg sm:text-xl text-ink leading-relaxed space-y-2">
                <p>「那麼，也許你會喜歡光的課程島。</p>
                <p>那裡有一條探索內在意識的學習道路。」</p>
              </div>
              <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button type="button" data-guide-visit-island="light" data-resume-step="7" class="btn-story">
                  <span>前往光的課程島</span>
                </button>
                <button type="button" data-guide-next="7" class="btn-quiet">
                  <span>先記下來，繼續聽小光說</span>
                </button>
              </div>
            `;
          } else {
            guideDialogCard.innerHTML = `
              <p class="text-xs tracking-[0.2em] text-inkLight mb-3">第六段・找回自己</p>
              <div class="font-serif text-lg sm:text-xl text-ink leading-relaxed space-y-2">
                <p>「有時候，我們走著走著，</p>
                <p>會忘記自己原本想成為什麼樣的人。」</p>
                <p class="pt-3">「你願意慢慢找回自己嗎？」</p>
              </div>
              <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button type="button" data-guide-sub="willing" class="btn-story">
                  <span>我願意試試看</span>
                </button>
                <button type="button" data-guide-next="7" class="btn-quiet">
                  <span>我還想多看看這個世界</span>
                </button>
              </div>
            `;
          }
        }

        // 第七段：生活中的支持
        else if (currentGuideStep === 7) {
          guideDialogCard.innerHTML = `
            <p class="text-xs tracking-[0.2em] text-inkLight mb-3">第七段・生活中的支持</p>
            <div class="font-serif text-lg sm:text-xl text-ink leading-relaxed space-y-1.5 mb-5">
              <p>「對了，地球生活有時候真的不容易。」</p>
              <p>「如果你想找一些幫助自己覺察與安定的方法，這裡也有不同的工具。」</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left">
              <button type="button" data-guide-visit-island="flower" data-resume-step="8"
                class="p-4 rounded-xl border border-[#B7C8B8] bg-[#F4F7F4] hover:bg-[#EBF0EB] transition-all flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-sage"></span>
                    <span class="font-serif text-base font-medium text-ink">花精島</span>
                  </div>
                  <p class="text-xs sm:text-sm text-inkLight leading-relaxed">「從情緒與生活故事裡，更理解自己的感受。」</p>
                </div>
                <span class="text-xs text-[#5E7460] mt-3 inline-block">前往花精島探索 →</span>
              </button>

              <button type="button" data-guide-visit-island="reiki" data-resume-step="8"
                class="p-4 rounded-xl border border-[#9FB6BC] bg-[#F2F6F7] hover:bg-[#EBF1F4] transition-all flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-slateBlue"></span>
                    <span class="font-serif text-base font-medium text-ink">靈氣島</span>
                  </div>
                  <p class="text-xs sm:text-sm text-inkLight leading-relaxed">「認識靈氣的理念，以及相關的自我照顧與學習方式。」</p>
                </div>
                <span class="text-xs text-[#4A6370] mt-3 inline-block">前往靈氣島探索 →</span>
              </button>
            </div>
            <div class="mt-5 flex justify-center">
              <button type="button" data-guide-next="8" class="btn-quiet">
                <span>先繼續聽小光說完</span>
              </button>
            </div>
          `;
        }

        // 第八段：自由探索
        else if (currentGuideStep === 8) {
          guideDialogCard.innerHTML = `
            <p class="text-xs tracking-[0.2em] text-inkLight mb-3">第八段・自由探索</p>
            <div class="font-serif text-lg sm:text-xl text-ink leading-relaxed space-y-2">
              <p>「好了，${travelerName}，現在你已經認識這個世界的一些地方了。」</p>
              <p>「接下來，想去哪裡，都由你自己決定。」</p>
            </div>
            <div class="mt-6 flex justify-center">
              <button type="button" id="guideFinishToMapBtn" class="btn-story">
                <span>展開心靈群島</span>
                <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M6 3l5 5-5 5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          `;
        }

        bindGuideDialogEvents();
      }

      function bindGuideDialogEvents() {
        // 下一步按鈕
        const nextBtns = guideDialogCard.querySelectorAll('[data-guide-next]');
        nextBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const nextStep = parseInt(btn.getAttribute('data-guide-next'), 10);
            StorySoundEngine.enableOnUserAction(4);
            renderGuideStep(nextStep, null);
          });
        });

        // 子狀態切換按鈕
        const subBtns = guideDialogCard.querySelectorAll('[data-guide-sub]');
        subBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const sub = btn.getAttribute('data-guide-sub');
            renderGuideStep(currentGuideStep, sub === 'edit' ? null : sub);
          });
        });

        // 第二段：地球名字輸入確認與略過
        const nameInput = document.getElementById('guideNameInput');
        const confirmNameBtn = document.getElementById('guideConfirmNameBtn');
        const skipNameBtn = document.getElementById('guideSkipNameBtn');
        if (confirmNameBtn && nameInput) {
          const submitName = () => {
            visitorProfile.earthName = nameInput.value.trim();
            renderGuideStep(2, 'greeted');
          };
          confirmNameBtn.addEventListener('click', submitName);
          nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              submitName();
            }
          });
        }
        if (skipNameBtn) {
          skipNameBtn.addEventListener('click', () => {
            visitorProfile.earthName = '';
            renderGuideStep(2, 'greeted');
          });
        }

        // 第三段：生日輸入確認與略過
        const birthInput = document.getElementById('guideBirthInput');
        const confirmBirthBtn = document.getElementById('guideConfirmBirthBtn');
        const skipBirthBtn = document.getElementById('guideSkipBirthBtn');
        if (confirmBirthBtn && birthInput) {
          confirmBirthBtn.addEventListener('click', () => {
            visitorProfile.birthDate = birthInput.value || '';
            renderGuideStep(3, 'acknowledged');
          });
        }
        if (skipBirthBtn) {
          skipBirthBtn.addEventListener('click', () => {
            renderGuideStep(3, 'acknowledged');
          });
        }

        // 第五段：選擇生活主題
        const topicBtns = guideDialogCard.querySelectorAll('[data-guide-topic]');
        topicBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            visitorProfile.selectedLifeTopic = btn.getAttribute('data-guide-topic');
            renderGuideStep(5, 'recommended');
          });
        });

        // 從對話中前往指定島嶼，並記住返回時要接續的對話段落
        const visitIslandBtns = guideDialogCard.querySelectorAll('[data-guide-visit-island]');
        visitIslandBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const islandId = btn.getAttribute('data-guide-visit-island');
            const resumeStep = parseInt(btn.getAttribute('data-resume-step'), 10);
            pendingGuideResumeStep = isNaN(resumeStep) ? currentGuideStep : resumeStep;
            switchStage('island', { islandId });
          });
        });

        // 第八段：展開心靈群島
        const finishBtn = document.getElementById('guideFinishToMapBtn');
        if (finishBtn) {
          finishBtn.addEventListener('click', () => {
            pendingGuideResumeStep = null;
            switchStage('map');
          });
        }
      }

      // 花精島專屬互動介面
      function renderFlowerIslandView(island) {
        const flower = FLOWER_ESSENCES[currentFlowerId];

        islandDetailContent.innerHTML = `
          <div class="w-full flex flex-col items-center">
            <!-- 島嶼標題與歡迎詞 -->
            <div class="text-center max-w-2xl mx-auto px-2 mb-2">
              <span class="inline-block px-3.5 py-1 rounded-full text-xs tracking-widest mb-2" style="background-color: ${island.palette.badgeBg}; border: 1px solid ${island.palette.badgeBorder}; color: ${island.palette.badgeText};">
                ${island.subtitle}
              </span>
              <h1 class="font-serif text-2xl sm:text-3xl text-ink tracking-wider font-medium">${island.name}</h1>
              <p class="font-serif text-base sm:text-lg text-ink/90 mt-1.5">${island.slogan}</p>
              <p class="text-sm sm:text-base text-inkLight leading-relaxed mt-3">${island.welcome}</p>
            </div>

            <!-- 互動幾何花園場景：可直接點擊圖中的三朵花精 -->
            <div class="w-full max-w-3xl mx-auto my-1">
              ${getIslandHeroSvg('flower')}
              <p class="text-center text-xs text-inkLight mt-1">點選花園裡的植物，或使用下方按鈕切換想要探索的花精</p>
            </div>

            <!-- 三朵花精切換標籤 -->
            <div class="flex flex-wrap items-center justify-center gap-2.5 my-4" role="tablist" aria-label="選擇花精">
              ${Object.values(FLOWER_ESSENCES).map(f => {
                const isSelected = f.id === currentFlowerId;
                return `
                  <button type="button" data-select-flower="${f.id}"
                    class="px-4 py-2 rounded-full text-sm font-serif tracking-wide transition-all ${
                      isSelected
                        ? 'bg-ink text-cream shadow-sm'
                        : 'bg-[#FAF8F5] text-ink border border-[#DFD9CE] hover:border-[#9CAF9E]'
                    }">
                    ${f.nameZh} <span class="text-xs opacity-80">${f.nameEn}</span>
                  </button>
                `;
              }).join('')}
            </div>

            <!-- 花精情境與心理反應探索區（極簡溫暖紙本風格，不使用大量卡片堆疊） -->
            <div id="flowerInteractiveBox" class="w-full max-w-2xl mx-auto mt-2 bg-[#FAF8F5] border border-[#E2DBD0] rounded-2xl p-6 sm:p-8">
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-4 border-b border-[#EAE4D8]">
                <h2 class="font-serif text-xl sm:text-2xl text-ink">
                  ${flower.nameZh} <span class="text-base text-inkLight font-normal">${flower.nameEn}</span>
                </h2>
                <span class="text-xs tracking-wider text-inkLight">花精日常覺察練習</span>
              </div>

              <p class="text-sm text-[#5E7460] font-medium mt-3">
                探索主題：${flower.theme}
              </p>

              <!-- 日常生活情境 -->
              <div class="mt-5">
                <p class="text-xs tracking-widest text-inkLight uppercase mb-2">日常生活情境</p>
                <p class="font-serif text-base sm:text-lg text-ink leading-relaxed bg-[#F4F1EA] p-4 sm:p-5 rounded-xl border border-[#E6E0D5]">
                  「${flower.dailyScenario}」
                </p>
              </div>

              <!-- 三個可選擇的心理反應 -->
              <div class="mt-6">
                <p class="text-xs tracking-widest text-inkLight mb-3">在這樣的情境裡，哪一個反應最貼近你熟悉的自己？</p>
                <div class="space-y-2.5" id="flowerChoicesList">
                  ${flower.options.map((opt, idx) => `
                    <button type="button" data-choice-index="${idx}" class="choice-option ${currentFlowerChoiceIndex === idx ? 'active' : ''}">
                      ${opt.label}
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- 溫和但不說教的覺察文字（點選反應後展開） -->
              <div id="flowerReflectionPanel" class="${currentFlowerChoiceIndex !== null ? 'mt-6 pt-5 border-t border-[#E6E0D5]' : 'hidden'}">
                <div class="flex items-center gap-2 mb-2">
                  <span class="w-2 h-2 rounded-full bg-sage"></span>
                  <span class="text-xs tracking-widest text-inkLight">溫柔的內在覺察</span>
                </div>
                <p id="flowerReflectionText" class="font-serif text-base sm:text-lg text-ink leading-relaxed">
                  ${currentFlowerChoiceIndex !== null ? flower.options[currentFlowerChoiceIndex].reflection : ''}
                </p>
                <div class="mt-5 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#EFECE6]">
                  <span class="text-xs text-inkLight">每一朵花精都是一面溫和的鏡子，陪伴你認識當下的感受。</span>
                  <button type="button" id="resetFlowerChoiceBtn" class="btn-quiet text-xs">
                    返回花精島花園（探索其他花朵）
                  </button>
                </div>
              </div>
            </div>

            <!-- 底部返回群島按鈕 -->
            <div class="mt-8 flex items-center justify-center gap-4">
              <button type="button" data-action="back-to-map" class="btn-story">
                <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M10 13L5 8l5-5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>返回群島地圖</span>
              </button>
            </div>
          </div>
        `;

        // 綁定花精島內部互動事件
        bindFlowerIslandEvents();
      }

      function bindFlowerIslandEvents() {
        // SVG 內的花朵點擊與鍵盤操作
        const flowerSpecimens = islandDetailContent.querySelectorAll('.flower-specimen');
        flowerSpecimens.forEach(node => {
          node.addEventListener('click', () => {
            selectFlowerEssence(node.getAttribute('data-flower'));
          });
          node.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              selectFlowerEssence(node.getAttribute('data-flower'));
            }
          });
        });

        // 花精切換膠囊按鈕
        const flowerTabBtns = islandDetailContent.querySelectorAll('[data-select-flower]');
        flowerTabBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            selectFlowerEssence(btn.getAttribute('data-select-flower'));
          });
        });

        // 心理反應選項點擊
        const choiceBtns = islandDetailContent.querySelectorAll('[data-choice-index]');
        choiceBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-choice-index'), 10);
            currentFlowerChoiceIndex = idx;
            renderIslandDetail('flower');
            // 平滑捲動至覺察文字區
            const reflectionEl = document.getElementById('flowerReflectionPanel');
            if (reflectionEl) {
              reflectionEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          });
        });

        // 返回花精島花園按鈕（重置選項並捲回花園 SVG）
        const resetFlowerBtn = document.getElementById('resetFlowerChoiceBtn');
        if (resetFlowerBtn) {
          resetFlowerBtn.addEventListener('click', () => {
            currentFlowerChoiceIndex = null;
            renderIslandDetail('flower');
            const gardenSvg = document.getElementById('flowerGardenSvg');
            if (gardenSvg) {
              gardenSvg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          });
        }

        // 返回群島按鈕
        const backBtns = islandDetailContent.querySelectorAll('[data-action="back-to-map"]');
        backBtns.forEach(btn => {
          btn.addEventListener('click', () => switchStage('map'));
        });
      }

      function selectFlowerEssence(flowerId) {
        if (!FLOWER_ESSENCES[flowerId]) return;
        currentFlowerId = flowerId;
        currentFlowerChoiceIndex = null;
        renderIslandDetail('flower');
      }

      // 其他五座島嶼的探索頁面渲染
      function renderGeneralIslandView(island) {
        islandDetailContent.innerHTML = `
          <div class="w-full flex flex-col items-center">
            <!-- 島嶼標題與歡迎文字 -->
            <div class="text-center max-w-2xl mx-auto px-2">
              <span class="inline-block px-3.5 py-1 rounded-full text-xs tracking-widest mb-2" style="background-color: ${island.palette.badgeBg}; border: 1px solid ${island.palette.badgeBorder}; color: ${island.palette.badgeText};">
                ${island.subtitle}
              </span>
              <h1 class="font-serif text-2xl sm:text-3xl text-ink tracking-wider font-medium">${island.name}</h1>
              <p class="font-serif text-base sm:text-lg text-ink/90 mt-1.5">${island.slogan}</p>
            </div>

            <!-- 島嶼專屬等角幾何建築場景 -->
            <div class="w-full max-w-xl mx-auto my-2">
              ${getIslandHeroSvg(island.id)}
            </div>

            <!-- 歡迎短文 -->
            <div class="max-w-2xl mx-auto text-center px-4 mb-6">
              <p class="text-sm sm:text-base text-inkLight leading-relaxed">${island.welcome}</p>
            </div>

            <!-- 內容探索入口（可點選展開的散步篇章） -->
            <div class="w-full max-w-2xl mx-auto bg-[#FAF8F5] border border-[#E2DBD0] rounded-2xl p-5 sm:p-7">
              <div class="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE4D8]">
                <h2 class="font-serif text-lg text-ink">島嶼探索入口｜點選一個主題開始散步</h2>
                <span class="text-xs text-inkLight">共 3 個探索視角</span>
              </div>

              <div class="space-y-3" id="generalExplorationList">
                ${island.explorations.map((item, idx) => `
                  <div class="border border-[#E6E0D5] rounded-xl overflow-hidden bg-[#F7F4EE]/60 transition-colors">
                    <button type="button" data-explore-toggle="${idx}" class="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-[#F2EFE9] transition-colors">
                      <span class="font-serif text-base sm:text-lg text-ink font-medium">${item.title}</span>
                      <span class="text-xs text-inkLight shrink-0" data-explore-label="${idx}">${idx === 0 ? '收合' : '展開探索'}</span>
                    </button>
                    <div data-explore-body="${idx}" class="${idx === 0 ? 'block' : 'hidden'} px-5 pb-5 pt-1 border-t border-[#EAE4D8] bg-[#FAF8F5]">
                      <p class="text-sm sm:text-base text-ink/90 leading-relaxed mt-2">${item.summary}</p>
                      <div class="mt-4 p-4 rounded-lg bg-[#F4F1EA] border border-[#E6E0D5]">
                        <p class="text-xs tracking-widest text-inkLight mb-1">留給自己的小提問</p>
                        <p class="font-serif text-sm sm:text-base text-ink leading-relaxed">「${item.prompt}」</p>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 返回群島按鈕 -->
            <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button type="button" data-action="back-to-map" class="btn-story">
                <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M10 13L5 8l5-5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>返回群島地圖</span>
              </button>
            </div>
          </div>
        `;

        // 綁定展開探索章節與返回按鈕
        const toggleBtns = islandDetailContent.querySelectorAll('[data-explore-toggle]');
        toggleBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = btn.getAttribute('data-explore-toggle');
            const body = islandDetailContent.querySelector(`[data-explore-body="${idx}"]`);
            const label = islandDetailContent.querySelector(`[data-explore-label="${idx}"]`);
            if (body) {
              const isHidden = body.classList.contains('hidden');
              body.classList.toggle('hidden', !isHidden);
              if (label) label.textContent = isHidden ? '收合' : '展開探索';
            }
          });
        });

        const backBtns = islandDetailContent.querySelectorAll('[data-action="back-to-map"]');
        backBtns.forEach(btn => {
          btn.addEventListener('click', () => switchStage('map'));
        });
      }

      /* ------------------------------------------------------------------------
         8. 渲染島嶼詳細頁面（含花精島、生命數字島雙入口、人間劇場七主題、課程預留區）
         ------------------------------------------------------------------------ */
      function renderCourseSectionHtml(courseSection) {
        if (!courseSection) return '';
        return `
          <div class="w-full max-w-2xl mx-auto mt-6 bg-[#FAF8F5] border border-[#E2DBD0] rounded-2xl p-5 sm:p-7">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EAE4D8]">
              <div>
                <span class="text-xs tracking-widest text-inkLight uppercase">Learning & Resources</span>
                <h2 class="font-serif text-lg sm:text-xl text-ink mt-0.5">學習資源與課程資訊</h2>
              </div>
              <span class="text-xs px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#DFD7C8] text-inkLight">自由查閱・無推銷視窗</span>
            </div>

            <!-- 免費認識與探索 -->
            <div class="mt-4 p-4 rounded-xl bg-[#F4F1EA] border border-[#E6E0D5]">
              <h3 class="font-serif text-sm sm:text-base text-ink font-medium mb-1">一、免費認識與探索</h3>
              <p class="text-xs sm:text-sm text-inkLight leading-relaxed">${courseSection.freeIntro}</p>
            </div>

            <!-- 深度學習與課程資訊（可點選展開，由使用者主動查看） -->
            <div class="mt-4 border border-[#E6E0D5] rounded-xl overflow-hidden bg-[#FFFFFF]">
              <button type="button" data-toggle-course-box="true" class="w-full px-4 py-3.5 text-left flex items-center justify-between gap-2 hover:bg-[#F7F4EE] transition-colors">
                <span class="font-serif text-sm sm:text-base text-ink font-medium">二、深度學習介紹、課程內容、費用與報名資訊（點此展開）</span>
                <span id="courseBoxToggleLabel" class="text-xs text-inkLight shrink-0">展開詳情</span>
              </button>
              <div id="courseBoxDetailBody" class="hidden px-4 sm:px-5 pb-5 pt-3 border-t border-[#EAE4D8] space-y-3.5 text-sm">
                <div>
                  <p class="text-xs tracking-wider text-inkLight mb-1">【深度學習介紹】</p>
                  <p class="text-ink/90 leading-relaxed">${courseSection.deepIntro}</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div class="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#EAE4D8]">
                    <p class="text-xs tracking-wider text-inkLight mb-1">【課程內容】</p>
                    <p class="text-xs sm:text-sm text-ink leading-relaxed">${courseSection.curriculum}</p>
                  </div>
                  <div class="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#EAE4D8]">
                    <p class="text-xs tracking-wider text-inkLight mb-1">【課程時數與方式】</p>
                    <p class="text-xs sm:text-sm text-ink leading-relaxed">${courseSection.durationAndMode}</p>
                  </div>
                  <div class="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#EAE4D8]">
                    <p class="text-xs tracking-wider text-inkLight mb-1">【課程費用（預留欄位）】</p>
                    <p class="text-xs sm:text-sm text-inkLight leading-relaxed">${courseSection.fee}</p>
                  </div>
                  <div class="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#EAE4D8]">
                    <p class="text-xs tracking-wider text-inkLight mb-1">【報名資訊（預留欄位）】</p>
                    <p class="text-xs sm:text-sm text-inkLight leading-relaxed">${courseSection.registration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      function renderResumeGuideBannerHtml() {
        if (pendingGuideResumeStep === null) return '';
        return `
          <div class="w-full max-w-2xl mx-auto mb-5 px-4 py-3 rounded-xl bg-[#FAF6EE] border border-[#D9C59A] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs sm:text-sm text-ink">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rotate-45 bg-[#D9C59A] inline-block shrink-0"></span>
              <span>小光還在地球迎賓高台等你喔！探索完這座島嶼後，隨時可以回去繼續剛才的對話。</span>
            </div>
            <button type="button" data-action="resume-guide" class="px-3.5 py-1.5 rounded-full bg-ink text-cream text-xs tracking-wider hover:opacity-90 transition-opacity shrink-0">
              返回接續小光對話 →
            </button>
          </div>
        `;
      }

      // 綁定島嶼底部共用事件（返回地圖、返回小光對話、展開課程預留區）
      function bindCommonIslandFooterEvents() {
        const backBtns = islandDetailContent.querySelectorAll('[data-action="back-to-map"]');
        backBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            pendingGuideResumeStep = null;
            switchStage('map');
          });
        });

        const resumeBtns = islandDetailContent.querySelectorAll('[data-action="resume-guide"]');
        resumeBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const stepToResume = pendingGuideResumeStep || currentGuideStep || 1;
            pendingGuideResumeStep = null;
            switchStage('guide', { guideStep: stepToResume });
          });
        });

        const courseToggleBtn = islandDetailContent.querySelector('[data-toggle-course-box="true"]');
        if (courseToggleBtn) {
          courseToggleBtn.addEventListener('click', () => {
            const detailBody = document.getElementById('courseBoxDetailBody');
            const label = document.getElementById('courseBoxToggleLabel');
            if (detailBody) {
              const isHidden = detailBody.classList.contains('hidden');
              detailBody.classList.toggle('hidden', !isHidden);
              if (label) label.textContent = isHidden ? '收合詳情' : '展開詳情';
            }
          });
        }
      }

      // 島嶼頁面總分發函式
      function renderIslandDetail(islandId) {
        const island = ISLANDS_DATA[islandId];
        if (!island) return;

        if (island.isFlowerIsland) {
          renderFlowerIslandView(island);
        } else if (island.isLightIsland) {
          if (lightJourney.isMap()) renderLightIslandView(island);
          else lightJourney.render();
        } else if (island.isNumerologyIsland) {
          renderNumerologyIslandView(island);
        } else if (island.isTheaterIsland) {
          renderTheaterIslandView(island);
        } else {
          renderGeneralIslandView(island);
        }
      }

      /* ------------------------------------------------------------------------
         8.2 光的課程島：13 級螺旋光階・65 題生命覺察互動系統
             （完全使用題庫 JSON 之 13 級 × 5 題 = 65 題，與 UI 邏輯分離）
         ------------------------------------------------------------------------ */
      function computeLightLevelReport(levelObj, levelAnswers) {
        const traitsDict = (LIGHT_SPIRAL_BANK && LIGHT_SPIRAL_BANK.traits) || {};
        const traitCounts = {};
        const answeredItems = [];

        levelObj.questions.forEach((q, idx) => {
          const chosenOptId = levelAnswers[q.id];
          const opt = q.options.find(o => o.id === chosenOptId);
          if (opt) {
            traitCounts[opt.trait] = (traitCounts[opt.trait] || 0) + 1;
            answeredItems.push({
              qIndex: idx + 1,
              question: q,
              option: opt,
              traitKey: opt.trait,
              traitMeta: traitsDict[opt.trait] || {
                label: opt.trait,
                interpretation: opt.feedback,
                small_practice: ''
              }
            });
          }
        });

        // 依出現次數排序，找出最多前 1～2 個（須至少出現 2 次）
        const sortedTraits = Object.entries(traitCounts)
          .sort((a, b) => b[1] - a[1]);

        const repeatedTraits = sortedTraits
          .filter(([, count]) => count >= 2)
          .slice(0, 2)
          .map(([traitKey, count]) => ({
            traitKey,
            count,
            meta: traitsDict[traitKey] || { label: traitKey, interpretation: '', small_practice: '' }
          }));

        const isAllDistinct = sortedTraits.length > 0 && sortedTraits[0][1] === 1;

        // 檢查是否同時出現互相拉扯的反應組合（壓抑＋反擊、依附＋自主、硬撐＋照顧）
        const TENSION_PAIRS = [
          {
            a: '壓抑',
            b: '反擊',
            note: '你在這一階的不同情境中，同時出現了「收起自己的感受（壓抑）」與「防衛反擊（反擊）」。這代表你會隨著對象或壓力程度切換保護自己的方式：有時先忍讓維持表面和諧，有時則迅速反擊守住主導權。'
          },
          {
            a: '依附',
            b: '自主',
            note: '你在這一階的不同情境中，同時出現了「把決定交給外界（依附）」與「保有自己的選擇（自主）」。這反映出你在某些領域已能獨立評估，但在面對特定壓力或權威時，仍會渴望外在肯定的支持。'
          },
          {
            a: '硬撐',
            b: '照顧',
            note: '你在這一階的不同情境中，同時出現了「責任優先（硬撐）」與「照顧承受度（照顧）」。這顯示你已經開始留意身心界線，但當任務或期待壓上來時，偶爾還是會習慣先咬牙撐過去。'
          }
        ];

        const detectedTensions = TENSION_PAIRS.filter(
          pair => traitCounts[pair.a] >= 1 && traitCounts[pair.b] >= 1
        );

        return {
          answeredItems,
          traitCounts,
          repeatedTraits,
          isAllDistinct,
          detectedTensions
        };
      }

      function renderLightSpiralTowerSvg(levels, activeLevelId, completedMap) {
        return `<div class="light-map-grid" aria-label="17級自由探索學習地圖">${levels.map(lvl => `
          <button type="button" data-spiral-svg-level="${lvl.id}" aria-pressed="${lvl.id === activeLevelId}" class="light-map-node ${lvl.id === activeLevelId ? 'selected' : ''}">
            <svg viewBox="0 0 100 58" aria-hidden="true"><polygon points="50,6 92,28 50,49 8,28" fill="#F5EBD6"/><polygon points="8,28 50,49 50,57 8,36" fill="#DDD1BB"/><polygon points="92,28 50,49 50,57 92,36" fill="#C8BC9E"/><path d="M40 29V19a10 10 0 0 1 20 0v10" fill="none" stroke="#B7A583" stroke-width="2"/></svg>
            <span>${lvl.name}</span><small>${!lvl.questions.length ? '內容準備中' : completedMap[lvl.id] ? '已留下覺察' : '5 個生活情境'}</small>
          </button>`).join('')}</div>`;
      }

      function lightMapChrome() {
        const bar = document.createElement('div');
        bar.className = 'light-map-return';
        bar.innerHTML = '<button type="button" class="btn-quiet" data-light-home>← 回到光之旅程</button><button type="button" class="btn-quiet" data-action="back-to-map">返回群島</button>';
        islandDetailContent.prepend(bar);
        bar.querySelector('[data-light-home]').onclick = () => lightJourney.home();
        bar.querySelector('[data-action]').onclick = () => switchStage('map');
      }
      function renderPendingLightLevel(activeLevel) {
        islandDetailContent.innerHTML = `<div class="light-journey"><p class="light-eyebrow">延伸探索・自由停留</p><h1>17級光階學習地圖</h1><p>每一階都是反思的視角，沒有排名，也不判定修習程度。</p>${renderLightSpiralTowerSvg(LIGHT_SPIRAL_BANK.levels, activeLevel.id, lightSpiralState.completedLevels)}<section class="light-card" id="lightLevelMainCard"><h2>${activeLevel.name}｜內容準備中</h2><p>這個級次尚未提供正式的五道情境題。目前不提供作答或結果，歡迎自由探索已有內容的級次。</p></section></div>`;
        bindLightIslandEvents(activeLevel);
        lightMapChrome();
      }

      function renderLightIslandView(island) {
        if (!LIGHT_SPIRAL_BANK || !Array.isArray(LIGHT_SPIRAL_BANK.levels)) {
          islandDetailContent.innerHTML = `<div class="light-journey" data-light-bank-state><h1>光階學習地圖</h1><p role="status">${lightBankLoading ? '題庫載入中，請稍候…' : '暫時無法讀取題庫。你仍可返回群島，或稍後重試。'}</p>${!lightBankLoading ? '<button type="button" class="btn-story" id="retryLightBank">重新載入題庫</button>' : ''}</div>`;
          lightMapChrome();
          const retry = document.getElementById('retryLightBank');
          if (retry) retry.onclick = () => { loadLightBank(); renderIslandDetail('light'); };
          return;
        }

        const levels = LIGHT_SPIRAL_BANK.levels;
        const currentLevelIdx = Math.max(0, levels.findIndex(l => l.id === lightSpiralState.activeLevelId));
        const activeLevel = levels[currentLevelIdx] || levels[0];
        if (!activeLevel.questions.length) { renderPendingLightLevel(activeLevel); return; }
        const nextLevel = currentLevelIdx < levels.length - 1 ? levels[currentLevelIdx + 1] : null;

        const levelAnswers = lightSpiralState.answersByLevel[activeLevel.id] || {};
        const answeredCount = activeLevel.questions.filter(q => Boolean(levelAnswers[q.id])).length;
        const allFiveAnswered = answeredCount === activeLevel.questions.length;

        const qIdx = Math.max(0, Math.min(activeLevel.questions.length - 1, lightSpiralState.currentQuestionIndex));
        const currentQuestion = activeLevel.questions[qIdx];
        const currentChosenOptionId = levelAnswers[currentQuestion.id] || null;
        const currentChosenOptionObj = currentQuestion.options.find(o => o.id === currentChosenOptionId) || null;

        const completedCount = Object.keys(lightSpiralState.completedLevels).length;

        // 若處於結果模式且已完成 5 題，計算當階反應報告
        const report = (lightSpiralState.viewMode === 'result' && allFiveAnswered)
          ? computeLightLevelReport(activeLevel, levelAnswers)
          : null;

        const pickedQId = lightSpiralState.pickedQuestionByLevel[activeLevel.id] || (activeLevel.questions[0] && activeLevel.questions[0].id);

        islandDetailContent.innerHTML = `
          <div class="w-full flex flex-col items-center">
            ${renderResumeGuideBannerHtml()}

            <!-- 島嶼標題與來源原則說明 -->
            <div class="text-center max-w-2xl mx-auto px-2">
              <span class="inline-block px-3.5 py-1 rounded-full text-xs tracking-widest mb-2" style="background-color: ${island.palette.badgeBg}; border: 1px solid ${island.palette.badgeBorder}; color: ${island.palette.badgeText};">
                ${island.subtitle}
              </span>
              <h1 class="font-serif text-2xl sm:text-3xl text-ink tracking-wider font-medium">${island.name}</h1>
              <p class="font-serif text-base sm:text-lg text-ink/90 mt-1.5">${island.slogan}</p>
              <p class="text-sm sm:text-base text-inkLight leading-relaxed mt-2.5">${island.welcome}</p>
            </div>

            <!-- 13 級螺旋光階 SVG 幾何高塔（可直接點選任一階） -->
            <div class="w-full max-w-2xl mx-auto my-2">
              ${renderLightSpiralTowerSvg(levels, activeLevel.id, lightSpiralState.completedLevels)}
              <p class="text-center text-xs text-inkLight mt-1">
                點選塔上任一光階或下方按鈕，自由走進 17 個級次（已留下 ${completedCount} 階覺察；4 級內容準備中）
              </p>
            </div>

            <!-- 13 級快速切換膠囊列 + 清除作答紀錄 -->
            <div id="lightSpiralSelectorBar" class="w-full max-w-3xl mx-auto mt-3 bg-[#FAF8F5] border border-[#E2DBD0] rounded-2xl p-4 sm:p-5">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#EAE4D8]">
                <span class="text-xs tracking-widest text-inkLight">17 級光階總覽（可自由切換，不設晉級門檻）</span>
                ${Object.keys(lightSpiralState.answersByLevel).length > 0 ? `
                  <button type="button" id="clearLightSpiralRecordsBtn" class="text-xs text-inkLight underline hover:text-ink transition-colors">
                    清除本機作答紀錄
                  </button>
                ` : ''}
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2" role="group" aria-label="17級光階選擇">
                ${levels.map(lvl => {
                  const isSelected = lvl.id === activeLevel.id;
                  const isDone = Boolean(lightSpiralState.completedLevels[lvl.id]);
                  const lvlAns = lightSpiralState.answersByLevel[lvl.id] || {};
                  const cnt = Object.keys(lvlAns).length;
                  return `
                    <button type="button" data-select-light-level="${lvl.id}"
                      class="px-3 py-2 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-ink text-cream border-ink shadow-sm'
                          : isDone
                            ? 'bg-[#F4F1EA] text-ink border-[#D9C59A] hover:border-ink'
                            : 'bg-[#FFFFFF] text-ink border-[#DFD9CE] hover:border-[#D9C59A]'
                      }">
                      <div class="flex items-center justify-between gap-1 w-full">
                        <span class="font-serif text-xs font-medium">${lvl.id}｜${lvl.name}</span>
                        <span class="text-[10px] opacity-80">${!lvl.questions.length ? '準備中' : isDone ? '✓ 已完成' : (cnt > 0 ? `${cnt}/5` : '')}</span>
                      </div>
                      <span class="text-[11px] truncate w-full mt-0.5 ${isSelected ? 'text-cream/85' : 'text-inkLight'}">${lvl.theme}</span>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- 當前級次主互動區：單題問答模式 vs 五題完成結果報告模式 -->
            <div id="lightLevelMainCard" class="w-full max-w-3xl mx-auto mt-5 bg-[#FAF8F5] border border-[#E2DBD0] rounded-2xl p-5 sm:p-8 shadow-sm">
              
              <!-- 級次標頭資訊 -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#EAE4D8]">
                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded-md bg-[#F7F2E4] border border-[#D9C59A] text-[#665430] text-xs font-serif font-medium">
                      ${activeLevel.id}・${activeLevel.name}
                    </span>
                    <span class="text-xs text-inkLight">教材依據：${escapeHtml(activeLevel.source_location)}</span>
                  </div>
                  <h2 class="font-serif text-xl sm:text-2xl text-ink font-medium mt-1.5">
                    ${escapeHtml(activeLevel.theme)}
                  </h2>
                  <p class="text-xs sm:text-sm text-inkLight mt-1">
                    轉譯焦點：${escapeHtml(activeLevel.focus)}
                  </p>
                </div>

                <!-- 切換「作答視角」與「本階結果報告」 -->
                <div class="flex items-center gap-2 shrink-0">
                  ${allFiveAnswered && lightSpiralState.viewMode === 'quiz' ? `
                    <button type="button" id="viewLevelResultBtn" class="btn-quiet text-xs">
                      查看本階反應分析 →
                    </button>
                  ` : ''}
                  ${lightSpiralState.viewMode === 'result' ? `
                    <button type="button" id="backToQuestionsBtn" class="btn-quiet text-xs">
                      ← 回看本階五題
                    </button>
                  ` : ''}
                </div>
              </div>

              ${lightSpiralState.viewMode === 'result' && report ? `
                <!-- ==================== 完成本階五題：反應分析、微練習與下一階入口 ==================== -->
                <div class="mt-6 space-y-6">
                  <div class="p-4 sm:p-5 rounded-xl bg-[#F4F1EA] border border-[#DFD7C8]">
                    <div class="flex items-center gap-2 mb-1.5">
                      <span class="w-2.5 h-2.5 rotate-45 bg-[#D9C59A] inline-block"></span>
                      <span class="text-xs tracking-widest text-[#665430] font-medium">小光的本階結語</span>
                    </div>
                    <p class="font-serif text-base sm:text-lg text-ink leading-relaxed">
                      「${escapeHtml(activeLevel.reflection)}」
                    </p>
                  </div>

                  ${!report.isAllDistinct ? `
                    <!-- 情況 A：出現至少 2 次的反應傾向（顯示最多的 1～2 個） -->
                    <div>
                      <h3 class="font-serif text-lg text-ink font-medium mb-3">
                        你在「${activeLevel.name}」最常出現的反應傾向（共 5 題）
                      </h3>
                      <div class="grid grid-cols-1 ${report.repeatedTraits.length > 1 ? 'md:grid-cols-2' : ''} gap-4">
                        ${report.repeatedTraits.map(item => `
                          <div class="p-5 rounded-xl bg-[#FFFFFF] border border-[#D9C59A] flex flex-col justify-between space-y-3">
                            <div>
                              <div class="flex items-center justify-between gap-2">
                                <span class="px-3 py-1 rounded-full bg-[#F7F2E4] text-[#665430] font-serif text-sm font-medium">
                                  ${escapeHtml(item.meta.label)}（${escapeHtml(item.traitKey)}）
                                </span>
                                <span class="text-xs text-inkLight">出現 ${item.count} / 5 次</span>
                              </div>
                              <p class="text-sm sm:text-base text-ink leading-relaxed mt-3">
                                ${escapeHtml(item.meta.interpretation)}
                              </p>
                            </div>
                            <div class="pt-3 border-t border-[#EAE4D8]">
                              <p class="text-xs tracking-widest text-[#665430] mb-1">🌱 日常生活微練習</p>
                              <p class="font-serif text-sm sm:text-base text-ink">
                                「${escapeHtml(item.meta.small_practice)}」
                              </p>
                            </div>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  ` : `
                    <!-- 情況 B：五題各為不同反應（混合型，讓使用者挑選最有感的一題） -->
                    <div class="p-5 rounded-xl bg-[#FFFFFF] border border-[#D9C59A] space-y-4">
                      <div>
                        <span class="px-3 py-1 rounded-full bg-[#F7F2E4] text-[#665430] font-serif text-xs font-medium">
                          情境彈性調整（五題反應皆不同）
                        </span>
                        <h3 class="font-serif text-lg sm:text-xl text-ink font-medium mt-2">
                          你會因情境調整反應，不必急著替自己貼標籤。
                        </h3>
                        <p class="text-sm text-inkLight mt-1">
                          在這五個日常情境中，你分別採用了五種不同的應對方式。請從下方點選一題你今天「最有感覺」的情境，看看對應的生活小練習：
                        </p>
                      </div>

                      <div class="flex flex-wrap gap-2">
                        ${report.answeredItems.map(item => `
                          <button type="button" data-pick-mixed-q="${item.question.id}"
                            class="px-3.5 py-2 rounded-xl text-xs sm:text-sm border transition-all ${
                              pickedQId === item.question.id
                                ? 'bg-ink text-cream border-ink font-medium'
                                : 'bg-[#FAF8F5] text-ink border-[#DFD9CE] hover:border-[#D9C59A]'
                            }">
                            第 ${item.qIndex} 題｜${escapeHtml(item.traitMeta.label)}（${escapeHtml(item.traitKey)}）
                          </button>
                        `).join('')}
                      </div>

                      ${(() => {
                        const chosenItem = report.answeredItems.find(i => i.question.id === pickedQId) || report.answeredItems[0];
                        if (!chosenItem) return '';
                        return `
                          <div class="p-4 rounded-xl bg-[#F4F1EA] border border-[#E6E0D5] space-y-2">
                            <p class="text-xs text-inkLight">情境：「${escapeHtml(chosenItem.question.situation)}」 → 你的選擇：${escapeHtml(chosenItem.option.text)}</p>
                            <p class="text-sm sm:text-base text-ink font-medium">${escapeHtml(chosenItem.traitMeta.label)}：${escapeHtml(chosenItem.traitMeta.interpretation)}</p>
                            <p class="font-serif text-sm sm:text-base text-[#665430] pt-1">🌱 日常生活微練習：「${escapeHtml(chosenItem.traitMeta.small_practice)}」</p>
                          </div>
                        `;
                      })()}
                    </div>
                  `}

                  <!-- 特別檢查：是否同時出現互相拉扯的反應組合（壓抑＋反擊、依附＋自主、硬撐＋照顧） -->
                  ${report.detectedTensions.length > 0 ? `
                    <div class="p-4 sm:p-5 rounded-xl bg-[#F7F4EE] border border-[#DFD7C8] space-y-2">
                      <p class="text-xs tracking-widest text-inkLight">不同情境下的反應轉換觀察</p>
                      ${report.detectedTensions.map(t => `
                        <p class="text-sm text-ink leading-relaxed">• ${escapeHtml(t.note)}</p>
                      `).join('')}
                    </div>
                  ` : ''}

                  <!-- 本階五題作答明細回顧 -->
                  <div class="border border-[#EAE4D8] rounded-xl p-4 bg-[#FFFFFF]/70">
                    <p class="text-xs tracking-widest text-inkLight mb-3">本階五個觀察鏡頭回顧</p>
                    <div class="space-y-2.5 text-xs sm:text-sm">
                      ${report.answeredItems.map(item => `
                        <div class="p-3 rounded-lg bg-[#FAF8F5] border border-[#EFECE6] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <span class="text-inkLight">[${escapeHtml(item.question.lens)}]</span>
                            <span class="text-ink font-medium ml-1">${escapeHtml(item.question.situation)}</span>
                            <p class="text-inkLight mt-0.5">你的選擇（${item.option.id}）：${escapeHtml(item.option.text)}</p>
                          </div>
                          <span class="px-2.5 py-1 rounded-full bg-[#F4F1EA] border border-[#DFD7C8] text-ink text-xs shrink-0 self-start sm:self-center">
                            ${escapeHtml(item.traitMeta.label)}（${escapeHtml(item.traitKey)}）
                          </span>
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <!-- 重要安全與非晉級聲明 -->
                  <p class="text-xs text-inkLight leading-relaxed text-center">
                    ※ ${escapeHtml(LIGHT_SPIRAL_BANK.rules.important)}
                  </p>

                  <!-- 四大操作按鈕：探索下一階 / 回到螺旋階梯 / 再試一次 / 清除紀錄 -->
                  <div class="pt-3 border-t border-[#EAE4D8] flex flex-wrap items-center justify-center gap-3">
                    ${nextLevel ? `
                      <button type="button" data-go-next-level="${nextLevel.id}" class="btn-story">
                        <span>探索下一階（${nextLevel.id} ${nextLevel.name}：${nextLevel.theme}）</span>
                        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                          <path d="M6 3l5 5-5 5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                    ` : `
                      <button type="button" data-go-next-level="L01" class="btn-story">
                        <span>回到初階一（L01）自由重溫</span>
                      </button>
                    `}
                    <button type="button" id="retryCurrentLevelBtn" class="btn-quiet">
                      再試一次本階
                    </button>
                    <button type="button" id="scrollToSpiralSelectorBtn" class="btn-quiet">
                      回到螺旋階梯總覽
                    </button>
                  </div>
                </div>
              ` : `
                <!-- ==================== 單題互動問答模式（每級 5 題，每題只顯示一個情境） ==================== -->
                <div class="mt-5">
                  <!-- 五題進度點與觀察鏡頭 -->
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-serif tracking-wider text-[#665430] bg-[#F7F2E4] px-2.5 py-1 rounded-md border border-[#D9C59A]">
                        第 ${qIdx + 1} / 5 題・觀察鏡頭：${escapeHtml(currentQuestion.lens)}
                      </span>
                    </div>
                    <div class="flex items-center gap-1.5" role="group" aria-label="本階五題進度">
                      ${activeLevel.questions.map((q, idx) => {
                        const isAnswered = Boolean(levelAnswers[q.id]);
                        const isCur = idx === qIdx;
                        return `
                          <button type="button" data-jump-q-index="${idx}"
                            class="w-7 h-7 rounded-full text-xs font-serif transition-all ${
                              isCur
                                ? 'bg-ink text-cream font-medium shadow-sm'
                                : isAnswered
                                  ? 'bg-[#E8DCC2] text-ink border border-[#D9C59A]'
                                  : 'bg-[#F4F1EA] text-inkLight border border-[#DFD9CE]'
                            }"
                            aria-label="第 ${idx + 1} 題">
                            ${idx + 1}
                          </button>
                        `;
                      }).join('')}
                    </div>
                  </div>

                  <!-- 單一日常生活情境題目框 -->
                  <div class="p-5 sm:p-6 rounded-xl bg-[#F4F1EA] border border-[#E6E0D5]">
                    <p class="text-xs tracking-widest text-inkLight uppercase mb-1.5">日常生活情境（${currentQuestion.id}）</p>
                    <p class="font-serif text-lg sm:text-xl text-ink leading-relaxed">
                      「${escapeHtml(currentQuestion.situation)}」
                    </p>
                    <p class="text-xs sm:text-sm text-inkLight mt-2.5">
                      ${escapeHtml(currentQuestion.prompt)}
                    </p>
                  </div>

                  <!-- 三個生活化回答選項 -->
                  <div class="mt-4 space-y-2.5" role="radiogroup" aria-label="${escapeHtml(currentQuestion.situation)}">
                    ${currentQuestion.options.map(opt => {
                      const isSelected = currentChosenOptionId === opt.id;
                      return `
                        <button type="button" data-select-light-option="${opt.id}"
                          class="choice-option flex items-start gap-3 ${isSelected ? 'active' : ''}"
                          aria-checked="${isSelected ? 'true' : 'false'}">
                          <span class="w-6 h-6 rounded-full border flex items-center justify-center text-xs font-serif shrink-0 mt-0.5 ${
                            isSelected ? 'bg-ink text-cream border-ink' : 'bg-[#FFFFFF] text-ink border-[#C8C1B4]'
                          }">${opt.id}</span>
                          <span class="flex-1 text-left">${escapeHtml(opt.text)}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>

                  <!-- 點選後即時溫和回饋 -->
                  ${currentChosenOptionObj ? `
                    <div class="mt-4 p-4 rounded-xl bg-[#FAF6EE] border border-[#D9C59A] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span class="text-xs tracking-wider text-[#665430] font-medium">
                          當下反應鏡照｜${escapeHtml((LIGHT_SPIRAL_BANK.traits[currentChosenOptionObj.trait] && LIGHT_SPIRAL_BANK.traits[currentChosenOptionObj.trait].label) || currentChosenOptionObj.trait)}（${escapeHtml(currentChosenOptionObj.trait)}）
                        </span>
                        <p class="font-serif text-sm sm:text-base text-ink mt-1">
                          「${escapeHtml(currentChosenOptionObj.feedback)}」
                        </p>
                      </div>
                    </div>
                  ` : ''}

                  <!-- 上一題 / 下一題 / 查看本階結果導覽列 -->
                  <div class="mt-6 pt-4 border-t border-[#EAE4D8] flex flex-wrap items-center justify-between gap-3">
                    <button type="button" id="lightPrevQuestionBtn" class="btn-quiet ${qIdx === 0 ? 'opacity-40 pointer-events-none' : ''}">
                      ← 上一題
                    </button>

                    <span class="text-xs text-inkLight">
                      本階已作答 ${answeredCount} / 5 題
                    </span>

                    <div class="flex items-center gap-2">
                      ${qIdx < activeLevel.questions.length - 1 ? `
                        <button type="button" id="lightNextQuestionBtn" class="btn-story py-2 px-5 text-sm">
                          <span>下一題 →</span>
                        </button>
                      ` : ''}
                      ${allFiveAnswered ? `
                        <button type="button" id="lightFinishLevelBtn" class="btn-story py-2 px-6 text-sm">
                          <span>完成本階五題・看反應分析 ✨</span>
                        </button>
                      ` : (qIdx === activeLevel.questions.length - 1 ? `
                        <span class="text-xs text-inkLight">（選完本階 5 題即可查看完整反應分析）</span>
                      ` : '')}
                    </div>
                  </div>
                </div>
              `}
            </div>

            <!-- 學習資源與正式課程資訊預留區（與原創生活化題庫清楚區分） -->
            ${renderCourseSectionHtml(island.courseSection)}

            <!-- 底部返回群島按鈕 -->
            <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
              ${pendingGuideResumeStep !== null ? `
                <button type="button" data-action="resume-guide" class="btn-story">
                  <span>返回小光對話</span>
                </button>
              ` : ''}
              <button type="button" data-action="back-to-map" class="${pendingGuideResumeStep !== null ? 'btn-quiet' : 'btn-story'}">
                <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M10 13L5 8l5-5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>返回群島地圖</span>
              </button>
            </div>
          </div>
        `;

        bindLightIslandEvents(activeLevel);
        bindCommonIslandFooterEvents();
        lightMapChrome();
      }

      function bindLightIslandEvents(activeLevel) {
        // 點選 SVG 螺旋塔或 13 級膠囊切換級次
        const levelSwitchers = islandDetailContent.querySelectorAll('[data-select-light-level], [data-spiral-svg-level]');
        levelSwitchers.forEach(el => {
          const triggerSwitch = () => {
            const targetId = el.getAttribute('data-select-light-level') || el.getAttribute('data-spiral-svg-level');
            if (!targetId) return;
            lightSpiralState.activeLevelId = targetId;
            lightSpiralState.currentQuestionIndex = 0;
            const ans = lightSpiralState.answersByLevel[targetId] || {};
            lightSpiralState.viewMode = Object.keys(ans).length === 5 ? 'result' : 'quiz';
            renderIslandDetail('light');
            const mainCard = document.getElementById('lightLevelMainCard');
            if (mainCard) mainCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          };
          el.addEventListener('click', triggerSwitch);
          if (el.tagName.toLowerCase() !== 'button') el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              triggerSwitch();
            }
          });
        });

        // 單題題號圓點跳轉
        const qJumpBtns = islandDetailContent.querySelectorAll('[data-jump-q-index]');
        qJumpBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            lightSpiralState.currentQuestionIndex = parseInt(btn.getAttribute('data-jump-q-index'), 10) || 0;
            lightSpiralState.viewMode = 'quiz';
            renderIslandDetail('light');
          });
        });

        // 點選 A / B / C 選項
        const optionBtns = islandDetailContent.querySelectorAll('[data-select-light-option]');
        optionBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const optId = btn.getAttribute('data-select-light-option');
            const q = activeLevel.questions[lightSpiralState.currentQuestionIndex];
            if (!q) return;

            if (!lightSpiralState.answersByLevel[activeLevel.id]) {
              lightSpiralState.answersByLevel[activeLevel.id] = {};
            }
            lightSpiralState.answersByLevel[activeLevel.id][q.id] = optId;

            const currentAns = lightSpiralState.answersByLevel[activeLevel.id];
            if (Object.keys(currentAns).length === activeLevel.questions.length) {
              lightSpiralState.completedLevels[activeLevel.id] = true;
            }
            updateClearDataButtonVisibility();
            renderIslandDetail('light');
          });
        });

        // 上一題 / 下一題
        const prevQBtn = document.getElementById('lightPrevQuestionBtn');
        if (prevQBtn) {
          prevQBtn.addEventListener('click', () => {
            if (lightSpiralState.currentQuestionIndex > 0) {
              lightSpiralState.currentQuestionIndex--;
              renderIslandDetail('light');
            }
          });
        }

        const nextQBtn = document.getElementById('lightNextQuestionBtn');
        if (nextQBtn) {
          nextQBtn.addEventListener('click', () => {
            if (lightSpiralState.currentQuestionIndex < activeLevel.questions.length - 1) {
              lightSpiralState.currentQuestionIndex++;
              renderIslandDetail('light');
            }
          });
        }

        // 查看本階反應分析
        const finishBtn = document.getElementById('lightFinishLevelBtn');
        const viewResultBtn = document.getElementById('viewLevelResultBtn');
        [finishBtn, viewResultBtn].forEach(btn => {
          if (btn) {
            btn.addEventListener('click', () => {
              lightSpiralState.completedLevels[activeLevel.id] = true;
              lightSpiralState.viewMode = 'result';
              renderIslandDetail('light');
              const mainCard = document.getElementById('lightLevelMainCard');
              if (mainCard) mainCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
          }
        });

        // 回看本階五題
        const backToQBtn = document.getElementById('backToQuestionsBtn');
        if (backToQBtn) {
          backToQBtn.addEventListener('click', () => {
            lightSpiralState.viewMode = 'quiz';
            renderIslandDetail('light');
          });
        }

        // 混合型（五題皆不同反應）時，點選最有感的一題
        const mixedPickBtns = islandDetailContent.querySelectorAll('[data-pick-mixed-q]');
        mixedPickBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            lightSpiralState.pickedQuestionByLevel[activeLevel.id] = btn.getAttribute('data-pick-mixed-q');
            renderIslandDetail('light');
          });
        });

        // 結果頁：探索下一階
        const nextLevelBtns = islandDetailContent.querySelectorAll('[data-go-next-level]');
        nextLevelBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const nextId = btn.getAttribute('data-go-next-level');
            lightSpiralState.activeLevelId = nextId;
            lightSpiralState.currentQuestionIndex = 0;
            const nextAns = lightSpiralState.answersByLevel[nextId] || {};
            lightSpiralState.viewMode = Object.keys(nextAns).length === 5 ? 'result' : 'quiz';
            renderIslandDetail('light');
            const mainCard = document.getElementById('lightLevelMainCard');
            if (mainCard) mainCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        });

        // 結果頁：再試一次本階
        const retryBtn = document.getElementById('retryCurrentLevelBtn');
        if (retryBtn) {
          retryBtn.addEventListener('click', () => {
            delete lightSpiralState.answersByLevel[activeLevel.id];
            delete lightSpiralState.completedLevels[activeLevel.id];
            delete lightSpiralState.pickedQuestionByLevel[activeLevel.id];
            lightSpiralState.currentQuestionIndex = 0;
            lightSpiralState.viewMode = 'quiz';
            updateClearDataButtonVisibility();
            renderIslandDetail('light');
          });
        }

        // 結果頁：回到螺旋階梯總覽
        const scrollSpiralBtn = document.getElementById('scrollToSpiralSelectorBtn');
        if (scrollSpiralBtn) {
          scrollSpiralBtn.addEventListener('click', () => {
            const bar = document.getElementById('lightSpiralSelectorBar');
            if (bar) bar.scrollIntoView({ behavior: 'smooth', block: 'center' });
          });
        }

        // 清除所有 13 級作答紀錄
        const clearRecordsBtn = document.getElementById('clearLightSpiralRecordsBtn');
        if (clearRecordsBtn) {
          clearRecordsBtn.addEventListener('click', () => {
            lightSpiralState.answersByLevel = {};
            lightSpiralState.completedLevels = {};
            lightSpiralState.pickedQuestionByLevel = {};
            lightSpiralState.currentQuestionIndex = 0;
            lightSpiralState.viewMode = 'quiz';
            updateClearDataButtonVisibility();
            renderIslandDetail('light');
          });
        }
      }

      // 人間劇場島專屬互動介面（七大生活主題入口）
      function renderTheaterIslandView(island) {
        const activeTopicId = visitorProfile.selectedLifeTopic || 'boundaries';
        const currentTopic = THEATER_LIFE_TOPICS.find(t => t.id === activeTopicId) || THEATER_LIFE_TOPICS[0];

        islandDetailContent.innerHTML = `
          <div class="w-full flex flex-col items-center">
            ${renderResumeGuideBannerHtml()}

            <div class="text-center max-w-2xl mx-auto px-2">
              <span class="inline-block px-3.5 py-1 rounded-full text-xs tracking-widest mb-2" style="background-color: ${island.palette.badgeBg}; border: 1px solid ${island.palette.badgeBorder}; color: ${island.palette.badgeText};">
                ${island.subtitle}
              </span>
              <h1 class="font-serif text-2xl sm:text-3xl text-ink tracking-wider font-medium">${island.name}</h1>
              <p class="font-serif text-base sm:text-lg text-ink/90 mt-1.5">${island.slogan}</p>
            </div>

            <div class="w-full max-w-xl mx-auto my-2">
              ${getIslandHeroSvg('theater')}
            </div>

            <div class="max-w-2xl mx-auto text-center px-4 mb-5">
              <p class="text-sm sm:text-base text-inkLight leading-relaxed">${island.welcome}</p>
            </div>

            <!-- 七大生活主題選擇器 -->
            <div class="w-full max-w-2xl mx-auto bg-[#FAF8F5] border border-[#E2DBD0] rounded-2xl p-5 sm:p-7">
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#EAE4D8]">
                <h2 class="font-serif text-lg sm:text-xl text-ink">選擇你想觀看的生活劇場主題</h2>
                <span class="text-xs text-inkLight">不貼標籤・從故事裡溫柔看見自己</span>
              </div>

              <div class="flex flex-wrap gap-2 mt-4" role="tablist">
                ${THEATER_LIFE_TOPICS.map(t => `
                  <button type="button" data-theater-topic="${t.id}"
                    class="px-3.5 py-1.5 rounded-full text-xs sm:text-sm transition-all ${
                      t.id === currentTopic.id
                        ? 'bg-[#C89B87] text-[#FAF8F5] font-medium shadow-sm'
                        : 'bg-[#F4F1EA] text-ink border border-[#DFD9CE] hover:border-[#C89B87]'
                    }">
                    ${t.title}
                  </button>
                `).join('')}
              </div>

              <!-- 當前選中生活主題的故事、漫畫與短影音入口 -->
              <div class="mt-5 p-5 rounded-xl bg-[#F4F1EA] border border-[#E6E0D5]">
                <span class="text-xs tracking-widest text-[#8C5E4A] uppercase">目前放映主題</span>
                <h3 class="font-serif text-lg sm:text-xl text-ink font-medium mt-1">${currentTopic.title}</h3>
                <p class="text-sm sm:text-base text-ink/90 leading-relaxed mt-2">${currentTopic.storyPreview}</p>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4">
                  ${currentTopic.formats.map(fmt => `
                    <div class="p-3 rounded-lg bg-[#FAF8F5] border border-[#E2DBD0] text-xs sm:text-sm text-ink flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-[#C89B87] shrink-0"></span>
                      <span>${fmt}</span>
                    </div>
                  `).join('')}
                </div>

                <div class="mt-4 pt-4 border-t border-[#E2DBD0]">
                  <p class="text-xs tracking-widest text-inkLight mb-1">留給自己的小提問</p>
                  <p class="font-serif text-sm sm:text-base text-ink leading-relaxed">「${currentTopic.reflectionQuestion}」</p>
                </div>
              </div>
            </div>

            <!-- 底部返回按鈕 -->
            <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
              ${pendingGuideResumeStep !== null ? `
                <button type="button" data-action="resume-guide" class="btn-story">
                  <span>返回小光對話</span>
                </button>
              ` : ''}
              <button type="button" data-action="back-to-map" class="${pendingGuideResumeStep !== null ? 'btn-quiet' : 'btn-story'}">
                <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M10 13L5 8l5-5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>返回群島地圖</span>
              </button>
            </div>
          </div>
        `;

        const topicBtns = islandDetailContent.querySelectorAll('[data-theater-topic]');
        topicBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            visitorProfile.selectedLifeTopic = btn.getAttribute('data-theater-topic');
            renderIslandDetail('theater');
          });
        });

        bindCommonIslandFooterEvents();
      }

      // 生命數字島以獨立模組呈現原創關係文字、分層閱讀及生活提問。
      // 共用原站資料與返回小光的事件，不改動其他島嶼。
      function renderNumerologyIslandView() {
        numerologyExplorer.render();
        bindCommonIslandFooterEvents();
      }

      function getIslandHeroSvg(islandId) {
        if (islandId === 'flower') {
          return `
            <svg id="flowerGardenSvg" class="w-full h-auto max-h-[300px] overflow-visible select-none" viewBox="0 0 760 320" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="花精島幾何溫室花園與三朵可互動花精">
              <ellipse cx="380" cy="272" rx="280" ry="38" fill="#DFD9CE" opacity="0.45"/>
              <polygon points="380,108 660,210 380,302 100,210" fill="#C5D4C6"/>
              <polygon points="100,210 380,302 380,322 100,230" fill="#9CAF9E"/>
              <polygon points="660,210 380,302 380,322 660,230" fill="#829684"/>

              <polygon points="380,78 510,132 380,186 250,132" fill="#E3EBE3"/>
              <polygon points="250,132 380,186 380,202 250,148" fill="#B7C8B8"/>
              <polygon points="510,132 380,186 380,202 510,148" fill="#9CAF9E"/>

              <polygon points="335,122 380,142 380,68 335,48" fill="#FAF8F5" opacity="0.95"/>
              <polygon points="425,122 380,142 380,68 425,48" fill="#EFECE4" opacity="0.95"/>
              <polygon points="380,20 425,48 380,68 335,48" fill="#FFFFFF"/>
              <polyline points="335,48 380,68 425,48 M380,20 L380,142" stroke="#9CAF9E" stroke-width="1.5"/>

              <!-- 1. 線球草 Scleranthus -->
              <g class="flower-specimen ${currentFlowerId === 'scleranthus' ? 'is-selected' : ''}" tabindex="0" role="button" data-flower="scleranthus" aria-label="探索線球草 Scleranthus">
                <ellipse class="specimen-ring" cx="215" cy="210" rx="52" ry="22" fill="#F2F6F2" stroke="#B7C8B8" stroke-width="1.5"/>
                <g class="specimen-body">
                  <path d="M215,206 L215,155 M215,182 L192,158 M215,182 L238,158" stroke="#6E8270" stroke-width="2.2" stroke-linecap="round"/>
                  <polygon points="192,144 202,154 192,164 182,154" fill="#9CAF9E"/>
                  <polygon points="238,144 248,154 238,164 228,154" fill="#9CAF9E"/>
                  <polygon points="215,134 224,145 215,156 206,145" fill="#DCE5DC"/>
                  <rect x="155" y="222" width="120" height="26" rx="13" fill="${currentFlowerId === 'scleranthus' ? '#3E3C38' : '#FAF8F5'}" stroke="#9CAF9E" stroke-width="1.2"/>
                  <text x="215" y="239" text-anchor="middle" fill="${currentFlowerId === 'scleranthus' ? '#F7F4EE' : '#3E3C38'}" font-family="Noto Serif TC" font-size="12.5" font-weight="500">線球草 Scleranthus</text>
                </g>
              </g>

              <!-- 2. 矢車菊 Centaury -->
              <g class="flower-specimen ${currentFlowerId === 'centaury' ? 'is-selected' : ''}" tabindex="0" role="button" data-flower="centaury" aria-label="探索矢車菊 Centaury">
                <ellipse class="specimen-ring" cx="380" cy="242" rx="52" ry="22" fill="#F2F6F2" stroke="#B7C8B8" stroke-width="1.5"/>
                <g class="specimen-body">
                  <line x1="380" y1="238" x2="380" y2="184" stroke="#6E8270" stroke-width="2.2"/>
                  <polygon points="380,162 392,180 380,192 368,180" fill="#8FA2B2"/>
                  <polygon points="358,180 376,174 384,186 368,194" fill="#A9BCCB"/>
                  <polygon points="402,180 384,174 376,186 392,194" fill="#A9BCCB"/>
                  <circle cx="380" cy="180" r="4" fill="#FAF6EE"/>
                  <rect x="320" y="254" width="120" height="26" rx="13" fill="${currentFlowerId === 'centaury' ? '#3E3C38' : '#FAF8F5'}" stroke="#8FA2B2" stroke-width="1.2"/>
                  <text x="380" y="271" text-anchor="middle" fill="${currentFlowerId === 'centaury' ? '#F7F4EE' : '#3E3C38'}" font-family="Noto Serif TC" font-size="12.5" font-weight="500">矢車菊 Centaury</text>
                </g>
              </g>

              <!-- 3. 溝酸漿 Mimulus -->
              <g class="flower-specimen ${currentFlowerId === 'mimulus' ? 'is-selected' : ''}" tabindex="0" role="button" data-flower="mimulus" aria-label="探索溝酸漿 Mimulus">
                <ellipse class="specimen-ring" cx="545" cy="210" rx="52" ry="22" fill="#F2F6F2" stroke="#B7C8B8" stroke-width="1.5"/>
                <g class="specimen-body">
                  <path d="M545,206 L545,156" stroke="#6E8270" stroke-width="2.2" stroke-linecap="round"/>
                  <polygon points="545,136 564,154 545,172 526,154" fill="#DFC5C0"/>
                  <polygon points="545,144 556,154 545,164 534,154" fill="#D9C59A"/>
                  <circle cx="545" cy="154" r="3" fill="#FAF8F5"/>
                  <rect x="485" y="222" width="120" height="26" rx="13" fill="${currentFlowerId === 'mimulus' ? '#3E3C38' : '#FAF8F5'}" stroke="#DFC5C0" stroke-width="1.2"/>
                  <text x="545" y="239" text-anchor="middle" fill="${currentFlowerId === 'mimulus' ? '#F7F4EE' : '#3E3C38'}" font-family="Noto Serif TC" font-size="12.5" font-weight="500">溝酸漿 Mimulus</text>
                </g>
              </g>
            </svg>
          `;
        }

        const scenes = {
          light: `
            <svg class="w-full h-auto max-h-[250px] overflow-visible" viewBox="0 0 600 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="300" cy="228" rx="190" ry="28" fill="#DFD9CE" opacity="0.45"/>
              <polygon points="300,115 470,185 300,235 130,185" fill="#F5F0E6"/>
              <polygon points="130,185 300,235 300,252 130,202" fill="#E5DEC9"/>
              <polygon points="470,185 300,235 300,252 470,202" fill="#D4C8AE"/>
              <polygon points="272,155 300,168 300,42 272,55" fill="#FFFFFF"/>
              <polygon points="328,155 300,168 300,42 328,55" fill="#EAE0C8"/>
              <polygon points="300,6 272,55 300,42" fill="#FAF6EE"/>
              <polygon points="300,6 328,55 300,42" fill="#D9C59A"/>
              <circle cx="300" cy="-10" r="14" fill="#F5EBD6" class="anim-halo"/>
              <circle cx="300" cy="-10" r="6" fill="#D9C59A"/>
            </svg>
          `,
          reiki: `
            <svg class="w-full h-auto max-h-[250px] overflow-visible" viewBox="0 0 600 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="300" cy="228" rx="190" ry="28" fill="#DFD9CE" opacity="0.45"/>
              <polygon points="300,110 470,180 300,235 130,180" fill="#C2D2D4"/>
              <polygon points="130,180 300,235 300,252 130,197" fill="#9FB6BC"/>
              <polygon points="470,180 300,235 300,252 470,197" fill="#839BA6"/>
              <ellipse cx="300" cy="176" rx="95" ry="38" fill="#E6EFEF"/>
              <ellipse cx="300" cy="176" rx="72" ry="28" fill="#A9C6CC"/>
              <ellipse cx="300" cy="176" rx="46" ry="18" stroke="#F2F7F7" stroke-width="1.5" fill="none" class="anim-ripple"/>
              <polygon points="255,140 300,118 300,56 255,78" fill="#DCE7E8"/>
              <polygon points="345,140 300,118 300,56 345,78" fill="#B5C9CE"/>
              <polygon points="293,65 307,65 307,168 293,168" fill="#D8ECEF" opacity="0.88"/>
            </svg>
          `,
          theater: `
            <svg class="w-full h-auto max-h-[250px] overflow-visible" viewBox="0 0 600 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="300" cy="228" rx="190" ry="28" fill="#DFD9CE" opacity="0.45"/>
              <polygon points="300,112 470,182 300,235 130,182" fill="#E8CFC6"/>
              <polygon points="130,182 300,235 300,252 130,199" fill="#D4B0A3"/>
              <polygon points="470,182 300,235 300,252 470,199" fill="#BD9180"/>
              <ellipse cx="300" cy="182" rx="82" ry="32" fill="#F4E6E1"/>
              <ellipse cx="300" cy="178" rx="56" ry="22" fill="#DFC5C0"/>
              <polygon points="230,152 300,118 300,48 230,82" fill="#C89B87"/>
              <polygon points="370,152 300,118 300,48 370,82" fill="#B3836E"/>
              <path d="M255,140 L255,98 A14,14 0 0,1 280,98 L280,128 Z" fill="#FAF3E8"/>
              <path d="M320,128 L320,98 A14,14 0 0,1 345,98 L345,140 Z" fill="#E8D8C3"/>
            </svg>
          `,
          library: `
            <svg class="w-full h-auto max-h-[250px] overflow-visible" viewBox="0 0 600 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="300" cy="228" rx="190" ry="28" fill="#DFD9CE" opacity="0.45"/>
              <polygon points="300,112 470,182 300,235 130,182" fill="#EFE8DA"/>
              <polygon points="130,182 300,235 300,252 130,199" fill="#DCD1BD"/>
              <polygon points="470,182 300,235 300,252 470,199" fill="#C6B79D"/>
              <polygon points="262,165 300,182 300,72 262,55" fill="#FAF8F5"/>
              <polygon points="338,165 300,182 300,72 338,55" fill="#E3D7C1"/>
              <polygon points="300,72 252,48 300,26" fill="#FFFFFF" stroke="#D1C2A8" stroke-width="1.2"/>
              <polygon points="300,72 348,48 300,26" fill="#F2EAD9" stroke="#D1C2A8" stroke-width="1.2"/>
            </svg>
          `,
          numerology: `
            <svg class="w-full h-auto max-h-[250px] overflow-visible" viewBox="0 0 600 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="300" cy="228" rx="190" ry="28" fill="#DFD9CE" opacity="0.45"/>
              <polygon points="300,112 470,182 300,235 130,182" fill="#D0CCD9"/>
              <polygon points="130,182 300,235 300,252 130,199" fill="#B2ADC0"/>
              <polygon points="470,182 300,235 300,252 470,199" fill="#8E889B"/>
              <ellipse cx="300" cy="178" rx="88" ry="34" fill="#E4E1EB" stroke="#8E889B" stroke-width="1"/>
              <polygon points="282,178 300,186 300,62 282,54" fill="#EAE7F0"/>
              <polygon points="318,178 300,186 300,62 318,54" fill="#B8B3C6"/>
              <polygon points="300,28 318,54 300,62 282,54" fill="#FAF8F5"/>
              <circle cx="291" cy="92" r="7" fill="#8E889B"/>
            </svg>
          `
        };

        return scenes[islandId] || scenes.light;
      }

      /* ------------------------------------------------------------------------
         10. 全域事件監聽與初始化
         ------------------------------------------------------------------------ */
      function initEvents() {
        // 頂部聲音開關按鈕
        if (audioToggleBtn) {
          audioToggleBtn.addEventListener('click', () => {
            StorySoundEngine.toggle();
          });
        }

        // 第四幕重播動畫按鈕
        if (storyReplayAct4Btn) {
          storyReplayAct4Btn.addEventListener('click', () => {
            StorySoundEngine.enableOnUserAction(3);
            renderStoryStep(3);
          });
        }

        // 故事下一步按鈕（第五幕結束後進入「地球引路人——小光」舞台）
        storyNextBtn.addEventListener('click', () => {
          if (currentStoryStep < STORY_ACTS.length - 1) {
            const nextIdx = currentStoryStep + 1;
            StorySoundEngine.enableOnUserAction(nextIdx);
            renderStoryStep(nextIdx);
          } else {
            StorySoundEngine.enableOnUserAction(4);
            switchStage('guide', { guideStep: 1 });
          }
        });

        // 故事圓點切換
        storyStepDots.forEach(dot => {
          dot.addEventListener('click', () => {
            const step = parseInt(dot.getAttribute('data-step'), 10);
            StorySoundEngine.enableOnUserAction(step);
            renderStoryStep(step);
          });
        });

        // 跳過故事：進入地球引路人小光對話舞台
        skipStoryBtn.addEventListener('click', () => {
          StorySoundEngine.enableOnUserAction(4);
          switchStage('guide', { guideStep: 1 });
        });

        // 頂部：跳過小光對話直接進入群島地圖
        if (skipGuideTopBtn) {
          skipGuideTopBtn.addEventListener('click', () => {
            pendingGuideResumeStep = null;
            switchStage('map');
          });
        }

        // 小光對話框上方：跳過對話看地圖
        if (guideSkipAllBtn) {
          guideSkipAllBtn.addEventListener('click', () => {
            pendingGuideResumeStep = null;
            switchStage('map');
          });
        }

        // 小光對話框上方：返回上一段對話
        if (guidePrevStepBtn) {
          guidePrevStepBtn.addEventListener('click', () => {
            if (guideSubState !== null) {
              renderGuideStep(currentGuideStep, null);
            } else if (currentGuideStep > 1) {
              renderGuideStep(currentGuideStep - 1, null);
            }
          });
        }

        // 清除本機暫存的稱呼與生日紀錄
        if (clearVisitorDataBtn) {
          clearVisitorDataBtn.addEventListener('click', () => {
            clearAllVisitorData();
          });
        }

        // 頂部：從島嶼返回接續小光對話
        if (resumeGuideTopBtn) {
          resumeGuideTopBtn.addEventListener('click', () => {
            const stepToResume = pendingGuideResumeStep || currentGuideStep || 1;
            pendingGuideResumeStep = null;
            switchStage('guide', { guideStep: stepToResume });
          });
        }

        // 頂部：隨時重新與小光對話
        if (talkToGuideTopBtn) {
          talkToGuideTopBtn.addEventListener('click', () => {
            switchStage('guide', { guideStep: currentGuideStep || 1 });
          });
        }

        // 重看故事
        replayStoryBtn.addEventListener('click', () => {
          pendingGuideResumeStep = null;
          StorySoundEngine.enableOnUserAction(0);
          switchStage('story', { stepIndex: 0 });
        });

        // 頂部返回群島
        backToMapTopBtn.addEventListener('click', () => {
          pendingGuideResumeStep = null;
          switchStage('map');
        });

        // 品牌標誌點擊
        brandHomeBtn.addEventListener('click', () => {
          if (currentStage === 'island' || currentStage === 'guide') {
            pendingGuideResumeStep = null;
            switchStage('map');
          } else if (currentStage === 'map') {
            switchStage('story', { stepIndex: 0 });
          }
        });

        // 六座群島 SVG 節點互動（點擊、鍵盤 Enter、滑鼠移過標語提示）
        archipelagoNodes.forEach(node => {
          const islandId = node.getAttribute('data-island');
          const islandData = ISLANDS_DATA[islandId];

          node.addEventListener('click', () => {
            switchStage('island', { islandId });
          });

          node.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              switchStage('island', { islandId });
            }
          });

          node.addEventListener('mouseenter', () => {
            if (islandData && mapHoverHint) {
              mapHoverHint.textContent = `${islandData.name}｜${islandData.slogan}`;
            }
          });

          node.addEventListener('mouseleave', () => {
            if (mapHoverHint) {
              mapHoverHint.textContent = '點選世界中的任一建築，走進對應的生命故事。';
            }
          });

          node.addEventListener('focus', () => {
            if (islandData && mapHoverHint) {
              mapHoverHint.textContent = `${islandData.name}｜${islandData.slogan}`;
            }
          });
        });

        // 底部快速選島按鈕
        quickIslandBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const islandId = btn.getAttribute('data-island');
            switchStage('island', { islandId });
          });
        });
      }

      // 掛載全站統一的「小靈魂」原創 SVG 角色元件（確保所有場景 100% 共用同一造型、比例、材質與輪廓）
      LittleSoulComponent.mount('storySoulGroup', 'storyLittleSoul', { view: 'front', pose: 'float' });
      LittleSoulComponent.mount('guideSoulMount', 'guideLittleSoul', { view: 'front', pose: 'curious' });
      LittleSoulComponent.mount('mapCenterSoulMount', 'mapCenterLittleSoul', { view: 'front', pose: 'curious' });

      const lightJourney = window.createLightJourney({
        container: islandDetailContent,
        mountSoul: (id) => LittleSoulComponent.mount(id, 'lightJourneySoul', { view: 'front', pose: 'curious' }),
        guideMarkup: document.getElementById('characterXiaoguang').innerHTML,
        goMap: () => renderIslandDetail('light'),
        backToIslands: () => switchStage('map')
      });
      const numerologyExplorer = window.createNumerologyExplorer({
        container: islandDetailContent,
        profile: visitorProfile,
        engine: DiamondNumerologyEngine,
        escapeHtml,
        onChange: updateClearDataButtonVisibility,
        resumeBanner: renderResumeGuideBannerHtml,
        mountSoul: (id) => LittleSoulComponent.mount(id, 'numerologyLittleSoul', {view:'front', pose:'curious'})
      });
      loadLightBank();
      // 啟動初始化：進站預設進入第一幕「光的故鄉」
      initEvents();
      switchStage('story', { stepIndex: 0 });
    })();
  