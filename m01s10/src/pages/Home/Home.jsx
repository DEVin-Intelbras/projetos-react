import {
  AccordionGroup,
  CardGroup,
  Card,
  ButtonGroup,
  Button,
  Accordion,
} from "../../components";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Composição CardGroup</h2>
      <CardGroup>
        <Card titulo="Card 1" descricao="Lorem ipsum dolor sit amet." />
        <Card titulo="Card 1" descricao="Lorem ipsum dolor sit amet." />
        <Card titulo="Card 1" descricao="Lorem ipsum dolor sit amet." />
        <Card titulo="Card 1" descricao="Lorem ipsum dolor sit amet." />
        <Card titulo="Card 1" descricao="Lorem ipsum dolor sit amet." />
        <Card titulo="Card 1" descricao="Lorem ipsum dolor sit amet." />
      </CardGroup>
      <hr />
      <h2>Composição ButtonGroup</h2>
      <ButtonGroup>
        <Button>Sei lá</Button>
        <Button>Sei lá o que mais</Button>
        <Button>Sei lá o que mais</Button>
      </ButtonGroup>
      <hr />
      <h2>Composição CardGroup</h2>
      <AccordionGroup>
        <Accordion title="Conteúdo de texto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          accusantium laudantium, voluptate quidem placeat sit ea minima
          obcaecati aperiam excepturi.
        </Accordion>
        <Accordion title="Conteúdo HMTL (jsx)">
          <h3>Conteúdo JSX</h3>
          <p>Qualquer tipo de conteúdo pode ser incluído dentro do accordion</p>
        </Accordion>
        <Accordion title="Conteúdo de vídeo">
          <h3>Vídeo</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/b_4ZchFAYRs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Accordion>
      </AccordionGroup>
      <hr />
    </div>
  );
};

//#region
// <Accordion expanded={true} />
// <Accordion expanded={false} />
// <Accordion expanded={false} />
//#endregion
