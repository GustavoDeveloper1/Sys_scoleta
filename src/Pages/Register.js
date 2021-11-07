import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {FaWineBottle,FaCarBattery,FaRegNewspaper,FaCalculator,FaTrashAlt} from 'react-icons/fa';
import {GiBedLamp} from 'react-icons/gi';

import '../assets/css/register.scss';

function RegisterPoint() {
    return (
        <div className='container-RegisterPoint'>
            <div className='header'>
                <div className='alter-menu'>
                    <span className='logo'>Scoleta</span>
                    {/* <Link to='/'></Link> */}
                    <a href='/'>Voltar para Home</a>
                </div>
            </div>

            <div className='body-container-register'>
                <div className='header-form'>
                    <h1>Pagina de Cadastro</h1>
                </div>
                <Form className='form'>

                    <div className='row'>
                        <FormGroup className='form-group'>
                            <Label for='name'>Nome da Entidade:</Label>
                            <Input type='text' className='input' name='name' id='name' />
                        </FormGroup>

                        <FormGroup className='form-group'>
                            <Label for='imagepoint'>Link da Imagem:</Label>
                            <Input type='url' className='input' id='linkimage' name='linkimage' />
                        </FormGroup>
                    </div>

                    <div className='row'>
                        <FormGroup className='form-group'>
                            <Label for='email'>Email:</Label>
                            <Input type='email' className='input' id='email' name='email' />
                        </FormGroup>

                        <FormGroup className='form-group'>
                            <Label for='wpp'>Whatsapp:</Label>
                            <Input type='number' className='input' id='wpp' name='wpp' />
                        </FormGroup>
                    </div>

                    <div className='title-section'>
                        <p>Endereço</p>
                        <hr/>
                    </div>
                    <div className='row'>
                        <FormGroup className='form-group'>
                            <Label for='Endereco'>Endereco:</Label>
                            <Input type='text' className='input' id='endereco' name='endereco' />
                        </FormGroup>

                        <FormGroup className='form-group'>
                            <Label for='numero'>Numero:</Label>
                            <Input type='number' className='input' id='number' name='number' />
                        </FormGroup>
                    </div>
                    <div className='row'>
                        <FormGroup className='form-group'>
                            <Label for='uf'>UF:</Label>
                            <Input type='text' className='input' id='uf' name='uf' />
                        </FormGroup>

                        <FormGroup className='form-group'>
                            <Label for='city'>City:</Label>
                            <Input type='text' className='input' id='city' name='city' />
                        </FormGroup>
                    </div>

                    <div className='title-section'>
                        <p className='title' >Itens de Coleta</p>
                        <hr/>
                    </div>

                    <div className='wrapper-itens'>
                        <div className='wrapper-item'>
                            <div className='icon-item'>
                                <GiBedLamp/>
                            </div>
                            <span>Lampadas</span>
                        </div>
                        <div className='wrapper-item'>
                            <div className='icon-item'>
                                <FaCarBattery/>
                            </div>
                            <span>Baterias</span>
                        </div>
                        <div className='wrapper-item'>
                            <div className='icon-item'>
                                <FaRegNewspaper/>
                            </div>
                            <span>Papelão/Papeis</span>
                        </div>
                        <div className='wrapper-item'>
                            <div className='icon-item'>
                                <FaCalculator/>
                            </div>
                            <span>Residuos Eletrônicos</span>
                        </div>
                        <div className='wrapper-item'>
                            <div className='icon-item'>
                                <FaTrashAlt/>
                            </div>
                            <span>Residuos Orgânicos</span>
                        </div>
                        <div className='wrapper-item'>
                            <div className='icon-item'>
                                <FaWineBottle/>
                            </div>
                            <span>Óleos de Cozinha</span>
                        </div>

                    </div>
                    
                    <div className='btn-group'>
                        <Button type='button'>Cadastrar Ponto de Coleta</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default RegisterPoint
