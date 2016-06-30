 var Header = React.createClass({
      render: function() 
          {
              return (
              <header className="header-login-signup">
                <div className="header-limiter">

                   <img src="./assets/quikrlogo.png" width={50} height={50} />
                    <h1><a>Quikr</a> </h1>   
                    <nav>
                        <a href="#">Home</a>
                     </nav>
                  <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Sign up</a></li>
                  </ul>
                </div>
              </header>
                  );
          }
        });
 
var header = React.createElement(Header);

    //React.render(header,document.top);

    //Render Methods  
ReactDOM.render(header , document.getElementById('top'));

    
         