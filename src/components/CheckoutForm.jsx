import { useState } from 'react'

const CheckoutForm = ({ finalPrice, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    adress: '',
    paymentMethod: 'card'
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className='max-w-2xl mx-auto bg-white dark: bg-gray-800 show rounded'>
      <h2 className='text-2xl font-bold mb-4 dark: text-gray-200'>
        Оформление заказа!
      </h2>
      <p className='mb-4 dark: text-gray-300'>
        Итоговая стоимость со скидкой: {finalPrice.toFixed(2)} ₽
      </p>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor="name" className='block mb-1 font-semibold dark: text-gray-300'>
            Имя
          </label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} 
          required className='w-full border px-4 py-2 rounded dark: bg-gray-700 dark: text-gray-200' />
        </div>

        <div>
          <label htmlFor="email" className='block mb-1 font-semibold dark: text-gray-300'>
            E-mail
          </label>
          <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} 
          required className='w-full border px-4 py-2 rounded dark: bg-gray-700 dark: text-gray-200' />
        </div>

        <div>
          <label htmlFor="adress" className='block mb-1 font-semibold dark:text-gray-300'>
            Адрес
          </label>
          <input type="text" name="adress" id="adress" value={formData.adress} onChange={handleChange} 
          required className='w-full border px-4 py-2 rounded dark: bg-gray-700 dark: text-gray-200' />
        </div>

        <div>
          <label htmlFor="paymentMethod" className='dark:text-gray-300'>
            Способы оплаты:
          </label>
          <select name="paymentMethod" id="paymentMethod" value={formData.paymentMethod} 
          onChange={handleChange} className='w-full border px-4 py-2 rounded dark: text-gray-200'>
            <option value="card">Карта</option>
            <option value="sbp">СБП</option>
            <option value="cash">Наличные при получении</option>
          </select>
        </div>
        <button type='submit' className='w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors'>
          Подтвердить заказ
        </button>
      </form>
    </div>
  )
}
export default CheckoutForm