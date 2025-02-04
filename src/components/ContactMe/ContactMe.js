import {useState} from 'react';
import './ContactMe.css';

const NameErrorMessage = (props) => {
    if (props.name.isTouched && !props.name.value) {
        return (
            <p className='FieldError'>Name is required</p>
        );
    }
};

const MessageErrorMessage = (props) => {
    if (props.message.isTouched && props.message.value.length < 8) {
        return (
            <p className='FieldError'>Message length must be at least 8 characters</p>
        );
    }
};

const EmailErrorMessage = (props) => {
    if (props.email.isTouched && !validateEmail(props.email.value)) {
        return (
            <p className='FieldError'>Email is invalid</p>
        );
    }
};

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function ContactMe() {
    const [name, setName] = useState({
        value: '',
        isTouched: false
    });
    const [email, setEmail] = useState({
        value: '',
        isTouched: false
    });
    const [enquiry, setEnquiry] = useState('freelance');
    const [message, setMessage] = useState({
        value: '',
        isTouched: false
    });

    const getFormIsValid = () => {
        if (name.value && validateEmail(email.value) && message.value.length >= 8) {
            return true;
        }
        return false;
    }

    const clearForm = () => {
        setName({
            value: '',
            isTouched: false
        });
        setEmail({
            value: '',
            isTouched: false
        });
        setEnquiry('freelance');
        setMessage({
            value: '',
            isTouched: false
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        clearForm();
        const formData = new FormData();
        formData.append("Email", email.value);
        formData.append("Name", name.value);
        formData.append("Enquiry", enquiry);
        formData.append("Message", message.value);


        fetch("https://api.sheetmonkey.io/form/ofbR8QNxhHeLfYSXfsZWYq", {
            method: "POST",
            body: formData,
        })
        .catch(err => 
            console.error(err));

        console.log([...formData.entries()]);
    }

    return (
        <div id="contactme-section">
            <h1>Add your contact</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className='Field'>
                        <label>Name <sup>*</sup></label>
                        <input 
                            name="Name" 
                            type="text" 
                            value={name.value} 
                            onChange={e => setName({...name, value: e.target.value})} 
                            onBlur={() => setName({...name, isTouched: true})}
                        />
                        <NameErrorMessage name={name} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className='Field'>
                        <label>Email <sup>*</sup></label>
                        <input 
                            name="Email" 
                            type="email" 
                            value={email.value} 
                            onChange={e => setEmail({...email, value: e.target.value})}
                            onBlur ={() => setEmail({...email, isTouched: true})} 
                        />
                        <EmailErrorMessage email={email} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className='Field'>
                        <label>Type of enquiry <sup>*</sup></label>
                        <select name="Enquiry" value={enquiry} onChange={e => setEnquiry(e.target.value)}>
                            <option value="freelance">Freelance project proposals</option>
                            <option value="intership">Internship</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className='Field'>
                        <label>Message <sup>*</sup></label>
                        <textarea 
                            name="Message" 
                            value={message.value} 
                            onChange={e => setMessage({...message, value: e.target.value})} 
                            onBlur={() => setMessage({...message, isTouched: true})}    
                        />
                        <MessageErrorMessage message={message} />
                    </div>
                </fieldset>
                <button type="submit" disabled={!getFormIsValid()}>Send</button>
            </form>
        </div>
    );
}
export default ContactMe;