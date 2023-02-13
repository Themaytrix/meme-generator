import logo from "../images/logo-meme.png"
export default function Header(){
    return (
        <nav>
            <img  className="nav--logo"src={logo} alt="" />
            <h4 className="nav--title">Meme-generator</h4>
        </nav>
    )
}