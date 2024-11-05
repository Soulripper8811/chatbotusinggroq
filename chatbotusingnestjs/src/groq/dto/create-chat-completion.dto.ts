import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class CreateChatCompletionRequest {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => chatCompletionMessageDto)
  messages: chatCompletionMessageDto[];
}

export class chatCompletionMessageDto {
  @IsString()
  @IsNotEmpty()
  role: string;
  @IsString()
  @IsNotEmpty()
  content: string;
}
