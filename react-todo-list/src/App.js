
import './App.css';
import Header from './header/header.jsx';
import Notice from './notice/notice.jsx';

function App() {

  const addItem = () => {
    
    const ul = document.createElement('ul');
    ul.setAttribute('className', "container");
    const li = document.createElement('li');
    li.setAttribute('className', "top--list");
    ul.appendChild(li);


    console.log('props!');
  }

  return <>
    <Header addItem={addItem}/>
    <Notice/>
  </>
}



export default App;
