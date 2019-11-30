export class Descuento {
    private tipo: string;
    private valor: number;
    private fechaInicio: Date;
    private fechaFin: Date;

    public getTipo(): string {
        return this.tipo;
    }

    public getValor(): number {
        return this.valor;
    }

    public getFechaInicio(): Date {
        return this.fechaInicio;
    }

    public getFechaFin(): Date {
        return this.fechaFin;
    }

    public setTipo(tipo: string ): void {
        this.tipo = tipo;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }

    public setFechaInicio(fechaInicio: Date): void {
        this.fechaInicio = fechaInicio;
    }

    public setFechaFin(fechaFin: Date): void {
        this.fechaFin = fechaFin;
    }
}
