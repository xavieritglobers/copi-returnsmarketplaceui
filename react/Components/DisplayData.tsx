import React from 'react'
import { Table } from 'vtex.styleguide'

const DisplayData = (props:any) => {

   const {data} = props


   const tableSchema = {
    properties: {
      orderformid: {
        title: 'Id de la Orden',
        // default is 200px
        width: 100,
      },
      seller: {
        title: 'Seller',
        
      },
      clientname: {
        title: 'Cliente',
        
      },
      clientId: {
        title: 'Cédula Cliente',
        
      },
      status: {
        title: 'Estado Registro',
        
      },
      fcreacion: {
        title: 'Creado el',
        // default is 200px
        width: 100,
      },
      factualizacion: {
        title: 'Modificado el',
        // default is 200px
        width: 100,
      },
      totalprods: {
        title: 'No. Prod.',
        // default is 200px
        width: 100,
      },
      motivo: {
        title: 'Motivo',
        // default is 200px
        minWidth: 100,
      },
      totaldevolucion: {
        title: 'Valor Devolución',
        // default is 200px
        width: 100,
      },
     
    },
  }
  let items: any[] = []
  for(var i= 0;i<data.length;i++)
  {

    let fecha = data[i].devolucion.fechacreado.substring(0,10).split("-")
    let fechaActual = data[i].fechaEstado.substring(0,10).split("-")
     let item = {

        orderformid:data[i].devolucion.iddevolucion,

        seller:data[i].devolucion.seller.name,
        clientname: data[i].devolucion.cliente.nombre,
        clientId: data[i].devolucion.cliente.cedula,
        status: data[i].estado,
        fcreacion:`${fecha[1]}/${fecha[2]}/${fecha[0]}`,
        factualizacion: `${fechaActual[1]}/${fechaActual[2]}/${fechaActual[0]}`,
        totalprods:data[i].devolucion.totalProductos,
        motivo:data[i].devolucion.motivo,
        totaldevolucion:`$${data[i].devolucion.valorTotal}`

      
        
         



     }
     items.push(item)
     
  }

  
     return (


        <div className="fl w-100 pt5">
              <Table
      fullWidth
      schema={tableSchema}
      density="low"
     
      items={items}
         />
        </div>
    )
}



export default DisplayData
