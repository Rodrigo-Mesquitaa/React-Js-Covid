import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import { ContainerStyled } from './style'

function Main() {
  const [data, setData] = useState({})
  const [pais, setPais] = useState('brazil')
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((pais) => {
    Api.getPais(pais)
      .then(data => setData(data))
  }, [])

  useEffect(() => {    
    getCovidData(pais)
  }, [getCovidData, pais])

  const handleChange = ({ target }) => {
    const pais = target.value
    setPais(pais)
  }

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          pais={pais}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
      
    </ContainerStyled>
  )
}

export default memo(Main)