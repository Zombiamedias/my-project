import React, { memo } from "react";

const Formulary = memo(() => {
  return (
    <section className="flex flex-col left-0 top-  p-8 m-2 w-40% h-2/4 rounded-md  text-blue-500 border-2 border-blue-950 bg-blue-300 z-20 max-h-50dvh">
      <h2 className="text-center font-bold">Llena nuestro formulario</h2>
      <form
        action="#"
        target=""
        method="POST"
        name="contactForm"
      >
        <ul className="flex flex-col space-y-4 p-4  bg-transparent w-full h-full content-around"> 
          <li className="w-auto ">    
            <label htmlFor="" className="w-[72px]  text-bold inline px-2 text-start">Nombre</label>
            <input type="text" className=" bg-blue-300 border-b-2 text-white"/>
          </li>
          <li className="w-auto">
            <label htmlFor="" className="w-[72px]  text-bold inline px-2 text-start">Apellido</label>
            <input type="text" className=" bg-blue-300 border-b-2 text-white" />
          </li>
          <li className="w-auto">
            <label htmlFor="" className="w-[72px]  text-bold inline px-2 text-start">Correo electronico</label>
            <input type="email" className=" bg-blue-300 border-b-2 text-white"/>
          </li>
          <li className="w-auto">
            <label htmlFor="" className="w-[72px]  text-bold inline px-2 text-start">Telefono</label>
            <input type="phone" className=" bg-blue-300 border-b-2 text-white"/>
          </li>
          <li className="w-auto">
            <label htmlFor="" className="w-[72px]  text-bold inline px-2 text-start"></label>
            <input type="select" className=" bg-blue-300 border-b-2 text-white"/>
          </li>
          <button className="bg-blue-500 text-white rounded-md p-2 hover:bg-white hover:text-blue-500 border-2 border-blue-500">
            Enviar
          </button>
        </ul>
      </form>
    </section>
  );
});

export default Formulary;
