import React from 'react';
import '../assets/css/Product.scss';
import Img1 from '../assets/image/1.jpeg';

export default function Product() {
    return (
        <div className='container-point'>
            <div className='header'>
                <div className='alter-menu'>
                    <span className='logo'>Scoleta</span>
                    {/* <Link to='/'></Link> */}
                    <a href='/'>Voltar para Home</a>
                </div>
                <span className='result'>
                    <p>3 Locais encontrados</p>
                </span>
            </div>
            <div className='body-point'>
                <div className='point-item'>
                    <div className='img-point'>
                        <img src={Img1} alt='point-phot' />
                    </div>
                    <div className='body-point-item'>
                        <p className='point-title'>Aterro Estrutual</p>
                        <p className='point-location'>Estrutual Df</p>
                        <p className='point-desc'>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                    </div>
                </div>

                <div className='point-item'>
                    <div className='img-point'>
                        <img src={Img1} alt='point-phot' />
                    </div>
                    <div className='body-point-item'>
                        <p className='point-title'>Aterro Estrutual</p>
                        <p className='point-location'>Estrutual Df</p>
                        <p className='point-desc'>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                    </div>
                </div>

                <div className='point-item'>
                    <div className='img-point'>
                        <img src={Img1} alt='point-phot' />
                    </div>
                    <div className='body-point-item'>
                        <p className='point-title'>Aterro Estrutual</p>
                        <p className='point-location'>Estrutual Df</p>
                        <p className='point-desc'>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
