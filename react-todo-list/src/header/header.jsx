import './header.css';

function Header({addItem}) {
    return ( 
    <>
        <h2>TODO</h2>
        <input className="input" type="text" />
        <button onClick={addItem}>+</button>
        <ul className="container"></ul>
    </>)
}

export default Header;