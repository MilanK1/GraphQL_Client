import React, { useState, useEffect } from 'react';
import { useQuery, gql, useSubscription } from '@apollo/client';
import './clients.css'
const DisplayClient = ({value}) => {
    const GET_CLIENT = gql`
    query getClient {
        getClient{
            _id,
            name,
            email,
            phone
        }

    }
    `
    //Update real-time

    // function UpdateRealTime(clientID){
    //     const UPDATED_CLIENTS = gql`
    
    //     subscription onClientUpdated($clientID: ID!){ 
    //         clientUpdated(clientID: $clientID){
    //             _id,
    //             name,
    //             email,
    //             phone
    //         }
    //     }
        
    //     `
    //     const { data, loading } = useSubscription(
    //         UPDATED_CLIENTS,
    //         { variables: { clientID } }
    //       );
    //     console.log(data, 'works fine?')
    // }
    // UpdateRealTime('630d186a0553596458b0e3bf')

    const { loading, error, data } = useQuery(GET_CLIENT)
    if (loading) { <p>Loading....</p> }
    if (error) { <p>Error...</p> }
    console.log(data)
    return (
        <div className='clients'>
             {data == undefined ?  <p>Error Occured...</p> : data.getClient.map(el => <div>
                <li>  name: {el.name} ||  email: {el.email} || phone: {el.phone} <button>Edit</button> <button>Delete</button></li>  </div>)}
        </div>
    )
}
export default DisplayClient