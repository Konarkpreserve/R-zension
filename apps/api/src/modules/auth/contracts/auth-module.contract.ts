import { ServiceToken } from '../../../core/di/service-token.js';
import { AuthApplicationService } from '../application/services/auth.application-service.js';
import { IAuthSessionRepository } from '../domain/interfaces/auth-session-repository.interface.js';
import { AuthController } from '../presentation/controllers/auth.controller.js';

export const AUTH_TOKENS = {
  AuthSessionRepository: new ServiceToken<IAuthSessionRepository>('AuthSessionRepository'),
  AuthApplicationService: new ServiceToken<AuthApplicationService>('AuthApplicationService'),
  AuthController: new ServiceToken<AuthController>('AuthController'),
} as const;

export interface IAuthModuleContract {
  verifySession(sessionId: string): Promise<boolean>;
}
