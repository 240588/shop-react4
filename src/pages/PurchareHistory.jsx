import { useEffect, useState } from "react"

const PurchareHistory = () =>{
    const [orders, setOrders] = useState([])
    const [louding, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrders = async () => {
          try {
            const response = await fetch('http://localhost:3001/orders')
            if (!response.ok) {
              throw new Error('Ошибка при загрузке истории заказов')
            }
            const data = await response.json()
            setOrders(data)
          } catch (error) {
            console.error(error)
            alert('Ошибка при загрузке истории заказов')
          } finally {
            setLoading(false)
          }
        }
        fetchOrders()
      }, [])

    if (louding){
        return(
        <div className="container mx-auto p-4 text-gray-800 dark: text-gray-200">
        Загрузка истории заказов...
        </div>
        )
    }

    return(
        <div className="container mx-auto p-4 bg-white dark: bg-gray-800 transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 dark: text-gray-200">
                История заказов
            </h1>
            {orders.length===0 ? (
                <p>История пуста</p>
            ) : (
                orders.map(order =>(
                    <div key={order.id} className="mb-6 p-4 bg-white shadow rounded bg-white dark: bg-gray-900 
                    transition-colors duration-300">
                        <div className="flex justify-between items-center mb-2 ">
                            <h2 className="text-xl font-bold text-gray-800 dark: text-gray-200">
                                Заказ № {order.id}
                            </h2>
                            <span className="text-gray-600">
                                {new Date(order.date).toLocaleString()}
                            </span>
                        </div>
                        <p className="mb-1 text-gray-800 dark: text-gray-200"><strong>Имя:</strong>{order.name}</p>
                        <p className="mb-1 text-gray-800 dark: text-gray-200"><strong>Email:</strong>{order.Email}</p>
                        <p className="mb-1 text-gray-800 dark: text-gray-200"><strong>Адрес:</strong>{order.adress}</p>
                        <p className="mb-1 font-semibold text-gray-800 dark: text-gray-200">
                            Общая стоимость:{order.total.toFixed(2)} ₽
                        </p>
                        <h3 className="font-bold mt-4 mb-2 text-gray-800 dark: text-gray-200">
                            Товары:
                        </h3>
                        <ul className="list-disc pl-6">
                            {order.items.map(item =>(
                                <li key={item.id}>
                                    {item.title} - {item.quantity} шт. по {item.price} ₽
                                </li>
                            ))}
                        </ul>

                    </div>
                )))
             }
        </div>
    )
}
export default PurchareHistory