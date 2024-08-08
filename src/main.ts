import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: 'daf8cd74-89e9-4485-a28f-19fce6a8d22d',
  clientToken: 'pub275fd8bb47d1339ef389cc30ed571b74',
  // `site` refers to the Datadog site parameter of your organization
  // see https://docs.datadoghq.com/getting_started/site/
  site: 'us5.datadoghq.com',
  service: 'poc',
  env: 'local',
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0', 
  sessionSampleRate: 100,
  // sessionReplaySampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  allowedTracingUrls: ["http://localhost:3000"],
  trackLongTasks: true,
  defaultPrivacyLevel: 'allow',
});
const app = createApp(App)

app.use(router)

app.mount('#app')
