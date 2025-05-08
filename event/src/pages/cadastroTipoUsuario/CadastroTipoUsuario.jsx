import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Banner from "../../assets/img/undraw_add_user_re_5oib 1.png";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";

const CadastroTipoUsuario = () => {
    return(
        <>
        <Header
            tituloHeader = "Administrador"
        />
        <main>
        <Cadastro 
            tituloCadastro = "Cadastro Tipo De Usuario"
            banner_img = {Banner}
            campoPlaceholder = "Titulo"
            visibilidade = "none"
            NomeDoBotao = "Cadastrar"
        />
        <Lista
            tituloLista = "Lista Tipo De Usuario"
            visibilidade= "none"
            titulo = "Titulo"
            ttl = "Titulo Do Tipo Usuario"


        />
        </main>
        <Footer/> 

        </>


    )

}
export default CadastroTipoUsuario;