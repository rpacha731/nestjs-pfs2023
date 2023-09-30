import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';


export class LoginUserDto {

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número o un caracter especial.'
    })
    password: string;

}
