import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux'
import { Table } from 'vtex.styleguide'
import { ModalDialog } from 'vtex.styleguide'
import axios from 'axios';
import "../../react/styles.global.css"


const ReportTable = (props:any) => {

  
   const  {reportFilter} = props
   const {items} = props.reportData

   const [isModalOpen, setModalOpen]=useState(false)

  
   const tableSchema = {
    properties: {
      orderformid: {
        title: 'Orden',
        // default is 200px
        width: 80,
        sortable: true,
      },
      seller: {
        title: 'Seller',
        sortable: true,
        width: 120,
        
      },
      clientname: {
        title: 'Cliente',
        sortable: true,
        width: 100,
        
      },
      clientId: {
        title: 'Cédula Cliente',
        sortable: true,
        width: 100,
        
      },
      status: {
        title: 'Estado Registro',
        sortable: true,
        width: 100,
        
      },
      fcreacion: {
        title: 'Creado el',
        // default is 200px
        width: 100,
        sortable: true,
      },
      factualizacion: {
        title: 'Modificado el',
        // default is 200px
        width: 100,
        sortable: true,
      },
      totalprods: {
        title: 'No. Prod.',
        // default is 200px
        width: 100,
        sortable: true,
      },
      motivo: {
        title: 'Motivo',
        // default is 200px
        minWidth: 100,
        sortable: true,
      },
      totaldevolucion: {
        title: 'Valor Devolución',
        // default is 200px
        width: 100,
        sortable: true,
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

  useEffect(() => {
    setTableOrder({
        items: items,
        dataSort: {
            sortedBy: "orderformid",
            sortOrder: "ASC",
        },
      })
      return () => {
      }
  }, [items])

  const exportToCVS = useCallback(
    () => {

      const iniD = `${reportFilter.initialDate.getMonth()+1}/${reportFilter.initialDate.getDate()}/${reportFilter.initialDate.getFullYear()}`
      const finD = `${reportFilter.finalDate.getMonth()+1}/${reportFilter.finalDate.getDate()}/${reportFilter.finalDate.getFullYear()}`
      
      /*Armamos un objeto con el filtro y los items, en caso de que tengamos la data completa. 
      En caso contrario, solo se enviará el filtro*/ 
      const dataToSend = {
        reportFilter:reportFilter, 
        items:items
      
      }
      // Obtener la ruta del servidor

      
     
      const url = `https://testglobers24--itglobers.myvtex.com/report/`
     

      axios.post(url, dataToSend).
     then((res:any) => console.log(res)
     ).catch((error:any)=>console.log(error))

    },
    [reportFilter,items],
  )


  const handleSort = useCallback(

    ({ sortOrder, sortedBy }) => {

     
      let orderedItems = new Array()
      if (sortedBy === 'orderformid')
      {
       
        

        orderedItems = sortOrder === 'ASC'
        ? items.slice().sort((a:any,b:any)=>{ return a.orderformid < b.orderformid ? -1 : a.orderformid > b.orderformid ? 1 : 0})
        : items.slice().sort((a:any,b:any)=>{ return  a.orderformid < b.orderformid ? 1 : a.orderformid > b.orderformid ? -1 : 0 })
      }
      else if (sortedBy === 'seller')
      {
       
      
        orderedItems = sortOrder === 'ASC'
        ? items.slice().sort((a:any,b:any)=>{ return a.seller < b.seller ? -1 : a.seller > b.seller ? 1 : 0})
        : items.slice().sort((a:any,b:any)=>{ return  a.seller < b.seller ? 1 : a.seller > b.seller ? -1 : 0 })
      }
      else if (sortedBy === 'clientname')
      {
     
        orderedItems = sortOrder === 'ASC'
        ? items.slice().sort((a:any,b:any)=>{ return a.clientname < b.clientname ? -1 : a.clientname > b.clientname ? 1 : 0})
        : items.slice().sort((a:any,b:any)=>{ return  a.clientname < b.clientname ? 1 : a.clientname > b.clientname ? -1 : 0 })
      }
      else if (sortedBy === 'clientId')
      {
       
  
        orderedItems = sortOrder === 'ASC'
        ? items.slice().sort((a:any,b:any)=>{ return a.clientId < b.clientId ? -1 : a.clientId > b.clientId ? 1 : 0})
        : items.slice().sort((a:any,b:any)=>{ return  a.clientId < b.clientId ? 1 : a.clientId > b.clientId ? -1 : 0 })
      }
      else if (sortedBy === 'status')
      {
       
  
        orderedItems = sortOrder === 'ASC'
        ? items.slice().sort((a:any,b:any)=>{ return a.status < b.status ? -1 : a.status > b.status ? 1 : 0})
        : items.slice().sort((a:any,b:any)=>{ return  a.status < b.status ? 1 : a.status > b.status ? -1 : 0 })
      }
   
      else if (sortedBy === 'fcreacion')
      {
       
  
        orderedItems = sortOrder === 'ASC'
        ? items.slice().sort((a:any,b:any)=>{ return a.fcreacion < b.fcreacion ? -1 : a.fcreacion > b.fcreacion ? 1 : 0})
        : items.slice().sort((a:any,b:any)=>{ return  a.fcreacion < b.fcreacion ? 1 : a.fcreacion > b.fcreacion ? -1 : 0 })
      }

      else if (sortedBy === 'factualizacion')
      {
       
  
        orderedItems = sortOrder === 'ASC'
        ? items.slice().sort((a:any,b:any)=>{ return a.factualizacion < b.factualizacion ? -1 : a.factualizacion > b.factualizacion ? 1 : 0})
        : items.slice().sort((a:any,b:any)=>{ return  a.fcreacion < b.factualizacion ? 1 : a.factualizacion > b.factualizacion ? -1 : 0 })
      }

      else if (sortedBy === 'totalprods')
      {
       
  
        orderedItems = sortOrder === 'ASC'
        ? items.slice().sort((a:any,b:any)=>{ return a.totalprods < b.totalprods ? -1 : a.totalprods > b.totalprods ? 1 : 0})
        : items.slice().sort((a:any,b:any)=>{ return  a.totalprods < b.totalprods ? 1 : a.totalprods > b.totalprods ? -1 : 0 })
      }
   
      else if (sortedBy === 'totaldevolucion')
      {
       
    
        orderedItems = sortOrder === 'ASC'
        ? items.slice().sort((a:any,b:any)=>{ 
            
            let devA = a.totaldevolucion.split("$")
            devA = devA[1]

            let devB = b.totaldevolucion.split("$")
            devB = devB[1]
           
            
        return parseFloat(devA) < parseFloat(devB) ? -1 : parseFloat(devA) >parseFloat(devB)  ? 1 : 0})
        : items.slice().sort((a:any,b:any)=>{ 
            
            let devA = a.totaldevolucion.split("$")
             devA = devA[1]

            let devB = b.totaldevolucion.split("$")
            devB = devB[1]
           
            
            return  parseFloat(devA) < parseFloat(devB) ? 1 : parseFloat(devA) > parseFloat(devB) ? -1 : 0 })
      }
   

      else if (sortedBy === 'motivo')
      {
       
  
        orderedItems = sortOrder === 'ASC'
        ? items.slice().sort((a:any,b:any)=>{ return a.motivo < b.motivo ? -1 : a.motivo > b.motivo ? 1 : 0})
        : items.slice().sort((a:any,b:any)=>{ return  a.motivo < b.motivo ? 1 : a.motivo > b.motivo ? -1 : 0 })
      }
   

      

        setTableOrder({
          items: orderedItems,
          dataSort: {
            sortedBy: sortedBy,
            sortOrder: sortOrder,
          },
        })
      

     
    },
    [items],
  )

  

 
 


    return (
        <div className="fl w-100 pt5">
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
            inputSearch: {
           
              placeholder: 'Buscar...',
            
            },download: {
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
            onNextClick: "",
            onPrevClick: "",
            currentItemFrom: reportFilter.page+1,
            currentItemTo: reportFilter.offset,
            onRowsChange: "",
            textShowRows: 'Registros Visibles:',
            textOf: 'de',
            totalItems: tableOrder.items.length,
            rowsOptions: [25, 50,100],
          }}
  
         
         
             />
              <ModalDialog
          centered
        
          confirmation={{
            onClick:()=> exportToCVS(),
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

const mapStateToProps = (state:any) =>{
  
  return {
    reportData: state.reportData,
    reportFilter:state.reportFilter
  }
}



export default connect(mapStateToProps)(ReportTable)
