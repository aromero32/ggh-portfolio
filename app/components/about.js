// components/About.jsx

import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan pellentesque turpis vel 
            sagittis. Nunc et libero eget justo pulvinar semper ut vitae justo. Morbi ac massa odio. Morbi mollis 
            purus consequat turpis ultricies, sed egestas ligula convallis. Curabitur et urna in ligula rutrum 
            egestas. Praesent condimentum purus nec scelerisque scelerisque. Vivamus in velit iaculis, lacinia 
            massa a, dignissim eros. Duis lacinia neque et ex venenatis, at sodales dui tincidunt.
          </p>
          <p>
            Etiam eget risus a urna sollicitudin faucibus ac vel massa. Nulla dignissim nisl nibh, eu accumsan ipsum 
            interdum tincidunt. Etiam porttitor felis mi, nec varius tellus efficitur eget. Praesent id nisl eget elit 
            blandit tempus. Maecenas vel eros nisi. Fusce vitae maximus eros. Cras vel congue est. Aliquam vehicula 
            commodo erat, eu convallis metus euismod vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Mauris quis neque non orci vestibulum sagittis. Nam nulla ipsum, congue eu sapien a, sollicitudin 
            sollicitudin mauris. Nunc consequat vulputate libero, at laoreet lorem semper quis. Etiam rhoncus velit 
            quam, id dictum lacus suscipit bibendum.
          </p>
        </div>
        <div className="about-img">
          <Image src='/images/genesis_throne.jpeg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;