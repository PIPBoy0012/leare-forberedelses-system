import './CSS/Navbar.css';

function Navbar(){
    return(
        
        <div>
            <ul>
                <li><a href="#MainPage" onClick={navigate()}>MainPage</a></li>
                <li><a href="#MineForløb">MineForløb</a></li>
                <li><a href="#Forløb">Forløb</a></li>
                <li><a href="#Profil">Profil</a></li>
            </ul>
        </div>

    );
}

function navigate(page){

}

export default Navbar;