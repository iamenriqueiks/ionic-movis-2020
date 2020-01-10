import {Injectable} from '@angular/core';
import {Car} from '../models/car';

@Injectable({
    providedIn: 'root'
})
export class CarsService {

    constructor() {
    }

    getCars(): Promise<Car[]> {
        return Backendless.Data.of('Cars').find<Car>();
    }
}
