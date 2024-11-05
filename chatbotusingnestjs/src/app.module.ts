import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GroqModule } from './groq/groq.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), GroqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
