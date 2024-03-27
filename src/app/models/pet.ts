

export interface Pet {
    type: 'dog' | 'cat';
    image?: string;
    name: string;
    color:  string;
    sex: 'Macho' | 'Fêmea';
    port: 'Pequeno' | 'Médio' | 'Grande';
    idade: number;
}
