import {defineCliConfig} from 'sanity/cli';
import {readFileSync} from 'node:fs';
const project = JSON.parse(readFileSync(new URL('./project.json', import.meta.url), 'utf8'));
export default defineCliConfig({
  project: {basePath: '/studio'},
  api: {projectId: project.projectId, dataset: project.dataset},
  deployment: {autoUpdates: false, appId: 'mqxcg6nz6d3qlzcqlqg4l3j2'},
});
