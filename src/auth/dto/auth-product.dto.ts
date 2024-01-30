export class CreateUserDto {
  fullname: string;
  email: string;
  phone_number: string;
  password: string;
  gender: string;
  age: number;
  city: string;
}

// model User {
//     id            Int       @id @default(autoincrement())
//     fullname      String?
//     email         String?    @unique
//     phone_number  String?    @unique
//     password      String
//     gender        String?
//     age           Int?
//     city          String?
//     balance       Int       @default(0)
//     links         Link[]
//     referral_link String?    @unique
//     created_at    DateTime  @default(now())
//   }
