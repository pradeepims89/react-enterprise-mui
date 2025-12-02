import React from 'react';
const addContacts = () => {
    return (
        <div>
            <h2>Add Contacts Component</h2>
            <form className='form-group'>
                <div className=''>
                    <input type="text" placeholder="Name" className='input' />
                </div>
                <div>
                    <input type="email" placeholder="Email" className='input' />
                </div>
                <div>
                    <button type="submit" className='button'>Add Contact</button>
                </div>



            </form>
        </div>
    );
}
export default addContacts;
