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
    return (
        
        <Wrapper>
            
            <div>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
           
        </Wrapper>
    )
};

export default Dialogs;



