import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';
import { StudentsModule } from './modules/students/students.module';
import { DisciplineModule } from './modules/discipline/discipline.module';
import { LessonModule } from './modules/lessons/lesson.module';
import { ContentModule } from './modules/contents/discipline.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    DatabaseModule,
    StudentsModule,
    DisciplineModule,
    LessonModule,
    ContentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
