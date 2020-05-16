export default function() {
  return [
    {
      title: "Visão Geral",
      to: "/dasboard",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },    
    {
      title: "Novo Atendimento",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/novo-atendimento",
    },       
    {
      title: "Lista de Atendimentos",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/atendimentos-lista",
    }
  ];
}
