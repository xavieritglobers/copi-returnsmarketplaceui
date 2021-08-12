import React, { useEffect, useState } from 'react'
import { Card, Divider  } from 'vtex.styleguide'
import Results from './Results'
import UserForm from './UserForm'
import store from '../Redux/store'
import { Provider } from 'react-redux'


const Filter = (props: any) => {

  
    
    return (

      <Provider store={store}>

  <div style={{ padding: '5px', color: '#585959', background: '#fafafa', height:'100%' }} >
  <Card >
    <div className="flex-column">
       <div className="w-100">
         <UserForm></UserForm>
      </div>
      <div className="w-100 bt mt5">
         <Results ></Results>
      </div>
    </div>
  </Card>
</div>
     </Provider>
    
    )
}



export default Filter
