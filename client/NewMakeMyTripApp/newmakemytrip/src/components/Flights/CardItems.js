// CardItems.js
import React from 'react';
import '../cssFiles/CardItems.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

export default function CardItems(props) {
    const navigate=useNavigate();
    const { title, description, url, url1 } = props;

    return (
        <div className="card my-3">
            <img src={url} className="card-img-top" alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url1} target='_blank' className="btn btn-outline-primary d-flex justify-content-center" onClick={()=>{
                    navigate('/cardscomponent',{
                        state:{
                            url,title,description,buttonText:'Book Now',onClick:`${title}-> Offers Clicked`
                        }
                    })
                }}>Book Now</a>
            </div>
        </div>
    );
}
    