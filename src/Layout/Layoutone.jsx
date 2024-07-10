import Navbar from '../Navbar/Navbar';

function Layoutone({children}) {
    return (
        <div className="container">
            <Navbar/>
            <div className="main">{children}
            </div>
        </div>
  )
}

export default Layoutone