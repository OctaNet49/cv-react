import logo from './logo.svg';
import './App.css';
import Skill from './Skill';
import About from './About';
import Educat from './Education';
import Sidebar from './navbar';

function App() {
  return (
    <div className="App">

<div className='container-fluid'>

<div className='row '>
<div className='col-lg-5 bg-success'>

<Sidebar/>
</div>
<div className='col-lg-7 bg-light'>
<div className="container shadow ">
<About/>
<Educat/>
<Skill />

</div>
</div>
</div>
</div>


    </div>
    
  );
}


export default App;
