import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Table } from 'vtex.styleguide'
import {  ModalDialog, Spinner, Button  } from 'vtex.styleguide'
import { useFullSession    } from 'vtex.session-client'

import axios from 'axios';
import "../../react/styles.global.css"
import DisplayDetails from './DisplayDetails'


const ReportTable = (props:any) => {

 
  const {  data } = useFullSession ()

  console.log("SESSIONDATA", data);

  const email = data?.session.namespaces.authentication.adminUserEmail.value
 

   const  {reportFilter, spinner,  setSpinner, setReportFilter} = props

  
   const {items} = props?.reportData


   
   const {devoluciones,paginacion} = items


  
   
   if((devoluciones?.length!==0 && spinner===true) || (paginacion?.pageSize!==0 && paginacion?.total===0))
   {
     setSpinner(false)
   }

   const [isModalOpen, setModalOpen]=useState(false)
   const [isConfirmationOpen, setConfirmationOpen]=useState(false)
   const [isDetailsOpen, setDetailsOpen]=useState(false)
   const [selectedDevolution, setSelectedDevolution]=useState({})

   useEffect(() => {
    setTableOrder({
        items: devoluciones,
        dataSort: {
            sortedBy: "orderformid",
            sortOrder: "ASC",
        },
      })
      return () => {
      }
  }, [items])
  
   const tableSchema = {
    properties: {
      orderformid: {
        title: 'Orden #',
        // default is 200px
        width: 100,
        sortable: true,
        headerRight:false,
        cellRenderer: (data:any) => (
          <div className="numeric-cell data-cell">{data.cellData}</div>
        ),
      },
      fcreacion: {
        title: 'Creado',
        // default is 200px
        width: 100,
        sortable: true,
        headerRight:false,
        cellRenderer: (data:any) => (
          <div className=" data-cell">{data.cellData}</div>
        ),
      },
      seller: {
        title: 'Seller',
        sortable: true,
        width: 100,
        headerRight:false,
        cellRenderer: (data:any) => (
          <div className=" data-cell">{data.cellData}</div>
        ),
        
      },
      clientId: {
        title: 'Cédula Cliente',
        sortable: true,
        width: 120,
        headerRight:false,
        cellRenderer: (data:any) => (
          <div className="numeric-cell data-cell">{data.cellData}</div>
        ),
        
      },
      clientname: {
        title: 'Nombre del Cliente',
        sortable: true,
        width: 150,
        headerRight:false,
        cellRenderer: (data:any) => (
          <div className=" data-cell">{data.cellData}</div>
        ),
        
      },
     
      status: {
        title: 'Estado Registro',
        sortable: true,
        width: 120,
        headerRight:false,
        cellRenderer: (data:any) => (
          <div className=" data-cell">{data.cellData}</div>
        ),
        
      },
    
      motivo: {
        title: 'Motivo',
        // default is 200px
        minWidth: 100,
        sortable: true,
        headerRight:false,
        cellRenderer: (data:any) => (
          <div className=" data-cell">{data.cellData}</div>
        ),
      },
      totalprods: {
        title: 'Num. Prods.',
        // default is 200px
        width: 50,
        sortable: true,
        headerRight:false,
        cellRenderer: (data:any) => (
          <div className="numeric-cell data-cell">{data.cellData}</div>
        ),
      },
      totaldevolucion: {
        title: 'Valor Devolución',
        // default is 200px
        width: 150,
        sortable: true,
        headerRight:false,
        cellRenderer: (data:any) => (
          <div className="numeric-cell data-cell">{data.cellData}</div>
        ),
      },
      detalles: {
        title: ' ',
        // default is 200px
        width: 150,
        sortable: false,
        headerRight:false,
        cellRenderer:  (data:any) => {
          return (
            <Button variation="primary" size="small" 
              
              onClick={(e:any) => {
                setSelectedDevolution(data.rowData)
                setDetailsOpen(true)
                
                }}>
            Ver Detalles
            </Button>
          )
      },
     
    },
  },
  }

  const [tableOrder, setTableOrder] = useState({
    items: items,

    dataSort: {
      sortedBy: "orderformid",
      sortOrder: "ASC",
    },
  }) 

 

  const exportToCVS = useCallback(
    () => {

      const iniD = `${reportFilter.initialDate.getMonth()+1}/${reportFilter.initialDate.getDate()}/${reportFilter.initialDate.getFullYear()}`
      const finD = `${reportFilter.finalDate.getMonth()+1}/${reportFilter.finalDate.getDate()}/${reportFilter.finalDate.getFullYear()}`
      
      /*Armamos un objeto con el filtro y los items, en caso de que tengamos la data completa. 
      En caso contrario, solo se enviará el filtro*/ 
      const dataToSend = {
        reportFilter:reportFilter, 
        items:devoluciones, 
        paginacion:paginacion
      
      }
      // Obtener la ruta del servidor

      
     
      const url = `https://testglobers24--itglobers.myvtex.com/report/`
     

      axios.post(url, dataToSend).
       then((res:any) => console.log(res)
     ).catch((error:any)=>console.log(error))

    },
    [reportFilter,devoluciones],
  )


  const handleSort = useCallback(

    ({ sortOrder, sortedBy }) => {

     
      let orderedItems = new Array()
      if (sortedBy === 'orderformid')
      {
       
        

        orderedItems = sortOrder === 'ASC'
        ? devoluciones.slice().sort((a:any,b:any)=>{ return a.orderformid < b.orderformid ? -1 : a.orderformid > b.orderformid ? 1 : 0})
        : devoluciones.slice().sort((a:any,b:any)=>{ return  a.orderformid < b.orderformid ? 1 : a.orderformid > b.orderformid ? -1 : 0 })
      }
      else if (sortedBy === 'seller')
      {
       
      
        orderedItems = sortOrder === 'ASC'
        ? devoluciones.slice().sort((a:any,b:any)=>{ return a.seller < b.seller ? -1 : a.seller > b.seller ? 1 : 0})
        : devoluciones.slice().sort((a:any,b:any)=>{ return  a.seller < b.seller ? 1 : a.seller > b.seller ? -1 : 0 })
      }
      else if (sortedBy === 'clientname')
      {
     
        orderedItems = sortOrder === 'ASC'
        ? devoluciones.slice().sort((a:any,b:any)=>{ return a.clientname < b.clientname ? -1 : a.clientname > b.clientname ? 1 : 0})
        : devoluciones.slice().sort((a:any,b:any)=>{ return  a.clientname < b.clientname ? 1 : a.clientname > b.clientname ? -1 : 0 })
      }
      else if (sortedBy === 'clientId')
      {
       
  
        orderedItems = sortOrder === 'ASC'
        ? devoluciones.slice().sort((a:any,b:any)=>{ return a.clientId < b.clientId ? -1 : a.clientId > b.clientId ? 1 : 0})
        : devoluciones.slice().sort((a:any,b:any)=>{ return  a.clientId < b.clientId ? 1 : a.clientId > b.clientId ? -1 : 0 })
      }
      else if (sortedBy === 'status')
      {
       
  
        orderedItems = sortOrder === 'ASC'
        ? devoluciones.slice().sort((a:any,b:any)=>{ return a.status < b.status ? -1 : a.status > b.status ? 1 : 0})
        : devoluciones.slice().sort((a:any,b:any)=>{ return  a.status < b.status ? 1 : a.status > b.status ? -1 : 0 })
      }
   
      else if (sortedBy === 'fcreacion')
      {
       
  
        orderedItems = sortOrder === 'ASC'
        ? devoluciones.slice().sort((a:any,b:any)=>{ return a.fcreacion < b.fcreacion ? -1 : a.fcreacion > b.fcreacion ? 1 : 0})
        : devoluciones.slice().sort((a:any,b:any)=>{ return  a.fcreacion < b.fcreacion ? 1 : a.fcreacion > b.fcreacion ? -1 : 0 })
      }

    
      else if (sortedBy === 'totalprods')
      {
       
  
        orderedItems = sortOrder === 'ASC'
        ? devoluciones.slice().sort((a:any,b:any)=>{ return a.totalprods < b.totalprods ? -1 : a.totalprods > b.totalprods ? 1 : 0})
        : devoluciones.slice().sort((a:any,b:any)=>{ return  a.totalprods < b.totalprods ? 1 : a.totalprods > b.totalprods ? -1 : 0 })
      }
   
      else if (sortedBy === 'totaldevolucion')
      {
       
    
        orderedItems = sortOrder === 'ASC'
        ? devoluciones.slice().sort((a:any,b:any)=>{ 
            
            let devA = a.totaldevolucion.split("$")
            devA = devA[1]

            let devB = b.totaldevolucion.split("$")
            devB = devB[1]
           
            
        return parseFloat(devA) < parseFloat(devB) ? -1 : parseFloat(devA) >parseFloat(devB)  ? 1 : 0})
        : devoluciones.slice().sort((a:any,b:any)=>{ 
            
            let devA = a.totaldevolucion.split("$")
             devA = devA[1]

            let devB = b.totaldevolucion.split("$")
            devB = devB[1]
           
            
            return  parseFloat(devA) < parseFloat(devB) ? 1 : parseFloat(devA) > parseFloat(devB) ? -1 : 0 })
      }
   

      else if (sortedBy === 'motivo')
      {
       
  
        orderedItems = sortOrder === 'ASC'
        ? devoluciones.slice().sort((a:any,b:any)=>{ return a.motivo < b.motivo ? -1 : a.motivo > b.motivo ? 1 : 0})
        : devoluciones.slice().sort((a:any,b:any)=>{ return  a.motivo < b.motivo ? 1 : a.motivo > b.motivo ? -1 : 0 })
      }
   

      

        setTableOrder({
          items: orderedItems,
          dataSort: {
            sortedBy: sortedBy,
            sortOrder: sortOrder,
          },
        })
      

     
    },
    [devoluciones],
  )

  

 
 
   
    if(spinner)
    {
        return (<div className="fl w-100 pt5"><Spinner /> </div>)
    }
    else
    {
    return ( 
        <div className="fl w-100 pt5">
          <ModalDialog
            centered
            isOpen={isDetailsOpen}
            onClose={()=>setDetailsOpen(false)}
            confirmation={{
              onClick:()=> { 
             
               window.print()
              },
              label: 'Imprimir',
              isDangerous: false,
            }}
            cancelation={{
              label: '',
              onClick:()=> { 
             
                setDetailsOpen(false)
              },
            }}
          

            ><DisplayDetails devolution={selectedDevolution}></DisplayDetails></ModalDialog>
        <Table
          fullWidth
          items={tableOrder.items}
          onSort={handleSort}
          schema={tableSchema}
          sort={{
            sortedBy: tableOrder.dataSort.sortedBy,
            sortOrder: tableOrder.dataSort.sortOrder,
          }}
          toolbar={{
            download: {
              label: 'Exportar a CSV',
              handleCallback: () => setModalOpen(true)
            },
            density: {
              buttonLabel: 'Ancho de las Filas',
              lowOptionLabel: 'Bajo',
              mediumOptionLabel: 'Medio',
              highOptionLabel: 'Alto',
            },
            fields: {
              label: 'Campos Visibles',
              showAllLabel: 'Mostrar Todos',
              hideAllLabel: 'Ocultar Todos',
              onToggleColumn: (params:any) => {
                console.log(params.toggledField)
                console.log(params.activeFields)
              }
            },
          }}
          density="high"
          pagination={{
            onNextClick: ()=>{
              setReportFilter({

                initialDate:reportFilter.initialDate,
                finalDate: reportFilter.finalDate,
                cc:reportFilter.cc,
                status:reportFilter.status,
                orderformid:reportFilter.orderformid,
                sellerId:reportFilter.sellerId,
                page:paginacion.page+1,
                offset:paginacion.pageSize
        
            })
            },
            onPrevClick: ()=>{
              setReportFilter({

                initialDate:reportFilter.initialDate,
                finalDate: reportFilter.finalDate,
                cc:reportFilter.cc,
                status:reportFilter.status,
                orderformid:reportFilter.orderformid,
                sellerId:reportFilter.sellerId,
                page:paginacion.page-1,
                offset:paginacion.pageSize
        
            })
            },
            currentItemFrom: (reportFilter.page-1)*100+1,
            currentItemTo: ((reportFilter.page-1)*100+1+reportFilter.offset)<paginacion?.total ?((reportFilter.page-1)*100+1+reportFilter.offset):paginacion?.total,
            onRowsChange: "",
            textShowRows: 'Registros Visibles:',
            textOf: 'de',
            totalItems: paginacion?.total,
            rowsOptions: [100],
          }}
  
         
         
             />
             <ModalDialog
            centered
            isOpen={isConfirmationOpen}
            onClose={()=>setConfirmationOpen(false)}
            confirmation={{
              onClick:()=> { 
             
                setConfirmationOpen(false)
              },
              label: 'Aceptar',
              isDangerous: false,
            }}
            cancelation={{
              label: '',
              onClick:()=> { 
             
                setConfirmationOpen(false)
              },
            }}
          

            >
            <div >
            <p className="f3 f3-ns fw3 gray">
             Enviaremos un correo a {email}, tan pronto esté la información disponible para descargar. 

            </p>
         
            </div>


            </ModalDialog>
              <ModalDialog
          centered
        
          confirmation={{
            onClick:()=> { 
              exportToCVS()
              setModalOpen(false)
              setConfirmationOpen(true)
            },

            label: 'Sí. Generar Reporte',
            isDangerous: false,
          }}
          cancelation={{
            onClick: ()=>setModalOpen(false),
            label: 'Cancelar',
          }}
          isOpen={isModalOpen}
          onClose={()=>setModalOpen(false)}>
          <div className="">
            <p className="f3 f3-ns fw3 gray">
              Se creará el reporte con las especificaciones ingresadas:
            </p>
            <div className="report-summary">
            <div className="report-summary-row">
            <div className="report-summary-label">
              Fecha Inicial:
            </div>
            <div className="report-summary-content">
              {reportFilter.initialDate.getDate()}/
              {reportFilter.initialDate.getMonth()+1}/
              {reportFilter.initialDate.getFullYear()}
            </div>
            <div className="report-summary-label">
              Fecha Final:
            </div>
            <div className="report-summary-content">
            {reportFilter.finalDate.getDate()}/
              {reportFilter.finalDate.getMonth()+1}/
              {reportFilter.finalDate.getFullYear()}
            </div>
            </div>
            <div className="report-summary-row">
            <div className="report-summary-label">
              Estado:
            </div>
            <div className="report-summary-content">
              {reportFilter.status}
            </div>
            <div className="report-summary-label">
              Cédula del Cliente:
            </div>
            <div className="report-summary-content">
              {reportFilter.cc!=='' ? reportFilter.cc : 'Todas' }
            </div>
            </div>
            <div className="report-summary-row">
            <div className="report-summary-label">
              Id de la Orden:
            </div>
            <div className="report-summary-content">
              {reportFilter.orderformid!=='' ? reportFilter.orderformid : 'Todas'}
            </div>
            <div className="report-summary-label">
              Seller:
            </div>
            <div className="report-summary-content">
              {reportFilter.sellerId!=='Todos' ? reportFilter.sellerId : 'Todos'}
            </div>
           
            </div>
            </div>
            <p>
              Tan pronto esté el reporte listo, se notificará por correo, para su descarga. 
              <br/>
              Si desea generar más reportes puede reiniciar los filtros y hacer nuevas búsquedas.
            </p>
          </div>
        </ModalDialog>
            </div>
    ) 
        }

  
}

const mapStateToProps = (state:any) =>{
  
  return {
    reportData: state.reportData,
    reportFilter:state.reportFilter, 
    spinner:state.spinner
  }
}

const mapDispatchToProps = (dispatch:any) =>
{
    return (
    {

        setSpinner: (spinner:boolean) => 
        {
            dispatch({ type:'SET_SPINNER', payload:spinner })
        },

        setReportFilter: (value:any) => 
        {
            dispatch({ type:'SET_REPORT_FILTER', payload:{value} })
        },

    }
 )

}


export default connect(mapStateToProps, mapDispatchToProps)(ReportTable)
