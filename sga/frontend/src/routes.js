import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dasboard from "./views/Dasboard";
import PerfilUsuario from "./views/PerfilUsuario";
import AddNovoAtendimento from "./views/AddNovoAtendimento";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import AtendimentosLista from "./views/AtendimentosLista";
import EmpresaCadastro from "./views/Empresa";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dasboard" />
  },
  {
    path: "/dasboard",
    layout: DefaultLayout,
    component: Dasboard
  },
  {
    path: "/empresa",
    layout: DefaultLayout,
    component: EmpresaCadastro
  },
  {
    path: "/perfil-usuario",
    layout: DefaultLayout,
    component: PerfilUsuario
  },
  {
    path: "/novo-atendimento",
    layout: DefaultLayout,
    component: AddNovoAtendimento
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/atendimentos-lista",
    layout: DefaultLayout,
    component: AtendimentosLista
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
