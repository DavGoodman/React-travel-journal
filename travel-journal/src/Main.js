import React from "react";
import data from "./data";

function Main(){
    let map = data.map(x=> 
        <div className="card">
            <div><img className="loc-img" src={x.imageUrl} /></div>
            <div className="texts">
                <img className="loc-symbol" src="./location_symbol.png"/>
                <span className="location">{x.location} <a className="loc-url" href={x.googleMapsUrl}>View on Google Maps</a></span>
                <h1>{x.title}</h1>
                <b>{x.startDate} - {x.endDate}</b>
                <p>{x.description}</p>

            </div>
        </div>
        )

        return (
            <section>
                {map}
            </section>
            )
}

export default Main