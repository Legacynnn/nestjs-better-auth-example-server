import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });
  app.setGlobalPrefix("api", { exclude: ["/api/auth/*path"] });
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();