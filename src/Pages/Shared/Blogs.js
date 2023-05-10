import React from 'react';
import Header from './Header';
import Navber from './Navber';

const Blogs = () => {
    return (
        <div>
            <Navber color="#f5fdfd" />
            <div className='blog-info'>
                <p className='font-bold text-lg mb-5'>How does prototypical inheritance work?</p>

                <p>Prototypical inheritance means every object in JS has a hidden property called prototype. Using this property, it can extend properties from its parent object. In browsers, every object is an extension of the window object and can inherit methods like console, setInterval, alert etc.</p>
            </div>
            <div className='blog-info'>
                <p className='font-bold text-lg mb-5'>What is a unit test? Why should write unit tests?</p>

                <p>Unit testing is a process in software development where the project is broken down into smallest possible units and tested individually to make sure they work as intended. This makes it easier to identify and debug bugs issues.</p>
            </div>
            <div className='blog-info'>
                <p className='font-bold text-lg mb-5'> How will you improve the performance of a React Application?</p>

                <p>To improve the performance of a react application, we can provide a key prop to looping children components so that react can compare the virtual dom and the actual dom to only update the components that have changed. We can also use something like react query to cache the loaded data. We can use proper dependencies for useEffect to reduce the number of re renders.</p>
            </div>
            <div className='blog-info'>
                <p className='font-bold text-lg mb-5'>What are the different ways to manage a state in a React application?</p>



                <p>There are 4 kinds of react states. First we have the local state. These are states local to a components and can be managed by the useState hook. Then we have global state, these are states that updates multiple components. We can lift the state to the parent component or use context api to share data between multiple components. Then we have server state. These are data coming form an external server and integrated in the ui. We use hooks like useEffect, or something like axios or react query to load them from the server and show them in the ui. Last but not least we have url state. These are data from the url itself. We can access them using hooks like useParams and manage their state in the ui.</p>
            </div>

            <div className='blog-info'>
                <p className='font-bold text-lg mb-5'> Why you do not set the state directly in React?</p>

                <p>We should never set the state directly in react because if we do that, the state wont change immediately. Instead, it creates a pending state transition, and accessing it after will only return the present value. Also calling the setState function may replace the current value of the state. That is why we use the setState function to update a state.</p>
            </div>



        </div>
    );
};

export default Blogs;