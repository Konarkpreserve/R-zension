import { FastifyReply, FastifyRequest } from 'fastify';
import { appLogger } from '../../../../common/logger/index.js';
import { UserApplicationService } from '../../application/services/user.application-service.js';
import { CreateUserHttpRequest } from '../requests/create-user.request.js';
import { UpdateUserHttpRequest } from '../requests/update-user.request.js';

export class UserController {
  constructor(private readonly userApplicationService: UserApplicationService) {}

  public createUser = async (
    request: FastifyRequest<{ Body: CreateUserHttpRequest }>,
    reply: FastifyReply
  ): Promise<void> => {
    appLogger.debug({ reqId: request.requestContext?.requestId }, 'Handling User Create endpoint (Placeholder)');
    reply.status(501).send({ success: false, message: 'User Create endpoint not implemented yet' });
  };

  public getUserMe = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Get Current User endpoint not implemented yet' });
  };

  public getUserById = async (
    _request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Get User By ID endpoint not implemented yet' });
  };

  public updateUser = async (
    _request: FastifyRequest<{ Body: UpdateUserHttpRequest }>,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Update User endpoint not implemented yet' });
  };

  public deactivateUser = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Deactivate User endpoint not implemented yet' });
  };

  public deleteUser = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Delete User endpoint not implemented yet' });
  };

  public uploadAvatar = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Upload Avatar endpoint not implemented yet' });
  };

  public updatePreferences = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Update Preferences endpoint not implemented yet' });
  };

  public updatePrivacy = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Update Privacy Settings endpoint not implemented yet' });
  };

  public updateNotifications = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Update Notification Settings endpoint not implemented yet' });
  };

  public getPublicProfile = async (
    _request: FastifyRequest<{ Params: { username: string } }>,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Get Public Profile endpoint not implemented yet' });
  };

  public getUserDashboard = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Get User Dashboard endpoint not implemented yet' });
  };
}
