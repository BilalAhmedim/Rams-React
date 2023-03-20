import React from 'react';
import './../UI/Form.css'

const Form = () => {
  return (
    <div className='contact-form'>
      <form>
        <h1>We’d love to hear from you</h1>
        <label for="name">
          Full Name<sup>*</sup>
          <input type='text' name='name' />
        </label>

        <label for='email'>
          Email<sup>*</sup>
          <input type='email' name='email' />
        </label>

        <label for='phone number'>
          Phone Number<sup>*</sup>
          <input type='tel' name='phone number' />
        </label>

        <label for='massage'>
          Massage<sup>*</sup>
          <textarea rows='4' cols='32' name='massage' />
        </label>

        <input type='submit' />
      </form>
    </div>
  )
}
export default Form;