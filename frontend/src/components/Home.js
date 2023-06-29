import React, { useEffect } from 'react';
import Card from './Card';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from '../assets/images/img1.jpg';
import image2 from '../assets/images/img2.jpg';
import image3 from '../assets/images/img3.jpg';


const HomePage = () => {

useEffect(() => {
document.title = 'Home'; // Change the document title
}, []);

return (
<div className='home-page'>
    <h2 className='home'>Welcome to the Home Page</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus ultrices, vestibulum ipsum eu, viverra
        nisl. Suspendisse bibendum mauris in tortor rhoncus, in placerat felis ultricies. Vivamus consequat ante sed
        elit iaculis, nec dapibus tortor pulvinar. Nullam ullamcorper enim nec volutpat tempor. Sed dapibus justo nec
        erat placerat, vel aliquet sem aliquam. Quisque auctor tempor erat, in facilisis lacus sagittis a. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce viverra ultrices augue, et
        maximus odio pharetra id. Mauris id odio non ipsum faucibus aliquam.</p>

    <div className='card-container'>
        <Card imageSrc={image1} title='Card 1' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
        <Card imageSrc={image2} title='Card 2' description='Sed ac risus ultrices, vestibulum ipsum eu, viverra nisl.' />
        <Card imageSrc={image3} title='Card 3'
            description='Vivamus consequat ante sed elit iaculis, nec dapibus tortor pulvinar.' />
    </div>

    <p>Donec a dignissim tellus. Phasellus nec facilisis velit. Nullam facilisis nisi eget purus consectetur eleifend.
        Sed sem mi, tempor id semper sed, commodo sed nisl. Praesent sit amet facilisis erat. Mauris vulputate neque ut
        arcu volutpat, ut commodo elit commodo. Nam non enim ipsum. Fusce eu mauris nec neque lobortis feugiat. Aliquam
        sollicitudin velit sed tincidunt sollicitudin. Curabitur dignissim nunc nisl, eget fringilla orci semper vitae.
        Etiam et lorem vel urna dignissim faucibus.</p>

    <div className='button-container'>
      <button className='btn btn-primary'>Learn More</button>
      <button className='btn btn-primary'>Get Started</button>
    </div>

 </div>
   );
  };


export default HomePage;
