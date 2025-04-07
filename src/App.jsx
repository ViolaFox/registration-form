import React, { useState } from 'react'
import arrow from './assets/arrow.png'

function App() {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    passwordRepeat: '',
    confirmation: false
  })

  const [isError, setError] = useState('')

  function handleInputChange(e) {
    const { name, type, checked, value } = e.target

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    })

    setError('')
  }

  function handleBtnClick() {
    if (!form.name || !form.surname || !form.phone || !form.email || !form.password || !form.passwordRepeat) {
      setError('Пожалуйста, заполните все поля')
      return
    }

    if(form.passwordRepeat !== form.password) {
      setError('Пароли не совпадают')
      return
    }

    if(!form.confirmation) {
      setError('Подтвердите пароль')
      return
    }

    setError('')

    alert(`
      Имя: ${form.name}
      Фамилия: ${form.surname}
      Телефон: ${form.phone}
      Email: ${form.email}
      Пароль: ${form.password}
    `);
  }

  return (
    <div className='container'>
      <h1 className='title'>Создание аккаунта</h1>
      <p className='info'>Введите свои данные, чтобы создать аккаунт в сервисе</p>
      <form className='form'>
        <input className='input'
          type="text"
          name='name'
          value={form.name}
          onChange={handleInputChange}
          placeholder='Имя'/>
        <input className='input'
          type="text"
          name='surname'
          value={form.surname}
          onChange={handleInputChange}
          placeholder='Фамилия'/>
        <input className='input'
          type="tel"
          name='phone'
          value={form.phone}
          autoComplete="tel"
          onChange={handleInputChange}
          placeholder='Номер телефона'/>
        <input className='input'
          type="text"
          name='email'
          value={form.email}
          onChange={handleInputChange}
          placeholder='Email'/>
        <input className='input'
          type="text"
          name='password'
          value={form.password}
          onChange={handleInputChange}
          placeholder='Пароль'/>
        <input className='input'
          type="text"
          name='passwordRepeat'
          value={form.passwordRepeat}
          onChange={handleInputChange}
          placeholder='Повторите пароль'/>
      </form>

      <label className='text'>
        <input className='checkbox' name='confirmation' checked={form.confirmation === true} type="checkbox" onChange={handleInputChange}/>
        Подтверждаю пароль
      </label>

      

      <div className='button-and-error'>
        <button className='button' onClick={handleBtnClick}>Продолжить</button>
        {isError && <p className='error'>{isError}</p>}
      </div>

      <div className="link-wrapper">
        <p className='text'>Уже есть аккаунт ? <a className='link' target="_blank" href="https://youtu.be/dQw4w9WgXcQ?si=lNVNHsa0xBkHeOLS'">Войти <img src={arrow} alt="" /></a></p>
      </div>
      
    </div>
  )
}

export default App
