import React from 'react'
import '../../Assets/Styles/Layout/Header.css'
import logo from '../../Assets/Images/Logo/1.png'

function Index() {
// const navigate = useNavigate();


  return (

    <div className=''>
      <nav class="navbar navbar-light ">
        <div class="container container-fluid">
          <a href='/#'>
            <img src={logo} alt='' />
          </a>
          
          <form class="d-flex">
            <div className='d-flex search mx-4'>

              <i class="fa-solid mt-1 me-2 fa-magnifying-glass"></i>
              <a href='/job' className='fw-600'>İş Axtarın</a>
            </div>

            <div>
              <a href='/login'>Daxil Olun</a>
            </div>
          </form>
        </div>
      </nav>

    </div> 
     
  );
}

export default Index


