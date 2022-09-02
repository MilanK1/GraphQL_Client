import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
//Mutations
const CreateClient = () => {
 

  const CREATE_CLIENT = gql`
    mutation createClient($name: String, $phone: String, $email: String){
      createClient(name: $name, email: $email, phone: $phone){
        _id,
        name,
        email,
        phone
       }

    }
    `
    
  const [addClient, { data, loading, error }] = useMutation(CREATE_CLIENT)

  const onSubmit = (values) => {

    let nameV = values.target.name.value;
    let emailV = values.target.email.value;
    let phoneV = values.target.phone.value;
  
    addClient({ variables: { name: nameV, email: emailV, phone: phoneV } })


    values.preventDefault()
    function reset() {
      values.target.name.value = ''
      values.target.email.value = ''
      values.target.phone.value = ''
      // setFormValues({...formValues, name: '', email: '', phone: ''})
    }
    reset()
  }


  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  return (
    <div>
      <form type='submit' onSubmit={onSubmit} className='form'>
        <input  id="name" placeholder='Please input name.' />
        <br />
        <input id="email" placeholder='Please input email.' />
        <br />
        <input id="phone" placeholder='Please input phone number.' />
        <br />
        <button type='submit'>Create Client</button>
      </form>
    </div>
  )
}
export default CreateClient