export interface UpdateNotificationsCommand {
  userId: string;
  emailNotifications?: boolean;
  pushNotifications?: boolean;
}
