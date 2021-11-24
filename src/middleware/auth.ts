import {
  ExpressMiddlewareInterface,
  ForbiddenError,
} from "routing-controllers";
import { Request } from "express";

export class AuthMiddleware implements ExpressMiddlewareInterface {
  use(request: Request, response: any, next: (err?: any) => any) {
    if (!request.headers.auth) {
      throw new ForbiddenError("auth header does not exist");
    }
    next();
  }
}
