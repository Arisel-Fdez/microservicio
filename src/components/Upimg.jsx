import React, {useState, useEffect} from "react";
import axios from 'axios';
import Swal from "sweetalert2";


import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';


function Upimg(){

    const [data, setData] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3000/api/img/getimg')
        .then(res =>{
            console.log(res.data)
            setData(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])


    const postDelete = (id,e) =>{
        e.preventDefault();
        axios.delete(`http://localhost:3000/api/img/eliminar?id=${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        Swal.fire({
            title: 'Eliminando...',
            text: 'Usuario de Id: ' + id + ' Eliminado',
            icon: 'warning',
            confirmButtonText: 'Ok'
        })
    }

    const arr = data.map((data, index)=>{
        return(
            <tr className="fila_impar">
                <td>{data.id}</td>
                <td>{data.nombre}</td>
                <td>{data.precio}</td>
                <td>{data.cantidad}</td>
                <td>{data.stock}</td>
                <td>{data.inf}</td>
                <td>{data.name}</td>
            </tr>

        );
    })


    return (
        <React.Fragment>

            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>precio</th>
                    <th>cantidad</th>
                    <th>stock</th>
                    <th>inf</th>
                    <th>img</th>

                </tr>
                {arr}
            </table>
             <div className="mb-3">

                <a href="#" className="btn btn-outline-primary">Back</a>
                <a href="#" className="btn btn-outline-primary">To Update</a>

            </div > 

        </React.Fragment>
    );
}

export default Upimg;