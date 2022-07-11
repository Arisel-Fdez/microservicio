import React, {useState} from "react";
import "../asset/style/Recover_pass.css";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Reset_pass() {
    const [data, setData]= useState({
        password: ''
    })

    const url = 'https://'

    function Enviar(e){
        e.preventDefault();
        axios.put(url,{
            password: data.password
        })
        .then(response => {
            console.log(response.data);
        })
    }
    const navigator = useNavigate()
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = values =>{
        if (values.password1 === values.password) {
            setData(values)
            console.log(values);
            Swal.fire(
                'Password Actualizado!',
                '',
                'success'
            )
            navigator('/')
        }
        else {
            Swal.fire(
                'password Error!',
                'Valida que sean igual',
                'error'
            )
        }

    }

    return(
        <div className="container w-75 mt-5 bg-light rounder shadow">
        <div className="row align-items-stretch">
            <div className="col bg1 d-none d-lg-block col-md-5 col-lg-10 col-xl-6 rounder">
                
            </div>


            <div className="col p-5 rounder-end">
                <div className="text-end">
                    <h2>Fdez</h2>
                </div>
                <h2 className="fw-bold text-center py-5">Restablecer Password</h2>
                <form className="was-validated" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label  className="form-label">Escribe Tu Nueva Constraseña</label>
                        <input type="password" className="form-control" placeholder="Password" required {...register("password1",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                minLength:{
                                    value: 8,
                                    message: "La contraseña debe tener minimo 8 caracteres"
                                }
                            })}></input>
                            {errors.password1 && <span className="text-danger">{errors.password1.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label  className="form-label">Confirma Tu Constraseña</label>
                        <input type="password" className="form-control" placeholder="Password" required {...register("password",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                minLength:{
                                    value: 8,
                                    message: "La contraseña debe tener minimo 8 caracteres",
                                }
                            })}></input>
                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                    </div>
                    <div className="d-grid">
                        <button type="submit" onSubmit={(e)=>Enviar(e)} className="btn btn-primary">Restablecer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Reset_pass;