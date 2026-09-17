const Login = () => {
  return (
    <div>
      <div>
        <img src="login.jpeg" alt="" />
        <img src="Image4.webp" alt="" />
      </div>

      <div>
        <h1>Sign in</h1>
        <p>Access to 300+ hours of courses, tutorials and livestreams</p>

        <form action="">
          <div>
            <div></div>

            <input type="email" placeholder="Email Address" />
          </div>
          <div>
            <div></div>
            <input type="text" placeholder="Password" />
          </div>
          <button>
            Sign in
          </button>
        </form>

        <div>
            <p>
                Don't have an account? <a href="">Sign Up</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login
