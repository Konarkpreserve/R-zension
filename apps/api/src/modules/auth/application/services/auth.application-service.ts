import { ForgotPasswordCommand } from '../commands/forgot-password.command.js';
import { LoginUserCommand } from '../commands/login-user.command.js';
import { RefreshTokenCommand } from '../commands/refresh-token.command.js';
import { RegisterUserCommand } from '../commands/register-user.command.js';
import { ResetPasswordCommand } from '../commands/reset-password.command.js';
import { VerifyEmailCommand } from '../commands/verify-email.command.js';
import { AuthSessionDto } from '../dto/auth-session.dto.js';
import { TokenPairDto } from '../dto/token-pair.dto.js';
import { GetActiveSessionsQuery } from '../queries/get-active-sessions.query.js';
import { ForgotPasswordUseCase } from '../use-cases/forgot-password.use-case.js';
import { GetActiveSessionsUseCase } from '../use-cases/get-active-sessions.use-case.js';
import { LoginUserUseCase } from '../use-cases/login-user.use-case.js';
import { LogoutUserUseCase } from '../use-cases/logout-user.use-case.js';
import { RefreshTokenUseCase } from '../use-cases/refresh-token.use-case.js';
import { RegisterUserUseCase } from '../use-cases/register-user.use-case.js';
import { ResetPasswordUseCase } from '../use-cases/reset-password.use-case.js';
import { RevokeSessionUseCase } from '../use-cases/revoke-session.use-case.js';
import { VerifyEmailUseCase } from '../use-cases/verify-email.use-case.js';

export class AuthApplicationService {
  private readonly registerUserUseCase = new RegisterUserUseCase();
  private readonly loginUserUseCase = new LoginUserUseCase();
  private readonly logoutUserUseCase = new LogoutUserUseCase();
  private readonly refreshTokenUseCase = new RefreshTokenUseCase();
  private readonly verifyEmailUseCase = new VerifyEmailUseCase();
  private readonly forgotPasswordUseCase = new ForgotPasswordUseCase();
  private readonly resetPasswordUseCase = new ResetPasswordUseCase();
  private readonly revokeSessionUseCase = new RevokeSessionUseCase();
  private readonly getActiveSessionsUseCase = new GetActiveSessionsUseCase();

  public async register(command: RegisterUserCommand): Promise<TokenPairDto> {
    return this.registerUserUseCase.execute(command);
  }

  public async login(command: LoginUserCommand): Promise<TokenPairDto> {
    return this.loginUserUseCase.execute(command);
  }

  public async logout(refreshToken: string): Promise<boolean> {
    return this.logoutUserUseCase.execute(refreshToken);
  }

  public async refreshToken(command: RefreshTokenCommand): Promise<TokenPairDto> {
    return this.refreshTokenUseCase.execute(command);
  }

  public async verifyEmail(command: VerifyEmailCommand): Promise<boolean> {
    return this.verifyEmailUseCase.execute(command);
  }

  public async forgotPassword(command: ForgotPasswordCommand): Promise<boolean> {
    return this.forgotPasswordUseCase.execute(command);
  }

  public async resetPassword(command: ResetPasswordCommand): Promise<boolean> {
    return this.resetPasswordUseCase.execute(command);
  }

  public async revokeSession(sessionId: string): Promise<boolean> {
    return this.revokeSessionUseCase.execute(sessionId);
  }

  public async getActiveSessions(query: GetActiveSessionsQuery): Promise<AuthSessionDto[]> {
    return this.getActiveSessionsUseCase.execute(query);
  }
}
