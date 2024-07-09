import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    _id: 0,
    boxsize: 'Small',
    boxholder: '',
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const _handleSubmit = (event) => {
        event.preventDefault;
        props.addMailbox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    }

    const _handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    return (
        <>
            <h1>New Mailbox</h1>
            <form onSubmit={_handleSubmit}>
                <label>
                    Enter a Boxholder:
                    <input name="boxholder" value={formData.boxholder} onChange={_handleChange} required/>
                </label>
                <label>
                    Select a Box Size:
                    <select name="boxsize" value={formData.boxSize} onChange={_handleChange}>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>
                <button>Create Mailbox</button>
            </form>
        </>
    )
}

export default MailboxForm;