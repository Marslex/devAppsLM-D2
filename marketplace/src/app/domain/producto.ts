import { Moneda } from './moneda';

export class Producto {
    private titulo: string;
    private descripcion: string;
    private precio: number;
    private moneda: Moneda;

    public getTitulo(): string{
        return this.titulo;
    }

    public getDescripcion(): string{
        return this.descripcion;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public getMoneda(): Moneda {
        return this.moneda;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }
    
    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public setMoneda(moneda: Moneda): void {
        this.moneda = moneda;
    }  
}
