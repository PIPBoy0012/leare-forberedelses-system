import './CSS/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        
        <div className='z-auto'>
            <ul>
                <li><Link className='LiA' to="/Home">Home </Link></li>
                <li><Link className='LiA' to="/Drawing">Drawing Test</Link></li>
                <li><Link className='LiA' to="/FlowTest">FlowTest</Link></li>
                <li><Link className='LiA' to="/Forløb">Forløb</Link></li>
            </ul>
        </div>

    );
}

function navigate(page){

}

export default Navbar;