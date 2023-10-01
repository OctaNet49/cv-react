import React from "react";
function Sidebar() {
    return (
      <div className="Sidebar">
  
  <div className='container-fluid'>
  
  <div className='row '>
  <div className='col-lg-12 bg-success'>
  
  <img src='./profile-pic.png' className='img-fluidn w-25 '></img>
  
  <ul className="list-group my-5 text-center">
  <li className="list-group bg-secondary my-1"><a className="nav-link  text-white " aria-current="page" href="#">Home</a></li>
  <li className="list-group bg-secondary my-1"><a className="nav-link  text-white " aria-current="page" href="#">Education</a></li>
  <li className="list-group bg-secondary my-1 "><a className="nav-link text-white " aria-current="page" href="#">Skills</a></li>
</ul>
<div className="container my-5 text-white">
    <h1 class="my-5 text-center bg-secondary">References</h1>
    <h5 className='bg-warning shadow p-3'>  <i className="fa-solid fa-location-dot "></i>  Quaid-e-awam University of Engineering science and technology Nawabshah</h5>
    <h5 className='bg-warning shadow p-3'> <i className="fa-solid fa-phone p-2"></i>03196459910</h5>
    <h5 className='bg-warning shadow p-3'> <i className="fa-solid fa-envelope"></i> abdulgajani79@gmail.com</h5>
    
    <i className="fa-brands fa-linkedin p-2"></i>  <a href=" https://www.linkedin.com/in/abdul-kareem-a90a94292/" class="text-decoration-none text-white">Linkedin</a>
    <i className=" fa-brands fa-github p-2"></i><a href="https://github.com/dashboard" className="text-decoration-none text-white">Github</a>
    <h1 className='my-5'>Front-end Projects</h1>
        <ul>
          <li>Amazon Clone</li>
          <li>E-commerce Websites</li>
          <li>School and universities Websites</li>
          <li>Guess the Number game using with the help of java script</li>
          <li>Grading System using java script</li>
          <li>A website with the great Animation effects and loading features.</li>
          <l1>Netflex clone</l1>
          <l1>Amazon clone</l1>
        </ul>
        <h1 className='my-3'>Back-end Project</h1>
        <ul>
        <h3>  Online book store </h3>
        </ul>
 </div>
</div>
 
</div>
</div>
</div>

  
  
   
    );
  }
  
  
  export default Sidebar;
  