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
    return (
        
        <Wrapper>
            
            <div>
                <Dialog name="Mango" id="1" />
                <Dialog name="Poli" id="2" />
                <Dialog name="Leon" id="3" />
                <Dialog name="Nick" id="4" />
                <Dialog name="Samanta" id="5" />
            </div>
            <div>
                <Message message="Hello!!!" />
                <Message message="How are you?" />
                <Message message="What is your name?" />
                <Message message="Hi!"/>

            </div>
           
        </Wrapper>
    )
};

export default Dialogs;



