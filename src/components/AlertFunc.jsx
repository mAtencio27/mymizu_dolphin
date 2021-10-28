import { useState } from "react";
import Alert from 'react-bootstrap/Alert'

function AlertFunc() {
    const [show, setShow] = useState(true);
    const handleChange = () => {
        setShow(true);
    }

    return (
        <Alert variant="info"
            show={show}
            onClose={() => setShow(false)}
            style={{ width: '90%', marginLeft: '14px'}}
            dismissible>You've reached Milestone!</Alert>
    )
}

export default AlertFunc;