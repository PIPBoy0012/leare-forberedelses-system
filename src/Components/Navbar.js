import 'src/Navbar.css';

function Navbar(){
    return(
        <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li style="float:right"><a href="#about">About</a></li>
        </ul>
    );
}