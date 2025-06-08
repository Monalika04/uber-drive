import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 w-full justify-between flex-col flex'>

        <img className='w-20 mr-6 ml-auto drop-shadow-lg' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' />

        <div className='bg-white rounded-t-3xl shadow-lg pb-8 px-6 py-8'>
          <h2 className='text-2xl font-bold text-gray-800 text-center'>Get Started with Uber</h2>
          <Link
  to="/login"
  className='w-full block text-center bg-black hover:bg-gray-900 transition-all duration-200 text-white py-4 rounded-xl mt-6 text-lg font-semibold shadow-md'
>
  Continue <span className="text-2xl ml-1">→</span>
</Link>


         
          
        </div>

      </div>
    </div>
  );
};

export default Home;
