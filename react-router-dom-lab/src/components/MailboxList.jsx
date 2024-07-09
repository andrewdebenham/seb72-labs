import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    const mailboxListItems = props.mailboxes.map((mailbox) => (
        <li key={mailbox._id} className='mail-box'>
            <Link to={'/mailboxes/' + mailbox._id}>Mailbox {mailbox._id}</Link>
        </li>
    ));
    
    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {mailboxListItems}
            </ul>
        </>
    )
}

export default MailboxList;