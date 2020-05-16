import React from "react";
import { Container, Button } from "shards-react";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>500</h2>
        <h3>Existe algo errado!</h3>
        <p>Não foi possivel carregar. Por favor tente novamente.</p>
        <Button pill>&larr; Voltar Página </Button>
      </div>
    </div>
  </Container>
);

export default Errors;
