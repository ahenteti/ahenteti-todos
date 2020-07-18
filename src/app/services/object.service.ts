import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ObjectService {
  constructor() {}

  public clone<T>(object: T): T {
    return JSON.parse(JSON.stringify(object));
  }
}
