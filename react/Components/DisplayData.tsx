import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux';
import ReportTable from './ReportTable'

const DisplayData = (props:any) => {


    const {data, setReportData} = props

   

 
  let itemsForSet = new Array();
  for(var i= 0;i<data?.devoluciones?.items?.length;i++)
  {

    let fecha = data.devoluciones.items[i].devolucion.fechacreado.substring(0,10).split("-")
    let fechaActual = data.devoluciones.items[i].fechaEstado.substring(0,10).split("-")
     let item = {

        orderformid:data.devoluciones.items[i].devolucion.orderformid,

        seller:data.devoluciones.items[i].devolucion.seller.name,
        clientname: data.devoluciones.items[i].devolucion.cliente.name,
        clientId: data.devoluciones.items[i].devolucion.cliente.cedula,
        status: data.devoluciones.items[i].estado,
        fcreacion:`${fecha[1]}/${fecha[2]}/${fecha[0]}`,
        factualizacion: `${fechaActual[1]}/${fechaActual[2]}/${fechaActual[0]}`,
        totalprods:data.devoluciones.items[i].devolucion.totalProductos,
        motivo:data.devoluciones.items[i].devolucion.motivo,
        totaldevolucion:`${Intl.NumberFormat('en-US', { style: 'currency', currency:'usd' }).format(data.devoluciones.items[i].devolucion.valorTotal)}`
     }
     itemsForSet.push(item)
     
  }

  /*SORT ITEMS BY ID ASC*/ 
  itemsForSet.slice().sort((a:any,b:any)=>{ return a.orderformid < b.orderformid ? -1 : a.orderformid > b.orderformid ? 1 : 0})
  
  //let [items,setItems] = useState( itemsForSet)
  

   
    setReportData(itemsForSet)
    

  
  
     return (


        <div className="fl w-100 pt5">
                    <ReportTable></ReportTable>
            </div>
    )
}


const mapDispatchToProps = (dispatch:any) =>
{
    return (
    {

        setReportData: (items:any) => 
        {
            dispatch({ type:'SET_REPORT_DATA', payload:{items} })
        }
            

    }
 )

}


  


export default connect(null, mapDispatchToProps)(DisplayData)
