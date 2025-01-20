import loc from "../public/location.jpeg";

export default function Container(props){
  return(
    <div className="main-container">

    <div className="container">
      <img src={props.img} alt="" className="mainImg"/>

      <div className="content">
        <img src={loc}  alt="location" className="loc" />

        <span>{props.location}</span>
        <span> <a href={props.googleMapsUrl}>View on Googe Maps </a> </span>

        <h1>{props.title}</h1>
        <h3>{props.startDate} - {props.endDate}</h3>
        <p>{props.description}</p>
        
      </div>

      </div>
    </div>
  )
}