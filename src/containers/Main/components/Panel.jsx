/* eslint-disable no-unused-vars */
import React, { memo } from 'react'
import RefreshIcon from '../../../img/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import PAISES from '../../../commons/constants/paises'
import { CardPanelContentStyled, ItemStyled } from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, pais, getCoviddata }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data

  const renderPaises = (pais, index) => (
    <MenuItem key={`pais-${index}`} value={pais.value}>
      <ItemStyled>
        <div>{pais.label}</div>
        <img src={pais.flag} alt={`País-${pais.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `País: ${pais} - recuperados: ${recovered}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${pais}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h4" component="span" color="primary">Corona</Typography>
          <p></p>
          <Typography variant="h6" component="span" color="primary">Painel</Typography>
           <p/>
          <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={pais}>
              {PAISES.map(renderPaises)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)