import { LoginUserCommand } from '../commands/login-user.command.js';
import { TokenPairDto } from '../dto/token-pair.dto.js';

export class LoginUserUseCase {
  public async execute(_command: LoginUserCommand): Promise<TokenPairDto> {
    return {
      accessToken: 'placeholder-access-token',
      refreshToken: 'placeholder-refresh-token',
      tokenType: 'Bearer',
      expiresInSeconds: 3600,
    };
  }
}
