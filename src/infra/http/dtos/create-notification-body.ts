import { IsNotEmpty, Length } from "class-validator";
import { IsUUID } from "class-validator";

// DTO - Data transfer Object
export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
  
  @IsNotEmpty()
  @Length(5,240)
  content: string; 
  
  @IsNotEmpty()
  category: string;
}