import { ServiceToken } from '../../../core/di/service-token.js';
import { UserApplicationService } from '../application/services/user.application-service.js';
import { IUserRepository } from '../domain/interfaces/user-repository.interface.js';
import { UserController } from '../presentation/controllers/user.controller.js';

export const USER_TOKENS = {
  UserRepository: new ServiceToken<IUserRepository>('UserRepository'),
  UserApplicationService: new ServiceToken<UserApplicationService>('UserApplicationService'),
  UserController: new ServiceToken<UserController>('UserController'),
} as const;

export interface IUserModuleContract {
  getUserById(id: string): Promise<import('../application/dto/user.dto.js').UserDto | null>;
  getUserByEmail(email: string): Promise<import('../application/dto/user.dto.js').UserDto | null>;
}
