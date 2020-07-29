import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';

function RegisterVideo(){
    return (
      <PageDefault>
        <h1>Register Video Here!!</h1>

        <Link to="/register/category">
          Register Category Here!!
        </Link>
      </PageDefault>
    )
  }

  export default RegisterVideo;