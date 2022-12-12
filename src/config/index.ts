import getConfig from 'next/config';

export const appName = getConfig()?.publicRuntimeConfig.appName ?? 'App';
export const env = getConfig()?.publicRuntimeConfig.env ?? 'development';
export const appSecret = getConfig()?.serverRuntimeConfig.env ?? 'development';
