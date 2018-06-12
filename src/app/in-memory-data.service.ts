// import { InMemoryDbService } from 'angular-in-memory-web-api';

// export class InMemoryDataService implements InMemoryDbService {
  
//   createDb() { 
//     const places = [
//       { 
//         id: 0, 
//         name: 'Rafael',
//         amenities: [
//           {
//             id: 1,
//             name: 'Accesible',
            
//           }
//         ],
//         category: {
//           name: 'Restaurantes',
//           subcats: ['Mariscos', 'Otra']
//         },
//         rating: 3,
//         address: {
//           street: '1234 Calle Principal',
//           city: 'San Salvador',
//           country: 'El Salvador'
//         },
//         phone: '883-9980',
//         website: 'http://wwww.google.com',
//         open: true,
//         price: '$$$',
//         coords: {
//           lat: 13.692235,
//           lng: -89.241675
//         },
//         meta: {
//           createdDate: '2012-04-23T18:25:43.511Z',
//           lastModified: '2017-04-23T18:25:43.511Z',
//         },
//         hits: 23400,
//         comments: 13,
//         published: true,
//         ownerId: 1,
//         claimed: true,
//         locked: true,
//         img: {
//           src: 'https://iamtravelinglight.files.wordpress.com/2017/03/roasted-tilapia-san-rafael-river-adventure-bulacan.jpg?w=700',
//           caption: ''
//         },
//         featured: {
//           status: true,
//           weight: 1
//         }
//       },
//       {
//         id: 1,
//         name: 'Cala',
//         category: {
//           name: 'Restaurantes',
//           subcats: ['Americano'],
//         },
//         rating: 3,
//         address: {
//           street: '534 Calle Segunda',
//           city: 'Antigua',
//           country: 'Guatemala' 
//         },
//         phone: '883-8766',
//         website: 'http://wwww.google.com',
//         open: true,
//         price: '$$',
//         coords: {
//           lat: 14.559330,
//           lng: -90.734528
//         },
//         meta: {
//           createdDate: '2012-04-23T18:25:43.511Z',
//           lastModified: '2017-06-23T18:25:43.511Z',
//         },
//         hits: 35400,
//         comments: 7,
//         published: true,
//         ownerId: 1,
//         claimed: true,
//         locked: false,
//         img: {
//           src: 'https://cdn.sunbonoo.com/media/catalog/product/cache/3/image/525x350/9d0ad7affc992e9f5155d5b6f420bd62/y/a/yachtclub-cala-dor-mallorca-cuisine_1.jpg',
//           caption: ''
//         },
//         featured: {
//           status: true,
//           weight: 2
//         }
//       },
//       {
//         id: 2,
//         name: 'Drago Dorado',
//         category: {
//           name: 'Restaurantes',
//           subcats: ['Asiatico', 'Tacos']
//         },
//         rating: 0, 
//         address: {
//           street: '17 Avenida Revolucion',
//           city: 'San Salvador',
//           country: 'El Salvador'
//         },
//         phone: '332-9340',
//         website: 'http://wwww.google.com',
//         open: false,
//         price: '$',
//         coords: {
//           lat: 14.559330,
//           lng: -90.734528
//         },
//         meta: {
//           createdDate: '2012-04-23T18:25:43.511Z',
//           lastModified: '2017-08-23T18:25:43.511Z',
//         },
//         hits: 2400,
//         comments: 0,
//         published: true,
//         ownerId: 1,
//         claimed: true,
//         locked: true,
//         img: {
//           src: 'https://media-cdn.tripadvisor.com/media/photo-o/0f/e0/45/53/spiaggia.jpg',
//           caption: ''
//         },
//         featured: {
//           status: true,
//           weight: 3
//         }
//       },
//       {
//         id: 3,
//         name: 'Chez Francois',
//         category: {
//           name: 'Restaurantes',
//           subcats: ['Frances']
//         },
//         rating: 5,
//         address: {
//           street: '99 Calle Circumvalacion',
//           city: 'Santa Tecla',
//           country: 'El Salvador'
//         },
//         phone: '239-2322',
//         website: 'http://wwww.google.com',
//         open: true,
//         price: '$',
//         coords: {
//           lat: 13.714809,
//           lng: -89.207268
//         },
//         meta: {
//           createdDate: '2012-04-23T18:25:43.511Z',
//           lastModified: '2017-01-23T18:25:43.511Z',
//         },
//         hits: 600,
//         comments: 12,
//         published: true,
//         ownerId: 1,
//         claimed: true,
//         locked: false,
//         img: {
//           src: 'http://www.newyorksocialdiary.com/legacy/i/partypictures/01_05_15/DSC06121.jpg',
//           caption: ''
//         },
//         featured: {
//           status: true,
//           weight: 0
//         }
//       },
//       {
//         id: 4,
//         name: 'Otro Restaurante',
//         category: {
//           name: 'Restaurantes',
//           subcats: ['Mariscos']
//         },
//         rating: 3,
//         address: {
//           street: '1234 Calle Principal',
//           city: 'Managua',
//           country: 'Nicaragua'
//         },
//         phone: '883-9980',
//         website: 'http://wwww.google.com',
//         open: false,
//         price: '$$$',
//         coords: {
//           lat: 12.140563,
//           lng: -86.248083
//         },
//         meta: {
//           createdDate: '2012-04-23T18:25:43.511Z',
//           lastModified: '2017-02-23T18:25:43.511Z',
//         },
//         hits: 100,
//         comments: 33,
//         published: true,
//         ownerId: 1,
//         claimed: true,
//         locked: true,
//         img: {
//           src: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/e0/45/55/spiaggia.jpg',
//           caption: ''
//         },
//         featured: {
//           status: false,
//           weight: -1
//         }
//       },
//       {
//         id: 5,
//         name: 'Moja Majo',
//         category: {
//           name: 'Restaurantes',
//           subcats: ['Americano']
//         },
//         rating: 3,
//         address: {
//           street: '534 Calle Segunda',
//           city: 'Havana',
//           country: 'Cuba'
//         },
//         phone: '883-8766',
//         website: 'http://wwww.google.com',
//         open: false,
//         price: '$$$',
//         coords: {
//           lat: 23.138867,
//           lng: -82.359116
//         },
//         meta: {
//           createdDate: '2012-04-23T18:25:43.511Z',
//           lastModified: '2017-01-23T18:25:43.511Z',
//         },
//         hits: 100400,
//         comments: 18,
//         published: true,
//         ownerId: 1,
//         claimed: true,
//         locked: false,
//         img: {
//           src: 'https://d1wb0ukcj65cfk.cloudfront.net/restaurant_original/f9cef706-7c23-4f4c-8c48-2eebdb2e7845.jpg',
//           caption: ''
//         },
//         featured: {
//           status: false,
//           weight: -1
//         }
//       },
//       {
//         id: 6,
//         name: 'Las Rambles',
//         category: {
//           name: 'Restaurantes',
//           subcats: ['Asiatico', 'Americano']
//         },
//         rating: 4,
//         address: {
//           street: '17 Avenida Revolucion',
//           city: 'San Jose',
//           country: 'Costa Rica'
//         },
//         phone: '332-9340',
//         website: 'http://wwww.google.com',
//         open: false,
//         price: '$$$',
//         coords: {
//           lat: 9.930600,
//           lng: -84.079367
//         },
//         hits: 7800,
//         createdDate: '2012-04-23T18:25:43.511Z',
//         lastModified: '2017-04-23T18:25:43.511Z',
//         comments: 29,
//         published: true,
//         ownerId: 1,
//         claimed: true,
//         locked: true,
//         img: {
//           src: 'http://www.trbimg.com/img-59c806c3/turbine/la-jg101-cassia-20170924/1200/750',
//           caption: ''
//         },
//         featured: {
//           status: false,
//           weight: 1
//         }
//       },
//       {
//         id: 7,
//         name: 'Andalucia',
//         category: {
//           name: 'Restaurantes',
//           subcats: ['Frances']
//         },
//         rating: 5,
//         address: {
//           street: '99 Calle Circumvalacion',
//           city: 'Ciudad de Panama',
//           country: 'Panama'
//         },
//         phone: '239-2322',
//         website: 'http://wwww.google.com',
//         open: true,
//         price: '$',
//         coords: {
//           lat: 8.991488,
//           lng: -79.499195
//         },
//         meta: {
//           createdDate: '2012-04-23T18:25:43.511Z',
//           lastModified: '2017-02-23T18:25:43.511Z',
//         },
//         hits: 8900,
//         comments: 11,
//         published: true,
//         ownerId: 1,
//         claimed: true,
//         locked: true,
//         img: {
//           src: 'https://resizer.otstatic.com/v2/photos/large/24950018.jpg',
//           caption: ''
//         },
//         featured: {
//           status: false,
//           weight: 1
//         }
//       },
//       {
//         id: 8,
//         name: 'Cristobal',
//         category: {
//           name: 'Restaurantes',
//           subcats: ['Mariscos']
//         },
//         rating: 3,
//         address: {
//           street: '1234 Calle Principal',
//           city: 'Colon',
//           country: 'Panama'
//         },
//         phone: '883-9980',
//         website: 'http://wwww.google.com',
//         open: true,
//         price: '$$',
//         coords: {
//           lat: 9.360242,
//           lng: -79.899938
//         },
//         meta: {
//           createdDate: '2012-04-23T18:25:43.511Z',
//           lastModified: '2017-05-23T18:25:43.511Z',
//         },
//         hits: 23400,
//         comments: 2,
//         published: true,
//         ownerId: 1,
//         claimed: true,
//         locked: true,
//         img: {
//           src: 'http://www.trbimg.com/img-59cc28c3/turbine/la-jg101-orsa-winston-20170927/1200/750',
//           caption: ''
//         },
//         featured: {
//           status: false,
//           weight: 1
//         }
//       },
//       {
//         id: 9,
//         name: 'Les Marais',
//         category: {
//           name: 'Restaurantes',
//           subcats: ['Americano']
//         },
//         rating: 3,
//         address: {
//           street: '534 Calle Segunda',
//           city: 'San Salvador',
//           country: 'El Salvador'
//         },
//         phone: '883-8766',
//         website: 'http://wwww.google.com',
//         open: false,
//         price: '$$',
//         coords: {
//           lat: 8.972880,
//           lng: -79.515572
//         },
//         meta: {
//           createdDate: '2012-04-23T18:25:43.511Z',
//           lastModified: '2017-11-23T18:25:43.511Z',
//         },
//         hits: 8122400,
//         comments: 29,
//         published: false,
//         ownerId: 1,
//         claimed: true,
//         locked: true,
//         img: {
//           src: 'http://www.trbimg.com/img-59c81f93/turbine/la-jg101-pyt-20170924/1200/750',
//           caption: ''
//         },
//         featured: {
//           status: false,
//           weight: 1
//         }
//       },
//       {
//         id: 10,
//         name: 'Tatayaki',
//         category: {
//           name: 'Restaurantes',
//           subcats: ['Asiatico']
//         },
//         rating: 4,
//         address: {
//           street: '17 Avenida Revolucion',
//           city: 'Santo Domingo',
//           country: 'Republica Dominicana'
//         },
//         phone: '332-9340',
//         website: 'http://wwww.google.com',
//         open: false,
//         price: '$$$',
//         coords: {
//           lat: 18.461712,
//           lng: -69.931540
//         },
//         meta: {
//           createdDate: '2012-04-23T18:25:43.511Z',
//           lastModified: '2017-03-23T18:25:43.511Z',
//         },
//         hits: 231239400,
//         comments: 1,
//         published: false,
//         ownerId: 0,
//         claimed: false,
//         locked: true,
//         img: {
//           src: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13741266_565006977034843_1104215603_n.jpg?ig_cache_key=MTMzODc5NTk2ODcyNDAwMzk2MA%3D%3D.2',
//           caption: ''
//         },
//         featured: {
//           status: false,
//           weight: 1
//         }
//       },
//       {
//         id: 11,
//         name: 'Slatka Malena',
//         category: {
//           name: 'Restaurantes',
//           subcats: ['Asiatico']
//         },
//         rating: 4,
//         address: {
//           street: '17 Avenida Revolucion',
//           city: 'Santo Domingo',
//           country: 'Republica Dominicana'
//         },
//         phone: '332-9340',
//         website: 'http://wwww.google.com',
//         open: false,
//         price: '$$$',
//         coords: {
//           lat: 18.461712,
//           lng: -69.931540
//         },
//         meta: {
//           createdDate: '2012-04-23T18:25:43.511Z',
//           lastModified: '2017-03-23T18:25:43.511Z',
//         },
//         hits: 231239400,
//         comments: 1,
//         published: false,
//         ownerId: 0,
//         claimed: false,
//         locked: true,
//         img: {
//           src: '',
//           caption: ''
//         },
//         featured: {
//           status: true,
//           weight: 5
//         }
//       }
//     ];

//     const reviews = [
//       {
//         id: 0,
//         author: 'Giovanni Max',
//         body: 'Muy buen lugar!',
//         meta: {
//           createdDate: '2015-04-23T18:25:43.511Z'
//         }
//       },
//       {
//         id: 1,
//         author: 'Mario Valle',
//         body: 'Este lugar es muy bueno pero lastima que el vencindario es muy peligroso. La vez pasada me robaron x, y y z.',
//         meta: {
//           createdDate: '2016-04-23T18:25:43.511Z'
//         }
//       },
//       {
//         id: 1,
//         author: 'Mario Valle',
//         body: 'Este lugar es muy bueno pero lastima que el vencindario es muy peligroso. La vez pasada me robaron x, y y z.',
//         meta: {
//           createdDate: '2017-04-23T18:25:43.511Z'
//         }
//       }
//     ];

//     const categories = [
//       { 
//         id: 0,
//         name: 'Restaurantes',
//         slug: 'restaurantes',
//         summary: 'Desde delicias nacionales, hasta platos exoticos, que la comida sea su medicina.',
//         iconId: 'local_dining',
//         listings: 345,
//         filterOptions: [0, 1, 2]
//       },
//       { 
//         id: 1,
//         name: 'Compras',
//         slug: 'compras',
//         summary: 'Las mejores cosas de shopping y blah blah.',
//         iconId: 'local_mall',
//         listings: 234,
//         filterOptions: [0]
//       },
//       { 
//         id: 2,
//         name: 'Publico',
//         slug: 'publico',
//         summary: 'Te molesta que el gobierno sea incompetente para brindar informacion? Por eso existimos.',
//         iconId: 'university',
//         listings: 324,
//         filterSpecialties: [
//           {
//             name: 'Pocas Colas',
//             icon: 'schedule'
//           }
//         ]
//       },
//       { 
//         id: 3,
//         name: 'Salud',
//         slug: 'salud',
//         summary: 'Desde farmacias hasta hospitales, todo lo que necesitas con tu salud esta aqui.',
//         iconId: 'local_hospital',
//         listings: 2342,
//         filterSpecialties: [
//           { name: 'Con Ofertas', icon: 'schedule' }
//         ]
//       },
//       { 
//         id: 4,
//         name: 'Educacion',
//         slug: 'educacion',
//         summary: 'Escuelas y universidades blah blah blah.',
//         iconId: 'student',
//         listings: 899,
//         filterSpecialties: [
//           { name: '', icon: 'schedule' }
//         ]
//       },
//       { 
//         id: 5,
//         name: 'Casa y Hogar',
//         slug: 'hogar',
//         summary: 'Si necesitas muebles y etc etc, entonces esta es la categoria adecuada.',
//         iconId: 'home',
//         listings: 998,
//         filterSpecialties: [
//           { name: '', icon: 'schedule' }
//         ]
//       },
//       { 
//         id: 6,
//         name: 'Electronicos',
//         slug: 'electronicos',
//         summary: 'Videojuegos y televisiones todas las podes encontrar aqui.',
//         iconId: 'tv',
//         listings: 12,
//         filterSpecialties: [
//           { name: '', icon: '' }
//         ]
//       },
//       { 
//         id: 7,
//         name: 'Ropa y Moda',
//         slug: 'ropa',
//         summary: 'Todo lo que esta de moda lo podes encontrar aqui.',
//         iconId: 'idea',
//         listings: 123,
//         filterSpecialties: [
//           { name: 'Con Ofertas', icon: '' }
//         ]
//       },
//       { 
//         id: 8,
//         name: 'Vida Nocturna',
//         slug: 'nocturna',
//         summary: 'Latinoamerica vive de noche. Discotecas y nightclubs y lo demas.',
//         iconId: 'local_bar',
//         listings: 98,
//         filterSpecialties: [
//           { name: 'Sexo Opuesto', icon: '' }
//         ]
//       },
//       { 
//         id: 9,
//         name: 'Atletico',
//         slug: 'atletico',
//         summary: 'Lo que tenga que ver con deporte, lo podes encontrar aqui.',
//         iconId: 'soccer',
//         listings: 11,
//         filterSpecialties: [
//           { name: 'Con Amigos', icon: '' }
//         ]
//       },
//       { 
//         id: 10,
//         name: 'Eventos y Bodas',
//         slug: 'eventos',
//         summary: 'Fiestas de oficina y bodas y todo lo demas.',
//         iconId: 'birthday',
//         listings: 322,
//         filterSpecialties: [
//           { name: '', icon: '' }
//         ]
//       },
//       {
//         id: 11,
//         name: 'Belleza y Spa',
//         slug: 'belleza',
//         iconId: 'heart'
//       },
//       {
//         id: 12,
//         name: 'Automotriz',
//         slug: 'automotriz',
//         iconId: 'car'
//       },
//       {
//         id: 13,
//         name: 'Construccion',
//         slug: 'construccion',
//         iconId: 'shipping'
//       },
//       {
//         id: 14,
//         name: 'Telecomunicaciones',
//         slug: 'telecomunicaciones',
//         iconId: 'mobile'
//       },
//       {
//         id: 15,
//         name: 'Servicios Financieros',
//         slug: 'financieros',
//         iconId: 'money'
//       },
//       {
//         id: 16,
//         name: 'Seguridad',
//         slug: 'seguridad',
//         iconId: 'protect'
//       },
//       {
//         id: 17,
//         name: 'Arte',
//         slug: 'arte',
//         iconId: 'brush'
//       },
//       {
//         id: 18,
//         name: 'Mascotas',
//         slug: 'mascotas',
//         iconId: 'paw'
//       },
//       {
//         id: 19,
//         name: 'Turistico',
//         slug: 'turistico',
//         iconId: 'sun'
//       },
//     ];

//     const subcategories = [
//       {
//         id: 0,
//         name: 'Asiatico',
//         parentId: 0
//       },
//       {
//         id: 1,
//         name: 'Mejicano',
//         parentId: 0
//       },
//       {
//         id: 2,
//         name: 'Peruano',
//         parentId: 0
//       },
//       {
//         id: 3,
//         name: 'Japones',
//         parentId: 0
//       },
//       {
//         id: 0,
//         name: 'Mediterraneo',
//         parentId: 0
//       },
//       {
//         id: 1,
//         name: 'Chino',
//         parentId: 0
//       },
//       {
//         id: 2,
//         name: 'Etiope',
//         parentId: 0
//       },
//       {
//         id: 3,
//         name: 'Steakhouse',
//         parentId: 0
//       }
//     ];

//     const countries = [
//       {
//         id: 0,
//         name: 'Guatemala',
//         slug: 'gt'
//       },
//       {
//         id: 1,
//         name: 'Belize',
//         slug: 'bl'
//       },
//       {
//         id: 2,
//         name: 'El Salvador',
//         slug: 'es'
//       },
//       {
//         id: 3,
//         name: 'Honduras',
//         slug: 'hn'
//       },
//       {
//         id: 4,
//         name: 'Nicaragua',
//         slug: 'ni'
//       },
//       {
//         id: 5,
//         name: 'Costa Rica',
//         slug: 'cr'
//       },
//       {
//         id: 6,
//         name: 'Panama',
//         slug: 'pa'
//       },
//       {
//         id: 7,
//         name: 'Republica Dominicana',
//         slug: 'rd'
//       },
//       {
//         id: 8,
//         name: 'Cuba',
//         slug: 'cu'
//       },
//       {
//         id: 9,
//         name: 'Haiti',
//         slug: 'ha'
//       }
//     ];

//     const cities = [
//       // guatemala
//       {
//         id: 0,
//         name: 'Ciudad de Guatemala',
//         countryId: 0
//       },
//       {
//         id: 1,
//         name: 'Antigua Guatemala',
//         countryId: 0
//       },
//       {
//         id: 2,
//         name: 'Quetzaltenango',
//         countryId: 0
//       },
//       {
//         id: 3,
//         name: 'Villa Nueva',
//         countryId: 0
//       },
//       {
//         id: 4,
//         name: 'Chichicastenango',
//         countryId: 0
//       },
//       {
//         id: 5,
//         name: 'Flores',
//         countryId: 0
//       },
//       {
//         id: 6,
//         name: 'Cobán',
//         countryId: 0
//       },
//       // belize
//       {
//         id: 7,
//         name: 'Belize City',
//         countryId: 1
//       },
//       {
//         id: 8,
//         name: 'San Pedro Town',
//         countryId: 1
//       },
//       {
//         id: 9,
//         name: 'Belmopan',
//         countryId: 1
//       },
//       {
//         id: 10,
//         name: 'San Ignacio',
//         countryId: 1
//       },
//       // el salvador
//       {
//         id: 11,
//         name: 'San Salvador',
//         summary: 'San Salvador es la capital de la República de El Salvador y la cabecera del departamento y municipio homónimos.3​ Como capital de la nación, alberga las sedes del Gobierno y el Consejo de Ministros de El Salvador, Asamblea Legislativa, Corte Suprema de Justicia y demás instituciones y organismos del Estado, así como la residencia oficial del Presidente de la República.',
//         countryId: 2
//       },
//       {
//         id: 12,
//         name: 'Santa Tecla',
//         summary: 'Santa Tecla es una ciudad, municipio y cabecera del departamento de La Libertad en El Salvador. Tiene una extensión territorial de 112 km² y una población estimada de 135 483 habitantes para el año 2014.6​También pertenece al Área Metropolitana de San Salvador.',
//         countryId: 2
//       },
//       {
//         id: 13,
//         name: 'Soyapango',
//         summary: 'La ciudad de Soyapango, es un municipio de El Salvador, ubicado al centro del departamento y Área Metropolitana de San Salvador, la capital del país. Es la segunda ciudad más poblada de esta área metropolitana y la tercera de la nación.',
//         countryId: 2
//       },
//       {
//         id: 14,
//         name: 'San Miguel',
//         summary: 'San Miguel es una ciudad y municipio del departamento de San Miguel, El Salvador. Es también la cabecera departamental del departamento homónimo. Históricamente ha sido y sigue siendo, por casi 500 años ya, la ciudad más importante de la zona oriental del país. ',
//         countryId: 2
//       },
//       {
//         id: 15,
//         name: 'Santa Ana',
//         countryId: 2
//       },
//       {
//         id: 16,
//         name: 'Sonsonate',
//         countryId: 2
//       },
//       {
//         id: 17,
//         name: 'Suchitoto',
//         countryId: 2
//       },
//       {
//         id: 18,
//         name: 'Apaneca',
//         countryId: 2
//       },
//       {
//         id: 19,
//         name: 'Concepcion de Ataco',
//         countryId: 2
//       },
//       {
//         id: 20,
//         name: 'La Palma',
//         countryId: 2
//       },
//       // honduras
//       {
//         id: 21,
//         name: 'Tegucigalpa',
//         countryId: 3
//       },
//       {
//         id: 22,
//         name: 'San Pedro Sula',
//         countryId: 3
//       },
//       {
//         id: 23,
//         name: 'La Ceiba',
//         countryId: 3
//       },
//       {
//         id: 24,
//         name: 'Comayagua',
//         countryId: 3
//       },
//       {
//         id: 25,
//         name: 'El Progreso',
//         countryId: 3
//       },
//       {
//         id: 26,
//         name: 'Puerto Cortės',
//         countryId: 3
//       },
//       // nicaragua
//       {
//         id: 27,
//         name: 'Managua',
//         countryId: 4
//       },
//       {
//         id: 28,
//         name: 'Granada',
//         countryId: 4
//       },
//       {
//         id: 29,
//         name: 'Léon',
//         countryId: 4
//       },
//       {
//         id: 30,
//         name: 'Masaya',
//         countryId: 4
//       },
//       {
//         id: 31,
//         name: 'Chinandega',
//         countryId: 4
//       },
//       // costa rica
//       {
//         id: 32,
//         name: 'Havana',
//         countryId: 8
//       },
//       {
//         id: 33,
//         name: 'Santiago de Cuba',
//         countryId: 8
//       },
//       {
//         id: 34,
//         name: 'Cienfuegos',
//         countryId: 8
//       },
//       {
//         id: 35,
//         name: 'Santa Clara',
//         countryId: 8
//       },
//       {
//         id: 36,
//         name: 'Trinidad',
//         countryId: 8
//       },
//       // panama
//       {
//         id: 32,
//         name: 'Havana',
//         countryId: 8
//       },
//       {
//         id: 33,
//         name: 'Santiago de Cuba',
//         countryId: 8
//       },
//       {
//         id: 34,
//         name: 'Cienfuegos',
//         countryId: 8
//       },
//       {
//         id: 35,
//         name: 'Santa Clara',
//         countryId: 8
//       },
//       {
//         id: 36,
//         name: 'Trinidad',
//         countryId: 8
//       },
//       // republica dominicana
//       {
//         id: 32,
//         name: 'Havana',
//         countryId: 8
//       },
//       {
//         id: 33,
//         name: 'Santiago de Cuba',
//         countryId: 8
//       },
//       {
//         id: 34,
//         name: 'Cienfuegos',
//         countryId: 8
//       },
//       {
//         id: 35,
//         name: 'Santa Clara',
//         countryId: 8
//       },
//       {
//         id: 36,
//         name: 'Trinidad',
//         countryId: 8
//       },
//       // cuba
//       {
//         id: 32,
//         name: 'Havana',
//         countryId: 8
//       },
//       {
//         id: 33,
//         name: 'Santiago de Cuba',
//         countryId: 8
//       },
//       {
//         id: 34,
//         name: 'Cienfuegos',
//         countryId: 8
//       },
//       {
//         id: 35,
//         name: 'Santa Clara',
//         countryId: 8
//       },
//       {
//         id: 36,
//         name: 'Trinidad',
//         countryId: 8
//       },
//       // haiti
//       {
//         id: 37,
//         name: 'Port-au-Prince',
//         countryId: 9
//       },
//       {
//         id: 38,
//         name: 'Carrefour',
//         countryId: 9
//       },
//       {
//         id: 39,
//         name: 'Delmas',
//         countryId: 9
//       },
//       {
//         id: 40,
//         name: 'Petionville',
//         countryId: 9
//       },
//     ];
//     const pages = [
//       {
//         id: 'condiciones-de-uso',
//         slug: 'condiciones-de-uso',
//         title: 'Condiciones de Uso',
//         body: `
//               <p><small>Efectiva: Enero 1, 2018</small></p>
//               <p>En Sipi, queremos que estes al tanto de las reglas que gobiernan el uso de nuestro sistema. Este acuerdo describe las condiciones de uso en las cuales Sipi ofrece sus servicios.</p>
//               <p>Por favor lea estas condiciones de uso cuidadosamente, ya que son aplicables a usted media vez sea un visitante o usuario de Sipi.</p>
//               <h2 id="servicios">Servicios</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper elementum euismod. Donec tincidunt pellentesque odio, quis mollis augue laoreet nec. Aliquam metus ligula, vestibulum quis rhoncus eget, interdum et justo. Nam rutrum ante nec dignissim faucibus. Cras volutpat, quam et euismod aliquet, turpis risus facilisis lorem, nec gravida diam metus efficitur urna. Quisque blandit, purus at consectetur rutrum, neque elit tincidunt lectus, in commodo enim ipsum vel elit. Morbi maximus interdum felis in varius. Aliquam arcu mi, vehicula id massa nec, iaculis hendrerit ligula. Ut lacinia libero ut tortor porttitor sodales. Etiam sit amet volutpat nibh. Duis porttitor ornare erat, quis porttitor tellus. Ut blandit posuere dignissim. Proin quam ex, aliquet id pharetra laoreet, facilisis eu ante.</p>
//               <p>Nulla ornare accumsan nisl, et interdum felis placerat sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam placerat sed quam sit amet commodo. Proin hendrerit varius ultricies. Curabitur et orci efficitur, tristique metus quis, ullamcorper mauris. Donec id lorem at nulla rhoncus accumsan. In in rutrum velit. Nunc tellus felis, bibendum vitae arcu eget, hendrerit maximus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean id porttitor lacus, quis porttitor velit./p>
//               <h2>Registro</h2>
//               <p>Nam massa odio, efficitur eget arcu tincidunt, imperdiet molestie libero. Vivamus ullamcorper lectus nec nisl sagittis, non pulvinar velit viverra. Phasellus porta interdum lorem, luctus maximus felis. Sed pulvinar dapibus varius. Pellentesque aliquet ullamcorper eleifend. Sed rutrum sagittis iaculis. Nunc nec tristique urna. Donec non interdum arcu. Vestibulum et erat et leo porta bibendum. Nunc neque sem, venenatis elementum dolor sed, faucibus tincidunt massa. Maecenas blandit purus vel orci consequat, a mollis mi efficitur. Quisque vitae pulvinar ante, sit amet euismod libero. Mauris eu tempor orci. Duis ut hendrerit nulla. Praesent lacinia vitae tellus in dapibus.</p>
//               <p>Maecenas et malesuada massa, vitae sagittis urna. Ut posuere, tellus ut pulvinar rutrum, dolor nunc pharetra sem, sed molestie tortor eros id sapien. Morbi elementum scelerisque felis, a pretium tellus rutrum at. Donec sapien est, efficitur nec efficitur nec, dictum et neque. Cras lectus sem, commodo tincidunt tortor nec, tristique mattis nibh. Donec aliquam ac ipsum dapibus scelerisque. Sed purus sapien, fermentum ac lacus at, vulputate feugiat metus.</p>
//               <h2>Contenido</h2>
//               <p>Curabitur convallis aliquet nulla vitae finibus. Suspendisse potenti. Nunc porta, nulla et tincidunt cursus, ante elit feugiat nunc, in interdum justo magna a sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec quis tortor sem. Vestibulum metus ligula, semper aliquet congue vel, laoreet sed odio. Nam tortor nibh, eleifend eu orci aliquam, sagittis condimentum quam. Donec ac nunc erat. Quisque interdum facilisis suscipit.</p>
//               <p>Maecenas et malesuada massa, vitae sagittis urna. Ut posuere, tellus ut pulvinar rutrum, dolor nunc pharetra sem, sed molestie tortor eros id sapien. Morbi elementum scelerisque felis, a pretium tellus rutrum at. Donec sapien est, efficitur nec efficitur nec, dictum et neque. Cras lectus sem, commodo tincidunt tortor nec, tristique mattis nibh. Donec aliquam ac ipsum dapibus scelerisque. Sed purus sapien, fermentum ac lacus at, vulputate feugiat metus.</p>
//               `
//       },
//       {
//         id: 'sobre',
//         slug: 'sobre',
//         title: 'Sobre Sipi',
//         body: `
              
//               `
//       },
//       {
//         id: 'politica-de-privacidad',
//         slug: 'politica-de-privacidad',
//         title: 'Politica de Privacidad',
//         body: `
//               <p><small>Efectiva: Enero 1, 2018</small></p>
//               <p>En Sipi, nos importa mucho la privacidad de nuestros visitantes y usuarios, y queremos que estes informado de como operamos.</p>
//               <p>Sipi es una guia urbana, basada en San Salvador, El Salvador. Es operada por, y propiedad de, Sipi S.A. de C.V.</p>
//               <p>Como parte normal de nuestra actividad, recogemos distintos tipos de informacion sobre nuestros visitantes y usuarios. Esta informacion depende de las actividades que nuestros visitantes y usuarios realicen al utilizar Sipi.</p>
//               <p>En esta Politica de Privacidad, de describe los tipos de informacion que Sipi recoge sobre sus visitantes y usuarios, los metodos que utilizamos para recabar la informacion, y lo que puede ocurrir con dicha informacion.</p>
//               <h2>Tipos de Informacion</h2>
//               <p>La informacion brindada puede ser clasificada en dos distintas ramas: personal y generica.</p>
//               <p>Por informacion generica se entiende aquella que es capturada pasivamente por el sistema al usarlo, y es el tipo de informacion que sistemas tipo Google Analytics pueden brindar.</p>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat arcu, tincidunt ut dignissim a, elementum quis leo. Maecenas arcu metus, euismod a aliquam at, rutrum eget erat. Sed vitae hendrerit tellus. Suspendisse sed turpis tincidunt, tempor nulla sit amet, congue est. Proin egestas quis ex condimentum vehicula. Ut arcu ex, euismod sit amet malesuada a, vestibulum eget magna. Nunc fermentum elementum velit ut pretium. Vestibulum vel augue sollicitudin tortor pharetra cursus. In vel facilisis velit.</p>
//               <h2>Como Recabamos Informacion</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat arcu, tincidunt ut dignissim a, elementum quis leo. Maecenas arcu metus, euismod a aliquam at, rutrum eget erat. Sed vitae hendrerit tellus. Suspendisse sed turpis tincidunt, tempor nulla sit amet, congue est. Proin egestas quis ex condimentum vehicula. Ut arcu ex, euismod sit amet malesuada a, vestibulum eget magna. Nunc fermentum elementum velit ut pretium. Vestibulum vel augue sollicitudin tortor pharetra cursus. In vel facilisis velit.</p>
//               <p>Nulla ornare purus eu condimentum mollis. Donec ultrices posuere finibus. Curabitur nisl mi, faucibus ac imperdiet eu, lacinia id mi. Phasellus sollicitudin, nunc eget finibus aliquet, nunc arcu consequat justo, vel dignissim erat urna et lorem. Cras nec lacus tellus. Proin in mi iaculis, condimentum dolor et, laoreet eros. Nullam elementum quis enim vel tempor. Aenean erat arcu, porttitor nec orci nec, bibendum hendrerit quam.</p>
//               <h2>Uso de la Informacion</h2>
//               <p>Nulla ornare purus eu condimentum mollis. Donec ultrices posuere finibus. Curabitur nisl mi, faucibus ac imperdiet eu, lacinia id mi. Phasellus sollicitudin, nunc eget finibus aliquet, nunc arcu consequat justo, vel dignissim erat urna et lorem. Cras nec lacus tellus. Proin in mi iaculis, condimentum dolor et, laoreet eros. Nullam elementum quis enim vel tempor. Aenean erat arcu, porttitor nec orci nec, bibendum hendrerit quam.</p>
//               <p>Nulla maximus dolor vel imperdiet porttitor. Quisque quis dapibus arcu. Maecenas auctor malesuada lacus, id tempus lorem mollis eget. Quisque vel fringilla arcu, non venenatis quam. Curabitur at commodo leo. Integer vitae tortor vitae nibh ullamcorper tristique. Donec suscipit sem a ligula convallis tempus. Duis tincidunt semper sem, sed venenatis massa vehicula eget. Nunc tincidunt, elit quis feugiat vestibulum, massa felis blandit ligula, quis viverra dui mauris ut risus. Sed urna augue, fermentum a purus laoreet, tempus mattis urna. Morbi efficitur velit leo. Integer sem dolor, efficitur ut rhoncus quis, placerat vel massa. Sed eget dignissim neque, ut efficitur odio.</p>
//               <h2>Consentimiento</h2>
//               <p>Nulla maximus dolor vel imperdiet porttitor. Quisque quis dapibus arcu. Maecenas auctor malesuada lacus, id tempus lorem mollis eget. Quisque vel fringilla arcu, non venenatis quam. Curabitur at commodo leo. Integer vitae tortor vitae nibh ullamcorper tristique. Donec suscipit sem a ligula convallis tempus. Duis tincidunt semper sem, sed venenatis massa vehicula eget. Nunc tincidunt, elit quis feugiat vestibulum, massa felis blandit ligula, quis viverra dui mauris ut risus. Sed urna augue, fermentum a purus laoreet, tempus mattis urna. Morbi efficitur velit leo. Integer sem dolor, efficitur ut rhoncus quis, placerat vel massa. Sed eget dignissim neque, ut efficitur odio.</p>
//               <p>Vestibulum a pellentesque ipsum. Donec et dui blandit, semper turpis a, mollis risus. Pellentesque consequat sem vel convallis sagittis. Quisque bibendum interdum arcu, luctus aliquam enim dignissim feugiat. Donec varius massa at ex finibus rhoncus. Curabitur commodo mi quis magna porta facilisis. Aliquam volutpat tortor consequat enim bibendum, sed dictum metus tristique. Nullam at mollis elit.</p>
//               <h2>Confidencialidad</h2>
//               <p>Vestibulum a pellentesque ipsum. Donec et dui blandit, semper turpis a, mollis risus. Pellentesque consequat sem vel convallis sagittis. Quisque bibendum interdum arcu, luctus aliquam enim dignissim feugiat. Donec varius massa at ex finibus rhoncus. Curabitur commodo mi quis magna porta facilisis. Aliquam volutpat tortor consequat enim bibendum, sed dictum metus tristique. Nullam at mollis elit.</p>
//               `
//       },
//       {
//         id: 'publicidad',
//         slug: 'publicidad',
//         title: 'Publicidad',
//         body: 'La mision de Sipi es sencilla: ser la guia urbana para centroamerica y el caribe.'
//       },
//       {
//         id: 'contacto',
//         slug: 'contacto',
//         title: 'Contacto',
//         body: `
//               <div class="row">
//                 <div class="col">
//                   <h2>Ayuda</h2>
//                   <p>Cualquier pregunta que tengas, la podes hacer a <a href="mailto:info@sipi.com">info@sipi.com</a></p>
//                 </div>
//                 <div class="col">
//                   <h2>Legal</h2>
//                   <p>Si tenes cualquier pregunta de caracter legal, por favor dirigir las comunicaciones a <a href="mailto:legal@sipi.com">legal@sipi.com</a></p>
//                 </div>
//               </div>
//               <div class="row">
//                 <div class="col">
//                   <h2>Soluciones Empresariales</h2>
//                   <p>Sipi ofrece soluciones modernas y eficientes para llegar a su mercado. Mandenos un mensage a  <a href="publicidad@sipi.com">publicidad@sipi.com</a></p>
//                 </div>
//                 <div class="col">
//                   <h2>Empleos</h2>
//                   <p>Morbi ligula neque, dignissim et interdum nec, elementum vel nibh. Maecenas aliquam in leo a pulvinar. Donec tincidunt sodales mi, quis aliquet elit molestie non. Praesent porta magna felis, ut porttitor mi ornare eu. Nunc vitae sollicitudin dolor. Integer ullamcorper laoreet enim id maximus.</p>
//                 </div>
//               </div>
//               `
//       },
//     ];
//     const distances = [
//       {
//         id: 0,
//         value: 5,
//         label: 'Menos de 5 kms'
//       },
//       {
//         id: 1,
//         value: 10,
//         label: 'Entre 5 y 10 kms'
//       },
//       {
//         id: 2,
//         value: 15,
//         label: 'Entre 10 y 20 kms'
//       },
//       {
//         id: 3,
//         value: 20,
//         label: 'Mas de 20 kms'
//       }
//     ];

//     const users = [
//       {
//         id: 0,
//         firstName: 'Jorge',
//         lastName: 'Valle',
//         bio: 'Soy originario de El Salvador. Me gustan las pizzas y la comida japonesa. Vestibulum vitae tempus sapien, nec aliquet tellus.',
//         imageFileName: '//dltxjt69z9a4k.cloudfront.net/images/jorge-bw-700.jpg',
//         creationCity: 'Zagreb',
//         creationCountry: 'Hrvatska',
//         currentCity: 'San Salvador',
//         currentCountry: 'El Salvador',
//         medals: [
//           {
//             name: 'Gastronomico',
//             votes: 4,
//             level: 'Plata',
//             description: 'Un verdadero conocedor de vinos.',
//             condition: {

//             }
//           },
//           {
//             name: 'Burocrata',
//             votes: 11,
//             level: 'Bronce',
//             description: 'Conoce la ciudad como la palma de su mano.',
//             condition: {

//             }
//           },
//           {
//             name: 'Enfermo',
//             votes: 123,
//             level: 'Gold',
//             description: 'Solo pasa en hospitales y farmacias',
//             condition: {
              
//             }
//           }
//         ],
//         reports: 3,
//         ownsPlaces: [
//           0, 3, 6
//         ],
//         emailPreferences: [
//           {
//             type: 'Newsletter',
//             enabled: true,
//             lastModified: '2012-04-23T18:25:43.511Z'
//           },
//           {
//             type: 'Personalized',
//             enabled: false,
//             lastModified: '2012-04-23T18:25:43.511Z'
//           }
//         ],
//         requestedDeletion: {
//           enabled: true,
//           date: '2012-04-23T18:25:43.511Z'
//         }
//       },
//       {
//         id: 1,
//         firstName: 'Juan',
//         lastName: 'Perez',
//         bio: 'Vestibulum vitae tempus sapien, nec aliquet tellus.',
//         imageFileName: '//pressroom.ups.com/mobile0c9a66/assets/img/leadership/juan_perez_lo_res.jpg',
//         creationCity: '',
//         creationCountry: '',
//         currentCity: 'Ciudad de Panama',
//         currentCountry: 'Panama',
//         medals: [
//           {
//             name: 'Viajero',
//             votes: 33,
//             level: 'Oro'
//           },
//           {
//             name: 'Guia',
//             votes: 4,
//             level: 'Bronce',
//             description: 'Conoce la ciudad como la palma de su mano.'
//           }
//         ],
//         reports: 0,
//         ownsPlaces: [
//           1
//         ],
//         emailPreferences: [
//           {
//             type: 'Newsletter',
//             enabled: false,
//             lastModified: '2012-04-23T18:25:43.511Z'
//           },
//           {
//             type: 'Personalized',
//             enabled: true,
//             lastModified: '2012-04-23T18:25:43.511Z'
//           }
//         ],
//         requestedDeletion: {
//           enabled: false,
//           date: '2012-04-23T18:25:43.511Z'
//         }
//       },
//       {
//         id: 2,
//         firstName: 'Maria',
//         lastName: 'Lopez',
//         bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor quam sed placerat varius. Vestibulum ante ipsum primis in faucibus orci.',
//         imageFileName: '//pbs.twimg.com/profile_images/512109144434696192/L5DeMrpA_400x400.jpeg',
//         creationCity: '',
//         creationCountry: '',
//         currentCity: 'Antigua',
//         currentCountry: 'Guatemala',
//         medals: [
//           {
//             name: 'Viajero',
//             votes: 33,
//             level: 'Oro'
//           },
//           {
//             name: 'Guia',
//             votes: 4,
//             level: 'Bronce',
//             description: 'Conoce la ciudad como la palma de su mano.'
//           }
//         ],
//         reports: 0,
//         ownsPlaces: [
//           2
//         ],
//         emailPreferences: [
//           {
//             type: 'Newsletter',
//             enabled: false,
//             lastModified: '2012-04-23T18:25:43.511Z'
//           },
//           {
//             type: 'Personalized',
//             enabled: true,
//             lastModified: '2012-04-23T18:25:43.511Z'
//           }
//         ],
//         requestedDeletion: {
//           enabled: false,
//           date: '2012-04-23T18:25:43.511Z'
//         }
//       },
//       {
//         id: 3,
//         firstName: 'Maja',
//         lastName: 'Vasilj',
//         bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor quam sed placerat varius. ',
//         imageFileName: '//i.ytimg.com/vi/gvgMDYQHpgs/hqdefault.jpg',
//         creationCity: 'Zagreb',
//         creationCountry: 'Hrvatska',
//         currentCity: 'Antigua',
//         currentCountry: 'Guatemala',
//         medals: [
//           {
//             name: 'Gastronomico',
//             votes: 4,
//             level: 'Plata',
//             description: 'Un verdadero conocedor de vinos.',
//             condition: {

//             }
//           },
//           {
//             name: 'Burocrata',
//             votes: 11,
//             level: 'Bronce',
//             description: 'Conoce la ciudad como la palma de su mano.',
//             condition: {

//             }
//           },
//           {
//             name: 'Enfermo',
//             votes: 123,
//             level: 'Gold',
//             description: 'Solo pasa en hospitales y farmacias',
//             condition: {
              
//             }
//           }
//         ],
//         reports: 3,
//         ownsPlaces: [
//           0, 3, 6
//         ],
//         emailPreferences: [
//           {
//             type: 'Newsletter',
//             enabled: true,
//             lastModified: '2012-04-23T18:25:43.511Z'
//           },
//           {
//             type: 'Personalized',
//             enabled: false,
//             lastModified: '2012-04-23T18:25:43.511Z'
//           }
//         ],
//         requestedDeletion: {
//           enabled: true,
//           date: '2012-04-23T18:25:43.511Z'
//         }
//       },
//     ];

//     const categoryFilters = [
//       {
//         id: 0,
//         name: 'Price',
//         values: ['$', '$$', '$$$'],
//         iconId: ''
//       },
//       {
//         id: 1,
//         name: 'Open',
//         values: ['Abierto'],
//         iconId: 'schedule'
//       },
//       {
//         id: 2,
//         name: 'Patio',
//         values: ['Patio'],
//         iconId: ''
//       },
//       // {
//       //   id: 3,
//       //   name: 'Happy Hour',
//       //   values: ['Happy Hour'],
//       //   iconId: ''
//       // },
//       // {
//       //   id: 4,
//       //   name: 'Wi-Fi',
//       //   values: ['Wi-Fi']
//       // },
//       // {
//       //   id: 5,
//       //   name: 'Coupon',
//       //   values: ['Con Cupon']
//       // },
//       // {
//       //   id: 6,
//       //   name: 'Sale',
//       //   values: ['Rebajas']
//       // }

//     ]

//     return {
//       // places,
//       reviews,
//       categories,
//       subcategories,
//       countries,
//       cities,
//       pages,
//       distances,
//       users,
//       categoryFilters
//     };
//   }
// }