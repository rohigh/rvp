import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import project from './project.json' with {type: 'json'};
import {post} from './schemaTypes/post.js';

export default defineConfig({
  name: 'rvp-blog',
  title: 'RVP Blog · English & Kannada',
  projectId: project.projectId,
  dataset: project.dataset,
  plugins: [structureTool()],
  schema: {types: [post]},
});
