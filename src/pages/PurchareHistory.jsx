import { useEffect, useState } from "react"

const PurchareHistory = () =>{
    const [orders, setOrders] = useState([])
    const [louding, setLoading] = useState(true)

    useEffect(() =>{
        const fetchOrders = async () => {
            try{
                const response = await fetch('http://localhost:3001/orders')
                if(!response.ok) {
                    trow new Error('Ошибка призагрузке истории заказов')
                     } finally{
                    setLoading(false)
                }
            }
            
        }
        fetchOrders()
    }, {})
}