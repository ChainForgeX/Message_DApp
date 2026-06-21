import {useState} from "react";
import {ethers} from "ethers";
import {MessageABI} from "./abi/MessageABI";

function Message(){
    const[message, setMessage] = useState("");
    const[storedMessage, setStoredMessage] = useState("");

    const contractAddress = "CONTRACT ADDRESS";

    const saveMessage = async() =>{
        const provider = new ethers.BrowserProvider(window.ethereum);

        const signer = await provider.getSigner();

        const contract = new ethers.Contract(
            contractAddress,
            MessageABI,
            signer
        );

        const tx = await contract.setMessage(message);

        await tx.wait();

        readMessage();
    };
    
    const readMessage = async() => {
        const provider = new ethers.BrowserProvider(window.ethereum);

        const contract = new ethers.Contract(
            contractAddress,
            MessageABI,
            provider
        );

        const value = await contract.message();

        setStoredMessage(value);
    };

    return(
        <div>
            <h2>Message DApp</h2>
            <input
            type = "text"
            placeholder = "Enter Message"
            value = {message}
            onChange = {(e)=> setMessage(e.target.value)}
            />
            <button onClick = {saveMessage}>Save Message</button>
            <button onClick = {readMessage}>Read Message</button>
            <h2>Stored Message: {storedMessage}</h2>
        </div>
    );
}

export default Message;
