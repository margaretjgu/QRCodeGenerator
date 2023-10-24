// background.ts

chrome.runtime.onMessage.addListener((message: { action?: any; qrCodeData?: any; }, sender: any, sendResponse: (arg0: { qrCodeData: any; }) => void) => {
    if (message.action === 'saveQRCodeData') {
      const { qrCodeData } = message;
      chrome.storage.local.set({ qrCodeData });
    } else if (message.action === 'getQRCodeData') {
      chrome.storage.local.get(['qrCodeData'], (result: { qrCodeData: any; }) => {
        sendResponse({ qrCodeData: result.qrCodeData });
      });
      return true; // To indicate that the response is asynchronous
    }
  });
  