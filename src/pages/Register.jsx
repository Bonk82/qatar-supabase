import { useEffect, useRef, useState } from 'react'
import { InputText } from 'primereact/inputtext';
import {supabase} from '../supabase/client'             
import { Message } from 'primereact/message';
// import { Messages } from 'primereact/messages';
import { Button } from 'primereact/button';//icons

export const Register = () => {
  const [alerta, setAlerta] = useState({visible:false,mensaje:'modelo de prueba',tipo:'success'});
//   const msgs1 = useRef(null);
//   useEffect(() => {
//     msgs1.current?.show([
//         { severity: alerta.tipo, detail: alerta.mensaje, sticky: true }
//     ]);
// }, [alerta]); 
  const [dataForm, setDataForm] = useState({nombre:'',email:'',password:''})

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (!dataForm.email && !dataForm.password && !dataForm.nombre) {
      console.log('debe llenar todos los campos');
      return true;
    }
    const { data, error } = await supabase.auth.signUp({
      email: dataForm.email,
      password: dataForm.password,
      options: {
        data: {
          nombre: dataForm.nombre,
          rol: 'usuario',
        }
      }
    })
    let personalErrors = ''
    if(error?.message.includes('least 6')) personalErrors = 'La contraseña debe tener 6 caracteres como mínimo';
    if(error) setAlerta({visible:true,mensaje:personalErrors || error.message,tipo:'error'});
    if(!error) setAlerta({visible:true,mensaje:'Cuenta creada satisfactoriamente',tipo:'success'});
    console.log(data,error)
  }

  const setearValor = ({value,id})=>{
    setDataForm({...dataForm,[id]:value})
  }


  return (
    <div className="form-login">
      <div className="flex justify-content-center cris">
        <div className='card'>
          <h1 className="text-center">Registro</h1>
          {/* {alert.visible && <Messages ref={msgs1} />} */}
          {alerta.visible && <Message severity={alerta.tipo} text={alerta.mensaje} style={{width:'100%'}} />}
          {/* <Message severity={alerta.tipo} text={alerta.mensaje} style={{width:'100%'}} /> */}
          <form onSubmit={handleSubmit} className="p-fluid">
            <span className="p-float-label mt-4">
              <InputText id="nombre" placeholder='nombre de referencia' type='text' onChange={(e) => setearValor(e.target)} />
              <label htmlFor="nombre">Nombre</label>
            </span>
            <span className="p-float-label mt-4">
              <InputText id="email" placeholder='tucorreo@email.com' type="email" onChange={(e) => setearValor(e.target)} />
              <label htmlFor="email">Correo</label>
            </span>
            <span className="p-float-label mt-4">
              <InputText id="password" type='password' onChange={(e) => setearValor(e.target)} />
              <label htmlFor="password">Constraseña</label>
            </span>
            <Button type="submit" label="Ingresar" className="mt-4" />
          </form>
        </div>
      </div>
    </div>
  )
}
