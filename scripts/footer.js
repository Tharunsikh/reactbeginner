//Footer class
      var Footer = React.createClass({
        
        render: function() {
            return (

                <footer className="footer-basic-centered">
                <p className="footer-company-motto">QUIKR HRMS</p>
                <p className="footer-links">
                  <a href="#">Home</a>
                  ·
                  <a href="#">About</a>
                   ·
                  <a href="#">Contact</a>
                </p>
                <p className="footer-company-name">QUIKR © 2015</p>
              </footer>
            );
            }
        });
       ReactDOM.render(<Footer />, document.getElementById('bottom'));