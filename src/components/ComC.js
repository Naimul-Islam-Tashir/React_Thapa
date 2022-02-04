import React from 'react';
import {FirstName,LastName} from '../App'
function ComC() {
    return(
            <div>
                  <h1>Component C</h1>
                  <FirstName.Consumer>
                        {
                              (value1)=>{
                                    return(
                                          <LastName.Consumer>
                                           {
                                                (value2)=> {
                                                 return <h1>Hello! {value1} {value2} ....</h1>
                                                         }
                                           } 
                                         </LastName.Consumer> 
                                    )
                              }
                             
                        }          
                  </FirstName.Consumer>
            </div>
           );
        }
 export default ComC;
