import React from 'react';

const Skill = () => {
  return (
    <section className='my-28  px-5'>
      <header className='text-2xl font-bold pt-10'>
        <h2>Skills & Tools</h2>
      </header>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
       <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/javascript-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Javascript
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='React JS'>
          <img src='./images/icons/react-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          React JS
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Springboot'>
          <img src='./images/icons/spring-boot-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Springboot
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Rest API'>
          <img src='./images/icons/restapi-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Rest API
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Redux'>
          <img src='./images/icons/redux-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Redux
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Python'>
          <img src='./images/icons/python-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Python
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/nodejs-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Node JS
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='MongoDB'>
          <img src='./images/icons/mongodb-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          MongoDB
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='postgre'>
          <img src='./images/icons/postgre-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          PostgreSQL
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='HTML 5'>
          <img src='./images/icons/html5-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          HTML 5
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/css3-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          CSS 3
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='SQL'>
          <img src='./images/icons/mysql-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          SQL
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Typescript'>
          <img src='./images/icons/typescript-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Typescript
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='NextJS'>
          <img src='./images/icons/nextjs-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          NextJS
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Docker'>
          <img src='./images/icons/docker-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Docker
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Kubernetes'>
          <img src='./images/icons/k8s-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Kubernetes
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='openshift'>
          <img src='./images/icons/openshift-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Openshift
        </div>
      </div>
    </section>
  );
};

export default Skill;
