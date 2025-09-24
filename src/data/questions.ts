export interface Question {
  id: number;
  area: string;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export const sampleQuestions25_2024: Question[] = [
  {
    id: 1,
    area: "Cardiologia",
    question: "Paciente de 65 anos, hipertenso, apresenta dor precordial típica há 2 horas. ECG mostra supradesnivelamento de ST em DII, DIII e aVF. Qual a artéria mais provável de estar ocluída?",
    options: [
      "Artéria descendente anterior",
      "Artéria circunflexa",
      "Artéria coronária direita",
      "Artéria diagonal",
      "Artéria marginal"
    ],
    correct: 2,
    explanation: "O supradesnivelamento de ST em derivações inferiores (DII, DIII, aVF) é característico de infarto do miocárdio inferior, geralmente causado por oclusão da artéria coronária direita."
  },
  {
    id: 2,
    area: "Endocrinologia",
    question: "Paciente diabético tipo 2, em uso de metformina, apresenta HbA1c de 8,5%. Qual a melhor conduta?",
    options: [
      "Manter apenas metformina",
      "Adicionar sulfonilureia",
      "Adicionar inibidor de SGLT2",
      "Substituir por insulina",
      "Adicionar inibidor de DPP-4"
    ],
    correct: 1,
    explanation: "Para pacientes diabéticos tipo 2 com HbA1c acima de 7% em monoterapia com metformina, a adição de sulfonilureia é uma opção eficaz e de primeira linha."
  },
  {
    id: 3,
    area: "Pneumologia",
    question: "Paciente tabagista de 60 anos apresenta tosse seca persistente há 3 meses e perda de peso de 8 kg. Radiografia de tórax mostra massa hilar direita. Qual o próximo passo?",
    options: [
      "Iniciar antibioticoterapia",
      "Solicitar broncoscopia",
      "Repetir radiografia em 30 dias",
      "Solicitar espirometria",
      "Iniciar corticoides"
    ],
    correct: 1,
    explanation: "Em paciente tabagista com sintomas sugestivos e massa hilar na radiografia, a broncoscopia é essencial para investigação diagnóstica de possível neoplasia pulmonar."
  },
  {
    id: 4,
    area: "Gastroenterologia",
    question: "Paciente de 45 anos com dor epigástrica há 6 meses, pior após alimentação. Endoscopia digestiva alta mostra úlcera gástrica de 2 cm. Teste de urease positivo. Qual o tratamento?",
    options: [
      "Omeprazol por 8 semanas",
      "Terapia tríplice para H. pylori",
      "Cirurgia imediata",
      "Apenas dieta",
      "Sucralfato por 4 semanas"
    ],
    correct: 1,
    explanation: "Úlcera gástrica com teste de urease positivo indica infecção por H. pylori, sendo a terapia tríplice (IBP + 2 antibióticos) o tratamento de escolha."
  },
  {
    id: 5,
    area: "Neurologia",
    question: "Paciente de 28 anos apresenta cefaleia pulsátil unilateral, fotofobia e náuseas há 4 horas. Nega trauma. Exame neurológico normal. Qual o diagnóstico mais provável?",
    options: [
      "Hemorragia subaracnóidea",
      "Enxaqueca",
      "Cefaleia tensional",
      "Arterite temporal",
      "Tumor cerebral"
    ],
    correct: 1,
    explanation: "O quadro clássico de cefaleia pulsátil unilateral associada a fotofobia e náuseas em paciente jovem com exame neurológico normal é sugestivo de enxaqueca."
  }
];

export const sampleQuestions100_2024: Question[] = [
  ...sampleQuestions25_2024,
  {
    id: 6,
    area: "Infectologia",
    question: "Paciente com febre há 7 dias, tosse produtiva e dispneia. Radiografia mostra consolidação lobar direita. Qual o agente etiológico mais provável?",
    options: [
      "Staphylococcus aureus",
      "Streptococcus pneumoniae",
      "Mycoplasma pneumoniae",
      "Legionella pneumophila",
      "Haemophilus influenzae"
    ],
    correct: 1,
    explanation: "Pneumonia com consolidação lobar em adulto tem como principal agente etiológico o Streptococcus pneumoniae."
  },
  {
    id: 7,
    area: "Reumatologia",
    question: "Mulher de 35 anos com artralgia simétrica em punhos e MCFs há 3 meses, rigidez matinal de 2 horas. FR positivo. Qual o diagnóstico?",
    options: [
      "Osteoartrite",
      "Artrite reumatoide",
      "Lúpus eritematoso sistêmico",
      "Fibromialgia",
      "Artrite psoriásica"
    ],
    correct: 1,
    explanation: "Artralgia simétrica em pequenas articulações, rigidez matinal prolongada e FR positivo são característicos de artrite reumatoide."
  },
  // ... mais questões podem ser adicionadas aqui
];

export const sampleQuestions25_2023: Question[] = [
  {
    id: 1,
    area: "Cardiologia",
    question: "Homem de 55 anos com dor precordial em repouso há 30 minutos. ECG mostra inversão de onda T em V1-V4. Troponina elevada. Diagnóstico?",
    options: [
      "Angina estável",
      "Síndrome coronariana aguda sem supradesnivelamento de ST",
      "Infarto com supradesnivelamento de ST",
      "Pericardite aguda",
      "Embolia pulmonar"
    ],
    correct: 1,
    explanation: "Dor precordial em repouso com alterações de repolarização e troponina elevada caracteriza síndrome coronariana aguda sem supradesnivelamento de ST."
  },
  {
    id: 2,
    area: "Dermatologia",
    question: "Paciente apresenta lesões eritematosas descamativas em cotovelos e joelhos, com aspecto prateado. Qual o diagnóstico?",
    options: [
      "Eczema",
      "Psoríase",
      "Líquen plano",
      "Dermatite seborreica",
      "Tinha corporis"
    ],
    correct: 1,
    explanation: "Lesões eritematosas descamativas com aspecto prateado em superfícies extensoras são características da psoríase."
  },
  {
    id: 3,
    area: "Urologia",
    question: "Homem de 70 anos com jato urinário fraco e noctúria. PSA = 4,2 ng/mL. Próstata aumentada ao toque retal. Conduta inicial?",
    options: [
      "Biópsia prostática imediata",
      "Alfa-bloqueador",
      "Finasterida",
      "Cirurgia",
      "Observação"
    ],
    correct: 1,
    explanation: "Sintomas de hiperplasia prostática benigna devem ser tratados inicialmente com alfa-bloqueador para alívio sintomático."
  },
  {
    id: 4,
    area: "Ginecologia",
    question: "Mulher de 50 anos com amenorreia há 8 meses, fogachos e sudorese noturna. FSH = 65 mUI/mL. Diagnóstico?",
    options: [
      "Síndrome dos ovários policísticos",
      "Menopausa",
      "Gravidez",
      "Hiperprolactinemia",
      "Hipotireoidismo"
    ],
    correct: 1,
    explanation: "Amenorreia em mulher de 50 anos com sintomas vasomotores e FSH elevado caracteriza a menopausa."
  },
  {
    id: 5,
    area: "Pediatria",
    question: "Criança de 3 anos com febre há 5 dias, exantema maculopapular, hiperemia conjuntival e edema de mãos. Qual o diagnóstico?",
    options: [
      "Sarampo",
      "Doença de Kawasaki",
      "Escarlatina",
      "Rubéola",
      "Roséola"
    ],
    correct: 1,
    explanation: "Febre persistente, exantema, hiperemia conjuntival e edema de extremidades são critérios da doença de Kawasaki."
  }
];

export const sampleQuestions100_2023: Question[] = [
  ...sampleQuestions25_2023,
  {
    id: 6,
    area: "Ortopedia",
    question: "Paciente sofreu queda com trauma no punho. Radiografia mostra fratura do escafoide. Qual a principal complicação?",
    options: [
      "Infecção",
      "Pseudoartrose",
      "Síndrome compartimental",
      "Lesão vascular",
      "Lesão nervosa"
    ],
    correct: 1,
    explanation: "A principal complicação da fratura do escafoide é a pseudoartrose devido à vascularização precária do osso."
  },
  // ... mais questões podem ser adicionadas aqui
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
export const getRandomQuestions = (count: number) => {
  const allQuestions = [...sampleQuestions25_2024, ...sampleQuestions25_2023];
  const shuffled = shuffleArray(allQuestions);
  return shuffled.slice(0, count);
};

export const quizData = {
  free25: {
    title: "Simulado Gratuito - 25 Questões",
    description: "25 questões aleatórias para você testar seus conhecimentos gratuitamente",
    year: "2024",
    type: "free_25" as const,
    isPremium: false,
    questions: getRandomQuestions(25)
  },
  premium100: {
    title: "Simulado Premium - 100 Questões",
    description: "Simulado completo com 100 questões baseadas nas provas da AMRIGS. Acesso mediante pagamento.",
    year: "2024", 
    type: "premium_100" as const,
    isPremium: true,
    questions: [...sampleQuestions100_2024, ...sampleQuestions100_2023].slice(0, 100)
  }
};