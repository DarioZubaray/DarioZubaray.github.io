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
                    react: 'react',
                    vue: 'vuejs'
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
        id: 1,
        name: 'Java Para No Programadores',
        organization: cetae,
        start: 'jul 2014',
        end: 'sep 2014',
        duration: 40,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        id: 2,
        name: 'Introducción a Base de Datos y SQL',
        organization: educacionIt,
        start: 'may 2015',
        end: 'jun 2015',
        duration: 12,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 3,
        name: 'Java Standard Programming, J2SE 8.0',
        organization: educacionIt,
        start: 'jun 2015',
        end: 'jul 2015',
        duration: 40,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        id: 4,
        name: 'Java Web: Servlets, JSP, JSTL, Struts & AJAX',
        organization: educacionIt,
        start: 'sep 2015',
        end: 'oct 2015',
        duration: 30,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        id: 5,
        name: 'Java Advanced Programming: Threads, Networking, J2SE',
        organization: educacionIt,
        start: 'oct 2015',
        end: 'nov 2015',
        duration: 15,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        id: 6,
        name: 'Java Web Services',
        organization: educacionIt,
        start: 'nov 2015',
        end: 'dec 2015',
        duration: 12,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        id: 7,
        name: 'Armado y Reparación de PC',
        organization: cetae,
        start: 'jul 2015',
        end: 'dec 2015',
        duration: 80,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 8,
        name: 'Java HIBERNATE',
        organization: educacionIt,
        start: 'nov 2015',
        end: 'jan 2016',
        duration: 21,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        id: 9,
        name: 'Java Spring',
        organization: educacionIt,
        start: 'jan 2016',
        end: 'feb 2016',
        duration: 12,
        tags: [ tags.programming.backend.java.name, tags.programming.backend.java.framework.spring, tags.language.spanish, tags.all ]
    },
    {
        id: 10,
        name: 'UML y UP: Análisis y Diseño Orientado a Objetos',
        organization: educacionIt,
        start: 'feb 2016',
        end: 'mar 2016',
        duration: 15,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 11,
        name: 'Seguridad Web: SQL Injection & XSS',
        organization: educacionIt,
        start: 'mar 2016',
        end: 'apr 2016',
        duration: 15,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 12,
        name: 'Programación en Android',
        organization: educacionIt,
        start: 'mar 2016',
        end: 'may 2016',
        duration: 15,
        tags: [ tags.programming.frontend.mobile.android, tags.language.spanish, tags.all ]
    },
    {
        id: 13,
        name: 'Git: Desarrollo Corporativo',
        organization: educacionIt,
        start: 'jul 2016',
        end: 'aug 2016',
        duration: 12,
        tags: [ tags.programming.devops, tags.language.spanish, tags.all ]
    },
    {
        id: 14,
        name: 'Python',
        organization: educacionIt,
        start: 'dec 2017',
        end: 'jan 2018',
        duration: 12,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 15,
        name: 'Spring Framework 5 & Spring Boot: Thymeleaf, Data JPA, Security, REST, Angular 5, Heroku, Spring WebFlux',
        organization: udemy,
        start: 'may 2018',
        end: 'jun 2018',
        duration: 21,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-TUTBQR5I.pdf',
        tags: [ tags.programming.backend.java.name, tags.programming.backend.java.framework.spring, tags.language.spanish, tags.all ]
    },
    {
        id: 16,
        name: 'Arquitectura Java',
        organization: educacionIt,
        start: 'may 2018',
        end: 'jul 2018',
        duration: 18,
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        id: 17,
        name: 'Protocolos HTTPS',
        organization: educacionIt,
        start: 'aug 2018',
        end: 'aug 2018',
        duration: 3,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 18,
        name: 'Curso de FlexBox desde 0',
        organization: udemy,
        start: 'jun 2018',
        end: 'jun 2018',
        duration: 2,
        tags: [ tags.programming.frontend.web.desing, tags.language.spanish, tags.all ]
    },
    {
        id: 19,
        name: 'Fundamentos de Bootstrap 4: Crea tu primer sitio responsive',
        organization: udemy,
        start: 'jul 2018',
        end: 'jul 2018',
        duration: 3,
        tags: [ tags.programming.frontend.web.desing, tags.language.spanish, tags.all ]
    },
    {
        id: 20,
        name: 'Curso de Sass para principiantes - Paso a paso y desde cero',
        organization: udemy,
        start: 'jul 2018',
        end: 'jul 2018',
        duration: 1,
        tags: [ tags.programming.frontend.web.desing, tags.language.spanish, tags.all ]
    },
    {
        id: 21,
        name: 'Persistencia de Datos Hibernate 5 y Spring Data JPA',
        organization: udemy,
        start: 'aug 2018',
        end: 'aug 2018',
        duration: 6,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-ALMQBL8E.pdf',
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        id: 22,
        name: 'Angular: De cero a experto creando aplicaciones (angular 7+)',
        organization: udemy,
        start: 'sep 2018',
        end: 'nov 2018',
        duration: 26,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-FC4QCW86.pdf',
        tags: [ tags.programming.frontend.web.framework.angular, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        
        id: 23,
        name: 'Node JS: De cero a experto',
        organization: udemy,
        start: 'nov 2018',
        end: 'dec 2018',
        duration: 19.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-DP38TOG0.pdf',
        tags: [ tags.programming.backend.node, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        
        id: 24,
        name: 'Angular: Convierte cualquier template HTML en una WebApp',
        organization: udemy,
        start: 'dec 2018',
        end: 'dec 2018',
        duration: 3,
        tags: [ tags.programming.frontend.web.framework.angular, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        
        id: 25,
        name: 'Java Maven: Introducción paso a paso para no expertos',
        organization: udemy,
        start: 'mar 2019',
        end: 'mar 2019',
        duration: 4,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-8FNDY9NM.pdf',
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        
        id: 26,
        name: 'Test Driven Development con ejemplos en java y junit',
        organization: udemy,
        start: 'mar 2019',
        end: 'mar 2019',
        duration: 1,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-YWYEBYE0.pdf',
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        
        id: 27,
        name: 'Patrones de diseño de software y principios SOLID',
        organization: udemy,
        start: 'apr 2019',
        end: 'apr 2019',
        duration: 4,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-TVJ31OFX.pdf',
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        
        id: 28,
        name: 'Test unitarios con JUnit 5. Curso de introducción',
        organization: udemy,
        start: 'may 2019',
        end: 'may 2019',
        duration: 4.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-G66MCUB7.pdf',
        tags: [ tags.programming.backend.java.name, tags.language.spanish, tags.all ]
    },
    {
        id: 29,
        name: 'VueJs 2 y Vuex desde 0 con las mejores prácticas',
        organization: udemy,
        start: 'may 2019',
        end: 'jun 2019',
        duration: 9.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-1PVNJ4WC.pdf',
        tags: [ tags.programming.frontend.web.framework.vue, tags.programming.frontend.web.javascript, tags.language.spanish, tags.all ]
    },
    {
        id: 30,
        name: 'Java EE 7 & frameworks - JSF2, Spring 4, Struts 2 y EJB3',
        organization: udemy,
        start: 'jun 2019',
        end: 'jun 2019',
        duration: 8,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-H52HEBXY.pdf',
        tags: [ tags.programming.backend.java.name, tags.programming.backend.java.framework.spring, tags.language.spanish, tags.all ]
    },
    {
        id: 31,
        name: 'Probar Django: Crear una aplicación web',
        organization: udemy,
        start: 'jul 2019',
        end: 'jul 2019',
        duration: 4.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-02J8Y4L3.pdf',
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 32,
        name: 'Angular Avanzado: Lleva tus bases al siguiente nivel - MEAN',
        organization: udemy,
        start: 'aug 2019',
        end: 'sep 2019',
        duration: 27,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-PWQJFPWM.pdf',
        tags: [ tags.programming.frontend.web.framework.angular, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 33,
        name: 'Visual Studio Code: Mejora tu velocidad para codificar',
        organization: udemy,
        start: 'sep 2019',
        end: 'sep 2019',
        duration: 1.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-I2SHHQC3.pdf',
        tags: [ tags.programming.others, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 34,
        name: 'Angular & Spring 5: Creando web app full stack (Angular 8+)',
        organization: udemy,
        start: 'oct 2019',
        end: 'oct 2019',
        duration: 23,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-46AR6C5J.pdf',
        tags: [ tags.programming.backend.java.name, tags.programming.backend.java.framework.spring, tags.programming.frontend.web.framework.angular, tags.language.spanish, tags.all ]
    },
    {
        id: 35,
        name: 'Angular: Aplicaciones en tiempo real con sockets y rest',
        organization: udemy,
        start: 'oct 2019',
        end: 'oct 2019',
        duration: 8,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-FSB12TYR.pdf',
        tags: [ tags.programming.frontend.web.framework.angular, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 36,
        name: 'PWA - Aplicaciones Web Progresivas: De cero a experto',
        organization: udemy,
        start: 'oct 2019',
        end: 'nov 2019',
        duration: 14.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-YZ8258MF.pdf',
        tags: [ tags.programming.frontend.web.javascript, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 37,
        name: 'REDUX en Angular con NGRX: Desde las bases hasta la práctica',
        organization: udemy,
        start: 'nov 2019',
        end: 'nov 2019',
        duration: 13.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-MM6ZVX37.pdf',
        tags: [ tags.programming.frontend.web.framework.angular, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 38,
        name: 'Programación Reactiva con Spring Boot 2 y Spring WebFlux',
        organization: udemy,
        start: 'nov 2019',
        end: 'nov 2019',
        duration: 11,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-VXJ32M6X.pdf',
        tags: [ tags.programming.backend.java.name, tags.programming.backend.java.framework.spring, tags.language.spanish, tags.all ]
    },
    {
        id: 39,
        name: '60+ Herramientas de desarrollo y diseño web',
        organization: udemy,
        start: 'nov 2019',
        end: 'nov 2019',
        duration: 8,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-UE9MXC18.pdf',
        tags: [ tags.programming.frontend.web.desing, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 40,
        name: 'The complete ASP.NET MVC 5 Course',
        organization: udemy,
        start: 'dec 2019',
        end: 'jan 2020',
        duration: 7.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-X05K9CSB.pdf',
        tags: [ tags.programming.others, tags.language.english, tags.all ]
    },
    {
        id: 41,
        name: 'Flutter: Una Introducción al Framework',
        organization: udemy,
        start: 'jan 2020',
        end: 'jan 2020',
        duration: 10,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-APU7LFWE.pdf',
        tags: [ tags.programming.frontend.mobile.dart.framework.flutter, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 42,
        name: 'Jenkins, De Cero A Experto: Conviértete En Un Jenkins Master',
        organization: udemy,
        start: 'jan 2020',
        end: 'feb 2020',
        duration: 10,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-45c0cf0f-bb6d-48c8-89a2-82c549f78a66.pdf',
        tags: [ tags.programming.devops, tags.language.spanish, tags.all ]
    },
    {
        id: 43,
        name: 'Microservicios con Spring Boot y Spring Cloud Netflix Eureka',
        organization: udemy,
        start: 'mar 2020',
        end: 'apr 2020',
        duration: 13.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3b5853b2-9357-4a70-9397-e4c55a662091.pdf',
        tags: [ tags.programming.backend.java.name, tags.programming.backend.java.framework.spring, tags.language.spanish, tags.all ]
    },
    {
        id: 44,
        name: 'ReactiveX - Rxjs: De cero hasta los detalles',
        organization: udemy,
        start: 'apr 2020',
        end: 'apr 2020',
        duration: 9.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-5255302d-54e1-4b70-b7e8-eb0f5a9c6880.pdf',
        tags: [ tags.programming.frontend.web.javascript, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 45,
        name: 'Docker, de principiante a experto',
        organization: udemy,
        start: 'apr 2020',
        end: 'apr 2020',
        duration: 8.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-a7fc0f5d-9662-4e5c-8710-83a9bd6fab60.pdf',
        tags: [ tags.programming.devops, tags.language.spanish, tags.all ]
    },
    {
        id: 46,
        name: 'Mi primer juego con Unity 5',
        organization: udemy,
        start: 'apr 2020',
        end: 'apr 2020',
        duration: 4,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 47,
        name: 'Introducción a GraphQL desde las bases hasta crear APIs',
        organization: udemy,
        start: 'apr 2020',
        end: 'may 2020',
        duration: 10.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-9383376d-6312-414e-93c8-e2b13cf21136.pdf',
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 48,
        name: 'Programación de Android desde cero +35 horas',
        organization: udemy,
        start: 'may 2020',
        end: 'aug 2020',
        duration: 42.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-97e23cee-8f7f-4d04-917e-17a6a21b698a.pdf',
        tags: [ tags.programming.frontend.mobile.android, tags.language.spanish, tags.all ]
    },
    {
        id: 49,
        name: 'The Complete Android Oreo Developer Course - Build 23 Apps!',
        organization: udemy,
        start: 'may 2020',
        end: 'aug 2020',
        duration: 37.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-607e592b-81d0-4249-bc0f-ae2eb42e0059.pdf',
        tags: [ tags.programming.frontend.mobile.android, tags.language.english, tags.all ]
    },
    {
        id: 50,
        name: 'Fundamentos de ingeniería de software',
        organization: platzi,
        start: 'oct 2020',
        end: 'oct 2020',
        duration: 5,
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 51,
        name: 'Ionic 5: Crear aplicaciones IOS, Android y PWAs con angular',
        organization: udemy,
        start: 'aug 2020',
        end: 'jan 2021',
        duration: 30,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-258e5886-3aad-49f8-b535-4f4b41d3f8d9.pdf',
        tags: [ tags.programming.frontend.mobile.javascript.ionic, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 52,
        name: 'React: De Cero a experto (Hooks)',
        organization: udemy,
        start: 'sep 2020',
        end: 'jan 2021',
        duration: 43,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-93522e82-8b02-41ed-83dd-0c796642b00f.pdf',
        tags: [ tags.programming.frontend.web.framework.react, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 53,
        name: 'Java SE 11 Developer 1Z0-819 OCP Course - Part 1',
        organization: udemy,
        start: 'apr 2021',
        end: 'apr 2021',
        duration: 12.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-87056878-ed1d-4244-9917-8bc20d6fca69.pdf',
        tags: [ tags.programming.backend.java.name, tags.language.english, tags.all ]
    },
    {
        id: 54,
        name: 'Java SE 11 Developer 1Z0-819 OCP Course - Part 2',
        organization: udemy,
        start: 'apr 2021',
        end: 'apr 2021',
        duration: 21,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-7956aac6-eeef-4ce6-99f0-9c5cb8095e92.pdf',
        tags: [ tags.programming.backend.java.name, tags.language.english, tags.all ]
    },
    {
        id: 55,
        name: 'React: Aplicaciones en tiempo real con Socket-io',
        organization: udemy2021,
        start: 'mar 2021',
        end: 'apr 2021',
        duration: 16,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-6ff579db-4d63-4164-b21b-3e7fbc5e4cd9.pdf',
        tags: [ tags.programming.frontend.web.framework.react, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 56,
        name: 'React Native: Aplicaciones nativas para IOS y Android',
        organization: udemy2021,
        start: 'may 2021',
        end: 'jan 2022',
        duration: 43.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-17a06692-249f-425a-b7a1-db9f054a9ba7.pdf',
        tags: [ tags.programming.frontend.web.framework.react, tags.programming.frontend.mobile.javascript.reactNative , tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 57,
        name: 'React Pro: Lleva tus bases al siguiente nivel',
        organization: udemy2021,
        start: 'jan 2022',
        end: 'jan 2022',
        duration: 27,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-f33e3d2d-3919-4491-991e-1904f0f51246.pdf',
        tags: [ tags.programming.frontend.web.framework.react, tags.programming.frontend.web.javascript , tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 58,
        name: 'Vue.js: De cero a experto',
        organization: udemy2021,
        start: 'jan 2022',
        end: 'feb 2022',
        duration: 43.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3d1fce93-7a59-4394-8836-6e47725a6351.pdf',
        tags: [ tags.programming.frontend.web.framework.vue, tags.programming.frontend.web.javascript , tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 59,
        name: 'Next.js: El framework de React para producción',
        organization: udemy2021,
        start: 'feb 2022',
        end: 'aug 2022',
        duration: 46,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-1f487031-3145-4d72-899c-43a72fbdb112.pdf',
        tags: [ tags.programming.frontend.web.framework.react, tags.programming.frontend.web.javascript , tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 60,
        name: 'Principios SOLID y Clean Code',
        organization: udemy2021,
        start: 'aug 2022',
        end: 'sep 2022',
        duration: 6.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-288f169e-0fb4-4a12-894d-6300abb2c700.pdf',
        tags: [ tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 61,
        name: 'Nest: Desarrollo backend escalable con Node',
        organization: udemy2021,
        start: 'sep 2022',
        end: 'sep 2022',
        duration: 24.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-1c2df9eb-8e1a-4b80-8321-74358d6f2551.pdf',
        tags: [ tags.programming.frontend.web.framework.react, tags.programming.frontend.web.javascript, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 62,
        name: 'Dart: De cero hasta los detalles',
        organization: udemy2021,
        start: 'sep 2022',
        end: 'sep 2022',
        duration: 10,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-0d0f858a-97af-4098-8c7b-3c8e5aae2cdc.pdf',
        tags: [ tags.programming.frontend.mobile.dart.framework.flutter, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 63,
        name: 'Flutter: Tu guía completa de desarrollo para IOS y Android',
        organization: udemy2021,
        start: 'oct 2022',
        end: 'oct 2022',
        duration: 20,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-1cc10567-f5bb-4cd0-b9ea-1ae1cce08027.pdf',
        tags: [ tags.programming.frontend.mobile.dart.framework.flutter, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 64,
        name: 'Flutter Intermedio: Diseños profesionales y animaciones',
        organization: udemy2021,
        start: 'sep 2022',
        end: 'oct 2022',
        duration: 37.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-f5ee4c5b-9908-4d41-92ef-20c4623ad877.pdf',
        tags: [ tags.programming.frontend.mobile.dart.framework.flutter, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 65,
        name: 'React Query Un poderoso gestor de estado asíncrono',
        organization: devtalles,
        start: 'dec 2022',
        end: 'dec 2022',
        duration: 5,
        certification: 'https://cursos.devtalles.com/certificates/ku6roxczap',
        tags: [ tags.programming.frontend.web.javascript, tags.programming.frontend.web.framework.react, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 66,
        name: 'Flutter Avanzado: Lleva tu conocimiento al siguiente nivel',
        organization: udemy2021,
        start: 'dec 2022',
        end: 'feb 2023',
        duration: 35,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-e51c0017-e259-41a4-a16d-f6ed2757b355.pdf',
        tags: [ tags.programming.frontend.mobile.dart.framework.flutter, tags.language.spanish, tags.instructor.fernandoHerrera, tags.all ]
    },
    {
        id: 67,
        name: 'Inteligencia Emocional y su efecto en tus destrezas sociales',
        organization: udemy2021,
        start: 'nov 2023',
        end: 'nov 2023',
        duration: 6,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-c90c0e76-f185-41c1-a2e7-34d3eec3e973.pdf',
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 68,
        name: 'Conviértete en un excelente comunicador en público',
        organization: udemy2021,
        start: 'dic 2023',
        end: 'dic 2023',
        duration: 1.5,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-bbbed556-0a55-465e-a7b0-81ab2d1a3cba.pdf',
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 69,
        name: 'Fundamentos para el diseño de Base de datos Relacionales',
        organization: udemy2021,
        start: 'jan 2024',
        end: 'jan 2024',
        duration: 4,
        certification: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-a113dc31-8910-43d2-85a0-52b8526be6a4.pdf',
        tags: [ tags.programming.others, tags.language.spanish, tags.all ]
    },
    {
        id: 70,
        name: 'Ultimate AWS Certified Developer Associate 2024 NEW DVA-C02',
        organization: udemy2021,
        start: 'jan 2024',
        end: 'at present',
        duration: 32.5,
        certification: '',
        tags: [ tags.programming.devops, tags.language.english, tags.all ]
    }
];
