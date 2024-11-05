import { Body, Controller, Post } from '@nestjs/common';
import { CreateChatCompletionRequest } from './dto/create-chat-completion.dto';
import { GroqService } from './groq.service';

@Controller('groq')
export class GroqController {
  constructor(private groqService: GroqService) {}
  @Post('chatCompletion')
  async createChatCompletion(@Body() body: CreateChatCompletionRequest) {
    return this.groqService.creteaChatCompletion(body.messages);
  }
}
