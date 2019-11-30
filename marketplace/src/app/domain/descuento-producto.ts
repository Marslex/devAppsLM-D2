import { Producto } from './producto';
import { Descuento } from './descuento';

export class DescuentoProducto {
    private producto: Producto;
    private descuento: Descuento;

    public getProducto(): Producto {
        return  this.producto;
    }

    public getDescuento(): Descuento {
        return this.descuento;
    }

    public setProducto(producto: Producto): void {
        this.producto = producto;
    }

    public setDescuento(descuento: Descuento): void {
        this.descuento = descuento;
    }
}
