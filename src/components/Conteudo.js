import React from 'react'

function Conteudo() {
  return (
    <div className="col-md-8">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Descrição</h5>
          <p className="card-text">
            Graduado em Análise e Desenvolvimento de Sistemas pela UDF -
            Centro Universitário do Distrito Federal, atualmente pós-graduando em Banco de Dados
            pela Faculdade Unyleya - WPos, com uma experiência de quase 2 anos na área de desenvolvimento
            e de suporte a sistemas!
          </p>
        </div>

        <div className="card-body">
          <h5 className="card-title">Formação Acadêmica</h5>
          <p className="card-text">
            Banco de Dados - <strong>WPos - Faculdade Unyleya </strong>Brasília/DF -
            Abril/2019 - <strong>Em Andamento</strong>
          </p>
          <p className="card-text">
            Análise e Desenvolvimento de Sistemas - <strong>Centro Universitário do Distrito Federal -
              UDF </strong>Brasília/DF - Agosto/2015 - Junho/2018
          </p>
        </div>

        <div className="card-body">
          <h5 className="card-title">Experiência Profissional</h5>

          <div className="card mb-3">
            <div className="card-body">
              <h6 className="card-subtitle">
                Analista CTS (Desenvolvedor PHP) - <strong>CTS</strong> - Brasília/DF - Junho/2019 - <strong>Atualmente</strong>
              </h6>
              <p className="card-text mt-2">
                Trabalho na empresa CTS, terceirizado no Bancoob, como Analista de Sistemas, no desenvolvimento/manutenção e sistemas
                que já se encontram no mercado usando as tecnologias Joomla CMS e Laravel Framework, participando do desenvolvimento de
                novos projetos que vão surgindo no Laravel Framework, sempre prezando pela seguraça de dados.
              </p>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h6 className="card-subtitle">
                Programador Laravel Júnior - <strong>Money Cloud</strong> -
                Brasília/DF - Janeiro/2019 - Maio/2019
              </h6>
              <p className="card-text mt-2">
                Atuei como PJ, como participação no desenvolvimento e dando manutenção
                nos sistemas que já se encontram no mercado, também com participação nos
                futuros sistemas da empresa, usando sempre a última versão do Laravel Framework,
                usando Docker e MySQL.
              </p>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h6 className="card-subtitle">
                Desenvolvedor Júnior - <strong>Ambientare - Soluções em Meio Ambiente</strong> -
                Brasília/DF - Novembro/2018 - Dezembro/2018
              </h6>
              <p className="card-text mt-2">
                Atuei como PJ, como participação no desenvolvimento do sistema de gestão ambiental
                com foco em clientes da área ambiental, ficando responsável pelo desenvolvimento de
                telas do sistema, usando as tecnologias VueJs e Vuetify.
              </p>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h6 className="card-subtitle">
                Estagiário em Análise e Desenvolvimento de Sistemas - <strong>Secretaria Nacional do Consumidor (Senacon)</strong> -
                Brasília/DF - Setembro/2016 - Julho/2018
              </h6>
              <p className="card-text mt-2">
                Atuei no Suporte Sindec, onde atendi demandas dos Procons do Brasil, dos 27 estados via telefone e/ou
                acesso remoto, realizei manutenções evolutivas e corretivas nas linguagens de programação Asp Classi e PHP,
                analisei e redigi scripts em linguagem SQL, administrei Bancos de Dados Mysql nas versões 4 e 5, monitorei
                sistemas operacionais e VPNs, sempre buscando soluções para problemas no sistema SINDEC -
                Sistema Nacional de Informações de Defesa do Consumidor.
              </p>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">Habilidades</h5>
          <div className="card">
            <div className="card-body">
              <h6 className="card-subtitle mb-3">
                Frontend
              </h6>
              <p className="card-text">
                HTML5
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  style={{ width: '80%' }}
                  aria-valuemax="100">80%</div>
              </div>

              <p className="card-text mt-3">
                CSS3
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  style={{ width: '70%' }}
                  aria-valuemax="100">70%</div>
              </div>
            </div>

            <div className="card-body">
              <h6 className="card-subtitle mb-3">
                Backend
              </h6>
              <p className="card-text">
                PHP
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  style={{ width: '85%' }}
                  aria-valuemax="100">85%</div>
              </div>

              <p className="card-text mt-3">
                NodeJS
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  style={{ width: '30%' }}
                  aria-valuemax="100">30%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">Projetos e Artigos</h5>
          <p className="card-text">
          </p>
        </div>
      </div>
    </div>
  )
}

export default Conteudo
