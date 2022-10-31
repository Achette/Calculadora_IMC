import React from "react";
import styles from "./App.module.css";
import Logo from "./assets/powered.png";
import GridItem from "./components/GridItem";
import { calculateImc, Level, levels } from "./helpers/imc";
import leftArrow from "./assets/leftarrow.png";

const App = () => {
  const [heightField, setHeightField] = React.useState<number>(0);
  const [weightField, setWeightField] = React.useState<number>(0);
  const [showItem, setShowItem] = React.useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setShowItem(calculateImc(heightField, weightField));
    } else {
      alert("Preencha todos os campos corretamente!");
    }
  };

  const handleBackButton = () => {
    setShowItem(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={Logo} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla de Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />

          <input
            type="number"
            placeholder="Digite a seu peso. Ex: 60.5 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!showItem && (
            <div className={styles.grid}>
              {levels.map((item, index) => (
                <GridItem key={index} item={item} />
              ))}
            </div>
          )}
          {showItem && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} alt="" width={25} />
              </div>
              <GridItem item={showItem} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
