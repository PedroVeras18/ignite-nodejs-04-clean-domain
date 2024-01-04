import { NotificationsRepository } from "@/domain/notification/application/repositories/notifications-repository";
import { Notification } from "@/domain/notification/enterprise/entities/notification";

export class InMemoryNotificationsRepository implements NotificationsRepository {
  public items: Notification[] = []

  async create(notiification: Notification): Promise<void> {
    this.items.push(notiification)
  }
}