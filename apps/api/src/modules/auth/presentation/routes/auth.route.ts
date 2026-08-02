import { FastifyInstance } from 'fastify';
import { container } from '../../../../core/di/container.js';
import { AUTH_TOKENS } from '../../contracts/auth-module.contract.js';
import { forgotPasswordSchema, loginSchema, refreshTokenSchema, registerSchema, resetPasswordSchema } from '../validators/auth.validator.js';

export async function authRoutes(app: FastifyInstance): Promise<void> {
  const authController = container.resolve(AUTH_TOKENS.AuthController);

  app.post('/auth/register', { schema: { body: registerSchema } }, authController.register);
  app.post('/auth/login', { schema: { body: loginSchema } }, authController.login);
  app.post('/auth/logout', authController.logout);
  app.post('/auth/refresh', { schema: { body: refreshTokenSchema } }, authController.refreshToken);
  app.post('/auth/verify-email', authController.verifyEmail);
  app.post('/auth/forgot-password', { schema: { body: forgotPasswordSchema } }, authController.forgotPassword);
  app.post('/auth/reset-password', { schema: { body: resetPasswordSchema } }, authController.resetPassword);
  app.get('/auth/sessions', authController.getActiveSessions);
}
