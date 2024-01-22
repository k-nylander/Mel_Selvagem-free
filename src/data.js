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
import CommunityImg1 from '../src/assets/img/community/receitas.jpg';
import CommunityImg2 from '../src/assets/img/community/bolo-de-mel-com-frutas.jpg';
import CommunityImg3 from '../src/assets/img/community/biscoitos_de_mel.jpg';
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
  btnLoginText: 'Log in',
  btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'Sobre nós', href: '/' },
  { name: 'Nosso trabalho', href: '/' },
  { name: 'Produto', href: '/' },
  { name: 'Community', href: '/' },
  { name: 'Perguntas', href: '/' },
];

export const banner = {
  titlePart1: 'Do produtor do campo',
  titlePart2: '– para sua mesa.',
  subtitle:
    'Produto natural selvagem e natural direto do campo',
  textBtn: 'Garanta seu aqui',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Nossa missão',
  subtitle1:
    'Produção de mel selvagem, cutivado direto das abelhas, para garantir isso levamos a qualidade do campo para sua mesa.',
  subtitle2:
    'The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.',
  link: 'Garante seu aqui',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Manejos no Apiário',
  programs: [
    {
      image: Manejo1,
      name: 'Manejo',
    },
    {
      image: Resgate,
      name: 'Resgate',
    },
    {
      image: Resgate2,
      name: 'Resgate',
    },
    {
      image: Manejo2,
      name: 'Manejo',
    },
    {
      image: Manejo3,
      name: 'Manejo',
    },
    {
      image: Manejo4,
      name: 'Manejo',
    },
    {
      image: Manejo5,
      name: 'Manejo',
    },
    {
      image: Manejo6,
      name: 'Manejo',
    },
    {
      image: Manejo7,
      name: 'Manejo',
    },
    {
      image: Manejo8,
      name: 'Frascos',
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
      name: 'Bolo integral de Mel.',
      message:
        '“Great location, great price and great, helpful people. What to want more?”',
    },
    {
      image: CommunityImg2,
      name: 'Pão caseiro de Mel.',
      message:
        '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
    },
    {
      image: CommunityImg3,
      name: 'Biscoitos de Mel.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
    {
      image: CommunityImg4,
      name: 'Maça assada com Mel.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'Perguntas',
  accordions: [
    {
      question: 'Nosso foco com abelhas?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Manejo e curiosidades?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Resgate de abelhas, como funciona?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Nosso produto, nosso mel?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Tudo sobre mel selvagem?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Curiosidades sobre o mel?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: '30',
  subtitle:
    'Frasco de 500ml.',
    pix: JoinImgPix,
    btnText: 'Peça aqui',
};

export const footer = {
  logo: Logo,
  copyrightText: 'Todos direitos reservados. Mel Selvagem 2024.',
};
