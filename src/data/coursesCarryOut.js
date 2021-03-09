const cetae = {
    name: 'CETAE',
    webSite: 'https://www.cetae.com.ar/',
    image: 'cetae.jpg'
};

const educacionIt = {
    name: 'EducacionIt',
    webSite: 'https://www.educacionit.com/',
    image: 'educacionit-bordered.jpg'
}

const udemy = {
    name: 'Udemy',
    webSite: 'https://www.udemy.com/',
    image: 'udemy.jpg'
}

const platzi = {
    name: 'Platzi',
    webSite: 'https://platzi.com/',
    image: 'platzi.jpg'
}

export const courses = [
    {
        name: 'Java Para No Programadores',
        organization: cetae,
        start: 'jul 2014',
        end: 'sep 2014',
        duration: 40
    },
    {
        name: 'Introducción a Base de Datos y SQL',
        organization: educacionIt,
        start: 'may 2015',
        end: 'jun 2015',
        duration: 12
    },
    {
        name: 'Armado y Reparación de PC',
        organization: cetae,
        start: 'jul 2015',
        end: 'dec 2015',
        duration: 80
    },
    {
        name: 'Java Standard Programming, J2SE 8.0',
        organization: educacionIt,
        start: 'jun 2015',
        end: 'jul 2015',
        duration: 40
    },
    {
        name: 'Java Web: Servlets, JSP, JSTL, Struts & AJAX',
        organization: educacionIt,
        start: 'sep 2015',
        end: 'oct 2015',
        duration: 30
    },
    {
        name: 'Java Advanced Programming: Threads, Networking, J2SE',
        organization: educacionIt,
        start: 'oct 2015',
        end: 'nov 2015',
        duration: 15
    },
    {
        name: 'Java Web Services',
        organization: educacionIt,
        start: 'nov 2015',
        end: 'dec 2015',
        duration: 12
    },
    {
        name: 'Java HIBERNATE',
        organization: educacionIt,
        start: 'nov 2015',
        end: 'jan 2016',
        duration: 21
    },
    {
        name: 'Java Spring',
        organization: educacionIt,
        start: 'jan 2016',
        end: 'feb 2016',
        duration: 12
    },
    {
        name: 'UML y UP: Análisis y Diseño Orientado a Objetos',
        organization: educacionIt,
        start: 'feb 2016',
        end: 'mar 2016',
        duration: 15
    },
    {
        name: 'Seguridad Web: SQL Injection & XSS',
        organization: educacionIt,
        start: 'mar 2016',
        end: 'apr 2016',
        duration: 15
    },
    {
        name: 'Programación en Android',
        organization: educacionIt,
        start: 'mar 2016',
        end: 'may 2016',
        duration: 15
    },
    {
        name: 'Git: Desarrollo Corporativo',
        organization: educacionIt,
        start: 'jul 2016',
        end: 'aug 2016',
        duration: 12
    },
    {
        name: 'Python',
        organization: educacionIt,
        start: 'dec 2017',
        end: 'jan 2018',
        duration: 12
    },
    {
        name: 'Spring Framework 5 & Spring Boot: Thymeleaf, Data JPA, Security, REST, Angular 5, Heroku, Spring WebFlux',
        organization: udemy,
        start: 'may 2018',
        end: 'jun 2018',
        duration: 21,
        certification: 'https://www.udemy.com/certificate/UC-TUTBQR5I'
    },
    {
        name: 'Arquitectura Java',
        organization: educacionIt,
        start: 'may 2018',
        end: 'jul 2018',
        duration: 18
    },
    {
        name: 'Protocolos HTTPS',
        organization: educacionIt,
        start: 'aug 2018',
        end: 'aug 2018',
        duration: 3
    },
    {
        name: 'Curso de FlexBox desde 0',
        organization: udemy,
        start: 'jun 2018',
        end: 'jun 2018',
        duration: 2
    },
    {
        name: 'Fundamentos de Bootstrap 4: Crea tu primer sitio responsive',
        organization: udemy,
        start: 'jul 2018',
        end: 'jul 2018',
        duration: 3
    },
    {
        name: 'Curso de Sass para principiantes - Paso a paso y desde cero',
        organization: udemy,
        start: 'jul 2018',
        end: 'jul 2018',
        duration: 1
    },
    {
        name: 'Persistencia de Datos Hibernate 5 y Spring Data JPA',
        organization: udemy,
        start: 'aug 2018',
        end: 'aug 2018',
        duration: 6,
        certification: 'https://www.udemy.com/certificate/UC-ALMQBL8E/'
    },
    {
        name: 'Angular: De cero a experto creando aplicaciones (angular 7+)',
        organization: udemy,
        start: 'sep 2018',
        end: 'nov 2018',
        duration: 26,
        certification: 'https://www.udemy.com/certificate/UC-FC4QCW86/'
    },
    {
        name: 'Node JS: De cero a experto',
        organization: udemy,
        start: 'nov 2018',
        end: 'dec 2018',
        duration: 19.5,
        certification: 'https://www.udemy.com/certificate/UC-DP38TOG0/'
    },
    {
        name: 'Angular: Convierte cualquier template HTML en una WebApp',
        organization: udemy,
        start: 'dec 2018',
        end: 'dec 2018',
        duration: 3
    },
    {
        name: 'Java Maven: Introducción paso a paso para no expertos',
        organization: udemy,
        start: 'mar 2019',
        end: 'mar 2019',
        duration: 4,
        certification: 'https://www.udemy.com/certificate/UC-8FNDY9NM/'
    },
    {
        name: 'Test Driven Development con ejemplos en java y junit',
        organization: udemy,
        start: 'mar 2019',
        end: 'mar 2019',
        duration: 1,
        certification: 'https://www.udemy.com/certificate/UC-YWYEBYE0/'
    },
    {
        name: 'Patrones de diseño de software y principios SOLID',
        organization: udemy,
        start: 'apr 2019',
        end: 'apr 2019',
        duration: 4,
        certification: 'https://www.udemy.com/certificate/UC-TVJ31OFX/'
    },
    {
        name: 'Test unitarios con JUnit 5. Curso de introducción',
        organization: udemy,
        start: 'may 2019',
        end: 'may 2019',
        duration: 4.5,
        certification: 'https://www.udemy.com/certificate/UC-G66MCUB7/'
    },
    {
        name: 'VueJs 2 y Vuex desde 0 con las mejores prácticas',
        organization: udemy,
        start: 'may 2019',
        end: 'jun 2019',
        duration: 9.5,
        certification: 'https://www.udemy.com/certificate/UC-1PVNJ4WC/'
    },
    {
        name: 'Java EE 7 & frameworks - JSF2, Spring 4, Struts 2 y EJB3',
        organization: udemy,
        start: 'jun 2019',
        end: 'jun 2019',
        duration: 8,
        certification: 'https://www.udemy.com/certificate/UC-H52HEBXY/'
    },
    {
        name: 'Probar Django: Crear una aplicación web',
        organization: udemy,
        start: 'jul 2019',
        end: 'jul 2019',
        duration: 4.5,
        certification: 'https://www.udemy.com/certificate/UC-02J8Y4L3/'
    },
    {
        name: 'Angular Avanzado: Lleva tus bases al siguiente nivel - MEAN',
        organization: udemy,
        start: 'aug 2019',
        end: 'sep 2019',
        duration: 27,
        certification: 'https://www.udemy.com/certificate/UC-PWQJFPWM/'
    },
    {
        name: 'Visual Studio Code: Mejora tu velocidad para codificar',
        organization: udemy,
        start: 'sep 2019',
        end: 'sep 2019',
        duration: 1.5,
        certification: 'https://www.udemy.com/certificate/UC-I2SHHQC3/'
    },
    {
        name: 'Angular & Spring 5: Creando web app full stack (Angular 8+)',
        organization: udemy,
        start: 'oct 2019',
        end: 'oct 2019',
        duration: 23,
        certification: 'https://www.udemy.com/certificate/UC-46AR6C5J/'
    },
    {
        name: 'Angular: Aplicaciones en tiempo real con sockets y rest',
        organization: udemy,
        start: 'oct 2019',
        end: 'oct 2019',
        duration: 8,
        certification: 'https://www.udemy.com/certificate/UC-FSB12TYR/'
    },
    {
        name: 'PWA - Aplicaciones Web Progresivas: De cero a experto',
        organization: udemy,
        start: 'oct 2019',
        end: 'nov 2019',
        duration: 14.5,
        certification: 'https://www.udemy.com/certificate/UC-YZ8258MF/'
    },
    {
        name: 'REDUX en Angular con NGRX: Desde las bases hasta la práctica',
        organization: udemy,
        start: 'nov 2019',
        end: 'nov 2019',
        duration: 1.5,
        certification: 'https://www.udemy.com/certificate/UC-MM6ZVX37'
    },
    {
        name: 'Programación Reactiva con Spring Boot 2 y Spring WebFlux',
        organization: udemy,
        start: 'nov 2019',
        end: 'nov 2019',
        duration: 11,
        certification: 'https://www.udemy.com/certificate/UC-VXJ32M6X'
    },
    {
        name: '60+ Herramientas de desarrollo y diseño web',
        organization: udemy,
        start: 'nov 2019',
        end: 'nov 2019',
        duration: 8,
        certification: 'https://www.udemy.com/certificate/UC-UE9MXC18/'
    },
    {
        name: 'The complete ASP.NET MVC 5 Course',
        organization: udemy,
        start: 'dec 2019',
        end: 'jan 2020',
        duration: 7.5,
        certification: 'https://www.udemy.com/certificate/UC-X05K9CSB'
    },
    {
        name: 'Flutter: Una Introducción al Framework',
        organization: udemy,
        start: 'jan 2020',
        end: 'jan 2020',
        duration: 10,
        certification: 'https://www.udemy.com/certificate/UC-APU7LFWE'
    },
    {
        name: 'Jenkins, De Cero A Experto: Conviértete En Un Jenkins Master',
        organization: udemy,
        start: 'jan 2020',
        end: 'feb 2020',
        duration: 10,
        certification: 'https://www.udemy.com/certificate/UC-45c0cf0f-bb6d-48c8-89a2-82c549f78a66/'
    },
    {
        name: 'Microservicios con Spring Boot y Spring Cloud Netflix Eureka',
        organization: udemy,
        start: 'mar 2020',
        end: 'apr 2020',
        duration: 13.5,
        certification: 'https://www.udemy.com/certificate/UC-3b5853b2-9357-4a70-9397-e4c55a662091'
    },
    {
        name: 'ReactiveX - Rxjs: De cero hasta los detalles',
        organization: udemy,
        start: 'apr 2020',
        end: 'apr 2020',
        duration: 9.5,
        certification: 'https://www.udemy.com/certificate/UC-5255302d-54e1-4b70-b7e8-eb0f5a9c6880'
    },
    {
        name: 'Docker, de principiante a experto',
        organization: udemy,
        start: 'apr 2020',
        end: 'apr 2020',
        duration: 8.5,
        certification: 'https://www.udemy.com/certificate/UC-a7fc0f5d-9662-4e5c-8710-83a9bd6fab60'
    },
    {
        name: 'Mi primer juego con Unity 5',
        organization: udemy,
        start: 'apr 2020',
        end: 'apr 2020',
        duration: 4
    },
    {
        name: 'Introducción a GraphQL desde las bases hasta crear APIs',
        organization: udemy,
        start: 'apr 2020',
        end: 'may 2020',
        duration: 10.5,
        certification: 'https://www.udemy.com/certificate/UC-9383376d-6312-414e-93c8-e2b13cf21136/'
    },
    {
        name: 'Programación de Android desde cero +35 horas',
        organization: udemy,
        start: 'may 2020',
        end: 'aug 2020',
        duration: 42.5,
        certification: 'https://www.udemy.com/certificate/UC-97e23cee-8f7f-4d04-917e-17a6a21b698a'
    },
    {
        name: 'The Complete Android Oreo Developer Course - Build 23 Apps!',
        organization: udemy,
        start: 'may 2020',
        end: 'aug 2020',
        duration: 37.5,
        certification: 'https://www.udemy.com/certificate/UC-607e592b-81d0-4249-bc0f-ae2eb42e0059/'
    },
    {
        name: 'Fundamentos de ingeniería de software',
        organization: platzi,
        start: 'oct 2020',
        end: 'oct 2020',
        duration: 5
    },
    {
        name: 'Ionic 5: Crear aplicaciones IOS, Android y PWAs con angular',
        organization: udemy,
        start: 'aug 2020',
        end: 'jan 2021',
        duration: 30,
        certification: 'udemy.com/certificate/UC-258e5886-3aad-49f8-b535-4f4b41d3f8d9/'
    },
    {
        name: 'React: De Cero a experto (Hooks)',
        organization: udemy,
        start: 'sep 2020',
        end: 'jan 2021',
        duration: 43,
        certification: 'https://www.udemy.com/certificate/UC-93522e82-8b02-41ed-83dd-0c796642b00f/'
    },
    {
        name: 'Ultimate AWS Certified Developer Associate 2021 - NEW!',
        organization: udemy,
        start: 'jan 2021',
        end: 'at present',
        duration: 29.5,
        certification: ''
    },
];
