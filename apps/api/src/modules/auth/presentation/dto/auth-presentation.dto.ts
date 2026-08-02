import { TokenPairDto } from '../../application/dto/token-pair.dto.js';
import { AuthHttpResponse } from '../responses/auth.response.js';

export class AuthPresentationMapper {
  public static toAuthResponse(dto: TokenPairDto): AuthHttpResponse {
    return {
      accessToken: dto.accessToken,
      refreshToken: dto.refreshToken,
      tokenType: dto.tokenType,
      expiresInSeconds: dto.expiresInSeconds,
    };
  }
}
