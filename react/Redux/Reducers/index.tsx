
const initialValue  = {

    reportFilter:{

        initialDate:new Date(),
        finalDate: new Date(),
        cc:'',
        status:'Todos',
        orderformid:'',
        sellerId:'Todos',
        page:1,
        offset:100

    },
    reportData:{
        devoluciones:[],
        paginacion:{page: 0, pageSize: 0, total: 0}
    },
    spinner:false
}


const reducer = (state=initialValue,action:any) =>
{
  switch(action.type)
  {
    /*Sets the main filter in order to get the report data */ 
    case 'SET_REPORT_FILTER' :
        {
            const newFilter = action.payload

           
          
            return {...state, reportFilter:newFilter.value}
    
        }
    case 'SET_REPORT_DATA' :
    {
                const newData = action.payload

               
              
              
                return {...state, reportData:newData}
        
    }
    case 'SET_SPINNER' :
    {
                const spinner = action.payload
                return {...state, spinner:spinner}
        
    }
    
     
    default:
      return state
  }
  
}

export default reducer