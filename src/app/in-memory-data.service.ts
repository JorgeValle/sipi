import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
const places = [
  { id: 0,  name: 'Rafael', category: 'Restaurantes', subcategories: ['Mariscos', 'Otra'], rating: 3, address: '1234 Calle Principal', city: 'San Salvador', country: 'El Salvador', phone: '883-9980', website: 'http://wwww.google.com' },
  { id: 1, name: 'Cala', category: 'Restaurantes', subcategories: ['Americano'], rating: 3, address: '534 Calle Segunda', city: 'Antigua', country: 'Guatemala', phone: '883-8766', website: 'http://wwww.google.com' },
  { id: 2, name: 'Drago Dorado', category: 'Restaurantes', subcategories: ['Asiatico', 'Tacos'], rating: 4, address: '17 Avenida Revolucion', city: 'San Salvador', country: 'El Salvador', phone: '332-9340', website: 'http://wwww.google.com' },
  { id: 3, name: 'Chez Francois', category: 'Restaurantes', subcategories: ['Frances'], rating: 5, address: '99 Calle Circumvalacion', city: 'Santa Tecla', country: 'El Salvador', phone: '239-2322', website: 'http://wwww.google.com' },
  { id: 4,  name: 'Otro Restaurante', category: 'Restaurantes', subcategories: ['Mariscos'], rating: 3, address: '1234 Calle Principal', city: 'Managua', country: 'Nicaragua', phone: '883-9980', website: 'http://wwww.google.com' },
  { id: 5, name: 'Moja Majo', category: 'Restaurantes', subcategories: ['Americano'], rating: 3, address: '534 Calle Segunda', city: 'Havana', country: 'Cuba', phone: '883-8766', website: 'http://wwww.google.com' },
  { id: 6, name: 'Las Rambles', category: 'Restaurantes', subcategories: ['Asiatico', 'Americano'], rating: 4, address: '17 Avenida Revolucion', city: 'San Jose', country: 'Costa Rica', phone: '332-9340', website: 'http://wwww.google.com' },
  { id: 7, name: 'Andalucia', category: 'Restaurantes', subcategories: ['Frances'], rating: 5, address: '99 Calle Circumvalacion', city: 'San Salvador', country: 'El Salvador', phone: '239-2322', website: 'http://wwww.google.com' },
  { id: 8,  name: 'Rafaelet', category: 'Restaurantes', subcategories: ['Mariscos'], rating: 3, address: '1234 Calle Principal', city: 'Santa Rosa', country: 'El Salvador', phone: '883-9980', website: 'http://wwww.google.com' },
  { id: 9, name: 'Calais Marais', category: 'Restaurantes', subcategories: ['Americano'], rating: 3, address: '534 Calle Segunda', city: 'San Salvador', country: 'El Salvador', phone: '883-8766', website: 'http://wwww.google.com' },
  { id: 10, name: 'Tatayaki', category: 'Restaurantes', subcategories: ['Asiatico'], rating: 4, address: '17 Avenida Revolucion', city: 'Santo Domingo', country: 'Republica Dominicana', phone: '332-9340', website: 'http://wwww.google.com' }
];
const reviews = [
  { id: 0, author: 'Giovanni Max', body: 'Muy buen lugar!' },
  { id: 1, author: 'Mario Valle', body: 'Este lugar es muy bueno pero lastima que el vencindario es muy peligroso. La vez pasada me robaron x, y y z.' }
];
const categories = [
  { id: 0, name: 'Restaurantes', slug: 'restaurantes', iconId: 'food' },
  { id: 1, name: 'Compras', slug: 'compras', iconId: 'shopping bag' },
  { id: 2, name: 'Publico', slug: 'publico', iconId: 'university' },
  { id: 3, name: 'Salud', slug: 'salud', iconId: 'first aid' },
  { id: 4, name: 'Educacion', slug: 'educacion', iconId: 'student' },
  { id: 5, name: 'Casa y Hogar', slug: 'hogar', iconId: 'home' },
  { id: 6, name: 'Electronicos', slug: 'electronicos', iconId: 'tv' },
  { id: 7, name: 'Ropa y Moda', slug: 'ropa', iconId: 'idea' },
  { id: 8, name: 'Vida Nocturna', slug: 'nocturna', iconId: 'cocktail' },
  { id: 9, name: 'Atletico', slug: 'atletico', iconId: 'soccer' },
  { id: 10, name: 'Eventos y Bodas', slug: 'eventos', iconId: 'birthday' },
  { id: 11, name: 'Belleza y Spa', slug: 'belleza', iconId: 'heart' },
  { id: 12, name: 'Automotriz', slug: 'automotriz', iconId: 'car' },
  { id: 13, name: 'Construccion', slug: 'construccion', iconId: 'shipping' },
  { id: 14, name: 'Telecomunicaciones', slug: 'telecomunicaciones', iconId: 'mobile' },
  { id: 15, name: 'Servicios Financieros', slug: 'financieros', iconId: 'money' },
  { id: 16, name: 'Seguridad', slug: 'seguridad', iconId: 'protect' },
  { id: 17, name: 'Arte', slug: 'arte', iconId: 'paint brush' },
  { id: 18, name: 'Mascotas', slug: 'mascotas', iconId: 'paw' },
  { id: 19, name: 'Turistico', slug: 'turistico', iconId: 'sun' },
];
const subcategories = [
  { id: 0, name: 'Asiatico', parentId: 0 },
  { id: 1, name: 'Mejicano', parentId: 0 },
  { id: 2, name: 'Peruano', parentId: 0 },
  { id: 3, name: 'Japones', parentId: 0 },
  { id: 0, name: 'Mediterraneo', parentId: 0 },
  { id: 1, name: 'Chino', parentId: 0 },
  { id: 2, name: 'Etiope', parentId: 0 },
  { id: 3, name: 'Steakhouse', parentId: 0 }
];
const countries = [
  { id: 0, name: 'Guatemala', slug: 'gt' },
  { id: 1, name: 'Belize', slug: 'bl' },
  { id: 2, name: 'El Salvador', slug: 'es' },
  { id: 3, name: 'Honduras', slug: 'hn' },
  { id: 4, name: 'Nicaragua', slug: 'ni' },
  { id: 5, name: 'Costa Rica', slug: 'cr' },
  { id: 6, name: 'Panama', slug: 'pa' },
  { id: 7, name: 'Republica Dominicana', slug: 'rd' },
  { id: 8, name: 'Cuba', slug: 'cu' },
  { id: 9, name: 'Haiti', slug: 'ha' }
];
const cities = [
  // guatemala
  { id: 0, name: 'Ciudad de Guatemala', countryId: 0 },
  { id: 1, name: 'Antigua Guatemala', countryId: 0 },
  { id: 2, name: 'Quetzaltenango', countryId: 0 },
  { id: 3, name: 'Villa Nueva', countryId: 0 },
  { id: 4, name: 'Chichicastenango', countryId: 0 },
  { id: 5, name: 'Flores', countryId: 0 },
  { id: 6, name: 'Cobán', countryId: 0 },
  // belize
  { id: 7, name: 'Belize City', countryId: 1 },
  { id: 8, name: 'San Pedro Town', countryId: 1 },
  { id: 9, name: 'Belmopan', countryId: 1 },
  { id: 10, name: 'San Ignacio', countryId: 1 },
  // el salvador
  { id: 11, name: 'San Salvador', countryId: 2 },
  { id: 12, name: 'Santa Tecla', countryId: 2 },
  { id: 13, name: 'Soyapango', countryId: 2 },
  { id: 14, name: 'San Miguel', countryId: 2 },
  { id: 15, name: 'Santa Ana', countryId: 2 },
  { id: 16, name: 'Sonsonate', countryId: 2 },
  { id: 17, name: 'Suchitoto', countryId: 2 },
  { id: 18, name: 'Apaneca', countryId: 2 },
  { id: 19, name: 'Concepcion de Ataco', countryId: 2 },
  { id: 20, name: 'La Palma', countryId: 2 },
  // honduras
  { id: 21, name: 'Tegucigalpa', countryId: 3 },
  { id: 22, name: 'San Pedro Sula', countryId: 3 },
  { id: 23, name: 'La Ceiba', countryId: 3 },
  { id: 24, name: 'Comayagua', countryId: 3 },
  { id: 25, name: 'El Progreso', countryId: 3 },
  { id: 26, name: 'Puerto Cortės', countryId: 3 },
  // nicaragua
  { id: 27, name: 'Managua', countryId: 4 },
  { id: 28, name: 'Granada', countryId: 4 },
  { id: 29, name: 'Léon', countryId: 4 },
  { id: 30, name: 'Masaya', countryId: 4 },
  { id: 31, name: 'Chinandega', countryId: 4 },
  // costa rica
  { id: 32, name: 'Havana', countryId: 8 },
  { id: 33, name: 'Santiago de Cuba', countryId: 8 },
  { id: 34, name: 'Cienfuegos', countryId: 8 },
  { id: 35, name: 'Santa Clara', countryId: 8 },
  { id: 36, name: 'Trinidad', countryId: 8 },
  // panama
  { id: 32, name: 'Havana', countryId: 8 },
  { id: 33, name: 'Santiago de Cuba', countryId: 8 },
  { id: 34, name: 'Cienfuegos', countryId: 8 },
  { id: 35, name: 'Santa Clara', countryId: 8 },
  { id: 36, name: 'Trinidad', countryId: 8 },
  // republica dominicana
  { id: 32, name: 'Havana', countryId: 8 },
  { id: 33, name: 'Santiago de Cuba', countryId: 8 },
  { id: 34, name: 'Cienfuegos', countryId: 8 },
  { id: 35, name: 'Santa Clara', countryId: 8 },
  { id: 36, name: 'Trinidad', countryId: 8 },
  // cuba
  { id: 32, name: 'Havana', countryId: 8 },
  { id: 33, name: 'Santiago de Cuba', countryId: 8 },
  { id: 34, name: 'Cienfuegos', countryId: 8 },
  { id: 35, name: 'Santa Clara', countryId: 8 },
  { id: 36, name: 'Trinidad', countryId: 8 },
  // haiti
  { id: 37, name: 'Port-au-Prince', countryId: 9 },
  { id: 38, name: 'Carrefour', countryId: 9 },
  { id: 39, name: 'Delmas', countryId: 9 },
  { id: 40, name: 'Petionville', countryId: 9 },
];
const pages = [
  { id: 0, title: 'Terminos de Uso', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem eu nulla consequat egestas. Praesent odio nulla, facilisis in volutpat eget, vestibulum nec ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In elit ex, pulvinar at lobortis non, rutrum a velit. Duis eu neque auctor, blandit ipsum facilisis, finibus quam. Pellentesque condimentum vestibulum auctor. Nullam vel sapien dolor. Maecenas ultricies, arcu sed mattis tincidunt, massa dolor vestibulum magna, non feugiat arcu sapien sit amet nisi. In volutpat enim vitae augue tincidunt, sit amet lacinia justo tempus. Suspendisse maximus porta fermentum. Sed eu dolor sit amet leo suscipit hendrerit quis sed enim. Vestibulum eget nunc malesuada lacus rhoncus condimentum sit amet ac lorem. Phasellus quis mi eu sem tempus consectetur. Curabitur vulputate tempor massa, vitae pulvinar odio mollis id. Nullam magna lectus, porttitor ut fermentum sit amet, porttitor sodales mi. Praesent diam lectus, pharetra at varius ac, aliquam at ante.' },
  { id: 1, title: 'Sobre Sipi', body: 'Morbi laoreet sollicitudin mattis. Curabitur feugiat metus quis placerat pharetra. Ut porttitor, velit vel efficitur tempus, mi eros posuere enim, in pellentesque nulla orci eu turpis. Cras elit nisl, dignissim nec est in, feugiat venenatis enim. Proin neque elit, sagittis eget odio et, gravida bibendum nisi. Vestibulum sodales, nisi mollis scelerisque dictum, libero est accumsan velit, vitae aliquet ex odio vel tellus. Nunc tortor eros, convallis vitae maximus quis, pretium in nulla. Aliquam elementum accumsan ipsum dapibus congue. Morbi ut varius nisi. Etiam commodo tristique ipsum, ac efficitur dolor convallis nec. Integer non purus dapibus, pulvinar neque vitae, molestie diam. Pellentesque auctor, tortor in tempus tempor, nisi ex posuere nunc, in vehicula ex libero nec velit. Pellentesque sit amet fringilla orci, eu tincidunt est. Integer nulla orci, efficitur eu tincidunt vel, posuere sit amet dui.' },
  { id: 2, title: 'Sobre Sipi', body: 'Nullam libero orci, imperdiet quis elementum a, gravida vitae augue. Pellentesque ex nisi, dapibus eget accumsan blandit, varius at mi. Praesent quis blandit ligula, vitae gravida felis. Aenean aliquam, lorem ut bibendum blandit, tellus massa aliquam tortor, ac cursus justo metus eget ex. Cras ultricies libero vitae tincidunt mattis. Nunc eu justo elit. Etiam nec tortor ac justo malesuada molestie.' },
  { id: 3, title: 'Mision', body: 'La mision de Sipi es sencilla: ser la guia urbana para centroamerica y el caribe.' },
];
const distances = [
  { id: 0, value: 5, label:'Menos de' },
  { id: 1, value: 10, label:'Entre' },
  { id: 2, value: 15, label:'Entre' },
  { id: 3, value: 20, label:'Mas de' }
];

return { places, reviews, categories, subcategories, countries, cities, pages, distances };

}
}
