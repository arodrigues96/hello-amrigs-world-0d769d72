export interface Question {
  id: number;
  area: string;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

// Questões de 2023 - 25 questões (versão free)
export const questions25_2023: Question[] = [
  {
    id: 1,
    area: "Clínica Médica",
    question: "Analise o gráfico abaixo, considerando que a linha horizontal de base corresponda ao tempo de ação e a linha vertical do gráfico corresponda à concentração sérica. No caso de a função renal estar normal, pode-se afirmar que os antibióticos correspondentes ao representado pela linha contínua e ao representado pela linha pontilhada podem ser, respectivamente:",
    options: [
      "Amoxicilina e cefuroxima.",
      "Ciprofloxacino e meropenem.",
      "Oxacilina e amicacina.",
      "Ampicilina e ciprofloxacino."
    ],
    correct: 2,
    explanation: "Oxacilina e amicacina têm características farmacocinéticas compatíveis com as curvas de concentração sérica mostradas, considerando função renal normal."
  },
  {
    id: 2,
    area: "Clínica Médica",
    question: "Qual das seguintes situações clínicas apresenta um quadro mais provável de doença reumatológica em um paciente com artralgia?",
    options: [
      "Paciente de 25 anos de idade, cefaleia recorrente, com resultado de Fator Antinuclear (FAN) 1:160, padrão citoplasmático fibrilar linear em exame de rotina.",
      "Paciente de 60 anos de idade, com histórico de fadiga, com resultado de FAN 1:640, padrão nuclear pontilhado grosso.",
      "Paciente de 30 anos de idade, em tratamento para acne com isotretinoína, com mialgias e resultado de FAN 1:320, padrão citoplasmático pontilhado polar.",
      "Paciente de 45 anos de idade, com histórico de infecção respiratória recente, resultado de FAN 1:160, padrão citoplasmático fibrilar filamentar."
    ],
    correct: 1,
    explanation: "FAN em título alto (1:640) com padrão nuclear pontilhado grosso está associado a doenças reumatológicas, especialmente lupus eritematoso sistêmico em pacientes idosos com fadiga."
  },
  {
    id: 3,
    area: "Clínica Médica",
    question: "Analise as assertivas abaixo: I. A síndrome da secreção inadequada do hormônio antidiurético é uma causa de hipernatremia. II. Leucócitos superiores a 100.000 podem causar pseudo-hipercalemia. III. Hiperfosfatemia pode ser causada pela síndrome de realimentação. IV. Hipercalcemia é o distúrbio eletrolítico mais frequente nas síndromes paraneoplásicas. Quais estão corretas?",
    options: [
      "Apenas I e III.",
      "Apenas II e IV.",
      "Apenas I, II e III.",
      "Apenas I, II e IV."
    ],
    correct: 1,
    explanation: "A hipernatremia não é causada pela SIADH (síndrome de secreção inadequada do hormônio antidiurético); leucócitos elevados podem causar pseudo-hipercalemia e a hipercalcemia é comum em síndromes paraneoplásicas."
  },
  {
    id: 4,
    area: "Clínica Médica",
    question: "Homem, 48 anos, procura emergência com desconforto torácico. Analise o seu eletrocardiograma abaixo: Considerando as informações apresentadas, o tratamento inicial para esse paciente é:",
    options: [
      "Anticoagulação a pleno.",
      "Dupla antiagregação plaquetária.",
      "Angioplastia coronária.",
      "Trombólise."
    ],
    correct: 0,
    explanation: "O tratamento inicial para o quadro apresentado é anticoagulação plena para prevenir tromboses; outras medidas dependem da evolução clínica e achados."
  },
  {
    id: 5,
    area: "Clínica Médica",
    question: "Analise a figura abaixo, na qual a imagem da esquerda representa o ambiente intracelular e a da direita representa o ambiente extracelular. Considerando que os itens \"A\" e \"C\" tenham maiores concentrações intracelulares e que o item \"B\" tenha maior concentração extracelular, as letras A, B e C correspondem, respectivamente, aos eletrólitos:",
    options: [
      "Cloro, potássio e sódio.",
      "Potássio, sódio e magnésio.",
      "Fosfato, cloro e sódio.",
      "Potássio, sódio e cloro."
    ],
    correct: 1,
    explanation: "Potássio é maior intracelular, sódio maior extracelular, e magnésio se distribui conforme o esquema indicado, confirmando a sequência correta."
  }
  // Adicionar mais questões conforme necessário
];

// Questões de 2024 - 25 questões (versão free)
export const questions25_2024: Question[] = [
  {
    id: 1,
    area: "Clínica Médica",
    question: "Analise o gráfico abaixo, considerando que a linha horizontal de base corresponda ao tempo de ação e a linha vertical do gráfico corresponda à concentração sérica. No caso de a função renal estar normal, pode-se afirmar que os antibióticos correspondentes ao representado pela linha contínua e ao representado pela linha pontilhada podem ser, respectivamente:",
    options: [
      "Amoxicilina e cefuroxima.",
      "Ciprofloxacino e meropenem.",
      "Oxacilina e amicacina.",
      "Ampicilina e ciprofloxacino."
    ],
    correct: 2,
    explanation: "Oxacilina e amicacina têm características farmacocinéticas compatíveis com as curvas de concentração sérica mostradas, considerando função renal normal."
  },
  {
    id: 2,
    area: "Clínica Médica",
    question: "Qual das seguintes situações clínicas apresenta um quadro mais provável de doença reumatológica em um paciente com artralgia?",
    options: [
      "Paciente de 25 anos de idade, cefaleia recorrente, com resultado de Fator Antinuclear (FAN) 1:160, padrão citoplasmático fibrilar linear em exame de rotina.",
      "Paciente de 60 anos de idade, com histórico de fadiga, com resultado de FAN 1:640, padrão nuclear pontilhado grosso.",
      "Paciente de 30 anos de idade, em tratamento para acne com isotretinoína, com mialgias e resultado de FAN 1:320, padrão citoplasmático pontilhado polar.",
      "Paciente de 45 anos de idade, com histórico de infecção respiratória recente, resultado de FAN 1:160, padrão citoplasmático fibrilar filamentar."
    ],
    correct: 1,
    explanation: "FAN em título alto (1:640) com padrão nuclear pontilhado grosso está associado a doenças reumatológicas, especialmente lupus eritematoso sistêmico em pacientes idosos com fadiga."
  },
  {
    id: 3,
    area: "Clínica Médica",
    question: "Analise as assertivas abaixo: I. A síndrome da secreção inadequada do hormônio antidiurético é uma causa de hipernatremia. II. Leucócitos superiores a 100.000 podem causar pseudo-hipercalemia. III. Hiperfosfatemia pode ser causada pela síndrome de realimentação. IV. Hipercalcemia é o distúrbio eletrolítico mais frequente nas síndromes paraneoplásicas. Quais estão corretas?",
    options: [
      "Apenas I e III.",
      "Apenas II e IV.",
      "Apenas I, II e III.",
      "Apenas I, II e IV."
    ],
    correct: 1,
    explanation: "A hipernatremia não é causada pela SIADH (síndrome de secreção inadequada do hormônio antidiurético); leucócitos elevados podem causar pseudo-hipercalemia e a hipercalcemia é comum em síndromes paraneoplásicas."
  },
  {
    id: 4,
    area: "Clínica Médica",
    question: "Homem, 48 anos, procura emergência com desconforto torácico. Analise o seu eletrocardiograma abaixo: Considerando as informações apresentadas, o tratamento inicial para esse paciente é:",
    options: [
      "Anticoagulação a pleno.",
      "Dupla antiagregação plaquetária.",
      "Angioplastia coronária.",
      "Trombólise."
    ],
    correct: 0,
    explanation: "O tratamento inicial para o quadro apresentado é anticoagulação plena para prevenir tromboses; outras medidas dependem da evolução clínica e achados."
  },
  {
    id: 5,
    area: "Clínica Médica",
    question: "Analise a figura abaixo, na qual a imagem da esquerda representa o ambiente intracelular e a da direita representa o ambiente extracelular. Considerando que os itens \"A\" e \"C\" tenham maiores concentrações intracelulares e que o item \"B\" tenha maior concentração extracelular, as letras A, B e C correspondem, respectivamente, aos eletrólitos:",
    options: [
      "Cloro, potássio e sódio.",
      "Potássio, sódio e magnésio.",
      "Fosfato, cloro e sódio.",
      "Potássio, sódio e cloro."
    ],
    correct: 1,
    explanation: "Potássio é maior intracelular, sódio maior extracelular, e magnésio se distribui conforme o esquema indicado, confirmando a sequência correta."
  }
  // Adicionar mais questões conforme necessário
];

// Questões de 2023 - 100 questões (versão premium)
export const questions100_2023: Question[] = [
  ...questions25_2023,
  // Adicionar mais 75 questões aqui
];

// Questões de 2024 - 100 questões (versão premium)
export const questions100_2024: Question[] = [
  ...questions25_2024,
  // Adicionar mais 75 questões aqui
];

// Função para embaralhar array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Função para pegar questões aleatórias
export const getRandomQuestions = (questions: Question[], count: number) => {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, count);
};

export const quizData = {
  free25_2023: {
    title: "Simulado Gratuito - 25 Questões 2023",
    description: "25 questões da prova AMRIGS 2023 para você testar seus conhecimentos gratuitamente",
    year: "2023",
    type: "free_25_2023" as const,
    isPremium: false,
    questions: getRandomQuestions(questions25_2023, 25)
  },
  free25_2024: {
    title: "Simulado Gratuito - 25 Questões 2024",
    description: "25 questões da prova AMRIGS 2024 para você testar seus conhecimentos gratuitamente",
    year: "2024",
    type: "free_25_2024" as const,
    isPremium: false,
    questions: getRandomQuestions(questions25_2024, 25)
  },
  premium100_2023: {
    title: "Simulado Premium - 100 Questões 2023",
    description: "Simulado completo com 100 questões da prova AMRIGS 2023. Acesso mediante pagamento.",
    year: "2023",
    type: "premium_100_2023" as const,
    isPremium: true,
    questions: getRandomQuestions(questions100_2023, 100)
  },
  premium100_2024: {
    title: "Simulado Premium - 100 Questões 2024",
    description: "Simulado completo com 100 questões da prova AMRIGS 2024. Acesso mediante pagamento.",
    year: "2024",
    type: "premium_100_2024" as const,
    isPremium: true,
    questions: getRandomQuestions(questions100_2024, 100)
  }
};