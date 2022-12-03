import { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import {supabase} from '../supabase/client'
// import "primereact/resources/themes/vela-orange/theme.css";  //theme
// import "primereact/resources/primereact.min.css";                  //core css
// import "primeicons/primeicons.css";              

import { Button } from 'primereact/button';//icons

export const Login = () => {

  const [alerta, setAlerta] = useState({visible:false,mensaje:'',tipo:'',lugar:''});
  const [dataForm, setDataForm] = useState({email:'',password:''})

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (!dataForm.email && !dataForm.password) {
      console.log('debe llenar todos los campos');
      return true;
    }
    const { data, error } = await supabase.auth.signUp({
      email: dataForm.email,
      password: dataForm.password,
    })
    if(error) console.log('error'+ error.message)
    if(!error) console.log(data)
  }

  const setearValor = ({value,id})=>{
    setDataForm({...dataForm,[id]:value})
  }

  


  return (
    <div className="form-login">
      <div className="flex justify-content-center cris">
        <div className='card'>
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleSubmit} className="p-fluid">
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
