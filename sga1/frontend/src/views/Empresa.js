import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import CadastroEmpresa from "../components/empresa/CadastroEmpresa";

const EmpresaCadastro = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Cadastro de Empresa" subtitle="Edição/Leitura" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>     
      <Col lg="12">
        <CadastroEmpresa />
      </Col>
    </Row>
  </Container>
);

export default EmpresaCadastro;
