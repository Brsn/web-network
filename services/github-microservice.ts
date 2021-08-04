import axios from 'axios';

const API_HOST = process.env.API_HOST || 'http://localhost:3005';
export default class GithubMicroService {

  static async createIssue(payload) {
    await axios.post(API_HOST  + '/issues', payload);
  }
  static async getIssuesIds(issueIds) {
    const {data} = await axios.get(API_HOST  + '/issues', {params: {issueIds}});
    return data;
  }

  static async getIssues() {
    const {data} = await axios.get(API_HOST  + '/issues');
    return data;
  }

  static async getIssuesState(state: any) {
    const {data} = await axios.get(API_HOST  + '/issues', state);
    return data;
  }

  static async getIssueId(issueId: string | string[]) {
    const {data} = await axios.get(API_HOST  + `/issues/${issueId}`);
    return data;
  }
  
  static async getCommentsIssue(githubId: string | string[]) {
    const {data} = await axios.get(API_HOST  + `/issues/github/${githubId}/comments`);
    return data;
  }
}