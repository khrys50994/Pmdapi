import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getClient(body): string {
    console.log(body);
    return `Client: ${body.name}`;
  }

  postClient(body): string {
    return `new Client: ${body.name}`;
  }
}
