import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';

function RegisterCategory(){
    return (
      <PageDefault>
        <h1>Register Category Here!!</h1>

        <Link to="/">
          Go Home!!
        </Link>
      </PageDefault>
    )
  }

  export default RegisterCategory;