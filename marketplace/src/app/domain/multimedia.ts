import { Producto } from './producto';

export class Multimedia {
    private nombre: string;
    private bytes: string;
    private producto: Producto;

    public getNombre(): string {
        return this.nombre;
    }

    public getBytes(): string {
        return this.bytes;
    }

    public getProducto(): Producto { 
        return this.producto;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setBytes(bytes: string): void {
        this.bytes = bytes;
    }

    public setProducto(producto: Producto): void {
        this.producto = producto;
    }
}
