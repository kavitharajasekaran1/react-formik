import React from 'react';
import {useFormik, FormikProvider, Field} from 'formik';
import * as Yup from 'yup'

const validate =  values =>{
    //values.name values.channel value.email
    //errors.name erros.email errors.channel

    let errors ={}

    if(!values.name) {

        errors.name = 'Required'
    }
    if(!values.email) {
        errors.email = "required"
    }
    else if((/[^\s]*@[a-z0-9.-]*/i).test(values.email) ){
        errors.email = 'Invalid email'
    }
    
    if(!values.channel) {
        errors.channel = 'required'
    }
    return errors
}
const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
    channel: Yup.string().required('Required')

})
const initialValues =  {
    name: '',
    email: '',
    channel:''
}
const onSubmit = values =>{

} 

function SimpleFormikForm() {

    
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema 
    })

    console.log('visited', formik.touched)
  return (

    <div>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <input 
            type='text'
             id='name'
              name='name'
           
           {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name  ? <div className='error'>{formik.errors.name}</div> : null}

            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email'
              name='email'
            
             {...formik.getFieldProps('email')}
              />
            {formik.touched.email && formik.errors.email  ? <div className='error'>{formik.errors.email}</div> : null}


            <label htmlFor='channel'>Channel</label>
            <input type='text'
            id='channel' name='channel'
            
            {...formik.getFieldProps('channel')}
              />
            {formik.touched.channel && formik.errors.channel  ? <div className='error'>{formik.errors.channel}</div> : null}



            <button > submit</button>
            </div>
        </form>
        </div>
  
  );
}

export default SimpleFormikForm;
