import { Action } from '@ngrx/store';
import { Users } from './models/users';

export const EDIT_USER = '[Post] User';
export const EDIT_PASSWORD = '[Post] Password';
export const EDIT_EMAIL = '[Post] Email';
export const EDIT_NAME = '[Post] Name';
export const EDIT_TYPEUSER = '[Post] TypeUser';
export const EDIT_ACTUALLYUSER = '[Post] ActuallyUser'

export class EditUser implements Action {
    readonly type = EDIT_USER;

    constructor(public user: string) {}
}

export class EditPassword implements Action {
    readonly type = EDIT_PASSWORD;

    constructor(public password: string) {}
}

export class EditEmail implements Action {
    readonly type = EDIT_EMAIL;

    constructor(public email: string) {}
}

export class EditName implements Action {
    readonly type = EDIT_NAME;

    constructor(public name: string) {}
}

export class EditTypeUser implements Action {
    readonly type = EDIT_TYPEUSER;

    constructor(public typeUser: number) {}
}

export class EditActuallyUser implements Action {
    readonly type = EDIT_ACTUALLYUSER;

    constructor(public user: string, public password: string, public email: string, public name: string, public typeUser: number) {}
}


export type All = EditUser | EditPassword | EditEmail | EditName | EditTypeUser | EditActuallyUser;