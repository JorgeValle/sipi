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
	return { places, reviews, categories, countries };
  }
}
