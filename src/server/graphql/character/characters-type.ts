import { ArgsType, Field, Int, ObjectType } from 'type-graphql';
import { Character, CharacterInput } from './';

import Info from '../info-type';

@ObjectType()
export class Characters {
  @Field(() => Info, { nullable: true })
  info?: Info;

  @Field(() => [Character], { nullable: true })
  results?: [Character];
}

@ArgsType()
export class GetCharactersArgs {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => CharacterInput, { nullable: true })
  filter?: CharacterInput;
}
