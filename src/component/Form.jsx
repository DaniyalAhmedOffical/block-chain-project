import React from 'react';
// import ReactDOM from 'react-dom';
import { MDBCard,MDBCardBody,MDBInput,MDBCardHeader,MDBBtn } from 'mdb-react-ui-kit';
import {useState} from 'react';
import {db} from './firebase';
import {collection, addDoc} from 'firebase/firestore';
const Form = () => {
    const [Name, setName] = useState([])
    const [FatherName, setFatherName] = useState([])
    const [ChainOf, setChainOf] = useState([])
    const [Charge, setCharge] = useState([])
    const [Hearing, setHearing] = useState([])
    const [Decision, setDecision] = useState([])
    const [Date, setDate] = useState([])
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await addDoc(collection(db, 'Case'), {
            Name: Name,
            FatherName: FatherName,
            ChainOf: ChainOf,
            Charge: Charge,
            Hearing: Hearing,
            Decision: Decision,
            Date: Date,
          })
          alert('data succesfully saved..');

          setName("");
          setFatherName("");
          setChainOf("");
          setCharge("");
          setHearing("");
          setDecision("");
          setDate("");
        } catch (err) {
          alert(err)
        }
      }

    return (
        <div>
            <div className='container mt-5'>
                <div className='row mt-5'>
                    <div className='col-md-3'>
                    </div>
                    <div className='col-md-6'>
                    <MDBCard>
                        <MDBCardHeader>
                            <h2 className='logic_heading'><strong>Logic Case#</strong></h2>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <form onSubmit={handleSubmit} className='addTask' name='addTask'>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <MDBInput name='name' label='Name: ' required value={Name} onChange={(e) => setName(e.target.value)} id='formControlDefault' type='text' />
                                    </div>
                                    <div className='col-sm-6'>
                                        <MDBInput label='Father Name:' name='FatherName' required value={FatherName} onChange={(e)=> setFatherName(e.target.value)} id='formControlDefault' type='text' />
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-sm-6'>
                                        <MDBInput name='ChainOf' label='Chain Of:' required value={ChainOf} onChange={(e)=> setChainOf(e.target.value)} id='formControlDefault' type='text' />
                                    </div>
                                    <div className='col-sm-6'>
                                        <MDBInput label='Charge:' name='charge' required value={Charge} onChange={(e)=> setCharge(e.target.value)} id='formControlDefault' type='text' />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className='col-sm-6'>
                                        <MDBInput label='Hearing:' name='Hearing' required value={Hearing} onChange={(e)=> setHearing(e.target.value)} id='formControlDefault' type='text' />
                                    </div>
                                    <div className='col-sm-6'>
                                        <MDBInput label='Decision:' name='Decision' required value={Decision} onChange={(e)=> setDecision(e.target.value)} id='formControlDefault' type='text' />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    
                                    <div className='col-sm-6'>
                                        <input name='Date' className='form-control' required value={Date} onChange={(e)=> setDate(e.target.value)} id='formControlDefault' data-mdb-inline="true"  type='Date' />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className='col-sm-12 text-end'>
                                        <MDBBtn rounded color='dark'>Submit</MDBBtn>
                                    </div>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                    </div>
                    <div className='col-md-3'>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Form;