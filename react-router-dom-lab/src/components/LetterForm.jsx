import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    letterId: 0,
    mailboxId: 1,
    recipient: '',
    message: '',
}

const LetterForm = (props) => {

    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const mailboxOptions = props.mailboxes.map((mailbox) => (
        <option key={mailbox._id} value={mailbox._id}>Mailbox {mailbox._id}</option>
    ));

    const _handleSubmit = (event) => {
        event.preventDefault();
        formData.letterId = props.letters.length + 1;
        props.addLetter(formData);
        navigate('/mailboxes/' + formData.mailboxId);
        setFormData(initialState);
    }

    const _handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    return (
        <section>
            <h1>New Letter</h1>
            <form onSubmit={_handleSubmit}>
                <label>
                    <strong>Select a Mailbox</strong>
                    <select name="mailboxId" value={formData.mailboxId} onChange={_handleChange}>
                        {mailboxOptions}
                    </select>
                </label>
                <label>
                    <strong>Recipient</strong>
                    <input name="recipient" value={formData.recipient} onChange={_handleChange} />
                </label>
                <label>
                    <strong>Message:</strong>
                    <textarea name="message" value={formData.message} onChange={_handleChange}></textarea>
                </label>
                <button>Send Letter</button>
            </form>
        </section>
    )
};

export default LetterForm;