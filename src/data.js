// images
//import Logo from '../src/assets/img/header/logo.svg';
import Logo from '../src/assets/img/header/logoMel.png';
import Manejo1 from '../src/assets/img/workouts/colheita.jpeg';
import Resgate from '../src/assets/img/workouts/colheita2.jpeg';
import Resgate2 from '../src/assets/img/workouts/resgate-2.jpeg';
import Manejo2 from '../src/assets/img/workouts/manejo3.jpeg';
import Manejo3 from '../src/assets/img/workouts/manejo4.jpeg';
import Manejo4 from '../src/assets/img/workouts/manejo5.jpeg';
import Manejo5 from '../src/assets/img/workouts/manejo6.jpeg';
import Manejo6 from '../src/assets/img/workouts/manejo7.jpeg';
import Manejo7 from '../src/assets/img/workouts/manejo8.jpeg';
import Manejo8 from '../src/assets/img/workouts/frascos2.png';
// images
import CommunityImg1 from '../src/assets/img/community/saladamel.jpeg';
import CommunityImg2 from '../src/assets/img/community/17-bolacha-de-mel.jpg';
import CommunityImg3 from '../src/assets/img/community/Costelinha-de-porco-assada-com-mel.jpg';
import CommunityImg4 from '../src/assets/img/community/macamel.jpeg.jpg';
import JoinImg from '../src/assets/img/join/frascos2.png';
import JoinImgPix from '../src/assets/img/join/pix.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
  logo: Logo,
  btnLoginText: 'Fale Conosco',
  link:'https://api.whatsapp.com/send?phone=555481420633&text=Ola+Tudo+Bem?',
  btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Home', href: '/'},
  { name: 'Sobre nós', href: '/banner' },
  { name: 'Nossa missão', href: '/about' },
  { name: 'Nosso trabalho', href: '/workouts' },
  { name: 'Receitas', href: '/community' },
  { name: 'Perguntas', href: '/faq' },
  { name: 'Produto', href: '/join' },
];

export const banner = {
  titlePart1: 'Do produtor do campo',
  titlePart2: '– para sua mesa.',
  subtitle:
    ' Mel puro, natural e saudável',
  textBtn: 'Garanta aqui',
  link:'https://api.whatsapp.com/send?phone=555481420633&text=Ola+Tudo+Bem?',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Sobre nosso ofício',
  subtitle1:
    ' <b>Nós, apicultores,</b> acreditamos que criar abelhas é a nossa nossa contribuição com o universo e um compromisso que ultrapassa a produção de mel. Se é verdade que somos o que comemos, produzir um alimento que gera <b>saúde e bem estar</b> faz toda a diferença. ',
  subtitle2:
    ' por admirarmos este animal magnífico, de mais de 100 milhões de anos, socialmente organizado e fundamental agente de polinização, ao buscar pólen e nectar no vai e vem incansável de suas visitas às flores.',
  subtitle21:
    ' , proporcionamos às abelhas as melhores condições de conforto e proteção, para que façam o que melhor sabem, aproveitando a exuberante natureza da <b>Serra Gaúcha brasileira</b>, criadas livres e protegidas.',
  subtitle3:
    '<b>Abelhas são seres únicos;</b> O ser humano, que ao longo do tempo, domesticou os mais diversos animais, mas jamais conseguiu fazer o mesmo com este singelo inseto. São seres livres e permaneceram <b>selvagens e indomáveis</b>. Aprendemos a lidar e aplicar as boas técnicas da apicultura, mas elas nunca abdicaram de seu instinto selvagem. Desta percepção, nasce o nosso nome, “O mel Selvagem”.',
  
  btnText: 'Garanta aqui',
  link:'https://api.whatsapp.com/send?phone=555481420633&text=Ola+Tudo+Bem?',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Manejos no Apiário',
  programs: [
    {
      image: Manejo1,
      name: 'Manejo no Apiário',
    },
    {
      image: Resgate,
      name: 'Resgate de enxame',
    },
    {
      image: Resgate2,
      name: 'Resgate de enxame',
    },
    {
      image: Manejo2,
      name: 'Colheita do mel',
    },
    {
      image: Manejo3,
      name: 'Colheita do mel',
    },
    {
      image: Manejo4,
      name: 'Colheita do mel',
    },
    {
      image: Manejo5,
      name: 'Colheita do mel',
    },
    {
      image: Manejo6,
      name: 'Colheita do mel',
    },
    {
      image: Manejo7,
      name: 'Colheita do mel',
    },
    {
      image: Manejo8,
      name: 'Nossa produção',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Nosso produto',
  plans: [
    {
      name: 'Basic',
      price: '20',
      list: [
        { name: 'unlimited gym access' },
        { name: '1 training programs' },
        { name: 'free fitness consultation' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      price: '35',
      list: [
        { name: 'unlimited gym access' },
        { name: '5 training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
      ],
      delay: 800,
    },
    {
      name: 'Elite',
      price: '49',
      list: [
        { name: 'unlimited gym access' },
        { name: 'all training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
        { name: '50% off drinks' },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Receitas',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Molho de mel para salada',
      message:
        '“Ingredientes: 1 colher de sopa de mel, 3 colheres de sopa de azeite e 2 colheres de sopa de mostarda.”',
      descricao:
        'Preparo: Misture todos os ingredientes.',
    },
    {
      image: CommunityImg2,
      name: 'Bolachinha de Mel',
      message:
        '“Ingredientes: Farinha de trigo, mel, açúcar, ovos, canela,  noz moscada, cravo, casca de limão ralada, bicarbonato de sódio e chocolate em pó.”',
      descricao:
        '',
      link: 'https://www.receiteria.com.br/receita/bolacha-de-mel/',
    },
    {
      image: CommunityImg3,
      name: 'Costelinha de porco com mel e laranja',
      message:
        '“Ingredientes: mel, laranja, shoyou, sal, mostarda, colorífico, pimenta do reino, cebola, alho e costelinha de porco.”',
      descricao:
        '',
      link: 'https://panelaterapia.com/costelinha-com-laranja-e-me/',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'Curiosidades',
  accordions: [
    {
      question: 'Por que o mel cristaliza?',
      answer:
        'O mel genuíno tem uma tendência À cristalização, causada pela reação do hidrogênio do ar com a frutose que esta presente no mel, produzindo hidreto de frutose, que é sólido.',
    },
    {
      question: 'Como faço para retornar o mel ao estado líquido?',
      answer:
        'Recomendamos a colocação em banho maria, todavia, a temperatura não pode passar de 45° C. Não se deve levar o mel em temperatura mais alta que isto, pois provoca a oxidação do mel (hidróxido metil furfural – HMF), tornando o alimento não adequado ao consumo humano.',
    },
    {
      question: 'Por que a cor do mel pode variar?',
      answer:
        'A cor varia porque s abelhas produzem o mel dependendo do que coletam na natureza. Espécies vegetais diferentes, produzem mel com diferentes cores. A cor do mel é determinada pela quantidade de sais minerais que contém. Quanto mais escuro, mais sais minerais. Por outro lado, quanto mais claro, mas saboroso o mel.',
    },
    {
      question: 'Curiosidades do mel',
      answer:
        '• É um produto utilizado deste a antiguidade para o tratamento de doenças respiratórias e cicatrizantes;  Funciona como um poderoso agente biológico, capaz de dar eliminar microrganismos, como bactérias, fungos, leveduras, vírus, etc. O principal agente bactericida contido no mel é o peróxido de hidrogênio;',
    },
    {
      question: 'Outros produtos apícolas (Própolis)',
      answer:
        '• Própolis: É um dos mais poderosos agentes antimicrobianos do mundo. As abelhas coletam o própolis, como uma resina no tronco e nos brotos dos vegetais, formando uma espécie de liga. Nas colmeias, será utilizada para vedar as frestas.',
    },
    {
      question: 'Outros produtos apícolas (Cera das abelhas)',
      answer:
        '• Cera das abelhas: Sua finalidade mais conhecida é a cosmética, fazendo parte da constituição de produtos como batons, cremes, loções, cera depilatória e óleos.',
    },
    {
      question: 'Outros produtos apícolas (Geléia real)',
      answer:
        '• Geléia real: Do ponto de vista nutricional, é o alimento mais completo que existe. Todos os 23 aminoácidos existentes na natureza estão na geleia real. Todos os 84 sais minerais, estão presentes na geleia real. Na apiterapia a geleia real é utilizada para nutrir pessoas com problemas relacionados a rins, pâncreas, disfunções ligadas á diabetes. Também é utilizada no tratamento de  fertilidade, impotência sexual, cansaço e stress. ',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: '30',
  subtitle:
    'Frasco de 500ml.',
    pix: JoinImgPix,
    btnText: 'Garanta aqui',
    link:'https://api.whatsapp.com/send?phone=555481420633&text=Ola+Tudo+Bem?',
};

export const footer = {
  logo: Logo,
  copyrightText: 'Todos Direitos Reservados. Mel Selvagem © 2024.',
};
