"use client";
import About from "@/components/sections/about/About";
import Blogs from "@/components/sections/blogs/Blogs";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Brands from "@/components/sections/brands/Brands";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero1 from "@/components/sections/hero-banners/Hero1";
import Projects from "@/components/sections/projects/Projects";

import OfferedServices from "@/components/sections/services/OfferedServices";
import Team from "@/components/sections/team/Team";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Video from "@/components/sections/videos/Video";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";

const IndexMain = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero1 />
      <About />
      <OfferedServices />
      {/* <Video /> */}
      
      <Team />



      <PinkColor /> 
       <Projects />
      {/* <Testimonials /> */}
      {/* {isOnepage ? <Contact1 /> : ""} */}
     
      {/* <Brands /> */}
      <Blogs />

      
      <Contact1/>
    </main>
  );
};

export default IndexMain;
