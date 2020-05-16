import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
  Row,
  Col,
  FormSelect
} from "shards-react";

const TopReferrals = ({ title, referralData }) => (
  <Card small>
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
            <span className="text-semibold text-fiord-blue">{item.title}</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        {/* Time Span */}
        <Col>
          <FormSelect
            size="sm"
            value="last-week"
            style={{ maxWidth: "130px" }}
            onChange={() => {}}
          >
            <option value="last-week">Ultima Semana </option>
            <option value="today">Hoje</option>
            <option value="last-month">Ultimo Mês</option>
            <option value="last-year">Ultimo Ano</option>
          </FormSelect>
        </Col>

        {/* View Full Report */}
        <Col className="text-right view-report">
          {/* eslint-disable-next-line */}
          <a href="#">Clique para ver o Relatório Completo &rarr;</a>
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

TopReferrals.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

TopReferrals.defaultProps = {
  title: "Ranking Projetos com mais Suporte",
  referralData: [
    {
      title: "Pedido de Faturamento",
      value: "20"
    },
    {
      title: "Sped Fiscal",
      value: "11"
    },
    {
      title: "Nota Fiscal Eletrônica",
      value: "50"
    },
    {
      title: "Entrada de Almoxarifado",
      value: "8"
    },
    {
      title: "Relatório de Movimentação de Clientes",
      value: "7"
    },
    {
      title: "Sped Contabil",
      value: "6"
    },
    {
      title: "Relatório de Previsão de Pagamento por Data",
      value: "13"
    },
    {
      title: "Pagamento_Fornecedores",
      value: "15"
    }
  ]
};

export default TopReferrals;
