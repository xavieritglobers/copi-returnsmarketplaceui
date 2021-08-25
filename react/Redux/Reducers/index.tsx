
const initialValue  = {

    reportFilter:{

        initialDate:new Date(),
        finalDate: new Date(),
        cc:'',
        status:'Todos',
        orderformid:'',
        page:0,
        offset:25

    },
    reportData:{
        items:[]
    }
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
    
     
    default:
      return state
  }
  
}

export default reducer