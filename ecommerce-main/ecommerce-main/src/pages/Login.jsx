import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Typed from 'typed.js';
import UserContext from '../context/UserContext';

const Login = () => {
  let userStore = useContext(UserContext);
  console.log(userStore);

  let emailRef = useRef();
  let passwordRef = useRef();

  let arr = JSON.parse(localStorage.getItem('Ecom')) || [];
  console.log(arr);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate empty fields
    if (!emailRef.current.value || !passwordRef.current.value) {
      return alert('Both fields are required!');
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailRef.current.value)) {
      return alert('Please enter a valid email!');
    }

    let obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    console.log(obj);

    let find = arr.find((ele) => ele.email === obj.email);

    if (find) {
      if (find.password === obj.password) {
        localStorage.setItem('Login', JSON.stringify({ email: obj.email, login: true }));
        userStore.setuser({ email: obj.email, login: true });
        navigate('/'); // Navigate to homepage or protected route after successful login
      } else {
        alert('Wrong password');
      }
    } else {
      alert('User not found');
    }
  };

  const el = useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Login', 'Signup', 'Portfolio'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <form action="" className="bg-white max-w-[400px] m-auto mt-[100px] p-6 rounded gap-2 flex flex-col">
        <h3>This is <span ref={el} /></h3>
        <label htmlFor="">Email</label>
        <input ref={emailRef} className="border px-3 py-2 rounded" type="text" />
        <label htmlFor="">Password</label>
        <input ref={passwordRef} className="border px-3 py-2 rounded" type="password" /> {/* Changed to password type */}

        <button onClick={handleSubmit} className="bg-green-500 px-3 py-2 rounded">Login</button>

        <p className="text-center">Don't have an account? <Link className="text-blue-500" to={'/signup'}>register</Link></p>
      </form>
    </div>
  );
}

export default Login;
