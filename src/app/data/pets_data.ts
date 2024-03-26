import { Pet } from '../models/pet'; // Import the Pet type from the appropriate module
export default [
    {
        type: 'dog' ,
        //image:   ,
        name: 'Buddy',
        color: 'brown',
        sex: 'Masculino'
    },
    {
        type: 'gato' ,
        //image:   ,
        name: 'Buddy',
        color: 'black',
        sex: 'Feminino'
    }
] as Array<Pet>;
