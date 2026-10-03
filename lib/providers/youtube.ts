import { HttpProvider } from './base';

export class YoutubeProvider extends HttpProvider {
  platform = 'YOUTUBE';

  async getProfile(token: string): Promise<any> {
    throw new Error('youtube OAuth/API integration requires official credentials and approved scopes');
  }

  async createPost(token: string, p: any): Promise<any> {
    throw new Error('youtube publishing adapter is not configured. Add official API credentials and implement the current approved endpoint flow.');
  }
}