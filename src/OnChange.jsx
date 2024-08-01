// onChange
import React, {useState} from "react";

function OnChange(){

    const [name, setName] = useState("")
    const [quantity, setQuentity] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    const handelElementChange = (event) =>{
        setName(event.target.value)
    }

    const handelQuantityChange = (event) =>{
        setQuentity(event.target.value)
    }

    const handelCommentChange = (event) =>{
        setComment(event.target.value)
    }

    const handelPaymentChange = (event) =>{
        setPayment(event.target.value)
    }

    const handelShippingChange = (event) =>{
        setShipping(event.target.value)
    }

    return(
    <>
    <input value={name} onChange={handelElementChange} />
    <p>Name: {name}</p>   

    <input value={quantity} onChange={handelQuantityChange} type="number" />
    <p>Quantity: {quantity}</p>  

    <textarea value={comment} onChange={handelCommentChange} placeholder="Enter delivery instruction"/>
    <p>Comment: {comment}</p>

    <select value={payment} onChange={handelPaymentChange}>
        <option value="">select on option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
    </select>
    <p>Payment: {payment}</p>

    <label>
        <input type="radio" value= "pick up"
        checked = {shipping==="pick up"}
        onChange={handelShippingChange}
        />
        pick up
    </label><br />
    <label>
        <input type="radio" value= "Delivery"
        checked = {shipping==="Delivery"}
        onChange={handelShippingChange}
        />
        Delivery
    </label>
    <p>Shipping: {shipping}</p>
    </>
    );

}
export default OnChange;