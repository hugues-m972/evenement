import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { GuestsModule } from './guests/guests.module';
import { RegistrationsModule } from './registrations/registrations.module';
import { VendorsModule } from './vendors/vendors.module';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'evenement_user',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'evenement_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
   UsersModule,
    EventsModule,
    GuestsModule,
    RegistrationsModule,
    VendorsModule,
    ExpensesModule,
  ],
})
export class AppModule {}