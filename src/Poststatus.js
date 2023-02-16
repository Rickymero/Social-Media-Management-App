import App from "./App";
import postStatus from './Poststatus';

function Poststatus() {
    return (
        <div className="update-area">
            <center>
            <form method="post">
                <img src=".././public/edit.png" alt="" />
                <label>Create Post</label><br />
                <textarea
                    className=""
                    rows="4"
                    id="txt_message"
                    placeholder="Type message here...">
                </textarea><br />

                <button type="submit" onClick={() => postMessage()}>
                    Post status
                </button>
            </form>
            </center>
        </div>
    );
}

//getting data from the form
var post_value = document.getElementById("txt_message");
//storing the text inside the msg variable
var post = post_value.value;
console.log(post);
    

export default Poststatus;

