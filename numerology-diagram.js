'use strict';
window.renderNumerologyDiamond = function(birthChart) { return `<svg class="w-full h-auto overflow-visible select-none" viewBox="0 0 760 520" fill="none" xmlns="http://www.w3.org/2000/svg" role="group" aria-label="鑽石生命靈數基本圖">
                        <!-- 上方：四個高峰數（四高峰數字疊加三角形） -->
                        <!-- 第四高峰數（頂端大三角） -->
                        <g class="cursor-pointer hover:opacity-80 transition-opacity" data-inspect-num="${birthChart.pinnacle4.value}" data-inspect-role="pinnacle4">
                          <polygon points="280,28 365,126 195,126" fill="#FAF8F5" stroke="#3E3C38" stroke-width="1.6"/>
                          <text x="280" y="16" text-anchor="middle" fill="#6E6A63" font-size="11.5">第四高峰數（${birthChart.ages.p4Range}）</text>
                          <text x="280" y="98" text-anchor="middle" fill="#3E3C38" font-family="Noto Serif TC" font-size="24" font-weight="600">${birthChart.pinnacle4.display}</text>
                        </g>

                        <!-- 第三高峰數（中倒三角，承先啟後最關鍵） -->
                        <g class="cursor-pointer hover:opacity-80 transition-opacity" data-inspect-num="${birthChart.pinnacle3.value}" data-inspect-role="pinnacle3">
                          <polygon points="195,126 365,126 280,218" fill="#FAF6EE" stroke="#3E3C38" stroke-width="1.6"/>
                          <text x="445" y="102" text-anchor="start" fill="#6E6A63" font-size="11.5">第三高峰數（${birthChart.ages.p3Range}）</text>
                          <line x1="340" y1="145" x2="438" y2="102" stroke="#BDB5A6" stroke-width="1" stroke-dasharray="3 3"/>
                          <text x="280" y="168" text-anchor="middle" fill="#3E3C38" font-family="Noto Serif TC" font-size="23" font-weight="600">${birthChart.pinnacle3.display}</text>
                        </g>

                        <!-- 第一高峰數（左斜三角） -->
                        <g class="cursor-pointer hover:opacity-80 transition-opacity" data-inspect-num="${birthChart.pinnacle1.value}" data-inspect-role="pinnacle1">
                          <polygon points="195,126 280,218 115,218" fill="#FAF8F5" stroke="#3E3C38" stroke-width="1.6"/>
                          <text x="115" y="152" text-anchor="end" fill="#6E6A63" font-size="11.5">第一高峰數</text>
                          <text x="115" y="168" text-anchor="end" fill="#76726A" font-size="10.5">（${birthChart.ages.p1Range}）</text>
                          <text x="200" y="196" text-anchor="middle" fill="#3E3C38" font-family="Noto Serif TC" font-size="22" font-weight="600">${birthChart.pinnacle1.display}</text>
                        </g>

                        <!-- 第二高峰數（右斜三角） -->
                        <g class="cursor-pointer hover:opacity-80 transition-opacity" data-inspect-num="${birthChart.pinnacle2.value}" data-inspect-role="pinnacle2">
                          <polygon points="365,126 445,218 280,218" fill="#FAF8F5" stroke="#3E3C38" stroke-width="1.6"/>
                          <text x="450" y="152" text-anchor="start" fill="#6E6A63" font-size="11.5">第二高峰數</text>
                          <text x="450" y="168" text-anchor="start" fill="#76726A" font-size="10.5">（${birthChart.ages.p2Range}）</text>
                          <text x="360" y="196" text-anchor="middle" fill="#3E3C38" font-family="Noto Serif TC" font-size="22" font-weight="600">${birthChart.pinnacle2.display}</text>
                        </g>

                        <!-- 下方：四個挑戰數（四挑戰數字陰影反三角形） -->
                        <!-- 第一挑戰數（左倒三角） -->
                        <g class="cursor-pointer hover:opacity-80 transition-opacity" data-inspect-num="${birthChart.challenge1.value}" data-inspect-role="challenge1">
                          <polygon points="115,302 280,302 195,394" fill="#E4E0D8" stroke="#3E3C38" stroke-width="1.6"/>
                          <text x="115" y="368" text-anchor="end" fill="#6E6A63" font-size="11.5">第一挑戰數</text>
                          <text x="200" y="344" text-anchor="middle" fill="#3E3C38" font-family="Noto Serif TC" font-size="22" font-weight="600">${birthChart.challenge1.display}</text>
                        </g>

                        <!-- 第二挑戰數（右倒三角） -->
                        <g class="cursor-pointer hover:opacity-80 transition-opacity" data-inspect-num="${birthChart.challenge2.value}" data-inspect-role="challenge2">
                          <polygon points="280,302 445,302 365,394" fill="#E4E0D8" stroke="#3E3C38" stroke-width="1.6"/>
                          <text x="450" y="368" text-anchor="start" fill="#6E6A63" font-size="11.5">第二挑戰數</text>
                          <text x="360" y="344" text-anchor="middle" fill="#3E3C38" font-family="Noto Serif TC" font-size="22" font-weight="600">${birthChart.challenge2.display}</text>
                        </g>

                        <!-- 第三挑戰數（中正三角） -->
                        <g class="cursor-pointer hover:opacity-80 transition-opacity" data-inspect-num="${birthChart.challenge3.value}" data-inspect-role="challenge3">
                          <polygon points="280,302 365,394 195,394" fill="#DAD5CA" stroke="#3E3C38" stroke-width="1.6"/>
                          <text x="425" y="418" text-anchor="start" fill="#6E6A63" font-size="11.5">第三挑戰數</text>
                          <text x="280" y="378" text-anchor="middle" fill="#3E3C38" font-family="Noto Serif TC" font-size="22" font-weight="600">${birthChart.challenge3.display}</text>
                        </g>

                        <!-- 第四挑戰數（底端大倒三角） -->
                        <g class="cursor-pointer hover:opacity-80 transition-opacity" data-inspect-num="${birthChart.challenge4.value}" data-inspect-role="challenge4">
                          <polygon points="195,394 365,394 280,492" fill="#E4E0D8" stroke="#3E3C38" stroke-width="1.6"/>
                          <text x="175" y="468" text-anchor="end" fill="#6E6A63" font-size="11.5">第四挑戰數</text>
                          <text x="280" y="438" text-anchor="middle" fill="#3E3C38" font-family="Noto Serif TC" font-size="23" font-weight="600">${birthChart.challenge4.display}</text>
                        </g>

                        <!-- 中央橫排：三幕子題（三個大圓圈）+ 生日數（黑色菱形） -->
                        <!-- 第一週期子題（月，0~27歲） -->
                        <g class="cursor-pointer hover:opacity-90 transition-opacity" data-inspect-num="${birthChart.cycle1.value}" data-inspect-role="cycle1">
                          <circle cx="145" cy="260" r="66" fill="#FFFFFF" stroke="#3E3C38" stroke-width="2"/>
                          <text x="145" y="268" text-anchor="middle" fill="#3E3C38" font-family="Noto Serif TC" font-size="28" font-weight="600">${birthChart.cycle1.display}</text>
                          <text x="145" y="294" text-anchor="middle" fill="#6E6A63" font-size="12">第一週期子題</text>
                          <text x="145" y="310" text-anchor="middle" fill="#8E889B" font-size="10">（0～27 歲）</text>
                        </g>

                        <!-- 第二週期子題（日，28~55歲）+ 生日數（菱形） -->
                        <g class="cursor-pointer hover:opacity-90 transition-opacity" data-inspect-num="${birthChart.cycle2.value}" data-inspect-role="cycle2">
                          <circle cx="280" cy="260" r="66" fill="#FFFFFF" stroke="#3E3C38" stroke-width="2"/>
                          <!-- 生日數黑色菱形 -->
                          <g data-inspect-num="${birthChart.birthday.value}" data-inspect-role="birthday" class="cursor-pointer" role="button" tabindex="0" aria-label="生日數・生日數 ${birthChart.birthday.display}">
                            <polygon points="280,198 314,225 280,252 246,225" fill="#2E2C29"/>
                            <text x="280" y="233" text-anchor="middle" fill="#FAF8F5" font-family="Noto Serif TC" font-size="21" font-weight="600" style="pointer-events:none">${birthChart.birthday.display}</text>
                          </g>
                          <text x="328" y="242" text-anchor="start" fill="#3E3C38" font-size="10.5" font-weight="500">生日數</text>
                          <!-- 第二週期子題數字 -->
                          <text x="280" y="282" text-anchor="middle" fill="#3E3C38" font-family="Noto Serif TC" font-size="26" font-weight="600">${birthChart.cycle2.display}</text>
                          <text x="280" y="303" text-anchor="middle" fill="#6E6A63" font-size="12">第二週期子題</text>
                          <text x="280" y="317" text-anchor="middle" fill="#8E889B" font-size="10">（28～55 歲）</text>
                        </g>

                        <!-- 第三週期子題（年，56歲之後） -->
                        <g class="cursor-pointer hover:opacity-90 transition-opacity" data-inspect-num="${birthChart.cycle3.value}" data-inspect-role="cycle3">
                          <circle cx="415" cy="260" r="66" fill="#FFFFFF" stroke="#3E3C38" stroke-width="2"/>
                          <text x="415" y="268" text-anchor="middle" fill="#3E3C38" font-family="Noto Serif TC" font-size="28" font-weight="600">${birthChart.cycle3.display}</text>
                          <text x="415" y="294" text-anchor="middle" fill="#6E6A63" font-size="12">第三週期子題</text>
                          <text x="415" y="310" text-anchor="middle" fill="#8E889B" font-size="10">（56 歲之後）</text>
                        </g>

                        <!-- 等號 -->
                        <text x="515" y="268" text-anchor="middle" fill="#3E3C38" font-size="28" font-weight="600">=</text>

                        <!-- 生命歷程數（生命歷程數字：雙重圓圈） -->
                        <g class="cursor-pointer hover:opacity-90 transition-opacity" data-inspect-num="${birthChart.lifePath.value}" data-inspect-role="lifePath">
                          <circle cx="625" cy="260" r="70" fill="#FAF6EE" stroke="#3E3C38" stroke-width="2.2"/>
                          <circle cx="625" cy="260" r="61" fill="none" stroke="#3E3C38" stroke-width="1.4"/>
                          <text x="625" y="266" text-anchor="middle" fill="#3E3C38" font-family="Noto Serif TC" font-size="32" font-weight="600">${birthChart.lifePath.display}</text>
                          <text x="625" y="296" text-anchor="middle" fill="#3E3C38" font-size="13" font-weight="500">生命歷程數</text>
                          <text x="625" y="312" text-anchor="middle" fill="#76726A" font-size="10">（生命歷程數）</text>
                        </g>
                      </svg>`; };
