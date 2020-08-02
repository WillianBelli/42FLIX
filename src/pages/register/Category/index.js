import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import Button from '../../../Components/Button';
import FormField from '../../../Components/FormField';


function RegisterCategory() {
  const initialValues = {
    name: '',
    description: '',
    color:'',
  }
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);
  

  function setValue(key, value) {
    setValues({
      ...values,
      [key]:value,
    })
  }

  function handleChange(eventInformations){ 
    //const {getAttribute, value} = eventInformations.target;              
    setValue(
      eventInformations.target.getAttribute('name'),
      eventInformations.target.value
      );        
   }


   useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
     ? 'http://localhost:3001/categories'
     : 'https://the42flix.herokuapp.com/categories';
     fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategories([
          ...response,
        ]);
      });
     
   
   });

    return (
    <PageDefault>
        <h1>Register Category Here!! {values.name}</h1>

        <form onSubmit={function handleSubmit(eventInformations) {
          eventInformations.preventDefault();
          setCategories([
            ...categories,
            values
          ]);

          setValues(initialValues);
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

        {categories.lenght === 0 && (
        <div>
          Loading...
        </div>
        )}


        <ul>
          {categories.map((category) => {
            return (
              <li key={`${category.name}`}>
                {category.name}
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