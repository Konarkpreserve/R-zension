import { FastifyInstance } from 'fastify';
import { container } from '../../../../core/di/container.js';
import { USER_TOKENS } from '../../contracts/user-module.contract.js';
import { createUserSchema, updatePreferencesSchema, updateUserSchema } from '../validators/user.validator.js';

export async function userRoutes(app: FastifyInstance): Promise<void> {
  const userController = container.resolve(USER_TOKENS.UserController);

  app.post('/users', { schema: { body: createUserSchema } }, userController.createUser);
  app.get('/users/me', userController.getUserMe);
  app.get('/users/:id', userController.getUserById);
  app.patch('/users/me', { schema: { body: updateUserSchema } }, userController.updateUser);
  app.post('/users/me/deactivate', userController.deactivateUser);
  app.delete('/users/me', userController.deleteUser);
  app.post('/users/me/avatar', userController.uploadAvatar);
  app.patch('/users/me/preferences', { schema: { body: updatePreferencesSchema } }, userController.updatePreferences);
  app.patch('/users/me/privacy', userController.updatePrivacy);
  app.patch('/users/me/notifications', userController.updateNotifications);
  app.get('/users/profile/:username', userController.getPublicProfile);
  app.get('/users/me/dashboard', userController.getUserDashboard);
}
