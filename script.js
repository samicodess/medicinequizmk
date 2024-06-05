//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Што е термотерапија ?",
    options: [
      "лекување со помош на струја",
      "лекување со магнетно поле",
      "лекување со УВ зраци",
      "лекување со помош на топлина",
    ],
    correct: "лекување со помош на топлина",
  },
  {
    id: "1",
    question: "Протезите се:",
    options: [
      "реквизити за вежбање",
      "корсети ",
      "ниедно од наведените",
      "ортопедски помагала кои надоместуваат ампутиран екстремитет или дел од него ",
    ],
    correct:"ортопедски помагала кои надоместуваат ампутиран екстремитет или дел од него ",
  },
  {
    id: "2",
    question:"Во акутна фаза на повреда кога имаме болка, оток и црвенило се употребува",
    options: [
      "термотерапија",
      "криотерапија",
      "електротерапија",
      "ниедно од наведените",
    ],
    correct: "криотерапија",
  },
  {
    id: "3",
    question: "Детска церебрална парализа настанува како резултат на",
    options: [
      "оштетување на мозокот (черепен)",
      "Детска церебрална парализа настанува како резултат на",
      "оштетување на периферни нерви",
      "оштетување на мозочните обвивки",
    ],
    correct: "оштетување на мозокот (черепен)",
  },
  {
    id: "4",
     question:"Атетозен облик на детска церебрална парализа се карактеризира со",
    options: [
      "Хипотонија на мускулатурата",
      "Неможност за цицање и голтање",
      "движења во облик на октопод",
      "Сите наведени",
    ],
    correct: "Сите наведени",
  },
  {
    id: "5",
    question:"Оштетувањето на мозокот кај детска церебрална парализа настанува како резултат на дејство на штетни фактори",
    options: [
      "за време на породување",
      "сите наведени",
      "За време на бременоста",
      "после породување ",
    ],
    correct: "сите наведени",
  },
  {
    id: "6",
    question: ". Спастичен облик на детска церебрална парализа",
    options: [
      "се карактеризира со спазам на мускулите",
      "тетивните рефлекси се засилени",
      "одењето е ножичесто",
      "се наведено",
    ],
    correct: "се наведено",
  },
  {
    id: "7",
    question: "При детска парализа доаѓа до оштетување на:",
    options: [
      "Ниту едно од наведените",
      "моторниот дел на черепен мозок",
      "моторниот дел на рбетен мозок",
      "Оштетување на мозочните обвивки",
    ],
    correct: "моторниот дел на рбетен мозок",
  },
  {
    id: "8",
    question: "Детска парализа се карактеризира со:",
    options: [
      "парализа на долни екстремитети",
      "парализа на мускулатура на лице",
      "епилептични напади",
      "нарушување на сетилото за вид",
    ],
    correct: "парализа на долни екстремитети",
  },
  {
    id: "9",
    question: "Тортиколис или крив врат настанува како резултат на",
    options: [
      "нецелосен развој на вратните пршлени",
      "сраснатост на два соседни пршлени",
      "повреда на мускулус стерноклеидомастоиде",
      "сите наведени",
    ],
    correct: "повреда на мускулус стерноклеидомастоиде",
  },
  {
    id: "10",
    question: "Рахитис е причина за појава на",
    options: [
      "кокошкини гради",
      "вдлабнати гради",
      "тортиколис",
      "луксација на колк",
    ],
    correct: "кокошкини гради",
  },
  {
    id: "11",
    question: "Сколиоза е деформитет на",
    options: ["колена", "рбетен столб", "граден кош", "глава"],
    correct: "рбетен столб",
  },
  {
    id: "12",
    question: "Кај вдлабнати гради",
    options: [
      "не постојат проблеми со дишењето и притисок на големи крвни садови",
      "градниот кош е испакнат према напред",
      "ниедено од наведените",
      "не постојат проблеми со дишењето и притисок на големи крвни садови",
    ],
    correct:"не постојат проблеми со дишењето и притисок на големи крвни садови",
  },
  {
    id: "12",
    question: "Превенција на вродено ишчашување на колк кај новороденчиња вклучува",
    options: [
      "вежби за колкови ",
      "редовен ортопедски преглед",
      "сите наведени",
      "широк повој",
    ],
    correct:"сите наведени",
  },
  {
    id: "14",
    question: "X и O  нозе се последица на ",
    options: [
      "инфекција со полио вирус",
      "оштетување на периферен неврон",
      "оштетување на мускулус стреноклеидомастоидеус",
      "недостаток на вит. Д",
    ],
    correct: "недостаток на вит. Д",
  },
  {
    id: "15",
    question:"При деформитет коњско стопало наслонот при одење е насочен главно на прстите",
    options: ["ДА", "НЕ"],
    correct: "ДА",
  },
  {
    id: "16",
    question:"Прекумерна тежина е една од причините за стекнато рамно стапало ",
    options: ["ДА", "НЕ"],
    correct: "ДА",
  },
  {
    id: "17",
    question:"При деформитет петично стопало наслонот при одење е насочен главно на прстите ",
    options: ["ДА", "НЕ"],
    correct: "НЕ",
  },
  {
    id: "18",
    question: "Плексус брахијалис  се оштетува при ",
    options: [
      "тежок пораѓај со силно извлекување на главата или раката на бебето",
      "инфекција со полио вирусот",
      "крварење во мозокот",
      "оштетување на мускулус стерноклеидомастеидеус",
    ],
    correct:"тежок пораѓај со силно извлекување на главата или раката на бебето",
  },
  {
    id: "19",
    question: "Ревматска треска се јавува  најчесто кај ?",
    options: [
      "Кај деца од 4-15 год.",
      "кај возрасни жени",
      "кај возрасни мажи",
      "кај новороденчиња",
    ],
    correct: "Кај деца од 4-15 год.",
  },
  {
    id: "20",
    question: "За клиничката слика при ревматска треска е карактеристично",
    options: ["кардитис", "полиартритис", "хореа", "сите наведени"],
    correct: "сите наведени",
  },
  {
    id: "21",
    question: "тманот на О нозе опфаќа",
    options: [
      "Престој на море, антирахитична терапија",
      "Кинезитерапија",
      "ортопедски помагала",
      "Сите наведени",
    ],
    correct: "Сите наведени",
  },
  {
    id: "22",
    question: "Кај деформитетот кокошкини гради се користат",
    options: [
      "Ортопедски чевли",
      "Ортопедски корсет",
      "Мидер со еластична пелота",
      "не се користат ортопедски помагала",
    ],
    correct: "Мидер со еластична пелота",
  },
  {
    id: "23",
    question: "Кој спорт е најдобар за превенција и терапија на деформитети на рбетен столб ?",
    options: ["фудбал", "Пливање", "кошарка", "Тенис"],
    correct: "Пливање",
  },
  {
    id: "24",
    question:"Фрактура или скршеница е една од најчестите трауматски оштетувања во детска возраст . Во лекувањето се користи гипсана имобилизација  која може да доведе до :",
    options: [
      "Атрофија на мускулите",
      "Кинење на тетивите",
      "Хипертрофија на мускулите",
      "ниедно од наведените",
    ],
    correct: "Атрофија на мускулите",
  },
  {
    id: "25",
    question: "очен удар се јавува како резултат на :",
    options: [
      "прекин на циркулација во мозочното ткиво",
      "излив на крв во мозочното ткиво",
      "прекин или излив на крв во мозочното ткиво",
      "не е поврзано со циркулација",
    ],
    correct: "прекин или излив на крв во мозочното ткиво",
  },
  {
    id: "26",
    question:"дали се ова најдобрите 3 причини за мозочен удар: Тромбоза, висок крвен притисок, атеросклероза",
    options: ["ДА", "НЕ"],
    correct: "ДА",
  },
  {
    id: "27",
    question:"Клиничката слика на мозочен удар се карактеризира со:                                             ",
    options: [
      "квадриплегија",
      "параплегија",
      "хемиплегија",
      "пареза на нервус фацијалис",
    ],
    correct: "хемиплегија",
  },
  {
    id: "28",
    question: "Карактеристично за субарахноидално крварење е:             ",
    options: [
      "крв во цереброспинален ликвор",
      "крв во мозочно ткиво ",
      "исхемија на мозочен паренхим",
      "недно од наведените",
    ],
    correct: "крв во цереброспинален ликвор",
  },
  {
    id: "29",
    question: "Дисторзија е",
    options: [
      "траума во мозокот",
      "скршеница",
      "истегнување на зглобните врски",
      "модрица",
    ],
    correct: "истегнување на зглобните врски",
  },
  {
    id: "30",
    question: "Што е хемартрос ?",
    options: [
      "крварење од нос ",
      "крварење во зглобот",
      "крварење во столица",
      "скршеница",
    ],
    correct: "крварење во зглобот",
  },
  {
    id: "31",
    question: "Кај контузија се поставува гипсана имобилизација ",
    options: ["ДА", "НЕ"],
    correct: "НЕ",
  },
  {
    id: "32",
    question: "веднаш по повредата контузија се применува криотерапија ",
    options: ["ДА", "НЕ"],
    correct: "ДА",
  },
  {
    id: "33",
    question: "репозиција на зглобот се прави кај луксација ",
    options: ["ДА", "НЕ"],
    correct: "ДА",
  },
  {
    id: "34",
    question: "Цели на рехабилитација кај пациентот со фрактура се: ",
    options: [
      "превенција на атрофија на  мускулатурата ",
      "превенција на развој на контрактури",
      "стимулација на калус",
      "ите наведени",
    ],
    correct: "ите наведени",
  },
  {
    id: "35",
    question: "Една од причините за ампутација е дијабетес",
    options: ["ДА", "НЕ",],
    correct: "ДА",
  },
  {
    id: "36",
    question:"Во текот на претпротетската рехабилитација неопходно е оформувањето на чунката, која треба да добие :",
    options: [
      "конусна или цилиндрична форма",
      "округла форма",
      "зашилена форма",
      "не треба да се оформи чкунката",
    ],
    correct: "конусна или цилиндрична форма",
  },
  {
    id: "37",
    question: "Волкманова контрактура е деформитет на",
    options: ["Раката ", "ногата", "главата ", "граден кош        "],
    correct: "Раката",
  },
  {
    id: "38",
    question: "Воспалителни ревматски болести се манифестираат со:",
    options: ["оток ", "болка", "црвенило ", "сите  наведени"],
    correct: "сите  наведени",
  },
  {
    id: "39",
    question: "Ревматоиден артритис е болест која се јавува на :",
    options: [
      "целиот локомоторен апарат ",
      "зглобовите на нозете",
      "зглобовите на рацете",
      "рбетниот столб",
    ],
    correct: "целиот локомоторен апарат",
  },
  {
    id: "40",
    question:"Од физикални процедури при лекување на ревматоиден артритис се употребуваат",
    options: [
      "тремотерапија ",
      "хидротерапија",
      "електрофореза",
      "сите наведени",
    ],
    correct: "сите наведени",
  },
  {
    id: "41",
    question: "Анкилозирачки спондилитис најчесто се јавува кај  ",
    options: ["мажи ", "жена"],
    correct: "мажи",
  },
  {
    id: "42",
    question: "Артроза е болест која ги зафаќа :",
    options: ["мускулите", "срцето", "коските", "зглобовите "],
    correct: "зглобовите ",
  },
  {
    id: "43",
    question: "При артоза на колк се јавува",
    options: ["болка ", "отежнато движење", "замор", "сите наведени"],
    correct: "сите наведени",
  },
  {
    id: "44",
    question: "Гонартрозис е ",
    options: [
      "артроза на колк",
      "артоза на колено",
      "артоза на рачниот зглоб",
      "артроза на рамен зглоб",
    ],
    correct: "артоза на колено",
  },
  {
    id: "45",
    question: "Што е хемартрос ?",
    options: [
      "крварење од нос ",
      "крварење во зглобот",
      "крварење во столица",
      "скршеница",
    ],
    correct: "крварење во зглобот",
  },
  {
    id: "46",
    question: "Лумбален синдром се јавува во ",
    options: [
      "вратниот дел од рбетот ",
      "дниот дел од рбетот ",
      "слабинскиот дел од рбетот",
      "не е локализиран на рбетот",
    ],
    correct: "слабинскиот дел од рбетот",
  },
  {
    id: "47",
    question: "При лекување во акутна фаза на лумбалниот синдром се применува",
    options: [
      "мирување ",
      "кинезитерапија",
      "оперативен третман",
      "електростимулација",
    ],
    correct: "мирување",
  },
  {
    id: "48",
    question: "Тендинитис е воспаление на ",
    options: ["Фасцијата ", "Тетивата", "Апоневрозата", "зглобот"],
    correct: "Тетивата",
  },
  {
    id: "49",
    question: "Ризик фактори за Дипетренова контрактура се",
    options: [
      "Шеќерна болест ",
      "заболувања на црниот дроб",
      "алкохолизам ",
      "сите наведени",
    ],
    correct: "сите наведени",
  },
  {
    id: "50",
    question: "Прв клинички знак на дипетренова контрактура е ",
    options: [
      "задебелување на палмарната фасција ",
      "истенчување на палмарната фасција",
      "Болка во коленото",
      "болка во рамениот зглоб",
    ],
    correct: "задебелување на палмарната фасција",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

// Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    // Increment questionCount
    questionCount += 1;
    // If last question
    if (questionCount == quizArray.length) {
      // Hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      // User score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      // Display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      // Display quiz
      quizDisplay(questionCount);
      count = 36; // Reset timer to 36
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

// Quiz Creation
function quizCreator() {
  // Randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  // Generate quiz
  for (let i of quizArray) {
    // Randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    // Quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    // Question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    // Question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    // Options
    i.options.forEach(option => {
      if (option !== undefined) {
        let button = document.createElement("button");
        button.classList.add("option-div");
        button.onclick = () => checker(button);
        button.innerHTML = option;
        div.appendChild(button);
      }
    });
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

// Initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 36;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
