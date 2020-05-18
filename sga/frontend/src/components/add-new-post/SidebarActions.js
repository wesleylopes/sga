/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import{ Link } from 'react-router-dom';
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button
} from "shards-react";

const SidebarActions = ({ title }) => (  
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">flag</i>
            <strong className="mr-1">Status:</strong> Concluido{" "}
            <a className="ml-auto" href="#">
            Alterar
            </a>
          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">visibility</i>
            <strong className="mr-1">Visibilidade:</strong>{" "}
            <strong className="text-success">Publica</strong>{" "}
            <a className="ml-auto" href="#">
              Alterar
            </a>
          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">calendar_today</i>
            <strong className="mr-1">Agendar:</strong> Hoje 08/05/2020{" "}
            <a className="ml-auto" href="#">
            Alterar
            </a>
          </span>
          <span className="d-flex">
            <i className="material-icons mr-1">score</i>
            <strong className="mr-1">Prioridade:</strong>{" "}
            <strong className="text-warning">MÉDIA</strong>
          </span>
        </ListGroupItem>
        <ListGroupItem className="d-flex px-3 border-0">
          
        <Link to="/atendimentos-lista"><Button theme="accent" size="sm" className="ml-auto">
            <i className="material-icons">file_copy</i> Salvar Atendimento
          </Button>
          </Link>

          <Button theme="accent" size="sm" className="ml-auto" type ="submit">
            <i className="material-icons">file_copy</i> Salvar Atendimento 2
          </Button>     

        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarActions.defaultProps = {
  title: "Ações"
};

export default SidebarActions;
