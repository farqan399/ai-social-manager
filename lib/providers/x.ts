import { HttpProvider } from './base';

export class XProvider extends HttpProvider {
  platform = 'X';

  async getProfile(token: string): Promise<any> {
    throw new Error('X OAuth/API integration requires official credentials and approved scopes');
  }

  async createPost(token: string, p: any): Promise<any> {
    throw new Error('X publishing adapter is not configured.');
  }
}