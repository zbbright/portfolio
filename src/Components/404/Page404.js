import React from 'react';
import { Link } from 'react-router-dom';

function Page404(props){
 return (<div className="container bg-white p-5"><h1>error 404 <br/> Page not found</h1><Link className="nav-link" to="/" >Home</Link></div>)
}

export default Page404;