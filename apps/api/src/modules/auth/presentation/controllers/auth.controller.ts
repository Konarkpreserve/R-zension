import { FastifyReply, FastifyRequest } from 'fastify';
import { appLogger } from '../../../../common/logger/index.js';
import { AuthApplicationService } from '../../application/services/auth.application-service.js';
import { LoginHttpRequest } from '../requests/login.request.js';
import { RegisterHttpRequest } from '../requests/register.request.js';

export class AuthController {
  constructor(private readonly authApplicationService: AuthApplicationService) {}

  public register = async (
    request: FastifyRequest<{ Body: RegisterHttpRequest }>,
    reply: FastifyReply
  ): Promise<void> => {
    appLogger.debug({ reqId: request.requestContext?.requestId }, 'Handling Auth Register endpoint (Placeholder)');
    reply.status(501).send({ success: false, message: 'Auth Register endpoint not implemented yet' });
  };

  public login = async (
    request: FastifyRequest<{ Body: LoginHttpRequest }>,
    reply: FastifyReply
  ): Promise<void> => {
    appLogger.debug({ reqId: request.requestContext?.requestId }, 'Handling Auth Login endpoint (Placeholder)');
    reply.status(501).send({ success: false, message: 'Auth Login endpoint not implemented yet' });
  };

  public logout = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Auth Logout endpoint not implemented yet' });
  };

  public refreshToken = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Auth Refresh Token endpoint not implemented yet' });
  };

  public verifyEmail = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Auth Verify Email endpoint not implemented yet' });
  };

  public forgotPassword = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Auth Forgot Password endpoint not implemented yet' });
  };

  public resetPassword = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Auth Reset Password endpoint not implemented yet' });
  };

  public getActiveSessions = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Auth Active Sessions endpoint not implemented yet' });
  };
}
