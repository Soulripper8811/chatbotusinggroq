import { Injectable } from '@nestjs/common';
import Groq from 'groq-sdk';
import { chatCompletionMessageDto } from './dto/create-chat-completion.dto';
import { ChatCompletionMessageParam } from 'groq-sdk/resources/chat/completions';

@Injectable()
export class GroqService {
  constructor(private readonly groq: Groq) {}
  async creteaChatCompletion(messages: chatCompletionMessageDto[]) {
    return this.groq.chat.completions.create({
      model: 'llama3-8b-8192',
      messages: messages as ChatCompletionMessageParam[],
    });
  }
}
