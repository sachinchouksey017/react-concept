import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div style={{display: 'flex', backgroundColor: '#fbeb6136', padding: '10px'}}>
                    <Link to="/pure" style={{marginRight: '10px'}}>Pure component</Link>
                    <Link to="/context-api" style={{marginRight: '10px'}}>context-api</Link>
                    <Link to="/use-memo" style={{marginRight: '10px'}}>use-memo</Link>
                    <Link to="/use-callback" style={{marginRight: '10px'}}>use-callback</Link>
                    <Link to="/login" style={{marginRight: '10px'}}>Login</Link>

                    <Link to="/home">Home</Link>

        </div>
    )
}

export default Navbar;