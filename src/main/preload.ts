// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
// import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import {
  contextBridge,
  IpcRendererEvent,
  app,
  ipcMain,
  ipcRenderer,
} from 'electron';

const ipc = require('electron').ipcRenderer;

export type Channels = 'ipc-example';
const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);
contextBridge.exposeInMainWorld('minimize', () => ipcRenderer.send('minimize'));
contextBridge.exposeInMainWorld('maximize', () => ipcRenderer.send('maximize'));
contextBridge.exposeInMainWorld('confirm', () => ipcRenderer.send('confirm'));

export type ElectronHandler = typeof electronHandler;
