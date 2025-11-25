function initGrid() {
            const R = parseInt(document.getElementById('rows').value);
            const C = parseInt(document.getElementById('cols').value);
            const grid = document.getElementById('grid');

            grid.innerHTML = '';
            grid.style.gridTemplateColumns = `repeat(${C}, 60px)`;
            document.getElementById('panel').style.display = 'none';

            for (let i = 0; i < R; i++) {
                for (let j = 0; j < C; j++) {
                    let cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.innerHTML = `<b>A[${i}][${j}]</b>`;
                    cell.onclick = () => showMath(i, j);
                    grid.appendChild(cell);
                }
            }
        }

        function showMath(i, j) {
            const R = parseInt(document.getElementById('rows').value);
            const C = parseInt(document.getElementById('cols').value);
            const Base = parseInt(document.getElementById('base').value);
            const Size = parseInt(document.getElementById('size').value);
            const Type = document.getElementById('type').value;

            // Highlight Cell
            document.querySelectorAll('.cell').forEach(c => c.classList.remove('active'));
            event.currentTarget.classList.add('active');
            document.getElementById('panel').style.display = 'block';

            // Logic
            let offset, formulaStr, calcStr;

            if (Type === 'row') {
                // Row Major
                offset = (i * C) + j;
                formulaStr = `Base + ((<span class="var-i">i</span> × TotalCols) + <span class="var-j">j</span>) × Size`;
                calcStr = `${Base} + ((<span class="var-i">${i}</span> × ${C}) + <span class="var-j">${j}</span>) × ${Size}`;
            } else {
                // Col Major
                offset = (j * R) + i;
                formulaStr = `Base + ((<span class="var-j">j</span> × TotalRows) + <span class="var-i">i</span>) × Size`;
                calcStr = `${Base} + ((<span class="var-j">${j}</span> × ${R}) + <span class="var-i">${i}</span>) × ${Size}`;
            }

            let finalAddr = Base + (offset * Size);

            // Update UI
            document.getElementById('generalFormula').innerHTML = formulaStr;

            document.getElementById('stepCalc').innerHTML = `
            1. Offset = (<span class="var-i">${i}</span> × ${Type === 'row' ? C : R}) + <span class="var-j">${j}</span> = <span class="highlight">${offset}</span> elements <br>
            2. Bytes = <span class="highlight">${offset}</span> × ${Size} = ${offset * Size} bytes <br>
            3. Addr = ${Base} + ${offset * Size}
        `;

            document.getElementById('finalResult').innerText = `Address: ${finalAddr}`;
        }

        initGrid(); // Start