import React,{useState,useEffect} from "react";
import api from '../../services/api';
import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
  
export default  function  UserAccountDetails(){  
  const[id,setId] =useState(1);
  const[nome,setNome] =useState('');
  const[razao_social,setRazao_social] =useState('');
  const[cnpj,setCNPJ] =useState();
  const[inscricao_estadual,setInscricao_estadual] =useState();
  const[inscricao_municipal ,setInscricao_municipal ] =useState();
  const[endereco,setEndereco] =useState();
  const[bairro,setBairro] =useState();
  const[cidade,setCidade] =useState();
  const[cep,setCep] =useState();
  const[email,setEmail] =useState();
  const[matriz,setMatriz] =useState();
  const[observacao,setObservacao] =useState(); 
  const[url_logo,setURL_logo] =useState();  

async function handleRegistrar(e){
  e.preventDefault();

  const data ={
    id,
    nome,
    razao_social,
    cnpj,
    inscricao_estadual,
    inscricao_municipal,
    endereco,
    bairro,
    cidade,
    cep,
    email,
    matriz,
    observacao,
    url_logo
  };  
   
  try {
    const response = await api.post('empresas/',data);
    alert(  'Empresa cadastrada com sucesso! Novo Código : '+ response.data.id);

    setId(response.data.id);
    setNome(response.data.nome);
    setRazao_social(response.data.razao_social);    

  }
  catch(err){
    alert('erro ao cadastar Empresa, tente novamente!')
  }
};
/*
useEffect(()=>{
  api.get('empresas/6').then(
    response=>{
      setId(response.data.id)
    }});*/
  
return(

  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Detalhes do Perfil</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form onSubmit={handleRegistrar}>            
              <Row form>
                {/* First Name */}              
                <Col md="6" className="form-group">
                  <label htmlFor="feNome">Nome</label>
                  <FormInput
                    id="feNome"
                    placeholder="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feRazaoSocial">Razão Social</label>
                  <FormInput
                    id="feRazaoSocial"
                    placeholder="Razão Social"
                    value={razao_social}
                    onChange={(e)=> setRazao_social(e.target.value)}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">E-mail</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fecnpj">CNPJ</label>
                  <FormInput                    
                    id="fecnpj"
                    placeholder="Senha"
                    value={cnpj}
                    onChange={(e) => setCNPJ(e.target.value)}                    
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feinscricaoMunicipal">Inscrição Municipal</label>
                  <FormInput                    
                    id="feinscricaoMunicipal"
                    placeholder= "Inscricao Municipal"
                    value={inscricao_municipal}
                    onChange={(e)=> setInscricao_municipal(e.target.value)}                 
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="feinscricaoEstadual">Inscrição Estadual</label>
                  <FormInput                    
                    id="feinscricaoEstadual"
                    placeholder="Inscrição Estadual"
                    value ={inscricao_estadual}               
                    onChange={(e) => setInscricao_estadual(e.target.value)}
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Endereço</label>
                <FormInput
                  id="feAddress"
                  placeholder="Rua / Lougradouro"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />
              </FormGroup>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feComplemento">Complemento</label>
                  <FormInput                    
                    id="feComplemento"
                    placeholder="Complemento"                    
                    onChange={() => {}}                    
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="feBairro">Bairro</label>
                  <FormInput                    
                    id="feBairro"
                    placeholder="Bairro"               
                    onChange={() => {}}

                  />
                </Col>
              </Row>

              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">Cidade</label>
                  <FormInput
                    id="feCity"
                    placeholder="City"
                    onChange={() => {}}
                  />
                </Col>
                {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">Estado</label>
                  <FormSelect id="feInputState">
                    <option>Selecione...</option>
                    <option>...</option>
                  </FormSelect>
                </Col>
                {/* Zip Code */}
                <Col md="2" className="form-group">
                  <label htmlFor="feZipCode">CEP</label>
                  <FormInput
                    id="feZipCode"
                    placeholder="Zip"
                    onChange={(e) => setCep(e.target.value)}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Observação</label>
                  <FormTextarea id="feDescription" rows="5" value={observacao} onChange={(e) => setObservacao(e.target.value)}  />                
                  

                </Col>
              </Row>
              <Button on theme="accent" >Atualizar Cadastro</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
)};