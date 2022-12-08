import React from "react";

export default function Contact() {
  

  return (
    <section id="contact" className="relative">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Contact Me
            </h2>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                joshuamangerino13@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                <a href="https://www.linkedin.com/in/joshua-mangerino/">LINKEDIN</a> 
              </h2>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                <a href="https://github.com/jmangerino?tab=repositories/">GITHUB</a> 
              </h2>
              
            </div>
          </div>
      </div>
    </section>
  );
}
