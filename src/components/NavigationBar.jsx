import { Link, NavLink } from 'react-router-dom';
function NavigationBar() {
    return (
        <nav className='clearfix'>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/details"  activeClassName="active">Details</NavLink>
            <NavLink to="/browse"  activeClassName="active">Browse</NavLink>
            <NavLink to="/comics"  activeClassName="active">Comics</NavLink>
            
           
        </nav>
    )
}

export default NavigationBar
