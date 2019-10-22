import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [inputs, setInputs] = useState({ email:'', message: '' });
    const submitHandler = e => {
        e.preventDefault();
        console.log(inputs);
    }
    
    useEffect(() => {
        const url = 'http://localhost:3001/messages';
        const data = {};

        try {
            const response = fetch(url, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const json = response.json();
  console.log('Success:', JSON.stringify(json));
} catch (error) {
  console.error('Error:', error);
}
    }, [])

// useEffect(() => {
//     fetch('http://localhost:3001/messages', {
//         method: 'POST',
//         body: JSON.stringify({ inputs })
//     })
//       .then(resp => resp.json())
//       .then(data => setInputs(data));
//   }, []);

    return (
        <>
  <section className="section container scrollspy">
    <div className="row">
      <div className="col s12 l5 scrollspy" id="resume">
        <h3 style={{color: 'rgb(173, 137, 45)'}}>Resume</h3>
        <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation
            ullamco laboris nisi ut aliquip
            ex ea commodo consequat
          </p>
          <p>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,
              quis nostrud exercitation
              ullamco laboris nisi ut aliquip
              ex ea commodo consequat
            </p>
            <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                quis nostrud exercitation
                ullamco laboris nisi ut aliquip
                ex ea commodo consequat
              </p>
      </div>
      <div className="col s12 l5 offset-l2 scrollspy" style={{marginTop: 20}} id='contact'>
        <form onSubmit={submitHandler}>
          <div className="input-field">
            <i className="tiny material-icons prefix">email</i>
            <input 
            type="email" 
            id="email"
            value={inputs.email}
            onChange={e => setInputs({ ...inputs, email: e.target.value })}
             />
            <label for="email">Your Email</label>
          </div>
          <div className="input-field">
            <i className="tiny material-icons prefix">message</i>
            <textarea 
            id="message" 
            className="materialize-textarea"
            value={inputs.message}
            onChange={e => setInputs({ ...inputs, message: e.target.value})}
            ></textarea>
            <label for="message">Your Message</label>
          </div>
          <div className="input-field center">
            <button className='contactbtn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
        </>
    )
}

export default Contact;
