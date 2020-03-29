import React from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

import Conteudo from './Conteudo'
import imgPhoto from '../assets/img/desenvolvedor.png'

function Card() {
  return (
    <div className="row mt-3">
      <div className="col-md-4">
        <div className="card mb-3">
          <img src={imgPhoto} alt="" className="card-img rounded-circle text-center" />
          <div className="card-body text-center">
            <h4 className="card-title">Huriel Lopes</h4>
            <h6 className="card-subtitle mb-3">Analista de Sistemas</h6>
            <a
              href="https://www.linkedin.com/in/huriellopes"
              target="{_blank}"
              className="card-link">
              <FiLinkedin size={18} color="#0e76a8" />
            </a>
            <a
              href="https://github.com/huriellopes"
              target="{_blank}"
              className="card-link">
                <FiGithub size={18} color="#000000" />
              </a>
          </div>
        </div>
      </div>
      <Conteudo />
    </div>
  )
}

export default Card
