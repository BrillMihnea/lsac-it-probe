import "./input.css"
export default function InputObraznic(props){

    const{text, image, setThing} = props

    const handleChange = (e)=>{
        props.setThing(e.target.value)
        /*console.log(e)*/
    }

    return(
    <div className="input-wrapper">
        <img src={image}></img>
        <input type="text" placeholder={text} onChange={handleChange}></input>
    </div>)
}