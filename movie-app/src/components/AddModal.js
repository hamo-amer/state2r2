import React,{useState} from 'react';
import {Modal,Button} from 'react-bootstrap';
function AddModal({AddMovie}) {
    const [show,setShow]=useState(false);
    const [inputs,setInputs]=useState({});
    const handleShow=()=>{
        setShow(!show);
    }
    const handleChange=(event)=>{
        setInputs({
            [event.target.name]: event.target.value,
        })
    }
    return (
        <div>
         <Button variant="primary" onClick={handleShow}>+</Button>  
         <Modal show={show} onHide={handleShow}>
             <Modal.Header >
                 <Modal.Title>Add new Movie</Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <div>
                     <div>
                        <label className="input" >Title:</label> 
                        <input type="text" name="name" onChange={handleChange}/>
                     </div>
                     <div>
                        <label className="input">Image:</label> 
                        <input type="text" name="image" onChange={handleChange} />
                     </div>
                     <div>
                     <label className="input">Rating:</label> 
                        <input type="text" name="rating" onChange={handleChange}/>  
                     </div>
                     <div>
                     <label className="input">Description:</label> 
                        <input type="text" name="description" onChange={handleChange}/>
                     </div>
                 </div>
             </Modal.Body>
             <Modal.Footer>
                 <Button variant="secondary" onClick={handleShow}>Close</Button>
                 <Button variant="primary" onClick={AddMovie}>Add Movie </Button>
             </Modal.Footer>
         </Modal>
        </div>
    );
}
export default AddModal;