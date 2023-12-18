//main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; 
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
 .setTitle('Median')
 .setDescription('The Median API')
 .setVersion('0.1')
 .build();
 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api',app, document) 
//  app.enableCors({
//   origin: 'http://your-react-native-app-url', // Replace with the URL of your React Native app
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // You can set this to true if your React Native app sends cookies with the request
// });
  const cors=require("cors");
  app.use(cors({origin:"*"}));
 await app.listen(process.env.PORT, '0.0.0.0');
}


bootstrap();
