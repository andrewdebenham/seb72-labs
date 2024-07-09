import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    const params = useParams();

    const mailbox = props.mailboxes.find((mailbox) => mailbox._id == params.id);
    const letters = props.letters.filter(
        (letter) => letter.mailboxId == params.id
    )
    
    const letterListItems = letters.map(letter => (
        <li key={letter.mailboxId} className='letterLi'>
            <p>Dear {letter.recipient},</p>
            <p>{letter.message}</p>
        </li>
    ))
    
    return (
        <>
            <h1>Mailbox {mailbox._id}</h1>
            <p>Boxholder: {mailbox.boxholder}</p>
            <p>Box Size: {mailbox.boxsize}</p>
            <h4>Letters</h4>
            <ul className="letter">
                {letterListItems}
            </ul>
        </>
    )
}

export default MailboxDetails;