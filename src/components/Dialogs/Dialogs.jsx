import { Contact ,MessageItem,Wrapper} from "./Dialogs.styled";


const Dialog = ({ name, id }) => {

    return (
        <div><Contact to={id}>{name}</Contact></div>
    )
};

const Message = ({ message }) => {
    return (
        <MessageItem>{message}</MessageItem>
    )
};

const Dialogs = (props) => {

        let dialogsData = [
        { id: 1, name: "Mango" },
        { id: 2, name: "Poli" },
        { id: 3, name: "Leon" },
        { id: 4, name: "Nick" },
        { id: 5, name: "Samanta" },
    ];
    
    let messagesData = [
        { id: 1, message: "Hello!!!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "What is your name?" },
        { id: 4, message: "Hi!" },
        { id: 5, message: "Yo" },
    ];

    let dialogs = dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
    let messages = messagesData.map(message => <Message message={message.message} />);
    
    return (
        
        <Wrapper>
            
            <div>
               {dialogs} 
            </div>
            <div>
                {messages}
            </div>
           
        </Wrapper>
    )
};

export default Dialogs;



