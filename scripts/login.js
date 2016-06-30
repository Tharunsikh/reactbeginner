var Login = React.createClass({

        getInitialState: function()
        {
            return {
              emailerror: "",
              passerror: ""
            }
        },

        getDefaultProps: function()
        {
          return {
            uname: "email Id"
          }
        },


       

          foo: function(e)
           {
            e.preventDefault();
            //return false;
            this.username=document.getElementById('username').value;
            this.password=document.getElementById('password').value;
            console.log(this.state.errors);
            //this.setState({errors: "bust"});
            var uname=this.username;
            var pass=this.password;
            var emailvalid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
            console.log(pass.length);
            //return true;
            if(uname.match(emailvalid))
            {

              this.setState({emailerror: ""});
              console.log(uname);
              if(pass.length != 0)
              {
                console.log("you are good to go");
                document.getElementById('form').submit();
                return true;

              }
              else
               { 
                  this.setState({passerror: "Please Enter a password"});
                  //alert('Enter a password');
                  return false;
                }
            }

            else
              {
                this.setState({emailerror: "Invalid email id"});
                console.log("look at what you typed");
                return false;
              }

           },
           

      render: function() {
            return (

              <div className="login">
              <div className="lgn_left"><h1>login</h1><p>Please enter your Username and password</p> </div>
              <div className="lgn_right">
                  <form method="post" id="form" action="reg.php"  >
                   
                  <input className="field" type="text" placeholder="Email id" id="username" name="usernames"  required/>
                  <p>{this.state.emailerror}</p> 
                  <br></br>

                  <input className="field" type="password" placeholder="Password" id="password" name="passwords" required /> 
                  <p>{this.state.passerror}</p> 
                  <br></br>
                  <input className="btn" type="submit" defaultValue="LOGIN" onClick={this.foo}   />
                  </form>
                  <br></br>
                  <a href="#" className="forgot">Forgot password?</a>
              </div>
              </div>
                  );
            }
        });



ReactDOM.render(<Login />, document.getElementById('loginbox'));