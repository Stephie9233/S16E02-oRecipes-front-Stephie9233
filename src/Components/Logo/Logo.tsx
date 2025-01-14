import './Logo.css';

function Logo() {
    const logo = "../../public/docs/logo.png"
    return (
        <>
        <img src={logo} alt="Logo oRecipes" className="logo" />
        </>
    )

}

export default Logo;