import React, { useState } from 'react';
import './Contar.css'


function Contador() {
    const [inicio, setInicio] = useState('');
    const [fim, setFim] = useState('');
    const [passo, setPasso] = useState('');
    const [resultado, setResultado] = useState('preparando a contagem...');

    const contar = () => {
        if (inicio === '' || fim === '' || passo === '') {
            setResultado('Impossível contar. Preencha todos os campos!');
        } else {
            const ini = Number(inicio);
            const end = Number(fim);
            const step = Number(passo);
            let counting = '';

            if (step <= 0) {
                setResultado('Passo inválido. Insira um valor maior que zero!');
            } else if (ini < end) {
                setResultado('Contando: ');
                for (let i = ini; i <= end; i += step) {
                    counting += `${i} 👉 `;
                }
            } else {
                setResultado('Contagem regressiva: ');
                for (let i = ini; i >= end; i -= step) {
                    counting += `${i} 👈 `;
                }
            }
            setResultado(counting);
        }
    };

    return (
        <div>
            <header>
                <h1>Vamos contar</h1>
            </header>
            <section>
                <div id="dados">
                    <p>
                        Início: <input type="number" value={inicio} onChange={(e) => setInicio(e.target.value)} />
                    </p>
                    <p>
                        Fim: <input type="number" value={fim} onChange={(e) => setFim(e.target.value)} />
                    </p>
                    <p>
                        Passo: <input type="number" value={passo} onChange={(e) => setPasso(e.target.value)} />
                    </p>
                    <p>
                        <input type="button" value="Contar" onClick={contar} />
                    </p>
                </div>
                <div id="res">{resultado}</div>
            </section>
            <footer>
                <p>&copy;lucaspassos</p>
            </footer>
        </div>
    );
}

export default Contador;
