import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
            <div className='col mb-3'>
            <center><a className=''>
                      <img src='img/logo1.png' className='bi me-2' width={180} height={220}>
                      </img>
                  </a>
                </center>
</div>
                      <div className='col mb-3'>

                      </div>
                    <div className='col mb-4'>
                        <h5>Наши партнёры</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-white'>Цветочный мир</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-white'>Sun Flower</a>
                          </li>
                        </ul>
                    </div>

                    <div className='col mb-4'>
                        <h5>Наши контакты</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-white'>8-999-111-22-33</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-white'>г. Москва, ул. Пушкина, дом Кукушкина, 1</a>
                          </li>
                        </ul>
                    </div>
          
        </footer>
    </div>
  )
}

export default Footer