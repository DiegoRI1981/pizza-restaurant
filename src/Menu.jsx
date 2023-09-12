// En Menu.js
import React from 'react';
import '../src/'; // Importa los estilos

function Menu() {
    const pizzas = [
        {
            id: 1,
            name: 'Pizza Margarita',
            description: 'Tomate, mozzarella, albahaca.',
            price: '$10.99',
        },
        {
            id: 2,
            name: 'Pizza Pepperoni',
            description: 'Tomate, mozzarella, pepperoni.',
            price: '$12.99',
        },
        {
            id: 3,
            name: 'Pizza Hawaiana',
            description: 'Tomate, mozzarella, jamón, piña.',
            price: '$13.99',
        },
        {
            id: 4,
            name: 'Pizza Vegetariana',
            description: 'Tomate, mozzarella, pimientos, cebolla, aceitunas.',
            price: '$11.99',
        },
        {
            id: 5,
            name: 'Pizza BBQ',
            description: 'Salsa BBQ, mozzarella, pollo a la barbacoa, cebolla roja.',
            price: '$14.99',
        },
        {
            id: 6,
            name: 'Pizza de Pollo Alfredo',
            description: 'Salsa Alfredo, mozzarella, pollo a la parrilla, espinacas.',
            price: '$13.99',
        },
        {
            id: 7,
            name: 'Pizza de Champiñones',
            description: 'Tomate, mozzarella, champiñones frescos, albahaca.',
            price: '$12.99',
        },
        {
            id: 8,
            name: 'Pizza de Carne Asada',
            description: 'Salsa de carne asada, mozzarella, carne asada, cebolla, pimientos.',
            price: '$15.99',
        },
        {
            id: 9,
            name: 'Pizza de Queso de Cabra',
            description: 'Tomate, mozzarella, queso de cabra, espinacas, nueces.',
            price: '$14.99',
        },
        {
            id: 10,
            name: 'Pizza de Pollo y Champiñones',
            description: 'Salsa de champiñones, mozzarella, pollo a la parrilla, champiñones.',
            price: '$13.99',
        },
        {
            id: 11,
            name: 'Pizza de Pimiento Rojo y Cebolla',
            description: 'Tomate, mozzarella, pimiento rojo, cebolla, aceitunas negras.',
            price: '$12.99',
        },
        {
            id: 12,
            name: 'Pizza de Tres Quesos',
            description: 'Tomate, mozzarella, queso cheddar, queso suizo.',
            price: '$13.99',
        },
        {
            id: 13,
            name: 'Pizza de Salmón Ahumado',
            description: 'Salsa de eneldo, mozzarella, salmón ahumado, cebolla roja.',
            price: '$15.99',
        },
        {
            id: 14,
            name: 'Pizza de Pollo Teriyaki',
            description: 'Salsa teriyaki, mozzarella, pollo a la parrilla, cebolla verde.',
            price: '$14.99',
        },
        {
            id: 15,
            name: 'Pizza de Tocino y Huevo',
            description: 'Tomate, mozzarella, tocino, huevo, cebolla.',
            price: '$13.99',
        },
    ];
    return (
        <div>
            <h2>Menú de Pizzas</h2>
            <ul>
                {pizzas.map((pizza) => (
                    <li key={pizza.id}>
                        <h3>{pizza.name}</h3>
                        <p>{pizza.description}</p>
                        <p>{pizza.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
