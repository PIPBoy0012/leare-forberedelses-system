import './CSS/Navbar.css';

function Navbar(){
    return(
        
        <div>
            <ul>
                <li><a href="#MainPage" onClick={navigate()}>Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>

    );
}

function navigate(page){

}

export default Navbar;