export type Level = {
  title: string;
  color: string;
  icon: "up" | "down";
  imc: number[];
  yourImc?: number;
};

export const levels: Level[] = [
  { title: "Abaixo do peso", color: "#96a3ad", icon: "down", imc: [0, 18.5] },
  { title: "Normal", color: "#0ead69", icon: "up", imc: [18.6, 24.9] },
  { title: "Sobrepeso", color: "#e2b036", icon: "down", imc: [25.0, 30.0] },
  { title: "Obesidade", color: "#c3243f", icon: "down", imc: [30.1, 99] },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);
  console.log(imc);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      let levelCopy: Level = { ...levels[i] };

      levelCopy.yourImc = parseFloat(imc.toFixed(2));
      return levelCopy;
    }
  }
  return null;
};
