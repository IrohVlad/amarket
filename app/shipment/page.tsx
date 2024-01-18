import React from 'react'
import ServiceHero from '../components/serviceHero/serviceHero'
import ShipmentForm from './shipmentForm/shipmentForm'
import ShipmentCards from './shipmentCards/shipmentCards'
import Trucks from '../components/trucks/trucks'

export default function Shipment() {
  return (
    <>
        <ServiceHero routes={['Главная', 'Оформить отправление']} title='Оформить отправление' img_url='/shipment/paper-box-delivery-man-in-uniform-is-indoors-with-2021-12-27-22-09-39-utc1.png' />
        <ShipmentForm/>
        <ShipmentCards/>
        <Trucks/>
    </>
  )
}
