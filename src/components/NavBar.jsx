

import React from 'react';

const Navbar = ({ setContactVisible, setAboutVisible, contactVisible, aboutVisible }) => {
  // const [ setLoginVisible] = useState(false);

//   const toggleLogin = () => {
//     setLoginVisible(!loginVisible);
//   };

  return (
    <header>
      <ul>
        <li><a className="active" href="/">Home</a></li>
        <li><a href="https://www.sciencedaily.com/news/health_medicine/fitness/">News</a></li>
        <li>
          <button onClick={() => setContactVisible(!contactVisible)}>
            {contactVisible ? 'Hide Info' : 'Contact'}
          </button>
        </li>
        <li>
          <button onClick={() => setAboutVisible(!aboutVisible)}>
            {aboutVisible ? 'Hide Info' : 'About'}
          </button>
        </li>
      
      </ul>

      {/* {loginVisible && (
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
            </div>
            <button type="submit">Login</button> */}
          {/* </form>
        </div> */}
      {/* )} */}
    </header>
  );
}

export default Navbar;
