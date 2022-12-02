import { Wrapper} from "./Dialogs.styled";
import { Dialog } from './Dialog/Dialog';
import { Message } from "./Message/Message";


const Dialogs = ({ dialogsData, messagesData }) => {

 
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



