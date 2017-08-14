import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const places = [
      { id: 0,  name: 'Rafael', category: 'Restaurantes', subcategoies: ['Mariscos'], rating: 3, address: '1234 Calle Principal', phone: '883-9980' },
      { id: 11, name: 'Cala', category: 'Restaurantes', subcategoies: ['Americano'], rating: 3, address: '534 Calle Segunda', phone: '883-8766' },
      { id: 12, name: 'Drago Dorado', category: 'Restaurantes', subcategoies: ['Asiatico'], rating: 4, address: '17 Avenida Revolucion', phone: '332-9340' },
      { id: 13, name: 'Chez Francois', category: 'Restaurantes', subcategoies: ['Frances'], rating: 5, address: '99 Calle Circumvalacion', phone: '239-2322' }
    ];
	const reviews = [
		{ id: 0, author: 'Giovanni Max', body: 'Muy buen lugar!' }
	];
	const categories = [
		{ id: 0, name: 'Restaurantes' },
		{ id: 1, name: 'Gubernamental' },
		{ id: 2, name: 'Automovil' },
		{ id: 3, name: 'Comercio' },
		{ id: 4, name: 'Turistico' }
	]
	return { places, reviews, categories};
  }
}
