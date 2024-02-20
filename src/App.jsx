import './App.css'
import FirstParallax from "./components/FirstParallax"
import SecondParallax from "./components/SecondParallax"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";
import BaseHeroImage from './assets/images/layer-base.png'
import MiddleHeroImage from './assets/images/layer-middle.png'
import FrontHeroImage from './assets/images/layer-front-2.png'
import ArticleImage from './assets/images/dungeon.jpg'
import Header from "./components/Header";
import SectionContainer from "./components/SectionContainer";
import AnimatedTooltip from "./components/Member";
import { people } from "./utils/members";

function App() {

  return (
    <main className=" antialiased scroll-smooth flex flex-col relative w-full h-full " >
      <Header />
      <FirstParallax />
      <section
        style={{
          backgroundImage: `url(${ArticleImage})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
        className="content w-full h-full relative text-gray-200 bg-red-100 text-opacity-80 mx-auto min-h-screen ">

        {/* <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${FrontHeroImage})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        ></div> */}

        {/* <img className="absolute inset-0 -top-[350px] z-10 filter sepia-50 object-cover" src={FrontHeroImage} /> */}
        {/* <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(${ArticleImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        /> */}
        <SectionContainer title={'Members'} >
          <AnimatedTooltip items={people} />
        </SectionContainer>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint deleniti a praesentium quia dignissimos, excepturi ad tempora aperiam nisi odio quis minus sunt, provident veniam esse molestiae dolorem aliquam laborum.
        Nobis dolores dicta illo qui, perspiciatis earum, neque quo repellendus sapiente rem natus praesentium sequi commodi molestias reiciendis, modi maxime delectus nesciunt? Quidem, itaque quo! Consectetur sed quod quidem iure.
        Maxime tempore obcaecati maiores odio et iusto ipsa consequuntur magnam, quo reprehenderit hic consequatur debitis repellendus dolore ratione earum eos quidem amet vitae nesciunt quae nisi ex illum possimus. Consectetur.
        Dolorum ipsa pariatur quas eos. Minima nam unde, dolores velit amet laborum repudiandae recusandae possimus et cupiditate doloribus illo tenetur numquam accusamus perferendis porro quasi, autem, expedita qui! Excepturi, molestiae?
        Consectetur laudantium earum ex consequatur praesentium. Architecto laudantium quasi aspernatur omnis perferendis recusandae alias illo accusamus quos similique, optio asperiores sunt esse illum, consectetur incidunt doloremque. Reiciendis officia laborum officiis.
        Autem reiciendis repellat vero nulla, eligendi atque eum perspiciatis praesentium tempora pariatur minima ullam fugit vel, modi tenetur odit? Eius cum accusamus unde aliquid ab laboriosam aut esse molestiae cupiditate!
        Quidem, voluptates hic esse provident molestiae accusantium eos perspiciatis voluptatem blanditiis! Quos voluptatum, eveniet id iste accusamus rerum illo hic, quis aliquam provident dolorem accusantium vitae assumenda officia totam ratione.
        Doloribus quia consequatur cumque atque saepe placeat maiores amet at eaque? Obcaecati, sit voluptas tempora consectetur nostrum vel quis iusto, odio corrupti, deleniti ad eum dolorem magni animi incidunt repellendus.
        Officiis, placeat. Culpa itaque corrupti sint ducimus doloribus, perferendis recusandae sed nesciunt iure deleniti aut nisi, repudiandae eaque. Quisquam illo eligendi ab laudantium totam in reiciendis accusantium placeat possimus repellendus!
        Aliquam perferendis animi soluta voluptates nam nostrum delectus cumque dolor velit est illo, reiciendis ea beatae eveniet dolorem recusandae tenetur temporibus officiis. Alias quo ratione animi reprehenderit temporibus! Molestias, sed!
      </section>
      <SecondParallax />
    </main>
  )
}

export default App
