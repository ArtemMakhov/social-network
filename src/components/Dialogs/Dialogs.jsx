import { Contact ,Message,Wrapper} from "./Dialogs.styled";

const Dialogs = (props) => {
    return (
        
        <Wrapper>
            
            <div>
                <Contact>Mango</Contact>
                <Contact>Poli</Contact>
                <Contact>Leon</Contact>
                <Contact>Nick</Contact>
                <Contact>Samanta</Contact>
            </div>
            <div>
                <Message>Hello!!!</Message>
                <Message>How are you?</Message>
                <Message>What is your name?</Message>
                <Message>Hi!</Message>
            </div>
           
        </Wrapper>
    )
}

export default Dialogs;



