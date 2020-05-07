interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; //? significa opcional
  email: string;
  password: string;
  techs: Array<string | TechObject>;
  //se fosse só array de strings pode deixar techs: string[];
}

export default function createUser({ name = '', email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password
  }

  return user;
}