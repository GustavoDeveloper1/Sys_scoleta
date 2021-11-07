import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Button, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import Menu from '../components/Menu';
import Img1 from '../assets/image/image.png';
import '../assets/css/style.scss';
import { Link } from 'react-router-dom';
export default function Home() {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <Menu/>
            <div className="container-home">
                <div className='container-left'>
                    <div className='header-text'>
                        <h1 className='title'>A melhor solução para o meio ambiente!</h1>
                        <p className='subtitle'>Intermediando pessoas e catadores de lixo a reciclarem melhor!</p>
                    </div>
                    <div className='btn-section'>
                        <div className='btn'>

                            <Button onClick={toggle}>
                                <span><FaSearch /></span>
                                Ponto de Coleta mais Próximo
                            </Button>
                        </div>
                        <Link to='/register'>Cadastrar Ponto de Coleta</Link>
                    </div>
                </div>
                <div className='container-right'>
                    <img src={Img1} alt='wrapper' />
                </div>

                <Modal isOpen={modal} toggle={toggle} className='modal-home'>
                    <ModalHeader toggle={toggle} id="close" className='modal-header'>
                        <h1>Pontos de Coleta</h1>
                    </ModalHeader>
                    <ModalBody className='Modal-body'>
                        <div className='form'>
                            <Label for='State'>Estado:</Label>
                            <div className='form-input'>
                                <Input
                                    type='text'
                                >


                                </Input>
                                <Button className='icon-section'>
                                    <FaSearch />
                                </Button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>


            </div>

        </>

    )
}
