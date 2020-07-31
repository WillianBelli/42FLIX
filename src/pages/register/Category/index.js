import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
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
            label="Category Color"
            type="color"
            value={values.color}
            name="color"
            onChange={handleChange}
          />




          {/*<div>
            
          <label>
            Description:
            <textarea
             type="text"
             value={values.description}
             name="description"
             onChange={handleChange}
             
            />
          </label>
          </div>

          <div>
          <label>
            Category Color:
            <input
             type="Color"
             value={values.color}
             name="color"
             onChange={handleChange}
            />
          </label>
          </div>*/}
 

          <button>
            Register
          </button>
        </form>


        <ul>
          {categories.map((category, index) => {
            return (
              <li key={`${category}${index}`}>
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