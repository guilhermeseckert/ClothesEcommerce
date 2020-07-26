import React from 'react'
import SingIn from '../../components/sign-in/sign-in.component'
import SingUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sing-up.styles.scss';

const SingInandSignUpPage= () => (
  <div className='sign-in-and-sing-up'>
    <SingIn/>
    <SingUp/>
  </div>
)

export default SingInandSignUpPage;
