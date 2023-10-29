import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate=useNavigate()
   const  handleNavigate=()=>{
    // navigate(-1)
    }
    return (
        <div>
            <div className='d-flex bg-success'>
                <div>
                    <ul>
                        <li>
                            {/* <a onClick={()=>handleNavigate()}>Back</a> */}
                        </li>
                    </ul>
                </div>
                <div>
                    <p>by H.M.F </p>
                </div>

            </div>
        </div>
    );
}

export default Footer;
