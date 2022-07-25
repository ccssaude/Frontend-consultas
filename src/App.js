import React from 'react';
import { fetchMacamo } from './api/';
import { fetchMavalane } from './api/';
import { fetchCentral } from './api/';
import { Button, Grid } from '@material-ui/core';
import CardComponent from './components/Cards/Card/Card';
import styles from './App.module.css';
import image from './images/top.png'


class App extends React.Component {
  state = {
    macamo: {},
    central: {},
    mavalane: {} 
  }

  async componentDidMount() {
    const macamo = await fetchMacamo();
    const central = await fetchCentral(); 
    const mavalane = await fetchMavalane();    
    this.setState({ macamo, central, mavalane });
  } 
  render() {
    const { macamo, central, mavalane } = this.state;     
    return (
      <div className={styles.container}>      
        <img className={styles.image} src={image} alt="Hospital de referencia" />
        <h3><b>Vagas disponiveis nos Hospitais</b></h3>       
      <Grid container spacing={1} justify="center">
        <CardComponent
          className={styles.macamo}
          cardTitle=" Hospital Geral José Macamo"
         realDate={macamo.data_disponivel}
          cardSubtitle="A paciente pode ter a consulta na data acima sugerida! "          
        />            
            
        <CardComponent
          className={styles.central}
          cardTitle="Hospital central de Maputo"
          realDate={central.data_disponivel}
          cardSubtitle="A paciente pode ter a consulta na data acima sugerida!"
        />
            
        <CardComponent
          className={styles.mavalane}
          cardTitle="Hospital Geral de Mavalane"
          realDate={mavalane.data_disponivel}
          cardSubtitle="A paciente pode ter a consulta na data acima sugerida!"
        />
      </Grid>
      <br></br>
      <a href="#" target="_blank" rel="noreferrer">
      <Button
        variant="contained"
        color="primary"
      >Agendar Consulta</Button>
      </a>
    </div>
    );    
  }
}

export default App;
