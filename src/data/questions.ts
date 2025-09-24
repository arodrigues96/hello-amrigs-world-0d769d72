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
    question: "A dupla antiagregação plaquetária deve ser mantida:
I. Indefinidamente para pacientes com doença arterial periférica aterosclerótica.
II. Por pelo menos 12 meses após episódio de infarto agudo do miocárdio com angioplastia percutânea primária.
III. Indefinidamente em pacientes diabéticos que tiveram um episódio cerebrovascular isquêmico.
Quais estão corretas?",
    options: [
      "Apenas I.",
      "Apenas II.",
      "Apenas I e II.",
      "I, II e III."
    ],
    correct: 1,
    explanation: "A manutenção por pelo menos 12 meses após IAM com angioplastia é recomendada; a manutenção indefinida para os outros grupos não é indicada universalmente."
  },
  {
    id: 2,
    area: "Clínica Médica",
    question: "Em relação aos aspectos nutricionais da população em geral, analise as assertivas abaixo: I. O uso de polivitamínicos na população idosa deve ser incentivado em todos os casos, objetivando atingir níveis séricos supraterapêuticos nas dosagens de vitaminas, melhorando a qualidade de vida e reduzindo o número de internações hospitalares. II. A dosagem sérica de albumina é o marcador ideal para avaliar o status nutricional em pacientes hospitalizados com quadro prolongado de inflamação sistêmica. III. Pacientes politraumatizados e grandes queimados necessitam um aporte calórico em torno de 35 a 40 kcal/kg quando da fase aguda da doença. Quais estão corretas?",
    options: [
      "Apenas I.",
      "Apenas III.",
      "Apenas I e II.",
      "I, II e III."
    ],
    correct: 1,
    explanation: "Apenas a afirmação III está correta; polivitamínicos e albumina não são indicados da forma generalizada apresentada."
  },
  {
    id: 3,
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
    id: 4,
    area: "Clínica Médica",
    question: "Homem, 66 anos, apresenta quadro demencial com flutuações cognitivas, quedas, fraqueza de membros, alucinações visuais vívidas, inversão do ciclo sono-vigília com sono agitado e presença de distúrbio comportamental do sono REM. A descrição apresentada refere-se a qual tipo de demência?",
    options: [
      "Alzheimer.",
      "Com corpúsculos de Lewy.",
      "Frontotemporal.",
      "Parkinson."
    ],
    correct: 1,
    explanation: "Os sintomas descritos são característicos da demência com corpúsculos de Lewy, incluindo alucinações visuais e distúrbios do sono REM."
  },
  {
    id: 5,
    area: "Clínica Médica",
    question: "O quelante recomendado para ser utilizado quando houver envenenamento crônico por mercúrio em adultos é:",
    options: [
      "Deferoxamina.",
      "Azul da Prússia.",
      "Ácido dimercaptossuccínico.",
      "Ácido etilenodiaminotetracético."
    ],
    correct: 2,
    explanation: "O ácido dimercaptossuccínico é o quelante indicado para envenenamento crônico por mercúrio."
  },
  {
    id: 6,
    area: "Cirurgia Geral",
    question: "Sobre a hemorragia digestiva baixa, assinale a alternativa INCORRETA.",
    options: [
      "É um diagnóstico menos frequente do que a hemorragia digestiva alta.",
      "A causa mais comum de hemorragia digestiva baixa colônica é a diverticulite aguda.",
      "A causa mais comum de sangramento de intestino delgado é a doença de Crohn.",
      "Colite, ou proctite secundária à radioterapia, constitui uma das causas mais incomuns de sangramento baixo, correspondendo a aproximadamente um a três por cento."
    ],
    correct: 1,
    explanation: "A diverticulite aguda não é a causa mais comum de hemorragia digestiva baixa; a diverticulose é a causa mais comum."
  },
  {
    id: 7,
    area: "Cirurgia Geral",
    question: "Sobre o diagnóstico de abdome agudo, assinale a alternativa INCORRETA.",
    options: [
      "É classificado em cinco subtipos: inflamatório, hemorrágico, isquêmico, obstrutivo e perfurativo.",
      "Na prática clínica, se não diagnosticado em tempo hábil, evolui para abdome agudo perfurativo, quadros iniciais de abdome agudo inflamatório e obstrutivo.",
      "Entre as causas cirúrgicas de abdome agudo, está a úlcera péptica perfurada em paciente instável hemodinamicamente, hiponatremia, uremia e apendicite aguda.",
      "O abdome agudo obstrutivo por causa benigna tem como etiologia mais comum bridas intestinais, seguida por hérnias inguinais ou de parede abdominal."
    ],
    correct: 2,
    explanation: "Hiponatremia e uremia não são causas cirúrgicas de abdome agudo; a alternativa C mistura condições clínicas com causas cirúrgicas, tornando-a incorreta."
  },
  {
    id: 8,
    area: "Cirurgia Geral",
    question: "Paciente de 45 anos foi submetida à histerectomia total por miomatose. No pós-operatório imediato, o médico residente prescreveu para a analgesia quetamina, cetorolaco, ibuprofeno e 1 mg de morfina intravenosa até de 3/3 horas em caso de dor forte. Após algumas horas, a paciente começou a ter alucinações na sala de recuperação. Para corrigir essa prescrição, o médico deve:
I. Suspender ou reduzir a dose de quetamina, provável causa das alucinações.
II. Escolher apenas uma das drogas anti-inflamatórias, pois há sobreposição de cetorolaco e ibuprofeno.
III. Acrescentar gabapentina para reduzir a necessidade de opioides.
Quais estão corretas?",
    options: [
      "Apenas I.",
      "Apenas II.",
      "Apenas I e III.",
      "I, II e III."
    ],
    correct: 3,
    explanation: "A quetamina pode causar alucinações, por isso deve ser suspensa ou reduzida (I). O uso concomitante de cetorolaco e ibuprofeno traz sobreposição e risco aumentado de efeitos adversos, devendo ser escolhido apenas um anti-inflamatório (II). A gabapentina pode ajudar a reduzir a necessidade de opioides, melhorando o controle da dor e minimizando efeitos colaterais (III). Portanto, todas as alternativas estão corretas."
  },
  {
    id: 9,
    area: "Cirurgia Geral",
    question: "NÃO é um fator de risco para câncer gástrico:",
    options: [
      "Cirurgia gástrica prévia.",
      "Tipo sanguíneo A.",
      "Diabetes melito.",
      "Tabagismo."
    ],
    correct: 2,
    explanation: "Diabetes melito não é considerado um fator de risco para câncer gástrico, ao contrário dos demais listados."
  },
  {
    id: 10,
    area: "Cirurgia Geral",
    question: "São antibióticos que exigem ajuste de dose por insuficiência hepática ou renal, EXCETO:",
    options: [
      "Meropenem.",
      "Metronidazol.",
      "Vancomicina.",
      "Azitromicina."
    ],
    correct: 3,
    explanation: "Azitromicina não exige ajuste em insuficiência hepática ou renal na maioria dos casos, diferente dos demais."
  },
  {
    id: 11,
    area: "Ginecologia e Obstetrícia",
    question: "Gestante, 22 semanas, vem para consulta na unidade de Atenção Básica. Ela não apresenta queixas e o exame físico não apresenta anormalidades. A próxima consulta do pré-natal deve ser marcada em:",
    options: [
      "7 dias.",
      "15 dias.",
      "20 dias.",
      "30 dias."
    ],
    correct: 3,
    explanation: "No segundo trimestre de gestação sem complicações, o intervalo padrão entre consultas é de 30 dias, permitindo monitoramento adequado."
  },
  {
    id: 12,
    area: "Ginecologia e Obstetrícia",
    question: "Em relação ao acretismo placentário diagnosticado na cesariana de emergência, analise as assertivas a seguir:
I. A histerotomia deve ser realizada fora da área placentária.
II. A dequitação manual cuidadosa está indicada.
III. A histerectomia será realizada com a placenta in situ.
Quais estão corretas?",
    options: [
      "Apenas I.",
      "Apenas II.",
      "Apenas I e III.",
      "I, II e III."
    ],
    correct: 2,
    explanation: "No acretismo placentário, a histerotomia deve ser feita fora da área placentária e a histerectomia é feita com a placenta in situ para evitar hemorragias graves; a dequitação manual é contraindicada."
  },
  {
    id: 13,
    area: "Ginecologia e Obstetrícia",
    question: "Deve-se investigar a amenorreia primária nos seguintes casos: I. Em meninas com mais de 15 anos de idade, com caráteres sexuais secundários presentes. II. Na ausência de menarca após 5 anos do início da telarca. III. Em meninas com 13 anos de idade sem caracteres secundários. Quais estão corretos?",
    options: [
      "Apenas I.",
      "Apenas II.",
      "Apenas I e II.",
      "I, II e III."
    ],
    correct: 3,
    explanation: "A investigação é indicada em todas as situações descritas, pois indicam possíveis atrasos no desenvolvimento puberal que precisam ser avaliados."
  },
  {
    id: 14,
    area: "Ginecologia e Obstetrícia",
    question: "Gráfico de níveis de hCG após identificação de saco gestacional intrauterino sugere: (Gráfico mostrando hCG em 2000 (0 dias após evento) 500 (2 dias após evento) e tendendo a 0 após o 3° dia)",
    options: [
      "Aborto em curso.",
      "Aborto incompleto.",
      "Aborto completo.",
      "Gravidez ectópica."
    ],
    correct: 2,
    explanation: "Níveis decrescentes de hCG após saco gestacional indicam aborto completo."
  },
  {
    id: 15,
    area: "Ginecologia e Obstetrícia",
    question: " Em relação à incontinência ou insuficiência cervical, pode-se afirmar que a cerclagem está indicada nos casos a seguir, EXCETO",
    options: [
      "Após perda fetal com insuficiência cervical e avaliação transvaginal entre 16-24 semanas.",
      "Até 24 semanas, dilatação <4 cm e herniação das membranas, sem contração ou infecção.",
      "Técnica transabdominal indicada para prolapso do saco amniótico.",
      "Histórico de perdas gestacionais, cerclagem entre 12-14 semanas após USG normal."
    ],
    correct: 2,
    explanation: "A cerclagem transabdominal não é indicada para prolapso do saco amniótico, sendo esta contraindicação."
  },
  {
    id: 16,
    area: "Pediatria",
    question: "Paciente com hemianopsia bitemporal apresenta comprometimento no:",
    options: [
      "Lobo temporal.",
      "Quiasma óptico.",
      "Trato óptico.",
      "Lobo parietal."
    ],
    correct: 1,
    explanation: "Hemianopsia bitemporal ocorre por lesão no quiasma óptico, que interrompe fibras das faces nasais dos campos visuais."
  },
  {
    id: 17,
    area: "Pediatria",
    question: "Lactente de 2 meses com vômitos, recusa alimentar e irritabilidade. Exame: palidez, febre, fontanela abaulada. Líquor: 340 células (82% polimorfonucleares), proteínas 280 mg/dL, glicose 26 mg/dL; glicemia 284 mg/dL. Agente etiológico provável:",
    options: [
      "Escherichia coli.",
      "Streptococcus pneumoniae.",
      "Citomegalovírus.",
      "Staphylococcus aureus."
    ],
    correct: 0,
    explanation: "Escherichia coli é agente comum de meningite bacteriana em lactentes menores de 3 meses."
  },
  {
    id: 18,
    area: "Pediatria",
    question: "Considerando o instrumento para a vigilância do desenvolvimento da Caderneta da Criança do Ministério da Saúde, é esperado que durante o primeiro ano de vida uma criança desenvolva habilidades de buscar ativamente objetos, transferir objetos de uma mão para outra, fazer pinça completa e produzir jargão, respectivamente, entre as faixas etárias de:",
    options: [
      "4 e 6 meses; 6 e 9 meses; 9 e 12 meses; 6 e 9 meses.",
      "6 e 9 meses; 4 e 6 meses; 6 e 9 meses; 9 e 12 meses.",
      "6 e 9 meses; 4 e 6 meses; 6 e 9 meses; 6 e 9 meses.",
      "4 e 6 meses; 6 e 9 meses; 9 e 12 meses; 9 e 12 meses."
    ],
    correct: 1,
    explanation: "As faixas etárias indicadas seguem os marcos do desenvolvimento motor e cognitivo segundo a Caderneta da Criança."
  },
  {
    id: 19,
    area: "Pediatria",
    question: "Sobre triagem, diagnóstico e gestão da sepse na criança, assinale V (verdadeiro) ou F (falso): 1) Coleta hemocultura antes do tratamento, se não atrasar antimicrobianos; 2) Hiperlactatemia é imprescindível para suspeita; 3) Monitorização de saturação e débito urinário é importante na 1ª hora; 4) Respostas endócrinas e metabólicas das citocinas são principais responsáveis pela gravidade. Ordem correta:",
    options: [
      "V – F – V – V.",
      "F – V – F – V.",
      "F – V – V – F.",
      "V – F – V – F."
    ],
    correct: 0,
    explanation: "Coleta de hemocultura recomendada se não atrasar antimicrobianos; hiperlactatemia nem sempre presente; monitorização importante; respostas das citocinas influenciam gravidade."
  },
  {
    id: 20,
    area: "Pediatria",
    question: "Lactente de 2 meses de idade é trazido pela mãe para a consulta de puericultura. Como queixa, a mãe refere “vômitos” após as mamadas. Nasceu a termo, sem apresentar fatores de risco e está em aleitamento materno exclusivo. Apresenta crescimento e desenvolvimento adequados e ausência de eventos clínicos significativos desde o nascimento. Em relação à queixa da mãe, o procedimento indicado é:",
    options: [
      "Tranquilizar a mãe e manter o aleitamento materno exclusivo.",
      "Prescrever fórmula antirrefluxo.",
      "Prescrever ranitidina.",
      "Solicitar pHmetria esofágica."
    ],
    correct: 0,
    explanation: "Vômitos fisiológicos em lactentes geralmente não requerem intervenção além de orientação e manutenção do aleitamento materno."
  },
  {
    id: 21,
    area: "MPS",
    question: "Qual dos resultados abaixo apresenta a maior precisão?",
    options: [
      "Média: 3.050 g; desvio-padrão: 200 g.",
      "Média: 3.150 g; desvio-padrão: 350 g.",
      "Média: 3.200 g; desvio-padrão: 100 g.",
      "Média: 3.300 g; desvio-padrão: 250 g."
    ],
    correct: 2,
    explanation: "Menor desvio-padrão indica maior precisão, independentemente da média."
  },
  {
    id: 22,
    area: "MPS",
    question: "(Anulada)Assinale a alternativa correta em relação a ataques de pânico.",
    options: [
      "São extremamente comuns na população em geral, podendo não necessitar de tratamento.",
      "Ocorrem exclusivamente em casos de transtorno do pânico.",
      "Uma das técnicas orientadas a utilizar é a hiperventilação.",
      "Em geral, são duradouros e deve ser feito o uso de benzodiazepínico de ação longa."
    ],
    correct: 3,
    explanation: "Anulada!"
  },
  {
    id: 23,
    area: "MPS",
    question: "Sobre o Transtorno do Espectro Autista (TEA), pode-se afirmar que:",
    options: [
      "Evidências científicas apontam a presença de um biomarcador específico.",
      "O mercúrio presente nas vacinas é um importante fator de risco para o desenvolvimento do TEA.",
      "O diagnóstico é essencialmente clínico, feito a partir das observações da criança, entrevistas com os pais e aplicação de instrumentos específicos.",
      "A presença de estereotipias e afeto restrito causam pouco prejuízo no processo de socialização."
    ],
    correct: 2,
    explanation: "O diagnóstico do TEA é clínico, baseado em observações comportamentais e uso de escalas validadas. Não há biomarcadores específicos, e as vacinas não causam autismo."
  },
  {
    id: 24,
    area: "MPS",
    question: "Assinale a alternativa que apresenta casos que se enquadram em situação de notificação compulsória imediata no Brasil.",
    options: [
      "Tuberculose e leishmaniose visceral.",
      "Doença de Chagas crônica e esquistossomose.",
      "Febre amarela e botulismo.",
      "Hanseníase e hepatites virais."
    ],
    correct: 2,
    explanation: "Febre amarela e botulismo são doenças de notificação compulsória imediata, conforme a Lista Nacional de Notificação Compulsória."
  },
  {
    id: 25,
    area: "MPS",
    question: "Um pesquisador pretende estudar a prevalência de uma doença comum e uma doença rara na mesma população. Como deve ser a amostra?",
    options: [
      "Para estudar a doença comum, a amostra deve ser menor do que a utilizada para estudar a doença rara.",
      "Para estudar a doença comum, a amostra deve ser maior do que a utilizada para estudar a doença rara.",
      "Para estudar a doença comum, a amostra deve ser igual à utilizada para estudar a doença rara.",
      "Não é possível definir com as informações fornecidas."
    ],
    correct: 0,
    explanation: "Doenças raras exigem amostras maiores para garantir número suficiente de casos para análise estatística."
  }
];

// Questões de 2024 - 25 questões (versão free)
export const questions25_2024: Question[] = [
  {
    id: 1,
    area: "Clínica Médica",
    question: "Mulher, 78 anos, estava em tratamento para hipertensão arterial, diabetes tipo 2, dislipidemia e incontinência urinária. Realizou cirurgia de revascularização miocárdica. No terceiro dia de pós-operatório, a paciente achava que estava em sua casa, referindo aguardar seu marido chegar do trabalho, não demonstrando ter ciência de que ele já era falecido. Em alguns momentos, parecia mais calma e lúcida, mas alternava esse comportamento com outros de desorganização e discurso incoerente. Durante o dia, tendia a ficar mais sonolenta. Na avaliação, a paciente não colaborava com o exame físico. Mostrava-se perplexa, assustando-se com sons do ambiente, via cachorros caminhando no quarto. Distraía-se com facilidade, não focando sua atenção nas perguntas feitas pelo médico. Durante a noite, ficou agitada, desorganizada, agressiva com a equipe, com tentativas de arrancar os cateteres. Paciente foi diagnosticada com delirium. Em relação ao quadro diagnóstico apresentado, assinale a alternativa INCORRETA.",
    options: [
      "O processo de identificação e tratamento de possíveis causas clínicas associadas deve ser rápido.",
      "Estratégias como reorientação, otimização do sono, exercícios e mobilização do paciente, hidratação oral, auxílio visual e auditivo são medidas preventivas importantes, demonstrando redução da prevalência dessa condição.",
      "Deve-se evitar o uso de benzodiazepínico, sendo reservado a casos específicos, como de delirium secundário a abstinência de álcool ou de sedativos/hipnóticos.",
      "O uso de antipsicóticos está indicado tanto para prevenção como para o tratamento do delirium hiperativo."
    ],
    correct: 3,
    explanation: "O uso de antipsicóticos não é indicado para prevenção do delirium, sendo reservado para controle de sintomas severos e quando outras medidas não forem eficazes."
  },
  {
    id: 2,
    area: "Clínica Médica",
    question: "A presença de bandas oligoclonais no líquor sugere fortemente o diagnóstico de:",
    options: [
      "Alzheimer.",
      "Esclerose múltipla.",
      "Linfoma de células B.",
      "Meningite viral."
    ],
    correct: 1,
    explanation: "Bandas oligoclonais no líquor são um achado característico da esclerose múltipla, indicando resposta imune intratecal."
  },
  {
    id: 3,
    area: "Clínica Médica",
    question: "Um dos desafios no cuidado ao paciente idoso é reconhecer as particularidades que essa faixa etária apresenta em relação a outras. Qual das alternativas a seguir apresenta uma particularidade comum nos pacientes idosos e que requer atenção especial?",
    options: [
      "O metabolismo dos medicamentos é mais rápido, exigindo doses mais altas.",
      "A sensibilidade à dor diminui, tornando desnecessário o uso de analgésicos.",
      "A polifarmácia, devido ao risco aumentado de interações medicamentosas.",
      "A capacidade cognitiva melhora, facilitando a adesão ao tratamento."
    ],
    correct: 2,
    explanation: "Polifarmácia é frequente em idosos, aumentando o risco de interações e efeitos adversos, e requer atenção especial."
  },
  {
    id: 4,
    area: "Clínica Médica",
    question: "Sobre a hipertensão arterial sistêmica, analise as assertivas a seguir: I. Para diagnóstico, indica-se a medição anual de pressão arterial se a pressão arterial aferida for inferior a 140/90 mmHg. II. O diagnóstico da hipertensão arterial sistêmica deve ser baseado na medição da pressão fora do consultório com monitorização ambulatorial da pressão arterial, desde que seja viável sua realização. III. História prévia de pré-eclâmpsia em mulheres é fator de risco para hipertensão arterial sistêmica. Quais estão corretas?",
    options: [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    correct: 3,
    explanation: "Todas as assertivas estão corretas: I porque a medição anual é indicada para pressão abaixo de 140/90 mmHg; II porque o diagnóstico correto deve considerar medidas fora do consultório, quando possível; III porque história prévia de pré-eclâmpsia é fator de risco conhecido para HAS."
  },
  {
    id: 5,
    area: "Clínica Médica",
    question: "Em relação à retocolite ulcerativa, analise as assertivas a seguir: I. Os surtos agudos de retocolite ulcerativa podem ser controlados com derivados do ácido 5-aminossalicílico. II. Os que não responderem ao tratamento com derivados do ácido 5-aminossalicílico devem receber corticosteroides para indução da remissão da retocolite ulcerativa. III. Pacientes com retocolite ulcerativa grave sem resposta ao uso de corticosteroide são candidatos ao uso de ciclosporina. Quais estão corretas?",
    options: [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    correct: 3,
    explanation: "Todas as alternativas estão corretas: o ácido 5-ASA é primeira linha para surtos; corticosteroides são usados em casos refratários; ciclosporina é indicada para casos graves sem resposta."
  },
  {
    id: 6,
    area: "Cirurgia Geral",
    question: "Sobre as hérnias de hiato, é INCORRETO afirmar que:",
    options: [
      "Qualquer tipo de hérnia pode gerar sintomas clássicos de refluxo.",
      "A membrana frenoesofágica é uma continuação da fáscia endoabdominal que se ancora no esôfago.",
      "As hérnias paraesofágicas podem estar associadas à doença do refluxo gastroesofágico (DRGE).",
      "A pressão relativamente positiva dentro do tórax facilita a migração visceral."
    ],
    correct: 3,
    explanation: "A pressão intratorácica é negativa, não positiva; isso dificulta a migração do estômago para o tórax, tornando a afirmativa incorreta."
  },
  {
    id: 7,
    area: "Cirurgia Geral",
    question: "Sobre as obstruções intestinais, assinale a alternativa correta.",
    options: [
      "Na obstrução intestinal por doença de Crohn agudizada, o tratamento cirúrgico está indicado.",
      "No atendimento inicial, a hidratação deve ocorrer sem excesso, para evitar síndrome compartimental.",
      "Drenagem percutânea de abscesso intra-abdominal pode ser indicada para resolver quadro obstrutivo.",
      "Na obstrução intestinal por enterite actínica, o tratamento cirúrgico é a opção de escolha."
    ],
    correct: 2,
    explanation: "Em casos de obstrução intestinal associada a abscesso (frequentemente em doença de Crohn), a drenagem percutânea pode ser indicada como parte do tratamento não cirúrgico inicial."
  },
  {
    id: 8,
    area: "Cirurgia Geral",
    question: "A parede abdominal é formada por nove camadas de tecido que, dispostas da camada mais externa para a mais interna, apresentam a seguinte sequência: pele, tecido subcutâneo, fáscia superficial, músculo , músculo , músculo , fáscia transversalis, tecido adiposo pré-peritoneal e peritônio. Assinale a alternativa que preenche, correta e respectivamente, as lacunas do trecho acima.",
    options: [
      "oblíquo externo -- oblíquo interno -- transverso do abdome",
      "oblíquo interno -- oblíquo externo -- transverso do abdome",
      "transverso -- oblíquo interno -- oblíquo externo",
      "oblíquo externo -- transverso do abdome -- oblíquo interno"
    ],
    correct: 0,
    explanation: "A sequência correta dos músculos da parede abdominal, do mais superficial ao mais profundo, é: oblíquo externo, oblíquo interno e transverso do abdome."
  },
  {
    id: 9,
    area: "Cirurgia Geral",
    question: "Sobre o atendimento à vítima de ingestão acidental de soda cáustica, assinale a alternativa correta.",
    options: [
      "O exame físico é pouco revelador, e o diagnóstico ocorre pela endoscopia digestiva alta.",
      "A avaliação por meio de endoscopia digestiva alta é mais segura após 48 horas do acidente.",
      "A prescrição rotineira de corticosteroides não está recomendada para redução do risco de estenose.",
      "A esofagectomia é o tratamento de escolha nos casos de lesões ulceradas ou circunferenciais."
    ],
    correct: 2,
    explanation: "Estudos mostram que o uso de corticosteroides não reduz significativamente o risco de estenose esofágica após ingestão cáustica e pode aumentar o risco de complicações. Por isso, seu uso rotineiro não é recomendado."
  },
  {
    id: 10,
    area: "Cirurgia Geral",
    question: "Sobre o tratamento da DRGE, assinale a alternativa correta.",
    options: [
      "Endoscopia Digestiva Alta (EDA), manometria, monitoramento do pH, esofagograma e cintilografia são exames essenciais para avaliação pré-operatória.",
      "O Inibidor de Bomba de Prótons (IBP) age ligando-se de forma reversível às células parietais do estômago.",
      "O padrão-ouro para o diagnóstico da DRGE é a pHmetria de 24 horas.",
      "A dose mínima de IBP é o padrão-ouro para o manejo dos sintomas de refluxo."
    ],
    correct: 2,
    explanation: "A pHmetria de 24 horas é o exame padrão-ouro para confirmar refluxo ácido na DRGE."
  },
  {
    id: 11,
    area: "Ginecologia e Obstetrícia",
    question: "A Figura 3 abaixo mostra um embrião. Considerando a imagem apresentada, o diagnóstico mais provável é:",
    options: [
      "Descolamento prematuro de placenta.",
      "Placenta prévia.",
      "Aborto incompleto.",
      "Aborto inevitável."
    ],
    correct: 3,
    explanation: "O aborto inevitável é caracterizado por sangramento vaginal associado à dilatação do colo uterino, com ou sem dor abdominal, e geralmente com presença de produtos gestacionais ainda dentro do útero. A imagem provavelmente mostra um embrião viável ou em processo de expulsão, mas com o colo uterino dilatado, o que indica que a gestação não poderá continuar, tornando o aborto inevitável. Diferente de outras formas de aborto: Aborto incompleto (C): já houve eliminação parcial dos produtos da concepção. Aborto inevitável (D): o processo de aborto ainda não se completou, mas não pode ser impedido, pois há sinais clínicos como colo dilatado e possível rotura de membranas."
  },
  {
    id: 12,
    area: "Ginecologia e Obstetrícia",
    question: "Analise as seguintes assertivas a respeito da depressão pós-parto: Gravidez não planejada ou não desejada, complicações médicas ao longo da gestação, percepção de falta de suporte social (familiar ou do parceiro) e condições socioeconômicas desfavoráveis não são considerados fatores de risco para a condição. Entre os diagnósticos diferenciais, o blues, definido por disforia e sintomas depressivos leves, transitórios e autolimitados, é geralmente considerado um fenômeno normal, não requerendo nenhum tratamento além de validação, psicoeducação e suporte psicossocial. Escalas de autoavaliação, como Postpartum Depression Screening Scale (PDSS) e Edinburgh Postnatal Depression Scale (EPDS), para triagem de mulheres com depressão pós-parto em serviços de atendimento primário mostram-se bastante úteis, aumentando a possibilidade de detecção de depressão pós-parto em comparação com a detecção espontânea durante avaliações clínicas de rotina. Sertralina e paroxetina são considerados antidepressivos seguros para o período de amamentação. Quais estão corretas?",
    options: [
      "Apenas I, II e III.",
      "Apenas I, II e IV.",
      "Apenas I, III e IV.",
      "Apenas II, III e IV."
    ],
    correct: 3,
    explanation: "A assertiva I está incorreta, pois fatores como gravidez não planejada, complicações médicas e falta de suporte são, sim, reconhecidos fatores de risco para depressão pós-parto. As outras assertivas (II, III e IV) estão corretas conforme literatura atual."
  },
  {
    id: 13,
    area: "Ginecologia e Obstetrícia",
    question: "Sobre o tratamento para o condiloma vulvar acuminado, que pode ser realizado na unidade de saúde, é correto afirmar que:",
    options: [
      "O ácido tricloroacético (ATA) a 10% pode ser feito em 3 aplicações.",
      "O ATA a 80%-90% pode ser aplicado semanalmente por 8 a 10 semanas.",
      "O ATA não pode ser aplicado na gestação.",
      "O imiquimod 5% creme só pode ser aplicado depois do segundo trimestre."
    ],
    correct: 1,
    explanation: "ATA em concentrações de 80%-90% é utilizado com aplicações semanais prolongadas para tratar condilomas vulvares na atenção básica."
  },
  {
    id: 14,
    area: "Ginecologia e Obstetrícia",
    question: "São opções terapêuticas para os sintomas vasomotores da síndrome climatérica:
I. Modificações de estilo de vida: roupas leves, temperatura ambiente mais baixa e não fumar.
II. Terapia de reposição hormonal sistêmica.
III. Uso de inibidores seletivos da recaptação de serotonina e inibidores seletivos de recaptação da serotonina e noradrenalina.",
    options: [
      "Apenas I.",
      "Apenas II.",
      "Apenas I e II.",
      "I, II e III."
    ],
    correct: 3,
    explanation: "Todas as opções listadas são utilizadas no manejo dos sintomas vasomotores da menopausa, dependendo do quadro e da tolerância da paciente."
  },
  {
    id: 15,
    area: "Ginecologia e Obstetrícia",
    question: "Uma gestante de 10 semanas e 6 dias vem à consulta de pré-natal. Ela não apresenta fatores de risco ou queixas. Após a consulta, o médico agenda uma ultrassonografia para ser realizada em 1 semana. O tipo de ultrassonografia que ela deverá realizar é:",
    options: [
      "Obstétrica transvaginal com doppler das artérias ovarianas para ver a função do corpo lúteo.",
      "Morfológica de primeiro trimestre (medir a translucência nucal).",
      "Morfológica do segundo trimestre.",
      "Obstétrica para ver o fenômeno de centralização."
    ],
    correct: 1,
    explanation: "A ultrassonografia morfológica do primeiro trimestre, com avaliação da translucência nucal, é indicada entre 11 e 14 semanas para rastreamento de anomalias cromossômicas."
  },
  {
    id: 16,
    area: "Pediatria",
    question: "Considere o acompanhamento do nascimento, via parto vaginal, de um neonato cuja idade gestacional obstétrica é de 38 semanas. Apresenta teste rápido positivo para sífilis na admissão ao centro obstétrico. O recém-nascido (RN) é posicionado sobre o ventre materno e apresenta-se cianótico, com choro forte e tônus adequado. Diante do quadro apresentado, qual é a melhor conduta?",
    options: [
      "Realizar estímulo tátil no dorso, seguido de clampeamento imediato do cordão umbilical.",
      "Solicitar o clampeamento imediato do cordão umbilical e levá-lo para berço aquecido para monitorização e manobras iniciais de reanimação.",
      "Solicitar o clampeamento do cordão umbilical após 30 segundos de vida, manter no contato pele a pele e estimular a amamentação.",
      "Solicitar o clampeamento do cordão umbilical após 60 segundos de vida, manter no contato pele a pele, com avaliação contínua da vitalidade."
    ],
    correct: 3,
    explanation: "O clampeamento tardio do cordão umbilical (após 60 segundos) melhora o volume sanguíneo do recém-nascido e seus resultados. O contato pele a pele e a amamentação precoce são importantes para a adaptação neonatal, mesmo em casos de risco como sífilis."
  },
  {
    id: 17,
    area: "Pediatria",
    question: "João tem 8 anos, e Maria tem 11 anos. Ao exame físico, foi constatado que João apresenta crescimento testicular e aumento do comprimento peniano. Em Maria, nota-se a presença de broto mamário. Como são classificados os achados descritos em relação à escala de Turner (G e M) e às suas idades?",
    options: [
      "João – Turner 3, com achados de puberdade precoce para a sua idade; Maria – Turner 2, com achados normais de puberdade para a sua idade.",
      "João – Turner 4, com achados de puberdade precoce para a sua idade; Maria – Turner 2, com achados de atraso puberal para a sua idade.",
      "João – Turner 3, com achados normais de puberdade para a sua idade; Maria – Turner 1, com achados normais de puberdade para a sua idade.",
      "João – Turner 4, com achados normais de puberdade para a sua idade; Maria – Turner 1, com achados de atraso puberal para a sua idade."
    ],
    correct: 3,
    explanation: "Questão anulada conforme edital."
  },
  {
    id: 18,
    area: "Pediatria",
    question: "Em relação ao Transtorno do Espectro Autista (TEA), assinale a alternativa correta.",
    options: [
      "Por ser impossível o diagnóstico de TEA em lactentes entre os 18 e 24 meses, na prática, ele é realizado tardiamente.",
      "O diagnóstico de TEA é clínico, reservando-se a utilização de teste complementar de biomarcador específico nos casos de dúvida diagnóstica.",
      "Quando o lactente tem irmãos ou pais com TEA ou atraso nos marcos do desenvolvimento neuropsicomotor, especialmente nas áreas de comunicação, comportamento e socialização, torna-se mandatória a investigação diagnóstica de TEA.",
      "Considerando a elevação progressiva da prevalência de TEA, a Sociedade Brasileira de Pediatria recomenda complementar a avaliação da Caderneta da Criança com a triagem específica para autismo em todas as crianças nas idades de 36 e 48 meses, por meio do M-CHAT-R/F."
    ],
    correct: 2,
    explanation: "A investigação diagnóstica de TEA é mandatória quando há histórico familiar ou atraso no desenvolvimento, para diagnóstico precoce e intervenção. O diagnóstico é clínico, sem biomarcadores específicos, e a triagem universal é recomendada, porém o diagnóstico em lactentes é possível."
  },
  {
    id: 19,
    area: "Pediatria",
    question: "Em decorrência das enchentes que assolaram o Rio Grande do Sul neste ano, o risco para acidentes ofídicos aumentou na população pediátrica. O tipo de acidente mais prevalente, nesse caso, é o:",
    options: [
      "Laquético.",
      "Elapídico.",
      "Crotálico.",
      "Botrópico."
    ],
    correct: 3,
    explanation: "O acidente botrópico, causado por serpentes do gênero Bothrops, é o mais prevalente em áreas de enchentes e alagamentos, pois essas serpentes habitam áreas rurais e próximas a cursos d'água."
  },
  {
    id: 20,
    area: "Pediatria",
    question: "No lactente com tetralogia de Fallot, as crises hipoxêmicas normalmente decorrem de:",
    options: [
      "Hiperfluxo pulmonar pelo ducto arterioso patente.",
      "Hipofluxo pulmonar por estenose infundibular da artéria pulmonar.",
      "Shunt E-D pelo defeito de septo interventricular.",
      "Redução do débito cardíaco pela baixa muscularização do VD."
    ],
    correct: 1,
    explanation: "As crises hipoxêmicas na tetralogia de Fallot são causadas principalmente pelo hipofluxo pulmonar devido à estenose infundibular da artéria pulmonar, que limita a passagem de sangue para os pulmões."
  },
  {
    id: 21,
    area: "MPS",
    question: "Em um estudo sobre a eficácia de um novo teste de triagem para câncer de bexiga, apesar de a mortalidade por câncer de bexiga permanecer constante, os pacientes que foram diagnosticados precocemente por exames regulares apresentaram uma sobrevida média de 5 anos, enquanto os diagnosticados após o surgimento de sintomas tiveram uma sobrevida de 2 anos. Qual é a explicação mais provável?",
    options: [
      "O novo método de rastreamento precoce parece ser a única explicação para o aumento da sobrevida observada.",
      "Um viés pode estar distorcendo os resultados, já que o diagnóstico precoce apenas aumenta o tempo entre o diagnóstico e a morte.",
      "O estudo prova que o rastreamento de câncer de bexiga é eficaz para prolongar a vida dos pacientes.",
      "Pacientes diagnosticados precocemente sempre apresentam resultados melhores do que os que são diagnosticados após sintomas."
    ],
    correct: 1,
    explanation: "Esse fenômeno é chamado viés de lead time, em que o diagnóstico precoce aumenta o tempo conhecido da doença sem necessariamente aumentar a sobrevida real."
  },
  {
    id: 22,
    area: "MPS",
    question: "Em um estudo de caso-controle, qual é o maior desafio para evitar o viés de seleção?",
    options: [
      "Garantir que o grupo controle seja representativo da população que deu origem aos casos.",
      "Selecionar controles de uma população com alta prevalência da doença.",
      "Utilizar apenas um único critério de exposição.",
      "Excluir participantes com exposição anterior ao desfecho."
    ],
    correct: 0,
    explanation: "O maior desafio é garantir que os controles representem a mesma população base que gerou os casos para que as comparações sejam válidas e não viesadas."
  },
  {
    id: 23,
    area: "MPS",
    question: "De acordo com a Política Nacional de Atenção Básica definida na Portaria nº 2.436/2017, é uma atribuição específica do médico de família e comunidade na Estratégia Saúde da Família:",
    options: [
      "Implementar e manter atualizados rotinas, protocolos e fluxos relacionados à sua área de competência na UBS.",
      "Responsabilizar-se pelo acompanhamento da população adscrita ao longo do tempo no que se refere às múltiplas situações de doenças e agravos, e às necessidades de cuidados preventivos, permitindo a longitudinalidade do cuidado.",
      "Indicar a necessidade de internação hospitalar ou domiciliar, mantendo a responsabilização pelo acompanhamento da pessoa.",
      "Realizar ações de educação em saúde à população adstrita, conforme planejamento da equipe e utilizando abordagens adequadas às necessidades desse público."
    ],
    correct: 2,
    explanation: "O médico de família deve indicar e acompanhar a internação, mantendo a responsabilidade pelo cuidado do paciente, especialmente para continuidade do tratamento."
  },
  {
    id: 24,
    area: "MPS",
    question: "O que é um teste “padrão-ouro”?",
    options: [
      "Um teste com 100% de sensibilidade.",
      "Um teste com 100% de especificidade.",
      "Um teste usado como referência para avaliar outros testes.",
      "Um teste com 100% de acurácia."
    ],
    correct: 2,
    explanation: "O padrão-ouro é o método ou teste aceito como referência para diagnosticar uma condição, usado para comparar a performance de novos testes."
  },
  {
    id: 25,
    area: "MPS",
    question: "Assinale a alternativa que apresenta doenças ou agravos que se enquadram como situação de notificação compulsória imediata (até 24 horas) no Brasil.",
    options: [
      "Tuberculose e intoxicação exógena.",
      "Esquistossomose e HIV/AIDS.",
      "Raiva humana e síndrome da rubéola congênita.",
      "Sífilis e casos de dengue."
    ],
    correct: 2,
    explanation: "Raiva humana e síndrome da rubéola congênita são notificações imediatas devido ao risco de surtos e gravidade. Tuberculose e intoxicação exógena são notificações, mas não necessariamente imediatas. HIV/AIDS e esquistossomose têm prazos maiores. Sífilis e dengue são notificações, mas a dengue pode ter prazos diferentes dependendo da gravidade."
  }
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