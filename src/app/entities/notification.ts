import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface INotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  cancelAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: INotificationProps;
  
  constructor(props: Replace<INotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
  
  public get id() {
    return this._id;
  }
  
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  
  public get recipientId(): string {
    return this.props.recipientId;
  }
  
  public set content(content: Content) {
    this.props.content = content;
  }
  
  public get content(): Content {
    return this.props.content;
  }
  
  public set category(category: string) {
    this.props.category = category;
  }
  
  public get category(): string {
    return this.props.category;
  }
  
  public unread() {
    this.props.readAt = null;
  }
  
  public read() {
    this.props.readAt = new Date();
  }
  
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
  
  public get createdAt(): Date {
    return this.props.createdAt;
  }
  
  public cancel() {
    this.props.cancelAt = new Date();
  }
  
  public get cancelAt(): Date | null | undefined {
    return this.props.cancelAt;
  }
  
}
