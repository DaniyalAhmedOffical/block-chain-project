import React from 'react'

function Form() {
  return (
    <div className='container card p-3 mt-2 forms-container'>
        <form >
            <div className='form-group'>
                <label htmlfor="name">Name</label>
                <input type="text" name="name" className="form-control" />

            </div>
            

            <div className='form-group'>
                <label htmlfor="name">Name</label>
                <input type="text" name="name" className='form-control' />

            </div>
            
            <div className='form-group'>
                <label htmlfor="name">Name</label>
                <input type="text" name="name" className='form-control' />

            </div>
            <button type='submit' className='btn btn-primary'> Register</button>
            
        </form>
    </div>

    )
}

export default Form