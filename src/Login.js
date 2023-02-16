import FacebookLogin from 'react-facebook-login';


 //declare variables
 const componentClicked = "data";

 const ReactFacebookLogin=()=>{
     componentClicked = data =>{
     console.log("data",data);
   }
 }

 const responseFacebook = (response) => {
   console.log(response);
 }

function Loginbutton() {
 return (

   <div className="button">
     <FacebookLogin
       appId="565077415510303"
       autoLoad={false}
       fields="name,email,picture"
       onClick={componentClicked}
       callback={responseFacebook} />,
       
   </div>
 );
}

export default Loginbutton;