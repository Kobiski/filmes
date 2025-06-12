// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// Paddington, LIVRE, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama

let campoIdade;
let campoFantasia

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15");
  campoFantasia = createCheckbox("Gosta de Fantasia");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
  text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade, gostaDeFantasia){
  if(idade>=10){
    if (idade>=14){
      return "O menino que descobriu o vento";
    } else{
      if(gostaDeFantasia){
    return "As aventuras de Pi";
  } else{
    return "Depois da Chuva";
  }
  }
} return "A viagem de Chichiro";
  }
  
