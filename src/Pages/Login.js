import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import '../assets/css/login.scss';

export default function Login() {
    return (
        <div className='container-login'>
            <div className='header'>
                <div className='alter-menu'>
                    <span className='logo'>Scoleta</span>
{/*               
                    <Link to='/'>Voltar para Home</Link> */}
                </div>

            </div>
            <div className='body-login'>
                <Form>

                    <div className='header-login'>
                        <h1>Bem Vindo!</h1>
                    </div>
                    <FormGroup className='form-group' >
                        <Label for='login'>Login:</Label>
                        <Input type='text' name='login' id='login' />
                    </FormGroup>
                    <FormGroup className='form-group'>
                        <Label for='pwd'>Senha:</Label>
                        <Input type='password' name='pwd' id='pwd' />
                    </FormGroup>
                    <span>Esqueci minha Senha</span>

                    <div className='btn-section'>
                        <Button type='button'>Entrar</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
