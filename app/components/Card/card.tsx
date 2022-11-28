export default function Card() {
    return (
        <div className="card">
            <img className="cover"
                src="https://via.placeholder.com/400x300"
                alt="capa" />

            <div className="p-5 flex-initial">
                <h1 className="cover-title">Citrus</h1>
                <br />
                <h2 className="cover-sinnops">Citrus é um anime do gênero Yuri (focado no relacionamento entre duas mulheres). A trama nos mostra Yuzu uma adolescente meio rebelde que se muda para uma nova escola devido a mãe ter se casado novamente. Neste novo relacionamento, seu marido já tinha uma filha, Mei.</h2>
                <hr />
                <button className="btn-card">
                    <img className="icon"
                        src="https://www.svgrepo.com/show/13666/heart.svg"
                        alt="Favoritar" />
                </button>
                <button className="btn-card">
                    <img className="icon"
                        src="https://www.svgrepo.com/show/179295/flag-symbol.svg"
                        alt="Denuciar" />
                </button>
            </div>
        </div>
    )
}