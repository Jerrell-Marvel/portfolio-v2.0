import { AnimatePresence, motion } from "framer-motion";

const bgVariants = {
  // hidden: {
  //   width: "0%",
  // },
  visible: {
    width: ["0%", "100%"],
    x: "100%",
    transition: {
      x: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeInOut",
      },
      duration: 0.5,
    },
  },
};
const JerrellStore = () => {
  return (
    <div className="min-h-screen">
      <div>
        <h3 className="text-5xl sm:text-7xl md:text-9xl font-extrabold">Jerrell Store</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere, fuga dicta nesciunt fugit temporibus autem quidem id, facilis aliquam quasi nostrum nulla dolorum deleniti odio iste quam voluptate laboriosam? At itaque totam,
          voluptatem dolorem maxime officia quo commodi, porro reiciendis sunt nisi placeat. Facere beatae illo odit at enim ut sapiente velit! Delectus deserunt ab ullam modi non distinctio laboriosam soluta sit, commodi, voluptatibus
          officiis magni, atque facilis illo porro vero itaque doloremque reiciendis enim facere corrupti officia! Laborum animi a doloribus, impedit dolorum dolor, quis exercitationem quam vitae ab sit alias! Nam voluptatum velit cum
          facere. Qui animi architecto quibusdam ea harum dolores inventore voluptatum quo praesentium, ut adipisci eaque, ab omnis possimus nesciunt nostrum odio assumenda deleniti aliquid ipsa officiis facilis magni! Natus iste asperiores
          quos obcaecati deleniti nisi impedit cum tempora non quasi similique ea corrupti corporis itaque ab nihil incidunt doloremque laudantium nostrum qui, rerum at suscipit provident nobis! Incidunt ducimus veritatis exercitationem
          odit. Tempore cupiditate deleniti accusamus odit labore necessitatibus temporibus, nihil, totam inventore vero quis molestias cum assumenda nesciunt culpa aperiam, consectetur reprehenderit eaque iure repellat excepturi corporis
          at natus autem! Accusantium, neque quas. Suscipit magni minima doloremque, eos officiis numquam provident accusantium.
        </p>
      </div>
    </div>
  );
};
export default JerrellStore;
