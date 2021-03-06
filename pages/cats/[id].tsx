import React,{useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Nav from '../../components/Nav/Nav';
import Head from 'next/head';

const Cat = ()=>{

    const Route = useRouter();
    const {id} = Route.query;
    const [cat,setCat] = useState(null);

    const fetchCat = async () =>{
        const response = await fetch(`/api/cats/${id}`);
        const data = await response.json()
        setCat(data)
    }
    useEffect(()=>{
        fetchCat();
    },[])
    return(
        <div>
            <Nav/>
            {cat && (
                <>
                <Head>
                <title>{cat.name}</title>
                <meta name="description" content="Generated by create next app" />
                
              </Head>
                <div className='container mt-5 flex' style={{display:"flex"}}>
                    <img src={cat.image.url} alt={cat.image.alt}/>
                    <div className='mx-5'>
                        <h1>{ cat.name }</h1>
                        <p>{cat.description}</p>
                    </div>
                </div>
                </>
            )}

        </div>
    );
}
export default Cat;