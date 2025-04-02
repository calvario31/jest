export type Producto = {
    nombre: string;
    precio: number;
    stock: number;
    peso: number;
    perecible: boolean;
    volumen: number;
};

export type Videojuego = {
    nombre: string;
    epoca: number;
    precio: number;
    duracion: number;
    genero: string;
    empresa: string;
};

export type Participante = {
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
};

export type Animal = {
    id: number;
    nombre: string;
    tipo: string;
    amo: string;
    edad: number;
    peso: number;
    genero: string;
};
