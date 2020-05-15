import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody, Button,InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect
   } from "shards-react";
import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Lista de Atendimentos" subtitle="Atendimentos" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        
        <Card small className="mb-4">     
          <CardHeader className="border-bottom">           
          </CardHeader>     
          <CardBody className="p-3 pb-3">   
          <Link to="/novo-atendimento">           
              <Button size="md" theme="success" className="mb-12 mr-1">
              <i class="material-icons">add</i> Adicionar
              </Button>  
</Link>    

              <Button outline size="md" theme="secondary" className="mb-12 mr-1">
              <i class="material-icons">print</i> Imprimir
              </Button> 
          </CardBody>
        </Card>
      </Col>
    </Row>    
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Número
                  </th>
                  <th scope="col" className="border-0">
                    Quando
                  </th>
                  <th scope="col" className="border-0">
                    Assunto
                  </th>
                  <th scope="col" className="border-0">
                    Cliente
                  </th>
                  <th scope="col" className="border-0">
                    Analista
                  </th>
                  <th scope="col" className="border-0">
                    Descrição
                  </th>
                  <th scope="col" className="border-0">
                    Situação
                  </th>
                </tr>
              </thead>
              
              <tbody> 
                <tr>
                  <td>1</td>
                  <td>1/2020</td>
                  <td>A 1 Minuto</td>
                  <td>Cadastro de Clientes</td>
                  <td>Max Wilhelm</td>
                  <td>Rycardo Correia</td>
                  <td>Erro ao salvar cadastro "falha Catastrofica</td>
                  <td > <Link to="/novo-atendimento">Editar</Link>  </td>               
                </tr> 
              </tbody>              
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>    
  </Container>
);

export default Tables;
