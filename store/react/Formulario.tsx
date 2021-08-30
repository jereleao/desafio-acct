import React from 'react'

interface Lead {
  nome: string
  telefone: string
  empresa: string
  numcolaboradores: string
  email: string
  pais: string
  cargo: string
  url: string
  caixa: string
}

const Formulario: StorefrontFunctionComponent = () => {
  const [lead, setLead] = React.useState({
    nome: '',
    telefone: '',
    empresa: '',
    numcolaboradores: '',
    email: '',
    pais: '',
    cargo: '',
    url: '',
    caixa: '',
  })

  const handleFormChange = (property: string, value: string) =>
    setLead(prev => ({ ...prev, [property]: value }))

  const sendLead = (lead: Lead) => {
    console.log(lead)
  }
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    sendLead(lead)
  }

  return (
      <div className="flex justify-end center w-70">
        <form onSubmit={handleSubmit} className="flex flex-column w-50">
          <h3>Solicite nosso contato:</h3>
          <div className="flex mb5">
            <label className="w-50  flex flex-column mr4">
              Nome*
              <input
                className="w-100 br1 hover-b--muted-3 ba mt2 pa3"
                name="nome"
                type="text"
                value={lead.nome}
                required
                onChange={({
                  target: { value },
                }: any) =>
                  handleFormChange("nome", value)
                }
              />
            </label>
            <label className="w-50 flex flex-column">
              E-mail*
              <input
                className="w-100 hover-b--muted-3 br1 ba mt2 pa3"
                type="text"
                name="email"
                value={lead.email}
                required
                onChange={({
                  target: { value },
                }: any) =>
                  handleFormChange("email", value)
                }
              />
            </label>
          </div>
          <div className="flex mb5">
            <label htmlFor="telefone" className="w-50 flex flex-column mr4">
              Telefone*
              <input
                id="telefone"
                className="w-100 hover-b--muted-3 br1 ba mt2 pa3"
                type="tel"
                value={lead.telefone}
                required
                onChange={({
                  target: { value },
                }: any) =>
                  handleFormChange("telefone", value)
                }
              />
            </label>
            <label htmlFor="pais" className="w-50 flex flex-column">
              País*
              <input
                id="pais"
                className="w-100 hover-b--muted-3 br1 ba mt2 pa3"
                type="text"
                name="pais"
                value={lead.pais}
                required
                onChange={({
                  target: { value },
                }: any) =>
                  handleFormChange("pais", value)
                }
              />
            </label>
          </div>
          <div className="flex mb5">
            <label htmlFor="empresa" className="w-50 flex flex-column mr4">
              Empresa*
              <input
                id="empresa"
                className="w-100 hover-b--muted-3 br1 ba mt2 pa3"
                type="text"
                name="empresa"
                value={lead.empresa}
                required
                onChange={({
                  target: { value },
                }: any) =>
                  handleFormChange("empresa", value)
                }
              />
            </label>
            <label htmlFor="cargo" className="w-50 flex flex-column">
              Cargo
              <input
                id="cargo"
                className="w-100 hover-b--muted-3 br1 ba mt2 pa3"
                type="text"
                name="cargo"
                value={lead.cargo}
                onChange={({
                  target: { value },
                }: any) =>
                  handleFormChange("cargo", value)
                }
              />
            </label>
          </div>
          <div className="flex mb5">
            <label
              htmlFor="numcolaboradores"
              className="w-50 flex flex-column mr4"
            >
              Número de colaboradores
              <input
                id="numcolaboradores"
                className="w-100 hover-b--muted-3 br1 ba mt2 pa3"
                type="number"
                name="colaboradores"
                value={lead.numcolaboradores}
                onChange={({
                  target: { value },
                }: any) =>
                  handleFormChange("numcolaboradores", value)
                }
              />
            </label>
            <label htmlFor="url" className="w-50 flex flex-column">
              URL do site
              <input
                id="url"
                className="w-100 hover-b--muted-3 br1 ba mt2 pa3"
                type="text"
                name="url"
                value={lead.url}
                onChange={({
                  target: { value },
                }: any) =>
                  handleFormChange("url", value)
                }
              />
            </label>
          </div>
          <div className="flex mb5">
            <label htmlFor="caixa" className="w-100 flex flex-column">
              Como podemos ajudar?*
              <textarea
                id="caixa"
                className="w-100 hover-b--muted-3 content-start mt2 ba br1 h4"
                name="caixa"
                value={lead.caixa}
                required
                onChange={({
                  target: { value },
                }: any) =>
                  handleFormChange("caixa", value)
                }
              ></textarea>
            </label>
          </div>
          <button
            className="mt4 b pv3 br1 ba b--button-blue bw1 c-button-blue  bg-white hover-white hover-bg-button-blue"
            type="submit"
            style={{ width: "84px" }}
          >
            Enviar
          </button>
          {/*{data && <p className="c-button-blue">Obrigado pela sua mensagem, já foi enviada</p>}
          {error && <p className="b--warning ba bw1 b--solid pv3 ph6">Ocorreu um erro ao tentar enviar sua mensagem. Por favor, tente novamente mais tarde.</p> } */}
        </form>
      </div>
  )
}

Formulario.schema = {
  title: 'editor.Formulario.title',
  description: 'editor.Formulario.description',
  type: 'object',
  properties: {},
}

export default Formulario
