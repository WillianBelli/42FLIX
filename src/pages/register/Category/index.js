import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import Button from '../../../Components/Button';
import FormField from '../../../Components/FormField';
import useForm from '../../../hooks/useForm';



function RegisterCategory() {
  const initialValues = {
    name: '',
    description: '',
    color:'',
  }

  const {handleChange, values, clearForm} = useForm (initialValues)
  
  const [categorias, setCategories] = useState([]);
  



   useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
     ? 'http://localhost:3001/categorias'
     : 'https://the42flix.herokuapp.com/categorias';
     fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategories([
          ...response,
        ]);
      });
   }, []);
     
   
   

    return (
    <PageDefault>
        <h1>Register Category Here: {values.name}</h1>

        <form onSubmit={function handleSubmit(eventInformations) {
          eventInformations.preventDefault();
          setCategories([
            ...categorias,
            values,
          ]);

          clearForm();
        }}>

        
         <FormField 
            label="Category Name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />

          <FormField
            label="Description"
            type="textarea"
            value={values.description}
            name="description"
            onChange={handleChange}
          />

          <FormField
            label="Color"
            type="color"
            value={values.color}
            name="color"
            onChange={handleChange}
          />




          <Button>
            Register
          </Button>
        </form>

        {categorias.lenght === 0 && (
        <div>
          Loading...
        </div>
        )}


        <ul>
          {categorias.map((categoria) => {
            return (
              <li key={`${categoria.titulo}`}>
                {categoria.titulo}
              </li>
            )
          })}
        </ul>

        <Link to="/">
          Go Home!!
        </Link>
      </PageDefault>
    )
  }

  export default RegisterCategory;