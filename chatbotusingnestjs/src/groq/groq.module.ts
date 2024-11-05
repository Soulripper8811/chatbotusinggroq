import { Module } from '@nestjs/common';
import { GroqController } from './groq.controller';
import { GroqService } from './groq.service';
import Groq from 'groq-sdk';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [GroqController],
  providers: [
    GroqService,
    {
      provide: Groq,
      useFactory: (configService: ConfigService) => {
        return new Groq({
          apiKey: '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',
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class GroqModule {}
