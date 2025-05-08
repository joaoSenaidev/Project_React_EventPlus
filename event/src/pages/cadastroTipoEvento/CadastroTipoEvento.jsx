import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Banner from "../../assets/img/undraw_add_tasks_re_s5yj (1) 1.png";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
const CadastroTipoEvento = () => {
    return(
        <>
        <Header
            tituloHeader = "Administrador"
        />
        <main>
        <Cadastro 
            tituloCadastro = "Cadastro Tipo De Evento"
            banner_img = {Banner}
            campoPlaceholder = "Titulo"
            visibilidade = "none"
            NomeDoBotao = "Cadastrar"
        />
        <Lista
            tituloLista = "Lista Tipo De Eventos"
            visibilidade= "none"
            titulo = "Titulo"
            ttl = "Titulo Do Tipo Evento"


        />
        </main>
        <Footer/> 

        </>


    )
}
export default CadastroTipoEvento;