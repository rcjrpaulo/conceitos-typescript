import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export default function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'sdf@fsd.fds',
    password: '123',
    name: 'Paulo',
    techs: [
      'React',
      'React Native',
      'Node',
      {
        title: 'javascript',
        experience: 100
      }
    ]
  });


  response.json({ message: 'Hello World' });
};