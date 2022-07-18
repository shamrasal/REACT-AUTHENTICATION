import React, { useRef, useContext, useState } from 'react';
import AuthContext from '../Store/Auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordRef = useRef('')
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(AuthContext)

  const submitHandler = (event) => {
    event.preventDefault()
    const newPassword = newPasswordRef.current.value
    setIsLoading(true)
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDLwFZKg8KZEIlRPJ_FBc37TP7Vk45D3AE',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: ctx.token,
          password: newPassword,
          returnSecureToken: true
        })
      }).then(res => {
        setIsLoading(false)
        if (res.ok) {
          res.json().then(data => {
            console.log(data)

          })

        } else {
          res.json().then(data => {
            console.log(data)
            let errorMessage = 'authentication failed...'
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message
            }
            alert(errorMessage)
          })
        }
      })
    newPasswordRef.current.value = ''
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        {isLoading && <p>Sending Request...</p>}
        {!isLoading && <button>Change Password</button>}
      </div>
    </form>
  );
}

export default ProfileForm;
