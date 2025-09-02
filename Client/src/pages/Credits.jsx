import React, { useEffect, useState } from 'react'
import { dummyPlans } from '../assets/assets'
import Loading from './Loding'

const Credits = () => {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchPlans = async () => {
    // Here, instead of calling an API, we directly use the dummyPlans
    setPlans(dummyPlans)
    setLoading(false)
  }

  useEffect(() => {
    fetchPlans()
  }, [])

  if (loading) return <Loading />

  return (
    <div className="min-h-screen  flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-orange-950 ">Choose Your Plan</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="bg-white shadow-lg rounded-2xl p-6 border hover:scale-105 transition-transform"
          >
            <h2 className="text-xl text-orange-700 font-semibold">{plan.name}</h2>
            <p className="text-orange-700  mt-2">${plan.price} / month</p>
            <p className="text-orange-700 text-sm  mt-1">
              {plan.credits} credits included
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>

            <button className="mt-5 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Credits
