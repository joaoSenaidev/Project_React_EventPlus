import "./Lista.css";

//importacao de imagens
import Editar from "../../assets/img/Vector (1).png"
import Excluir from "../../assets/img/Vector (2).png"


const Lista = (props) => {
    return(
        <section className="layout_grid listagem">
            <h1>{props.tituloLista}</h1>
            <hr/>
            <div className=" tabela">
            <table>
                    {/* cabeçalho da tabela: */}
                    <thead>
                        {/* tr => table row */}
                        <tr className="cabecalho_tabela">
                            {/* th => table head */}
                            <th>{props.titulo}</th>
                            <th style={{display:props.visibilidade}}>Tipo Evento</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody => corpo da tabela */}
                    <tbody>
                        <tr className="item_lista">
                            <td data-cell="Nome">{props.ttl}</td>
                            <td data-cell="Tipo Evento" style={{display:props.visibilidade}}>xxxxx</td>
                            <td data-cell="Editar"><img src={Editar} alt="Caneta"/></td>
                            <td data-cell="Excluir"><img src={Excluir} alt="Lixeira"/></td>
                        </tr>
                
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default Lista;