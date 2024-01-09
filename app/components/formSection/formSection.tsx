import React from 'react'
import Form from '../form/form'

export default function FormSection() {
  return (
    <section className='w-full'>
        <div className='w-full h-screen max-w-c-full m-auto flex flex-col items-center justify-center'>
            <Form/>
        </div>
    </section>
  )
}
