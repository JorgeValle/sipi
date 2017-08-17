import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const places = [
      { id: 0,  name: 'Rafael', category: 'Restaurantes', subcategoies: ['Mariscos'], rating: 3, address: '1234 Calle Principal', phone: '883-9980' },
      { id: 1, name: 'Cala', category: 'Restaurantes', subcategoies: ['Americano'], rating: 3, address: '534 Calle Segunda', phone: '883-8766' },
      { id: 2, name: 'Drago Dorado', category: 'Restaurantes', subcategoies: ['Asiatico'], rating: 4, address: '17 Avenida Revolucion', phone: '332-9340' },
      { id: 3, name: 'Chez Francois', category: 'Restaurantes', subcategoies: ['Frances'], rating: 5, address: '99 Calle Circumvalacion', phone: '239-2322' }
    ];
	const reviews = [
		{ id: 0, author: 'Giovanni Max', body: 'Muy buen lugar!' },
		{ id: 1, author: 'Mario Valle', body: 'Este lugar es muy bueno pero lastima que el vencindario es muy peligroso. La vez pasada me robaron x, y y z.' }
	];
	const categories = [
		{ id: 0, name: 'Restaurantes' },
		{ id: 1, name: 'Gubernamental' },
		{ id: 2, name: 'Automovil' },
		{ id: 3, name: 'Comercio' },
		{ id: 4, name: 'Turistico' }
	];
	const subcategories = [
		{ id: 0, name: 'Asiatico' },
		{ id: 1, name: 'Mejicano' },
		{ id: 2, name: 'Peruano' },
		{ id: 3, name: 'Japones' }
	];
	const distances = [
		{ id: 0, name: 'Asiatico' },
		{ id: 1, name: 'Mejicano' },
		{ id: 2, name: 'Peruano' },
		{ id: 3, name: 'Japones' }
	];
	const countries = [
		{ id: 0, name: 'Guatemala' },
		{ id: 1, name: 'Belize' },
		{ id: 2, name: 'El Salvador' },
		{ id: 3, name: 'Honduras' },
		{ id: 4, name: 'Nicaragua' },
		{ id: 5, name: 'Costa Rica' },
		{ id: 6, name: 'Panama' },
		{ id: 7, name: 'Republica Dominicana' },
		{ id: 8, name: 'Cuba' },
		{ id: 9, name: 'Haiti' }
	];
	const pages = [
		{ id: 0, title: 'Terminos de Uso', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem eu nulla consequat egestas. Praesent odio nulla, facilisis in volutpat eget, vestibulum nec ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In elit ex, pulvinar at lobortis non, rutrum a velit. Duis eu neque auctor, blandit ipsum facilisis, finibus quam. Pellentesque condimentum vestibulum auctor. Nullam vel sapien dolor. Maecenas ultricies, arcu sed mattis tincidunt, massa dolor vestibulum magna, non feugiat arcu sapien sit amet nisi. In volutpat enim vitae augue tincidunt, sit amet lacinia justo tempus. Suspendisse maximus porta fermentum. Sed eu dolor sit amet leo suscipit hendrerit quis sed enim. Vestibulum eget nunc malesuada lacus rhoncus condimentum sit amet ac lorem. Phasellus quis mi eu sem tempus consectetur. Curabitur vulputate tempor massa, vitae pulvinar odio mollis id. Nullam magna lectus, porttitor ut fermentum sit amet, porttitor sodales mi. Praesent diam lectus, pharetra at varius ac, aliquam at ante.' },
		{ id: 1, title: 'Sobre Sipi', body: 'Morbi laoreet sollicitudin mattis. Curabitur feugiat metus quis placerat pharetra. Ut porttitor, velit vel efficitur tempus, mi eros posuere enim, in pellentesque nulla orci eu turpis. Cras elit nisl, dignissim nec est in, feugiat venenatis enim. Proin neque elit, sagittis eget odio et, gravida bibendum nisi. Vestibulum sodales, nisi mollis scelerisque dictum, libero est accumsan velit, vitae aliquet ex odio vel tellus. Nunc tortor eros, convallis vitae maximus quis, pretium in nulla. Aliquam elementum accumsan ipsum dapibus congue. Morbi ut varius nisi. Etiam commodo tristique ipsum, ac efficitur dolor convallis nec. Integer non purus dapibus, pulvinar neque vitae, molestie diam. Pellentesque auctor, tortor in tempus tempor, nisi ex posuere nunc, in vehicula ex libero nec velit. Pellentesque sit amet fringilla orci, eu tincidunt est. Integer nulla orci, efficitur eu tincidunt vel, posuere sit amet dui.' },
		{ id: 2, title: 'Sobre Sipi', body: 'Nullam libero orci, imperdiet quis elementum a, gravida vitae augue. Pellentesque ex nisi, dapibus eget accumsan blandit, varius at mi. Praesent quis blandit ligula, vitae gravida felis. Aenean aliquam, lorem ut bibendum blandit, tellus massa aliquam tortor, ac cursus justo metus eget ex. Cras ultricies libero vitae tincidunt mattis. Nunc eu justo elit. Etiam nec tortor ac justo malesuada molestie.' },

	];
	return { places, reviews, categories, subcategories, distances, countries };
  }
}
