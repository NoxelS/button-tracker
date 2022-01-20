import { User } from '../models/user.model';


export class BaseResponse<T> {
    successful = true;
    data: T;
    errorMessage: string;
    responseType: string;
    dataType: string;

    constructor(data: T, errorMessage?: string) {
        this.data = data;
        const dataType = (data as any)?.constructor?.name || null;
        this.responseType = `${this.constructor.name}${dataType ? `<${dataType}>` : ''}`;

        if (errorMessage) {
            this.successful = false;
            this.errorMessage = errorMessage;
        }
    }
}

export class SuccessResponse extends BaseResponse<null> {
    constructor() {
        super(null);
    }
}

export class ErrorResponse extends BaseResponse<null> {
    constructor(err: string) {
        super(null, err);
    }
}

export class LoginResponse extends BaseResponse<User> {
    token: string;
    expiresIn: string;

    constructor(signedToken: string, expiresIn: string, user: User) {
        super(user);
        this.token = 'Bearer ' + signedToken;
        this.expiresIn = expiresIn;
    }
}
