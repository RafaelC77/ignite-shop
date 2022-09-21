import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";

import tee1 from "../assets/tees/1.png";
import tee2 from "../assets/tees/2.png";
import tee3 from "../assets/tees/3.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tee1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={tee2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
