import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({required:false})
    name:string
    @ApiProperty({required:false})
    subcontractname:string
}
