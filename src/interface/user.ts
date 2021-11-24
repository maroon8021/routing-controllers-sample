import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  UseBefore,
  // Put,
  // Delete,
} from "routing-controllers";
import { User, UserApplicationService } from "../application/user";
import { AuthMiddleware } from "../middleware/auth";

@JsonController()
export class UserController {
  @Get("/users")
  getAll() {
    return UserApplicationService.getUsers();
  }

  @Get("/users/:id")
  getOne(@Param("id") id: number) {
    return UserApplicationService.getUser(id);
  }

  @Get("/users/auth/:id")
  @UseBefore(AuthMiddleware)
  getOneWithAuth(@Param("id") id: number) {
    return UserApplicationService.getUser(id);
  }

  @Post("/users")
  post(@Body() user: User) {
    return UserApplicationService.createUser(user);
  }

  // @Put("/users/:id")
  // put(@Param("id") id: number, @Body() user: User) {
  //   return userRepository.updateById(id, user);
  // }

  // @Delete("/users/:id")
  // remove(@Param("id") id: number) {
  //   return userRepository.removeById(id);
  // }
}
