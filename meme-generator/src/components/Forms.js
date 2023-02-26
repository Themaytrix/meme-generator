// learning react forms

// in react a state is created for every keystroke change or checkbox change before submission of form

//best practice is to give each form element a name for the event handling function to know which input triggered the event
// name shoould be the same as the property name for the state object

// Controlled Inputs: maintaining a one sourrce of truth. do this by adding value to input attribute to be 
// equal the name of the state object

// Controlled inputs for checkboxes set checked = {state.nameofattribute}. you dont need a value field

//controlled inputs for radio. set checked = {state.nameofattribute === value}
import { useState } from "react";

export default function Form(){
    // state to collect forms
    const [formsData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        home:true,
        employment:"",
        favColor:""
    })

    console.log(formsData)

    function handleChange(event){
        const {name,value,type,checked} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]:type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        // we need to prevent refresh of page
        event.preventDefault()
        // execute some funtion that handles submition of our formData to api
        // submitToApi(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="firstname"
            name="firstName"
            onChange={handleChange}
            value={formsData.firstName}
            />
            <input type="text"
            placeholder="lastname"
            name="lastName"
            onChange={handleChange}
            value={formsData.lastName}
            />
            <br />
            <input type="checkbox" 
            name="home"
            id="home"
            onChange={handleChange}
            checked={formsData.home}/>
            <label htmlFor="home">Home?</label>
            <br />
            <br />
            <fieldset>
                <legend>current status</legend>
                <input type="radio" 
                id="employed"
                name="employed"
                value="employed"
                onChange={handleChange}/>
                <label htmlFor="employed">Employed</label>
                <br />
                <input type="radio" 
                id="unemployed"
                name="employed"
                value="unemployed"
                onChange={handleChange}/>

                <label htmlFor="unemployed">Unemployed</label>
            </fieldset>
            <br />
            {/* working with select */}
            <label htmlFor="favColor">What is your favorite color</label>
            <select 
            name="favColor" 
            id="favColor"
            onChange={handleChange}
            value={formsData.favColor}
            >
                <option value="">---Choose Color---</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
            </select>
            <br />
            <br />
            {/* working w/ submit. Unlike html you can use a button. button has a default type of submit in react 
            You create a submit event listener of forms*/}
            <button>Submit</button>
        </form>
    )
}