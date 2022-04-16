import React from 'react'

export default function Atividade(props) {
  
  function proridadeLabel(param) {
    switch(param) {
      case '1':
        return 'Baixa';
      case '2':
        return 'Normal';
      case '3':
        return 'Alta';
      default:
        return 'Não definido';
    }
  }

  function proridadeStyle(param, icone) {
    switch(param) {
      case '1':
        return icone ? 'smile' : 'success';
      case '2':
        return icone ? 'meh' : 'dak';
      case '3':
        return icone ? 'frown' : 'warning';
      default:
        return 'Não definido';
    }
  }

  return (
    <div className={"card mb-2 shadow-sm border-" + proridadeStyle(props.ativ.prioridade)}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">
              {props.ativ.id}
            </span>
              - {props.ativ.titulo}
          </h5>
          <h6>
            Prioridade:
            <span className={"ms-1 text-" + proridadeStyle(props.ativ.prioridade)}>
              <i className={"me-1 far fa-" + proridadeStyle(props.ativ.prioridade, true)}></i>
              {proridadeLabel(props.ativ.prioridade)}
            </span>
          </h6>
        </div>
        <p className="card-text">
          {props.ativ.descricao}
        </p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button 
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => props.pegarAtividade(props.ativ.id)}>
            <i className="fas fa-pen me-2"></i>
            Editar
          </button>
          <button 
            className="btn btn-sm btn-outline-danger" 
            onClick={() => props.deletarAtividade(props.ativ.id)}>
            <i className="fas fa-trash me-2"></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}
