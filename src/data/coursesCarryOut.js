const cetae = {
    name: 'CETAE',
    webSite: 'https://www.cetae.com.ar/'
};

const educacionIt = {
    name: 'EducacionIt',
    webSite: 'https://www.educacionit.com/'
}

const udemy = {
    name: 'Udemy',
    webSite: 'https://www.udemy.com/'
}

const udemy2021 = {
    name: 'Udemy2021',
    webSite: 'https://www.udemy.com/'
}

const platzi = {
    name: 'Platzi',
    webSite: 'https://platzi.com/'
}

const tags = {
    language: {
        spanish: 'spanish',
        english: 'english'
    },
    programming: {
        backend: {
            java: {
                name: 'java',
                framework: {
                    spring: 'spring'
                }
            },
            node: 'nodejs',
        },
        frontend: {
            web: {
                desing: 'design',
                javascript: 'javascript',
                framework: {
                    angular: 'angular',
                    react: 'react'
                }
            },
            mobile: {
                android: 'android',
                javascript: {
                    ionic: 'ionic',
                    reactNative: 'react native'
                },
                dart: {
                    framework: {
                        flutter: 'flutter'
                    }
                }
            },
        },
        devops: 'devops',
        others: 'others'
    },
    instructor: {
        fernandoHerrera: 'fernando herrera'
    },
    all : 'all'
}

export const courses = [
    {
        name: 'Java Para No Programadores',
        organization: cetae,
        start: 'jul 2014',
        end: 'sep 2014',
        duration: 40,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        name: 'Introducción a Base de Datos y SQL',
        organization: educacionIt,
        start: 'may 2015',
        end: 'jun 2015',
        duration: 12,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        name: 'Armado y Reparación de PC',
        organization: cetae,
        start: 'jul 2015',
        end: 'dec 2015',
        duration: 80,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        name: 'Java Standard Programming, J2SE 8.0',
        organization: educacionIt,
        start: 'jun 2015',
        end: 'jul 2015',
        duration: 40,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        name: 'Java Web: Servlets, JSP, JSTL, Struts & AJAX',
        organization: educacionIt,
        start: 'sep 2015',
        end: 'oct 2015',
        duration: 30,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        name: 'Java Advanced Programming: Threads, Networking, J2SE',
        organization: educacionIt,
        start: 'oct 2015',
        end: 'nov 2015',
        duration: 15,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        name: 'Java Web Services',
        organization: educacionIt,
        start: 'nov 2015',
        end: 'dec 2015',
        duration: 12,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        name: 'Java HIBERNATE',
        organization: educacionIt,
        start: 'nov 2015',
        end: 'jan 2016',
        duration: 21,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        name: 'Java Spring',
        organization: educacionIt,
        start: 'jan 2016',
        end: 'feb 2016',
        duration: 12,
        tags: [ tags.programming.backend.java.name, tags.programming.backend.java.framework.spring, tags.language.spanish, tags.all ]
    },
    {
        name: 'UML y UP: Análisis y Diseño Orientado a Objetos',
        organization: educacionIt,
        start: 'feb 2016',
        end: 'mar 2016',
        duration: 15,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        name: 'Seguridad Web: SQL Injection & XSS',
        organization: educacionIt,
        start: 'mar 2016',
        end: 'apr 2016',
        duration: 15,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        name: 'Programación en Android',
        organization: educacionIt,
        start: 'mar 2016',
        end: 'may 2016',
        duration: 15,
        tags: [ tags.programming.frontend.mobile.android, tags.language.spanish, tags.all ]
    },
    {
        name: 'Git: Desarrollo Corporativo',
        organization: educacionIt,
        start: 'jul 2016',
        end: 'aug 2016',
        duration: 12,
        tags: [ tags.programming.devops, tags.language.spanish, tags.all ]
    },
    {
        name: 'Python',
        organization: educacionIt,
        start: 'dec 2017',
        end: 'jan 2018',
        duration: 12,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        name: 'Spring Framework 5 & Spring Boot: Thymeleaf, Data JPA, Security, REST, Angular 5, Heroku, Spring WebFlux',
        organization: udemy,
        start: 'may 2018',
        end: 'jun 2018',
        duration: 21,
        certification: 'https://www.udemy.com/certificate/UC-TUTBQR5I',
        tags: [ tags.programming.backend.java.name, tags.programming.backend.java.framework.spring, tags.language.spanish, tags.all ]
    },
    {
        name: 'Arquitectura Java',
        organization: educacionIt,
        start: 'may 2018',
        end: 'jul 2018',
        duration: 18,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        name: 'Protocolos HTTPS',
        organization: educacionIt,
        start: 'aug 2018',
        end: 'aug 2018',
        duration: 3,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        name: 'Curso de FlexBox desde 0',
        organization: udemy,
        start: 'jun 2018',
        end: 'jun 2018',
        duration: 2,
        tags: [ tags.programming.frontend.web.desing, tags.language.spanish, tags.all ]
    },
    {
        name: 'Fundamentos de Bootstrap 4: Crea tu primer sitio responsive',
        organization: udemy,
        start: 'jul 2018',
        end: 'jul 2018',
        duration: 3,
        tags: [ tags.programming.frontend.web.desing, tags.language.spanish, tags.all ]
    },
    {
        name: 'Curso de Sass para principiantes - Paso a paso y desde cero',
        organization: udemy,
        start: 'jul 2018',
        end: 'jul 2018',
        duration: 1,
        tags: [ tags.programming.frontend.web.desing, tags.language.spanish, tags.all ]
    },
    {
        name: 'Persistencia de Datos Hibernate 5 y Spring Data JPA',
        organization: udemy,
        start: 'aug 2018',
        end: 'aug 2018',
        duration: 6,
        certification: 'https://www.udemy.com/certificate/UC-ALMQBL8E/',
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        name: 'Angular: De cero a experto creando aplicaciones (angular 7+)',
        organization: udemy,
        start: 'sep 2018',
        end: 'nov 2018',
        duration: 26,
        certification: 'https://www.udemy.com/certificate/UC-FC4QCW86/',
        tags: [ tags.programming.frontend.web.framework.angular, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'Node JS: De cero a experto',
        organization: udemy,
        start: 'nov 2018',
        end: 'dec 2018',
        duration: 19.5,
        certification: 'https://www.udemy.com/certificate/UC-DP38TOG0/',
        tags: [ tags.programming.backend.node, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'Angular: Convierte cualquier template HTML en una WebApp',
        organization: udemy,
        start: 'dec 2018',
        end: 'dec 2018',
        duration: 3,
        tags: [ tags.programming.frontend.web.framework.angular, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'Java Maven: Introducción paso a paso para no expertos',
        organization: udemy,
        start: 'mar 2019',
        end: 'mar 2019',
        duration: 4,
        certification: 'https://www.udemy.com/certificate/UC-8FNDY9NM/',
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        name: 'Test Driven Development con ejemplos en java y junit',
        organization: udemy,
        start: 'mar 2019',
        end: 'mar 2019',
        duration: 1,
        certification: 'https://www.udemy.com/certificate/UC-YWYEBYE0/',
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        name: 'Patrones de diseño de software y principios SOLID',
        organization: udemy,
        start: 'apr 2019',
        end: 'apr 2019',
        duration: 4,
        certification: 'https://www.udemy.com/certificate/UC-TVJ31OFX/',
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        name: 'Test unitarios con JUnit 5. Curso de introducción',
        organization: udemy,
        start: 'may 2019',
        end: 'may 2019',
        duration: 4.5,
        certification: 'https://www.udemy.com/certificate/UC-G66MCUB7/',
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        name: 'VueJs 2 y Vuex desde 0 con las mejores prácticas',
        organization: udemy,
        start: 'may 2019',
        end: 'jun 2019',
        duration: 9.5,
        certification: 'https://www.udemy.com/certificate/UC-1PVNJ4WC/',
        tags: [ tags.programming.frontend.web.javascript, tags.language.spanish, tags.all ]
    },
    {
        name: 'Java EE 7 & frameworks - JSF2, Spring 4, Struts 2 y EJB3',
        organization: udemy,
        start: 'jun 2019',
        end: 'jun 2019',
        duration: 8,
        certification: 'https://www.udemy.com/certificate/UC-H52HEBXY/',
        tags: [ tags.programming.backend.java.name, tags.programming.backend.java.framework.spring, tags.language.spanish, tags.all ]
    },
    {
        name: 'Probar Django: Crear una aplicación web',
        organization: udemy,
        start: 'jul 2019',
        end: 'jul 2019',
        duration: 4.5,
        certification: 'https://www.udemy.com/certificate/UC-02J8Y4L3/',
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        name: 'Angular Avanzado: Lleva tus bases al siguiente nivel - MEAN',
        organization: udemy,
        start: 'aug 2019',
        end: 'sep 2019',
        duration: 27,
        certification: 'https://www.udemy.com/certificate/UC-PWQJFPWM/',
        tags: [ tags.programming.frontend.web.framework.angular, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'Visual Studio Code: Mejora tu velocidad para codificar',
        organization: udemy,
        start: 'sep 2019',
        end: 'sep 2019',
        duration: 1.5,
        certification: 'https://www.udemy.com/certificate/UC-I2SHHQC3/',
        tags: [ tags.programming.others, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'Angular & Spring 5: Creando web app full stack (Angular 8+)',
        organization: udemy,
        start: 'oct 2019',
        end: 'oct 2019',
        duration: 23,
        certification: 'https://www.udemy.com/certificate/UC-46AR6C5J/',
        tags: [ tags.programming.backend.java.name, tags.programming.backend.java.framework.spring, tags.programming.frontend.web.framework.angular, tags.language.spanish, tags.all ]
    },
    {
        name: 'Angular: Aplicaciones en tiempo real con sockets y rest',
        organization: udemy,
        start: 'oct 2019',
        end: 'oct 2019',
        duration: 8,
        certification: 'https://www.udemy.com/certificate/UC-FSB12TYR/',
        tags: [ tags.programming.frontend.web.framework.angular, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'PWA - Aplicaciones Web Progresivas: De cero a experto',
        organization: udemy,
        start: 'oct 2019',
        end: 'nov 2019',
        duration: 14.5,
        certification: 'https://www.udemy.com/certificate/UC-YZ8258MF/',
        tags: [ tags.programming.frontend.web.javascript, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'REDUX en Angular con NGRX: Desde las bases hasta la práctica',
        organization: udemy,
        start: 'nov 2019',
        end: 'nov 2019',
        duration: 1.5,
        certification: 'https://www.udemy.com/certificate/UC-MM6ZVX37',
        tags: [ tags.programming.frontend.web.framework.angular, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'Programación Reactiva con Spring Boot 2 y Spring WebFlux',
        organization: udemy,
        start: 'nov 2019',
        end: 'nov 2019',
        duration: 11,
        certification: 'https://www.udemy.com/certificate/UC-VXJ32M6X',
        tags: [ tags.programming.backend.java.name, tags.programming.backend.java.framework.spring, tags.language.spanish, tags.all ]
    },
    {
        name: '60+ Herramientas de desarrollo y diseño web',
        organization: udemy,
        start: 'nov 2019',
        end: 'nov 2019',
        duration: 8,
        certification: 'https://www.udemy.com/certificate/UC-UE9MXC18/',
        tags: [ tags.programming.frontend.web.desing, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'The complete ASP.NET MVC 5 Course',
        organization: udemy,
        start: 'dec 2019',
        end: 'jan 2020',
        duration: 7.5,
        certification: 'https://www.udemy.com/certificate/UC-X05K9CSB',
        tags: [ tags.programming.others, tags.language.english, tags.all ]
    },
    {
        name: 'Flutter: Una Introducción al Framework',
        organization: udemy,
        start: 'jan 2020',
        end: 'jan 2020',
        duration: 10,
        certification: 'https://www.udemy.com/certificate/UC-APU7LFWE',
        tags: [ tags.programming.frontend.mobile.dart.framework.flutter, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'Jenkins, De Cero A Experto: Conviértete En Un Jenkins Master',
        organization: udemy,
        start: 'jan 2020',
        end: 'feb 2020',
        duration: 10,
        certification: 'https://www.udemy.com/certificate/UC-45c0cf0f-bb6d-48c8-89a2-82c549f78a66/',
        tags: [ tags.programming.devops, tags.language.spanish, tags.all ]
    },
    {
        name: 'Microservicios con Spring Boot y Spring Cloud Netflix Eureka',
        organization: udemy,
        start: 'mar 2020',
        end: 'apr 2020',
        duration: 13.5,
        certification: 'https://www.udemy.com/certificate/UC-3b5853b2-9357-4a70-9397-e4c55a662091',
        tags: [ tags.programming.backend.java.name, tags.programming.backend.java.framework.spring, tags.language.spanish, tags.all ]
    },
    {
        name: 'ReactiveX - Rxjs: De cero hasta los detalles',
        organization: udemy,
        start: 'apr 2020',
        end: 'apr 2020',
        duration: 9.5,
        certification: 'https://www.udemy.com/certificate/UC-5255302d-54e1-4b70-b7e8-eb0f5a9c6880',
        tags: [ tags.programming.frontend.web.javascript, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'Docker, de principiante a experto',
        organization: udemy,
        start: 'apr 2020',
        end: 'apr 2020',
        duration: 8.5,
        certification: 'https://www.udemy.com/certificate/UC-a7fc0f5d-9662-4e5c-8710-83a9bd6fab60',
        tags: [ tags.programming.devops, tags.language.spanish, tags.all ]
    },
    {
        name: 'Mi primer juego con Unity 5',
        organization: udemy,
        start: 'apr 2020',
        end: 'apr 2020',
        duration: 4,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        name: 'Introducción a GraphQL desde las bases hasta crear APIs',
        organization: udemy,
        start: 'apr 2020',
        end: 'may 2020',
        duration: 10.5,
        certification: 'https://www.udemy.com/certificate/UC-9383376d-6312-414e-93c8-e2b13cf21136/',
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        name: 'Programación de Android desde cero +35 horas',
        organization: udemy,
        start: 'may 2020',
        end: 'aug 2020',
        duration: 42.5,
        certification: 'https://www.udemy.com/certificate/UC-97e23cee-8f7f-4d04-917e-17a6a21b698a',
        tags: [ tags.programming.frontend.mobile.android, tags.language.spanish, tags.all ]
    },
    {
        name: 'The Complete Android Oreo Developer Course - Build 23 Apps!',
        organization: udemy,
        start: 'may 2020',
        end: 'aug 2020',
        duration: 37.5,
        certification: 'https://www.udemy.com/certificate/UC-607e592b-81d0-4249-bc0f-ae2eb42e0059/',
        tags: [ tags.programming.frontend.mobile.android, tags.language.english, tags.all ]
    },
    {
        name: 'Fundamentos de ingeniería de software',
        organization: platzi,
        start: 'oct 2020',
        end: 'oct 2020',
        duration: 5,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        name: 'Ionic 5: Crear aplicaciones IOS, Android y PWAs con angular',
        organization: udemy,
        start: 'aug 2020',
        end: 'jan 2021',
        duration: 30,
        certification: 'udemy.com/certificate/UC-258e5886-3aad-49f8-b535-4f4b41d3f8d9/',
        tags: [ tags.programming.frontend.mobile.javascript.ionic, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'React: De Cero a experto (Hooks)',
        organization: udemy,
        start: 'sep 2020',
        end: 'jan 2021',
        duration: 43,
        certification: 'https://www.udemy.com/certificate/UC-93522e82-8b02-41ed-83dd-0c796642b00f/',
        tags: [ tags.programming.frontend.web.framework.react, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'Java SE 11 Developer 1Z0-819 OCP Course - Part 1',
        organization: udemy,
        start: 'apr 2021',
        end: 'apr 2021',
        duration: 12.5,
        certification: 'https://www.udemy.com/certificate/UC-87056878-ed1d-4244-9917-8bc20d6fca69/',
        tags: [ tags.programming.backend.java.name, tags.language.english, tags.all ]
    },
    {
        name: 'Java SE 11 Developer 1Z0-819 OCP Course - Part 2',
        organization: udemy,
        start: 'apr 2021',
        end: 'apr 2021',
        duration: 21,
        certification: 'https://www.udemy.com/certificate/UC-7956aac6-eeef-4ce6-99f0-9c5cb8095e92/',
        tags: [ tags.programming.backend.java.name, tags.language.english, tags.all ]
    },
    {
        name: 'React: Aplicaciones en tiempo real con Socket-io',
        organization: udemy2021,
        start: 'mar 2021',
        end: 'apr 2021',
        duration: 16,
        certification: 'https://www.udemy.com/certificate/UC-6ff579db-4d63-4164-b21b-3e7fbc5e4cd9/',
        tags: [ tags.programming.frontend.web.framework.react, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'React Native: Aplicaciones nativas para IOS y Android',
        organization: udemy2021,
        start: 'may 2021',
        end: 'jan 2022',
        duration: 43.5,
        certification: 'https://www.udemy.com/certificate/UC-17a06692-249f-425a-b7a1-db9f054a9ba7',
        tags: [ tags.programming.frontend.web.framework.react, tags.programming.frontend.mobile.javascript.reactNative , tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'React Pro: Lleva tus bases al siguiente nivel',
        organization: udemy2021,
        start: 'jan 2022',
        end: 'at present',
        duration: 27,
        certification: '',
        tags: [ tags.programming.frontend.web.framework.react, tags.programming.frontend.web.javascript , tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        name: 'Ultimate AWS Certified Developer Associate 2021 - NEW!',
        organization: udemy2021,
        start: 'jan 2021',
        end: 'at present',
        duration: 29.5,
        certification: '',
        tags: [ tags.programming.devops, tags.language.english, tags.all ]
    },
    
];
