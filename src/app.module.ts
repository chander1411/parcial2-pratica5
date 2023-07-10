import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PracticaModule } from './practica/practica.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [PracticaModule, UsuariosModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
