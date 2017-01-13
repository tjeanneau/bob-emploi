import React from 'react'

import {Colors} from 'components/theme'

// Keep this class in sync with index.html.
class WaitingPage extends React.Component {

  render() {
    const style = {
      alignItems: 'center',
      background: Colors.BACKGROUND_GREY,
      boxSizing: 'border-box',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      position: 'fixed',
      width: '100vw',
    }
    return <div style={style}>
      <img src={require('images/logo-bob-emploi-loading.svg')} alt="Chargement…" />
    </div>
  }
}

export {WaitingPage}
